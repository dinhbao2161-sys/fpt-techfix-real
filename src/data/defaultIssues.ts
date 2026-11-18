import type { Issue } from '../types/issue';

// Curated offline fallback shown until the API returns the community issue list.
export const DEFAULT_ISSUES: Issue[] = [
  {
    id: 'iphone-storage-full',
    title: 'iPhone báo đầy dung lượng dù đã xóa nhiều dữ liệu',
    platform: 'iphone',
    category: 'system',
    severity: 'easy',
    estimatedTime: '5-10 phút',
    summary: 'Kiểm tra dữ liệu hệ thống, mục Đã xóa gần đây và dung lượng ứng dụng để giải phóng bộ nhớ an toàn.',
    symptoms: ['Thông báo iPhone Storage Full', 'Không thể chụp ảnh hoặc cài ứng dụng mới'],
    causes: ['Ảnh và video vẫn còn trong mục Đã xóa gần đây', 'Ứng dụng lưu bộ nhớ đệm lớn', 'Dữ liệu hệ thống tăng sau nhiều lần cập nhật'],
    steps: [
      { stepNumber: 1, title: 'Kiểm tra dung lượng', instructions: 'Mở Cài đặt > Cài đặt chung > Dung lượng iPhone và chờ danh sách ứng dụng tải xong.' },
      { stepNumber: 2, title: 'Dọn mục Đã xóa gần đây', instructions: 'Trong Ảnh > Album > Đã xóa gần đây, chỉ xóa vĩnh viễn những ảnh và video bạn chắc chắn không cần.' },
      { stepNumber: 3, title: 'Rà soát ứng dụng', instructions: 'Gỡ bỏ hoặc Offload ứng dụng không dùng. Kiểm tra dữ liệu tải xuống bên trong các ứng dụng nhắn tin và xem video.' },
      { stepNumber: 4, title: 'Khởi động lại và kiểm tra', instructions: 'Khởi động lại iPhone, sau đó mở lại mục Dung lượng iPhone để xem kết quả.' }
    ],
    requiredTools: [],
    tags: ['iPhone', 'dung lượng', 'bộ nhớ', 'storage full'],
    author: 'TechCare',
    createdAt: '2026-11-18T00:00:00.000Z',
    helpfulCount: 0
  },
  {
    id: 'android-app-crash',
    title: 'Ứng dụng Android liên tục bị văng hoặc tự đóng',
    platform: 'android',
    category: 'system',
    severity: 'easy',
    estimatedTime: '5-15 phút',
    summary: 'Xử lý lỗi ứng dụng tự thoát bằng cách cập nhật, kiểm tra bộ nhớ và xóa bộ nhớ đệm.',
    symptoms: ['Ứng dụng tự quay về màn hình chính', 'Ứng dụng đứng hoặc không phản hồi'],
    causes: ['Phiên bản ứng dụng hoặc hệ thống đã cũ', 'Bộ nhớ thiết bị gần đầy', 'Dữ liệu tạm của ứng dụng bị lỗi'],
    steps: [
      { stepNumber: 1, title: 'Khởi động lại thiết bị', instructions: 'Khởi động lại điện thoại rồi mở lại ứng dụng.' },
      { stepNumber: 2, title: 'Cập nhật ứng dụng', instructions: 'Mở Google Play, kiểm tra bản cập nhật của ứng dụng và Android System WebView nếu có.' },
      { stepNumber: 3, title: 'Xóa bộ nhớ đệm', instructions: 'Vào Cài đặt > Ứng dụng > chọn ứng dụng bị lỗi > Lưu trữ > Xóa bộ nhớ đệm. Không chọn Xóa dữ liệu nếu chưa sao lưu.' },
      { stepNumber: 4, title: 'Kiểm tra dung lượng', instructions: 'Đảm bảo thiết bị còn dung lượng trống, sau đó thử mở lại ứng dụng.' }
    ],
    requiredTools: [],
    tags: ['Android', 'ứng dụng', 'văng app', 'crash'],
    author: 'TechCare',
    createdAt: '2026-11-18T00:00:00.000Z',
    helpfulCount: 0
  },
  {
    id: 'windows-wifi-no-internet',
    title: 'Windows kết nối Wi-Fi nhưng không có Internet',
    platform: 'windows',
    category: 'network',
    severity: 'medium',
    estimatedTime: '10-20 phút',
    summary: 'Phân biệt lỗi từ router với lỗi cấu hình mạng trên máy tính Windows.',
    symptoms: ['Hiện Connected nhưng không truy cập được web', 'Các thiết bị khác có thể vẫn vào mạng bình thường'],
    causes: ['Router hoặc nhà mạng đang gặp sự cố', 'Cấu hình IP hoặc DNS trên máy tính bị lỗi', 'VPN hoặc proxy gây gián đoạn kết nối'],
    steps: [
      { stepNumber: 1, title: 'Kiểm tra thiết bị khác', instructions: 'Thử kết nối cùng Wi-Fi bằng điện thoại. Nếu tất cả thiết bị đều mất mạng, kiểm tra router hoặc liên hệ nhà mạng.' },
      { stepNumber: 2, title: 'Kết nối lại Wi-Fi', instructions: 'Tắt rồi bật Wi-Fi trên máy tính. Nếu cần, chọn Forget network và kết nối lại bằng mật khẩu.' },
      { stepNumber: 3, title: 'Chạy trình khắc phục', instructions: 'Mở Settings > System > Troubleshoot > Other troubleshooters > Network and Internet (nếu có).' },
      { stepNumber: 4, title: 'Kiểm tra VPN và Proxy', instructions: 'Tạm ngắt VPN cá nhân và kiểm tra Settings > Network & Internet > Proxy. Không thay đổi cấu hình mạng của cơ quan hoặc trường học nếu chưa được phép.' }
    ],
    requiredTools: [],
    tags: ['Windows', 'Wi-Fi', 'Internet', 'DNS', 'mạng'],
    author: 'TechCare',
    createdAt: '2026-11-18T00:00:00.000Z',
    helpfulCount: 0
  },
  {
    id: 'windows-slow-startup',
    title: 'Máy tính Windows khởi động chậm',
    platform: 'windows',
    category: 'system',
    severity: 'easy',
    estimatedTime: '10-15 phút',
    summary: 'Tìm ứng dụng khởi động cùng Windows và kiểm tra mức sử dụng tài nguyên hệ thống.',
    symptoms: ['Mất nhiều thời gian từ lúc bật máy đến khi dùng được', 'Máy chậm trong vài phút đầu sau khi đăng nhập'],
    causes: ['Có quá nhiều ứng dụng chạy khi khởi động', 'Ổ đĩa gần đầy hoặc hoạt động bất thường', 'Windows đang cài đặt cập nhật nền'],
    steps: [
      { stepNumber: 1, title: 'Kiểm tra ứng dụng khởi động', instructions: 'Nhấn Ctrl + Shift + Esc, mở Task Manager > Startup apps và xem ứng dụng nào có tác động cao.' },
      { stepNumber: 2, title: 'Tắt ứng dụng không cần thiết', instructions: 'Chỉ Disable ứng dụng bạn nhận biết và không cần chạy khi mở máy. Không tắt thành phần bảo mật hoặc trình điều khiển.' },
      { stepNumber: 3, title: 'Kiểm tra dung lượng ổ đĩa', instructions: 'Mở Settings > System > Storage và giải phóng các tệp tạm không cần thiết.' },
      { stepNumber: 4, title: 'Cập nhật và khởi động lại', instructions: 'Kiểm tra Windows Update, hoàn tất cập nhật đang chờ rồi khởi động lại máy.' }
    ],
    requiredTools: [],
    tags: ['Windows', 'khởi động chậm', 'startup', 'hiệu năng'],
    author: 'TechCare',
    createdAt: '2026-11-18T00:00:00.000Z',
    helpfulCount: 0
  },
  {
    id: 'mac-low-battery-life',
    title: 'MacBook nhanh hết pin bất thường',
    platform: 'mac',
    category: 'battery',
    severity: 'medium',
    estimatedTime: '10-20 phút',
    summary: 'Kiểm tra ứng dụng tiêu thụ năng lượng, tình trạng pin và các thiết lập tiết kiệm năng lượng.',
    symptoms: ['Pin giảm nhanh khi chỉ làm tác vụ nhẹ', 'Máy nóng hoặc quạt chạy nhiều khi dùng pin'],
    causes: ['Ứng dụng chạy nền tiêu thụ nhiều năng lượng', 'Độ sáng màn hình cao', 'Pin đã suy giảm theo thời gian'],
    steps: [
      { stepNumber: 1, title: 'Kiểm tra mức tiêu thụ', instructions: 'Mở Activity Monitor > Energy để xem ứng dụng nào đang sử dụng nhiều năng lượng.' },
      { stepNumber: 2, title: 'Đóng ứng dụng không cần thiết', instructions: 'Thoát ứng dụng bị treo hoặc không sử dụng. Tránh buộc thoát tiến trình hệ thống.' },
      { stepNumber: 3, title: 'Kiểm tra tình trạng pin', instructions: 'Mở System Settings > Battery và kiểm tra Battery Health.' },
      { stepNumber: 4, title: 'Điều chỉnh sử dụng', instructions: 'Giảm độ sáng ở mức phù hợp và bật Low Power Mode khi cần kéo dài thời lượng pin.' }
    ],
    requiredTools: [],
    tags: ['MacBook', 'macOS', 'pin', 'battery'],
    author: 'TechCare',
    createdAt: '2026-11-18T00:00:00.000Z',
    helpfulCount: 0
  },
  {
    id: 'device-overheating',
    title: 'Điện thoại nóng bất thường khi sử dụng',
    platform: 'hardware',
    category: 'hardware',
    severity: 'medium',
    estimatedTime: '10-15 phút',
    summary: 'Xác định tác vụ gây nóng và giảm tải thiết bị trước khi kiểm tra sâu hơn.',
    symptoms: ['Thiết bị nóng khi dùng tác vụ nhẹ', 'Hiệu năng giảm hoặc xuất hiện cảnh báo nhiệt độ'],
    causes: ['Ứng dụng chạy nền hoặc trò chơi tải nặng', 'Thiết bị đang sạc trong môi trường nóng', 'Pin hoặc phần cứng có dấu hiệu bất thường'],
    steps: [
      { stepNumber: 1, title: 'Tạm dừng tác vụ nặng', instructions: 'Thoát trò chơi, quay video hoặc ứng dụng đang sử dụng nhiều tài nguyên.' },
      { stepNumber: 2, title: 'Đưa thiết bị về môi trường thoáng', instructions: 'Ngắt sạc nếu thiết bị quá nóng và đặt máy ở nơi khô ráo, thoáng mát. Không cho máy vào tủ lạnh hoặc tiếp xúc với nước.' },
      { stepNumber: 3, title: 'Kiểm tra ứng dụng', instructions: 'Xem mức sử dụng pin và đóng ứng dụng bất thường. Cập nhật ứng dụng và hệ điều hành khi thiết bị đã nguội.' },
      { stepNumber: 4, title: 'Kiểm tra chuyên môn khi cần', instructions: 'Nếu máy tiếp tục nóng bất thường khi không sử dụng hoặc có cảnh báo nhiệt độ lặp lại, ngừng sử dụng và mang máy đến trung tâm kỹ thuật uy tín.' }
    ],
    requiredTools: [],
    tags: ['nhiệt độ', 'nóng máy', 'pin', 'phần cứng'],
    author: 'TechCare',
    createdAt: '2026-11-18T00:00:00.000Z',
    helpfulCount: 0
  }
];
