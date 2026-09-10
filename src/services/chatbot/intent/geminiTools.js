export const GENERAL_TOOLS = [
    {
        name: 'book_appointment',
        description:
            'Khách muốn đặt một lịch khám MỚI. Trích xuất luôn NGÀY (nếu khách có nói, kể cả cách nói tương đối như ' +
            '"ngày mai", "thứ 4", "thứ 4 tuần này" — quy đổi chính xác sang YYYY-MM-DD dựa theo hôm nay), TÊN BÁC SĨ ' +
            '(nếu có), và TÊN DỊCH VỤ/CHUYÊN KHOA khách nhắc tới (giữ nguyên văn khách nói, vd "nhổ răng khôn") — kể cả ' +
            'khi khách chỉ nhắc tên dịch vụ mà không dùng từ "đặt". KHÔNG gọi nếu là câu hỏi/phủ định/giả định về việc đặt lịch.',
        parameters: {
            type: 'OBJECT',
            properties: {
                date: { type: 'STRING', description: 'Ngày khách muốn khám, dạng YYYY-MM-DD. Bỏ trống nếu khách chưa nói ngày cụ thể nào.' },
                is_whole_week: { type: 'BOOLEAN', description: 'true CHỈ KHI khách nói chung chung "tuần này" mà KHÔNG chỉ rõ ngày/thứ nào cụ thể.' },
                doctor_name: { type: 'STRING', description: 'Tên bác sĩ khách nhắc tới, nếu có.' },
                service_name: { type: 'STRING', description: 'Tên dịch vụ/chuyên khoa khách nhắc tới, giữ nguyên văn, nếu có.' },
            },
        },
    },
    {
        name: 'cancel_appointment',
        description: 'Khách muốn HỦY một lịch hẹn đã đặt nhưng chưa được duyệt (đang chờ xác nhận). Trích xuất số điện thoại nếu khách cung cấp kèm trong câu.',
        parameters: { type: 'OBJECT', properties: { phone: { type: 'STRING', description: 'Số điện thoại, nếu khách cung cấp.' } } },
    },
    {
        name: 'check_appointment',
        description: 'Khách muốn tra cứu lịch hẹn ĐÃ đặt trước đó. Trích xuất số điện thoại nếu có.',
        parameters: { type: 'OBJECT', properties: { phone: { type: 'STRING', description: 'Số điện thoại, nếu khách cung cấp.' } } },
    },
    { name: 'ask_schedule_today', description: 'Khách hỏi lịch trống/lịch làm việc bác sĩ trong HÔM NAY (chỉ hỏi thông tin, không phải để đặt).' },
    {
        name: 'ask_schedule_by_date',
        description: 'Khách hỏi lịch trống/lịch làm việc bác sĩ vào một NGÀY CỤ THỂ khác hôm nay (chỉ hỏi thông tin, không phải để đặt).',
        parameters: { type: 'OBJECT', properties: { date: { type: 'STRING', description: 'Ngày được hỏi, YYYY-MM-DD.' } }, required: ['date'] },
    },
    {
        name: 'ask_upcoming_schedule',
        description: 'Khách hỏi lịch làm việc bác sĩ trong vài ngày/tuần tới, dù hỏi chung hay hỏi về 1 bác sĩ cụ thể (chỉ hỏi thông tin).',
        parameters: { type: 'OBJECT', properties: { doctor_name: { type: 'STRING', description: 'Tên bác sĩ khách nhắc tới, nếu có.' } } },
    },
    { name: 'ask_doctor_list', description: 'Khách hỏi danh sách/giới thiệu đội ngũ bác sĩ.' },
    { name: 'ask_price', description: 'Khách hỏi bảng giá dịch vụ CỤ THỂ.' },
    { name: 'ask_working_hours', description: 'Khách hỏi giờ làm việc phòng khám.' },
    {
        name: 'answer_directly',
        description:
            'Dùng khi KHÔNG hàm nào ở trên phù hợp: lời chào, cảm ơn, xã giao, tư vấn, giải thích, câu hỏi chủ quan/so sánh, ' +
            'trò chuyện chung chung, hoặc bất kỳ nội dung nào khác không khớp các hàm nghiệp vụ cụ thể.',
        parameters: {
            type: 'OBJECT',
            properties: { reply: { type: 'STRING', description: 'Nội dung trả lời đầy đủ, đúng xưng hô đã quy định, gửi thẳng cho khách.' } },
            required: ['reply'],
        },
    },
];

