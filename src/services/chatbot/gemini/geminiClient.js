import axios from 'axios';

const GEMINI_MODELS = ['gemini-3.5-flash-lite', 'gemini-2.5-flash'];
const geminiUrl = (model) =>
    `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent`;

export const callGeminiWithFallback = async (contents) => {
    let lastError = null;
    for (const model of GEMINI_MODELS) {
        try {
            const response = await axios.post(
                geminiUrl(model),
                {
                    contents,
                    generationConfig: {
                        maxOutputTokens: 1536,
                        thinkingConfig: { thinkingBudget: 512 },
                        temperature: 0.5, // giảm độ ngẫu nhiên, giúp câu trả lời nhất quán hơn giữa các lần hỏi giống nhau
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
            return response.data.candidates?.[0]?.content?.parts?.[0]?.text
                || 'Xin lỗi, tôi chưa có thông tin về vấn đề này. Vui lòng gọi **(028) 1234 5678**.';
        } catch (e) {
            lastError = e;
            const status = e?.response?.status;
            if (status === 429 || status === 503) {
                console.warn(`[geminiClient] model "${model}" bị ${status}, thử model kế tiếp...`);
                continue;
            }
            throw e;
        }
    }
    throw lastError;
};