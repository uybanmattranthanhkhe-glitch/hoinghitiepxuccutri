// =============================================================
//  CONFIG.JS — Cấu hình toàn bộ ứng dụng Quản trị Hội nghị
//  Chỉnh sửa file này để cập nhật link, mật khẩu, tiêu đề...
//  Không cần đụng vào admin.html hay index.html
// =============================================================

const APP_CONFIG = {

    // ----------------------------------------------------------
    //  1. GOOGLE APPS SCRIPT WEB APP URL
    //     Thay bằng URL mới mỗi khi bạn deploy lại Google Script
    // ----------------------------------------------------------
    WEBAPP_URL: 'https://script.google.com/macros/s/AKfycbxSPeewcoldYXSIDYEr6qtMN9JQYLU9k4rIldcbzxAnubaeO6OgJchOQz8HJBjP2EYmOg/exec',

    // ----------------------------------------------------------
    //  2. MẬT KHẨU QUẢN TRỊ (SHA-256 hash)
    //     Tạo hash mới tại: https://emn178.github.io/online-tools/sha256.html
    //     Hash hiện tại tương ứng với mật khẩu gốc của bạn
    // ----------------------------------------------------------
    ADMIN_PASSWORD_HASH: '8b3ce0c3977ee6e8d53efeb1fb5b4f82bfb85e44b706c4eded197bd78875da67',

    // ----------------------------------------------------------
    //  3. LIÊN KẾT ĐIỀU HƯỚNG
    // ----------------------------------------------------------
    HOME_URL: 'index.html',          // Trang chủ (Về trang chủ / bottom nav)

    // ----------------------------------------------------------
    //  4. TIÊU ĐỀ & NỘI DUNG HIỂN THỊ
    // ----------------------------------------------------------
    APP_TITLE:    'Duyệt Ý Kiến',
    APP_SUBTITLE: 'Quản lý phát biểu tại hội nghị',
    LOGIN_TITLE:  'Quản trị viên',
    LOGIN_SUB:    'Đăng nhập để quản lý ý kiến hội nghị',

    // ----------------------------------------------------------
    //  5. PHẢN HỒI MẶC ĐỊNH KHI "TIẾP NHẬN" Ý KIẾN
    // ----------------------------------------------------------
    DEFAULT_CT_FEEDBACK: 'Đã tiếp nhận ý kiến, chủ toạ sẽ trả lời khi kết luận',

    // ----------------------------------------------------------
    //  6. TẦN SUẤT TỰ ĐỘNG LÀM MỚI DANH SÁCH (mili-giây)
    //     12000 = 12 giây
    // ----------------------------------------------------------
    AUTO_REFRESH_MS: 12000,

};