export const FLOW_TOOLS = {
    booking_slot: [
        {
            name: 'select_slot',
            description: 'Khách CHỌN một mục cụ thể theo SỐ THỨ TỰ trong danh sách khung giờ đang hiển thị (dựa vào danh sách đã liệt kê ở trên để xác định đúng số, kể cả khi khách diễn đạt bằng lời như "cái đầu tiên", "cái cuối").',
            parameters: { type: 'OBJECT', properties: { index: { type: 'INTEGER', description: 'Số thứ tự mục được chọn, bắt đầu từ 1.' } }, required: ['index'] },
        },
        {
            name: 'change_date',
            description: 'Khách muốn xem NGÀY KHÁC hẳn, không phải chọn một mục trong danh sách khung giờ đang hiển thị.',
            parameters: { type: 'OBJECT', properties: { date: { type: 'STRING', description: 'Ngày mới khách muốn, quy đổi sang YYYY-MM-DD.' } }, required: ['date'] },
        },
        {
            name: 'change_doctor',
            description: 'Khách muốn đổi/xem bác sĩ khác trong cùng ngày đang xem.',
            parameters: { type: 'OBJECT', properties: { doctor_name: { type: 'STRING', description: 'Tên bác sĩ khách muốn đổi sang.' } } },
        },
        { name: 'change_time', description: 'Khách muốn xem khung giờ khác trong CÙNG ngày (không đổi bác sĩ, không đổi ngày).' },
    ],
    booking_confirm: [
        { name: 'confirm_booking', description: 'Khách ĐỒNG Ý với lịch hẹn đang chờ xác nhận đúng như đã nêu.' },
        { name: 'decline_booking', description: 'Khách TỪ CHỐI / không muốn lịch hẹn đang chờ xác nhận này nữa, và KHÔNG kèm theo việc chọn mục khác hay ngày khác nào cụ thể.' },
        {
            name: 'reselect_slot',
            description: 'Khách KHÔNG đồng ý mục đang chờ xác nhận, và muốn đổi sang MỘT MỤC KHÁC trong danh sách đã xem trước đó (dựa vào danh sách liệt kê ở trên).',
            parameters: { type: 'OBJECT', properties: { index: { type: 'INTEGER', description: 'Số thứ tự mục muốn đổi sang.' } }, required: ['index'] },
        },
        {
            name: 'change_date',
            description: 'Khách KHÔNG đồng ý mục đang chờ xác nhận, và muốn đổi sang NGÀY KHÁC hẳn (không phải chọn lại trong danh sách cũ).',
            parameters: { type: 'OBJECT', properties: { date: { type: 'STRING', description: 'Ngày mới khách muốn, YYYY-MM-DD.' } }, required: ['date'] },
        },
    ],
    cancel_select: [
        {
            name: 'select_cancel_target',
            description: 'Khách CHỌN một lịch hẹn theo số thứ tự trong danh sách đang hiển thị để hủy.',
            parameters: { type: 'OBJECT', properties: { index: { type: 'INTEGER', description: 'Số thứ tự mục được chọn, bắt đầu từ 1.' } }, required: ['index'] },
        },
    ],
    cancel_confirm: [
        { name: 'confirm_cancel', description: 'Khách ĐỒNG Ý hủy lịch hẹn đang chờ xác nhận đúng như đã nêu.' },
        { name: 'decline_cancel', description: 'Khách muốn GIỮ NGUYÊN, không hủy nữa, và KHÔNG kèm theo việc chọn mục khác.' },
        {
            name: 'reselect_cancel_target',
            description: 'Khách không muốn hủy mục đang chờ xác nhận, mà muốn đổi sang hủy MỤC KHÁC trong danh sách đã xem trước đó.',
            parameters: { type: 'OBJECT', properties: { index: { type: 'INTEGER', description: 'Số thứ tự mục muốn đổi sang.' } }, required: ['index'] },
        },
    ],
};

export const getToolsForState = (waitingFor) => {
    const flowTools = (waitingFor && FLOW_TOOLS[waitingFor]) || [];
    return [{ functionDeclarations: [...flowTools, ...GENERAL_TOOLS] }];
};