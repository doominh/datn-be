import geminiService from '../services/chatbot';

const handleChat = async (req, res) => {
    try {
        const { message, history = [], sessionData = {} } = req.body;

        if (!message?.trim()) {
            return res.status(400).json({ errCode: 1, message: 'Tin nhắn không được trống' });
        }

        // Xử lý intent + DB query + Gemini
        const result = await geminiService.askGemini(message, history, sessionData);

        const reply = result.directReply || result.text || 'Xin lỗi, tôi chưa có câu trả lời phù hợp.';
        const action = result.action || null;
        const newSessionData = result.sessionUpdate
            ? { ...sessionData, ...result.sessionUpdate }
            : sessionData;

        return res.json({ errCode: 0, reply, action, sessionData: newSessionData });

    } catch (error) {
        console.error('Chat error:', error?.response?.data || error.message || error);

        if (error?.response?.status === 429) {
            return res.json({
                errCode: 2,
                reply: 'Hệ thống đang xử lý nhiều yêu cầu. Vui lòng thử lại sau giây lát hoặc gọi **(028) 1234 5678** để được hỗ trợ trực tiếp.',
                action: null,
            });
        }

        return res.status(500).json({
            errCode: 99,
            reply: 'Đã xảy ra lỗi. Vui lòng thử lại sau.',
            action: null,
        });
    }
};

export default { handleChat };