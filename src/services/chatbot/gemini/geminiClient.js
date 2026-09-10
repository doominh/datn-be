import axios from 'axios';
import { GENERAL_TOOLS } from '../intent/geminiTools';

const GEMINI_MODELS = ['gemini-3.5-flash-lite', 'gemini-2.5-flash'];
const geminiUrl = (model) =>
    `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent`;

const DEFAULT_TOOLS = [{ functionDeclarations: GENERAL_TOOLS }];

export const callGeminiWithFallback = async (contents, options = {}) => {
    const { tools = DEFAULT_TOOLS, toolConfig } = options;
    let lastError = null;
    for (const model of GEMINI_MODELS) {
        try {
            const response = await axios.post(
                geminiUrl(model),
                {
                    contents,
                    tools,
                    ...(toolConfig ? { toolConfig } : {}),
                    generationConfig: {
                        maxOutputTokens: 1536,
                        thinkingConfig: { thinkingBudget: 512 },
                        temperature: 0.5,
                    },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-goog-api-key': process.env.GEMINI_API_KEY,
                    },
                    timeout: 30000,
                },
            );

            const parts = response.data.candidates?.[0]?.content?.parts || [];
            const functionCallPart = parts.find((p) => p.functionCall);
            if (functionCallPart) {
                return { functionCall: functionCallPart.functionCall, text: null };
            }

            const text = parts.find((p) => p.text)?.text;
            return {
                functionCall: null,
                text: text || 'Xin lỗi, tôi chưa có thông tin về vấn đề này. Vui lòng gọi **(028) 1234 5678**.',
            };
        } catch (e) {
            lastError = e;
            const status = e?.response?.status;
            console.error(
                `[geminiClient] model "${model}" lỗi ${status || 'network'}:`,
                JSON.stringify(e?.response?.data) || e.message,
            );
            if (status === 429 || status === 503) {
                continue;
            }
            throw e;
        }
    }
    throw lastError;
};