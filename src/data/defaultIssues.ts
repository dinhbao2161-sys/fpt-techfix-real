import type { Issue } from '../types/issue.ts';

export const DEFAULT_ISSUES: Issue[] = [
  {
    "id": "PIN-01",
    "code": "PIN-01",
    "title": "Sạc không vào hoặc sạc rất chậm",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "battery",
    "severity": "medium",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Cắm sạc nhưng không hiện biểu tượng sạc. Nguyên nhân phổ biến: cổng sạc bám bụi, xơ vải.",
    "symptoms": [
      "Cắm sạc nhưng không hiện biểu tượng sạc",
      "Phải lắc hoặc giữ cáp ở một góc mới nhận",
      "Sạc nhiều giờ vẫn không đầy"
    ],
    "causes": [
      "Cổng sạc bám bụi, xơ vải",
      "Cáp hoặc củ sạc hỏng, công suất yếu",
      "Cắm vào cổng USB máy tính công suất thấp"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Thử cáp và củ sạc khác (ưu tiên loại...",
        "instructions": "Thử cáp và củ sạc khác (ưu tiên loại chính hãng) để loại trừ phụ kiện."
      },
      {
        "stepNumber": 2,
        "title": "Tắt nguồn máy",
        "instructions": "Tắt nguồn máy."
      },
      {
        "stepNumber": 3,
        "title": "Dùng bàn chải mềm hoặc tăm nhựa nhẹ nhàng lấy bụi trong cổng sạc",
        "instructions": "Dùng bàn chải mềm hoặc tăm nhựa nhẹ nhàng lấy bụi trong cổng sạc."
      },
      {
        "stepNumber": 4,
        "title": "Bật máy, cắm lại và thử ổ điện khác",
        "instructions": "Bật máy, cắm lại và thử ổ điện khác."
      }
    ],
    "requiredTools": [
      "Bàn chải lông mềm",
      "Tăm nhựa",
      "Cáp và củ sạc khác để thử"
    ],
    "warnings": [
      "Không dùng vật kim loại chọc vào cổng sạc, không xịt nước hoặc cồn trực tiếp vào cổng."
    ],
    "seeTechnicianIf": [
      "Đã thử nhiều cáp/củ sạc, cổng sạch mà vẫn không nhận hoặc phải giữ cáp ở góc nghiêng mới sạc được."
    ],
    "tags": [
      "PIN-01",
      "không nhận sạc",
      "sạc chậm",
      "cổng sạc",
      "cáp sạc"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 270
  },
  {
    "id": "PIN-02",
    "code": "PIN-02",
    "title": "Báo phát hiện chất lỏng hoặc độ ẩm ở cổng sạc",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "battery",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Hiện cảnh báo phát hiện chất lỏng hoặc độ ẩm khi cắm cáp. Nguyên nhân phổ biến: có hơi ẩm hoặc nước trong cổng sạc.",
    "symptoms": [
      "Hiện cảnh báo phát hiện chất lỏng hoặc độ ẩm khi cắm cáp",
      "Máy từ chối sạc"
    ],
    "causes": [
      "Có hơi ẩm hoặc nước trong cổng sạc",
      "Cổng bẩn khiến máy nhận tín hiệu sai"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Rút cáp ra khỏi máy",
        "instructions": "Rút cáp ra khỏi máy."
      },
      {
        "stepNumber": 2,
        "title": "Để máy ở nơi khô thoáng, cổng sạc hướng...",
        "instructions": "Để máy ở nơi khô thoáng, cổng sạc hướng xuống, thông thoáng khí, chờ vài giờ (có thể đến 24 giờ)."
      },
      {
        "stepNumber": 3,
        "title": "Không dùng gạo, không dùng máy sấy hoặc khí nén",
        "instructions": "Không dùng gạo, không dùng máy sấy hoặc khí nén."
      },
      {
        "stepNumber": 4,
        "title": "Khi cảnh báo biến mất mới sạc lại",
        "instructions": "Khi cảnh báo biến mất mới sạc lại; trong lúc chờ có thể dùng sạc không dây nếu máy hỗ trợ."
      }
    ],
    "warnings": [
      "Một số máy cho phép bỏ qua cảnh báo trong trường hợp khẩn cấp, chỉ làm khi thật sự cần và chắc chắn cổng đã khô."
    ],
    "seeTechnicianIf": [
      "Cảnh báo vẫn còn sau 24 giờ để khô ráo.",
      "Máy từng rơi xuống nước hoặc bị ngập."
    ],
    "tags": [
      "PIN-02",
      "phát hiện chất lỏng",
      "độ ẩm",
      "cổng sạc ướt",
      "cảnh báo ẩm"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 267
  },
  {
    "id": "PIN-03",
    "code": "PIN-03",
    "title": "Pin tụt nhanh bất thường",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "battery",
    "severity": "easy",
    "estimatedTime": "20 phút",
    "summary": "Dấu hiệu: Pin giảm vài phần trăm mỗi giờ dù để nhàn rỗi. Nguyên nhân phổ biến: ứng dụng chạy nền ngốn pin.",
    "symptoms": [
      "Pin giảm vài phần trăm mỗi giờ dù để nhàn rỗi",
      "Pin tụt nhanh sau khi cập nhật hệ điều hành"
    ],
    "causes": [
      "Ứng dụng chạy nền ngốn pin",
      "Độ sáng cao, tần số quét cao, định vị luôn bật",
      "Vừa cập nhật hệ điều hành nên máy đang lập chỉ mục dữ liệu"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Vào mục thống kê pin trong Cài đặt để...",
        "instructions": "Vào mục thống kê pin trong Cài đặt để xem ứng dụng nào dùng nhiều pin nhất."
      },
      {
        "stepNumber": 2,
        "title": "Hạn chế chạy nền hoặc tắt làm mới nền cho ứng dụng ít dùng",
        "instructions": "Hạn chế chạy nền hoặc tắt làm mới nền cho ứng dụng ít dùng."
      },
      {
        "stepNumber": 3,
        "title": "Giảm độ sáng, bật độ sáng tự động, hạ...",
        "instructions": "Giảm độ sáng, bật độ sáng tự động, hạ tần số quét nếu máy có tùy chọn."
      },
      {
        "stepNumber": 4,
        "title": "Khởi động lại máy, chờ 2-3 ngày sau cập nhật rồi đánh giá lại",
        "instructions": "Khởi động lại máy, chờ 2-3 ngày sau cập nhật rồi đánh giá lại."
      }
    ],
    "seeTechnicianIf": [
      "Pin vẫn tụt nhanh sau khi đã tối ưu, hoặc độ chai pin cao."
    ],
    "tags": [
      "PIN-03",
      "hao pin",
      "tụt pin",
      "pin yếu",
      "ngốn pin"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 264
  },
  {
    "id": "PIN-04",
    "code": "PIN-04",
    "title": "Pin tụt phần trăm đột ngột hoặc máy tự tắt khi còn pin",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "battery",
    "severity": "easy",
    "estimatedTime": "20 phút",
    "summary": "Dấu hiệu: Đang hiển thị 30-40% pin thì máy tắt. Nguyên nhân phổ biến: pin đã chai, không cấp đủ dòng đột ngột.",
    "symptoms": [
      "Đang hiển thị 30-40% pin thì máy tắt",
      "Phần trăm pin nhảy lung tung",
      "Hay xảy ra khi trời lạnh hoặc mở ứng dụng nặng"
    ],
    "causes": [
      "Pin đã chai, không cấp đủ dòng đột ngột",
      "Thời tiết lạnh làm pin tụt áp",
      "Hiển thị phần trăm pin bị lệch do phần mềm"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Cập nhật hệ điều hành lên bản mới nhất",
        "instructions": "Cập nhật hệ điều hành lên bản mới nhất."
      },
      {
        "stepNumber": 2,
        "title": "Tránh dùng máy ngoài trời lạnh hoặc để máy trong môi trường quá nóng",
        "instructions": "Tránh dùng máy ngoài trời lạnh hoặc để máy trong môi trường quá nóng."
      },
      {
        "stepNumber": 3,
        "title": "Sạc đầy 100%, dùng đến khi còn thấp rồi...",
        "instructions": "Sạc đầy 100%, dùng đến khi còn thấp rồi sạc đầy lại một lần để hệ thống hiển thị chính xác hơn."
      },
      {
        "stepNumber": 4,
        "title": "Kiểm tra sức khỏe pin (xem mục PIN-09)",
        "instructions": "Kiểm tra sức khỏe pin (xem mục PIN-09)."
      }
    ],
    "seeTechnicianIf": [
      "Máy vẫn tự tắt khi còn nhiều pin sau các bước trên - khả năng cao cần thay pin."
    ],
    "tags": [
      "PIN-04",
      "tự tắt nguồn",
      "sập nguồn",
      "pin nhảy phần trăm",
      "tắt khi còn pin"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 261
  },
  {
    "id": "PIN-05",
    "code": "PIN-05",
    "title": "Máy nóng khi sạc",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "battery",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Thân máy ấm hoặc nóng khi cắm sạc. Nguyên nhân phổ biến: vừa sạc vừa chơi game hoặc quay video.",
    "symptoms": [
      "Thân máy ấm hoặc nóng khi cắm sạc",
      "Sạc chậm lại hoặc dừng sạc khi nóng"
    ],
    "causes": [
      "Vừa sạc vừa chơi game hoặc quay video",
      "Ốp lưng dày, để máy dưới gối hoặc chăn",
      "Củ sạc hoặc cáp kém chất lượng"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Ngừng dùng ứng dụng nặng trong lúc sạc",
        "instructions": "Ngừng dùng ứng dụng nặng trong lúc sạc."
      },
      {
        "stepNumber": 2,
        "title": "Tháo ốp lưng, đặt máy nơi thoáng, không phủ chăn gối",
        "instructions": "Tháo ốp lưng, đặt máy nơi thoáng, không phủ chăn gối."
      },
      {
        "stepNumber": 3,
        "title": "Dùng củ sạc và cáp chính hãng hoặc có chứng nhận",
        "instructions": "Dùng củ sạc và cáp chính hãng hoặc có chứng nhận."
      },
      {
        "stepNumber": 4,
        "title": "Sạc ở nhiệt độ phòng, tránh nắng trực tiếp",
        "instructions": "Sạc ở nhiệt độ phòng, tránh nắng trực tiếp."
      }
    ],
    "warnings": [
      "Nếu máy nóng đến mức khó cầm, có mùi khét hoặc thân máy phồng, rút sạc ngay và ngừng sử dụng."
    ],
    "seeTechnicianIf": [
      "Máy nóng bất thường dù không dùng gì, kèm mùi lạ hoặc thân máy phồng."
    ],
    "tags": [
      "PIN-05",
      "nóng máy khi sạc",
      "sạc nóng",
      "củ sạc nóng"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 258
  },
  {
    "id": "PIN-06",
    "code": "PIN-06",
    "title": "Sạc không dây không nhận hoặc ngắt liên tục",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "battery",
    "severity": "easy",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Đặt lên đế sạc nhưng không hiện biểu tượng sạc. Nguyên nhân phổ biến: đặt lệch tâm cuộn sạc.",
    "symptoms": [
      "Đặt lên đế sạc nhưng không hiện biểu tượng sạc",
      "Sạc được vài giây rồi ngắt"
    ],
    "causes": [
      "Đặt lệch tâm cuộn sạc",
      "Ốp lưng quá dày hoặc có kim loại, thẻ, nam châm",
      "Đế sạc hoặc nguồn cấp cho đế yếu"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Tháo ốp lưng, bỏ thẻ hoặc vật kim loại sau máy",
        "instructions": "Tháo ốp lưng, bỏ thẻ hoặc vật kim loại sau máy."
      },
      {
        "stepNumber": 2,
        "title": "Đặt máy sao cho tâm cuộn sạc sau máy khớp tâm đế sạc, thử vài vị trí",
        "instructions": "Đặt máy sao cho tâm cuộn sạc sau máy khớp tâm đế sạc, thử vài vị trí."
      },
      {
        "stepNumber": 3,
        "title": "Dùng củ sạc đúng công suất cho đế sạc",
        "instructions": "Dùng củ sạc đúng công suất cho đế sạc."
      },
      {
        "stepNumber": 4,
        "title": "Thử đế sạc khác để loại trừ lỗi từ đế",
        "instructions": "Thử đế sạc khác để loại trừ lỗi từ đế."
      }
    ],
    "seeTechnicianIf": [
      "Đế sạc khác cũng không sạc được máy."
    ],
    "tags": [
      "PIN-06",
      "sạc không dây",
      "đế sạc",
      "wireless charging"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 255
  },
  {
    "id": "PIN-07",
    "code": "PIN-07",
    "title": "Cáp sạc chập chờn hoặc đứt ngầm",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "battery",
    "severity": "easy",
    "estimatedTime": "5 phút",
    "summary": "Dấu hiệu: Sạc được rồi ngắt khi cử động dây. Nguyên nhân phổ biến: dây bị gập, kéo mạnh ở gần đầu cắm.",
    "symptoms": [
      "Sạc được rồi ngắt khi cử động dây",
      "Vỏ dây bong hoặc gập gãy gần đầu cắm"
    ],
    "causes": [
      "Dây bị gập, kéo mạnh ở gần đầu cắm",
      "Đầu cắm bị oxy hóa hoặc cong"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Thử cáp khác trên cùng củ sạc để xác định lỗi nằm ở cáp",
        "instructions": "Thử cáp khác trên cùng củ sạc để xác định lỗi nằm ở cáp."
      },
      {
        "stepNumber": 2,
        "title": "Kiểm tra vỏ dây và đầu cáp xem có nứt, cháy, đổi màu",
        "instructions": "Kiểm tra vỏ dây và đầu cáp xem có nứt, cháy, đổi màu."
      },
      {
        "stepNumber": 3,
        "title": "Thay cáp chính hãng hoặc cáp có chứng nhận",
        "instructions": "Thay cáp chính hãng hoặc cáp có chứng nhận."
      },
      {
        "stepNumber": 4,
        "title": "Không quấn dây quá chặt, không kéo dây khi rút",
        "instructions": "Không quấn dây quá chặt, không kéo dây khi rút."
      }
    ],
    "requiredTools": [
      "Cáp sạc khác"
    ],
    "warnings": [
      "Không dùng băng keo quấn lại cáp bị hở lõi dây - rất dễ chập điện."
    ],
    "seeTechnicianIf": [
      "Cáp mới, củ mới vẫn chập chờn - lỗi có thể ở chân sạc trong máy."
    ],
    "tags": [
      "PIN-07",
      "cáp sạc hỏng",
      "cáp đứt",
      "sạc chập chờn",
      "dây sạc"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 252
  },
  {
    "id": "PIN-08",
    "code": "PIN-08",
    "title": "Máy không lên nguồn (nghi hết pin sâu)",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "battery",
    "severity": "easy",
    "estimatedTime": "40 phút",
    "summary": "Dấu hiệu: Màn hình đen, bấm nút nguồn không phản ứng. Nguyên nhân phổ biến: pin cạn kiệt hoàn toàn.",
    "symptoms": [
      "Màn hình đen, bấm nút nguồn không phản ứng",
      "Cắm sạc vẫn không hiện gì"
    ],
    "causes": [
      "Pin cạn kiệt hoàn toàn",
      "Máy treo phần mềm"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Cắm sạc bằng cáp và củ sạc chắc chắn...",
        "instructions": "Cắm sạc bằng cáp và củ sạc chắc chắn tốt, chờ 15-30 phút (máy hết pin sâu cần thời gian mới hiện biểu tượng)."
      },
      {
        "stepNumber": 2,
        "title": "Ép khởi động lại",
        "instructions": "Ép khởi động lại. iPhone: nhấn nhả tăng âm lượng, nhấn nhả giảm âm lượng rồi giữ nút nguồn đến khi hiện logo. Android: giữ nút nguồn kết hợp giảm âm lượng khoảng 10-15 giây."
      },
      {
        "stepNumber": 3,
        "title": "Thử ổ cắm và củ sạc khác",
        "instructions": "Thử ổ cắm và củ sạc khác."
      }
    ],
    "requiredTools": [
      "Cáp và củ sạc tốt"
    ],
    "seeTechnicianIf": [
      "Sau khoảng 1 giờ sạc, máy vẫn không phản hồi."
    ],
    "tags": [
      "PIN-08",
      "không lên nguồn",
      "máy đen",
      "không bật được",
      "hết pin sâu"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 249
  },
  {
    "id": "PIN-09",
    "code": "PIN-09",
    "title": "Pin chai - cách kiểm tra sức khỏe pin",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "battery",
    "severity": "hard",
    "estimatedTime": "5 phút",
    "summary": "Dấu hiệu: Dung lượng pin dùng được ngắn hơn rõ rệt so với lúc mới mua. Nguyên nhân phổ biến: pin lão hóa theo số lần sạc và thời gian.",
    "symptoms": [
      "Dung lượng pin dùng được ngắn hơn rõ rệt so với lúc mới mua",
      "Máy hay tự tắt hoặc chậm lại"
    ],
    "causes": [
      "Pin lão hóa theo số lần sạc và thời gian",
      "Thường xuyên để máy nóng hoặc sạc cạn kiệt"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "iPhone",
        "instructions": "iPhone: vào Cài đặt > Pin > Tình trạng pin & sạc để xem dung lượng tối đa."
      },
      {
        "stepNumber": 2,
        "title": "Android",
        "instructions": "Android: nhiều hãng có công cụ riêng (ví dụ ứng dụng Samsung Members có mục chẩn đoán pin)."
      },
      {
        "stepNumber": 3,
        "title": "Với iPhone, dung lượng tối đa dưới khoảng 80%...",
        "instructions": "Với iPhone, dung lượng tối đa dưới khoảng 80% thường được xem là đã chai đáng kể."
      },
      {
        "stepNumber": 4,
        "title": "Nếu pin chai, cân nhắc thay pin tại trung...",
        "instructions": "Nếu pin chai, cân nhắc thay pin tại trung tâm bảo hành hoặc cửa hàng uy tín."
      }
    ],
    "warnings": [
      "Không tự mở máy để thay pin nếu không có kinh nghiệm."
    ],
    "seeTechnicianIf": [
      "Pin chai nhiều hoặc có cảnh báo cần bảo dưỡng pin."
    ],
    "tags": [
      "PIN-09",
      "pin chai",
      "độ chai pin",
      "sức khỏe pin",
      "thay pin"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 246
  },
  {
    "id": "PIN-10",
    "code": "PIN-10",
    "title": "Pin phồng (thân máy kênh, màn hình bung)",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "battery",
    "severity": "hard",
    "estimatedTime": "5 phút",
    "summary": "Dấu hiệu: Nắp lưng hoặc màn hình bị bung, hở viền. Nguyên nhân phổ biến: pin lão hóa hoặc bị hỏng, sinh khí bên trong.",
    "symptoms": [
      "Nắp lưng hoặc màn hình bị bung, hở viền",
      "Máy đặt trên mặt bàn bị kênh, không nằm phẳng",
      "Máy nóng hoặc có mùi lạ"
    ],
    "causes": [
      "Pin lão hóa hoặc bị hỏng, sinh khí bên trong",
      "Sạc bằng phụ kiện kém chất lượng, để nóng lâu"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Ngừng sạc và ngừng sử dụng máy ngay",
        "instructions": "Ngừng sạc và ngừng sử dụng máy ngay."
      },
      {
        "stepNumber": 2,
        "title": "Tắt nguồn, để máy nơi thoáng, xa vật dễ cháy",
        "instructions": "Tắt nguồn, để máy nơi thoáng, xa vật dễ cháy; không bỏ vào túi hay để dưới gối."
      },
      {
        "stepNumber": 3,
        "title": "Không ấn, chọc, uốn hoặc cố tháo pin",
        "instructions": "Không ấn, chọc, uốn hoặc cố tháo pin."
      },
      {
        "stepNumber": 4,
        "title": "Mang đến trung tâm bảo hành hoặc cửa hàng...",
        "instructions": "Mang đến trung tâm bảo hành hoặc cửa hàng sửa chữa uy tín càng sớm càng tốt."
      }
    ],
    "warnings": [
      "Pin phồng có nguy cơ cháy nổ. Tuyệt đối không tự xử lý tại nhà."
    ],
    "seeTechnicianIf": [
      "Có bất kỳ dấu hiệu phồng nào - đây là trường hợp phải mang đi sửa."
    ],
    "tags": [
      "PIN-10",
      "pin phồng",
      "máy kênh",
      "bung màn hình",
      "pin nguy hiểm"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 243
  },
  {
    "id": "MAN-01",
    "code": "MAN-01",
    "title": "Cảm ứng loạn, tự bấm (ghost touch)",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "screen",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Màn hình tự mở ứng dụng hoặc tự gõ chữ. Nguyên nhân phổ biến: tay hoặc màn hình bị ướt, bẩn.",
    "symptoms": [
      "Màn hình tự mở ứng dụng hoặc tự gõ chữ",
      "Cảm ứng nhảy lung tung, nhất là khi đang sạc"
    ],
    "causes": [
      "Tay hoặc màn hình bị ướt, bẩn",
      "Miếng dán cường lực kém chất lượng hoặc bị lệch",
      "Củ sạc hoặc cáp kém chất lượng gây nhiễu",
      "Lỗi phần mềm tạm thời"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lau sạch màn hình bằng khăn mềm hơi ẩm, để khô hẳn",
        "instructions": "Lau sạch màn hình bằng khăn mềm hơi ẩm, để khô hẳn."
      },
      {
        "stepNumber": 2,
        "title": "Tháo miếng dán cường lực và thử lại",
        "instructions": "Tháo miếng dán cường lực và thử lại."
      },
      {
        "stepNumber": 3,
        "title": "Rút sạc, dùng củ sạc chính hãng và kiểm tra lại",
        "instructions": "Rút sạc, dùng củ sạc chính hãng và kiểm tra lại."
      },
      {
        "stepNumber": 4,
        "title": "Khởi động lại máy và cập nhật hệ điều hành",
        "instructions": "Khởi động lại máy và cập nhật hệ điều hành."
      }
    ],
    "requiredTools": [
      "Khăn mềm"
    ],
    "seeTechnicianIf": [
      "Vẫn loạn cảm ứng sau khi tháo miếng dán, rút sạc và khởi động lại - có thể hỏng tấm cảm ứng."
    ],
    "tags": [
      "MAN-01",
      "cảm ứng loạn",
      "tự bấm",
      "ghost touch",
      "màn hình tự nhảy"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 240
  },
  {
    "id": "MAN-02",
    "code": "MAN-02",
    "title": "Cảm ứng kém nhạy hoặc chỗ nhạy chỗ không",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "screen",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Chạm nhiều lần mới nhận. Nguyên nhân phổ biến: màn hình bẩn, dính dầu mỡ hoặc tay ướt.",
    "symptoms": [
      "Chạm nhiều lần mới nhận",
      "Một vùng màn hình không phản hồi"
    ],
    "causes": [
      "Màn hình bẩn, dính dầu mỡ hoặc tay ướt",
      "Miếng dán dày hoặc có bọt khí",
      "Lỗi phần mềm tạm thời"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lau sạch màn hình và lau khô tay",
        "instructions": "Lau sạch màn hình và lau khô tay."
      },
      {
        "stepNumber": 2,
        "title": "Tháo hoặc dán lại miếng dán chất lượng tốt, mỏng",
        "instructions": "Tháo hoặc dán lại miếng dán chất lượng tốt, mỏng."
      },
      {
        "stepNumber": 3,
        "title": "Bật tùy chọn tăng độ nhạy cảm ứng nếu máy có (ví dụ Samsung",
        "instructions": "Bật tùy chọn tăng độ nhạy cảm ứng nếu máy có (ví dụ Samsung: Cài đặt > Màn hình > Độ nhạy cảm ứng)."
      },
      {
        "stepNumber": 4,
        "title": "Khởi động lại máy và thử trong ứng dụng...",
        "instructions": "Khởi động lại máy và thử trong ứng dụng khác để xác định lỗi phần mềm hay phần cứng."
      }
    ],
    "requiredTools": [
      "Khăn mềm"
    ],
    "seeTechnicianIf": [
      "Một vùng cố định luôn không nhận cảm ứng dù đã tháo miếng dán và khởi động lại."
    ],
    "tags": [
      "MAN-02",
      "cảm ứng kém",
      "liệt cảm ứng",
      "cảm ứng không nhạy",
      "vuốt không ăn"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 237
  },
  {
    "id": "MAN-03",
    "code": "MAN-03",
    "title": "Màn hình ám vàng hoặc sai màu",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "screen",
    "severity": "easy",
    "estimatedTime": "5 phút",
    "summary": "Dấu hiệu: Màn hình ngả vàng hoặc ngả cam. Nguyên nhân phổ biến: đang bật lọc ánh sáng xanh, chế độ ban đêm hoặc true tone.",
    "symptoms": [
      "Màn hình ngả vàng hoặc ngả cam",
      "Màu sắc nhạt hoặc đậm bất thường"
    ],
    "causes": [
      "Đang bật lọc ánh sáng xanh, chế độ ban đêm hoặc True Tone",
      "Chế độ hiển thị hoặc bộ lọc màu thay đổi",
      "Miếng dán cường lực ngả vàng"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Tắt chế độ ban đêm, bảo vệ mắt hoặc True Tone trong cài đặt màn hình",
        "instructions": "Tắt chế độ ban đêm, bảo vệ mắt hoặc True Tone trong cài đặt màn hình."
      },
      {
        "stepNumber": 2,
        "title": "Đặt chế độ màu về mặc định",
        "instructions": "Đặt chế độ màu về mặc định."
      },
      {
        "stepNumber": 3,
        "title": "Kiểm tra mục Trợ năng xem có bật bộ lọc màu không",
        "instructions": "Kiểm tra mục Trợ năng xem có bật bộ lọc màu không."
      },
      {
        "stepNumber": 4,
        "title": "Tháo miếng dán để so sánh",
        "instructions": "Tháo miếng dán để so sánh."
      }
    ],
    "seeTechnicianIf": [
      "Có vệt xanh, tím hoặc hồng cố định, kể cả ở màn hình khởi động - nghi hỏng tấm nền."
    ],
    "tags": [
      "MAN-03",
      "ám vàng",
      "sai màu",
      "màn hình ngả vàng",
      "lọc ánh sáng xanh"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 234
  },
  {
    "id": "MAN-04",
    "code": "MAN-04",
    "title": "Màn hình nhấp nháy",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "screen",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Màn hình chớp sáng tối liên tục. Nguyên nhân phổ biến: độ sáng tự động hoặc tần số quét thay đổi.",
    "symptoms": [
      "Màn hình chớp sáng tối liên tục",
      "Nhấp nháy khi hạ độ sáng hoặc trong một ứng dụng"
    ],
    "causes": [
      "Độ sáng tự động hoặc tần số quét thay đổi",
      "Ứng dụng lỗi hiển thị",
      "Lỗi sau khi cập nhật hệ điều hành"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Tắt độ sáng tự động, đặt độ sáng cố định",
        "instructions": "Tắt độ sáng tự động, đặt độ sáng cố định."
      },
      {
        "stepNumber": 2,
        "title": "Đặt tần số quét về một mức cố định nếu máy cho phép",
        "instructions": "Đặt tần số quét về một mức cố định nếu máy cho phép."
      },
      {
        "stepNumber": 3,
        "title": "Xác định lỗi chỉ ở một ứng dụng hay toàn máy",
        "instructions": "Xác định lỗi chỉ ở một ứng dụng hay toàn máy; cập nhật hoặc gỡ ứng dụng đó."
      },
      {
        "stepNumber": 4,
        "title": "Android",
        "instructions": "Android: vào Chế độ an toàn để loại trừ ứng dụng bên thứ ba."
      }
    ],
    "seeTechnicianIf": [
      "Nhấp nháy cả ở màn hình chính và trong Chế độ an toàn, kể cả sau khi đặt lại cài đặt."
    ],
    "tags": [
      "MAN-04",
      "nhấp nháy",
      "chớp màn hình",
      "flicker",
      "tần số quét"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 231
  },
  {
    "id": "MAN-05",
    "code": "MAN-05",
    "title": "Màn hình tối hoặc tự giảm độ sáng",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "screen",
    "severity": "easy",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Độ sáng tự giảm dù đã kéo lên cao. Nguyên nhân phổ biến: máy nóng nên tự giảm độ sáng.",
    "symptoms": [
      "Độ sáng tự giảm dù đã kéo lên cao",
      "Màn hình khó nhìn ngoài trời"
    ],
    "causes": [
      "Máy nóng nên tự giảm độ sáng",
      "Đang bật chế độ tiết kiệm pin",
      "Cảm biến ánh sáng bị che bởi miếng dán hoặc ốp"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Đưa máy ra khỏi nắng, tháo ốp, để máy nguội",
        "instructions": "Đưa máy ra khỏi nắng, tháo ốp, để máy nguội."
      },
      {
        "stepNumber": 2,
        "title": "Tắt chế độ tiết kiệm pin hoặc chỉnh độ sáng thủ công",
        "instructions": "Tắt chế độ tiết kiệm pin hoặc chỉnh độ sáng thủ công."
      },
      {
        "stepNumber": 3,
        "title": "Kiểm tra miếng dán có che cảm biến ánh...",
        "instructions": "Kiểm tra miếng dán có che cảm biến ánh sáng ở phía trên màn hình không."
      },
      {
        "stepNumber": 4,
        "title": "Thử tắt độ sáng tự động",
        "instructions": "Thử tắt độ sáng tự động."
      }
    ],
    "seeTechnicianIf": [
      "Màn hình luôn rất tối dù máy nguội và đã tắt các chế độ tiết kiệm."
    ],
    "tags": [
      "MAN-05",
      "màn hình tối",
      "tự giảm sáng",
      "độ sáng thấp",
      "cảm biến ánh sáng"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 228
  },
  {
    "id": "MAN-06",
    "code": "MAN-06",
    "title": "Hình mờ lưu lại trên màn hình (kẹt hình)",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "screen",
    "severity": "easy",
    "estimatedTime": "30 phút",
    "summary": "Dấu hiệu: Thấy bóng mờ của thanh điều hướng, logo hoặc bàn phím. Nguyên nhân phổ biến: hiển thị hình tĩnh trong thời gian dài (lưu ảnh tạm thời).",
    "symptoms": [
      "Thấy bóng mờ của thanh điều hướng, logo hoặc bàn phím",
      "Hình cũ còn lưu lại khi chuyển cảnh"
    ],
    "causes": [
      "Hiển thị hình tĩnh trong thời gian dài (lưu ảnh tạm thời)",
      "Burn-in lâu dài trên màn OLED"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Phát video hoặc nền đổi màu toàn màn hình trong 10-30 phút",
        "instructions": "Phát video hoặc nền đổi màu toàn màn hình trong 10-30 phút."
      },
      {
        "stepNumber": 2,
        "title": "Giảm độ sáng, đặt thời gian tự khóa ngắn hơn",
        "instructions": "Giảm độ sáng, đặt thời gian tự khóa ngắn hơn."
      },
      {
        "stepNumber": 3,
        "title": "Bật chế độ tối, hạn chế để hình tĩnh hiển thị lâu",
        "instructions": "Bật chế độ tối, hạn chế để hình tĩnh hiển thị lâu."
      },
      {
        "stepNumber": 4,
        "title": "Theo dõi vài ngày xem vết có mờ đi không",
        "instructions": "Theo dõi vài ngày xem vết có mờ đi không."
      }
    ],
    "seeTechnicianIf": [
      "Hình mờ vẫn rõ sau vài ngày - thường là burn-in vĩnh viễn, cần thay màn hình."
    ],
    "tags": [
      "MAN-06",
      "kẹt hình",
      "ám hình",
      "burn-in",
      "image retention",
      "bóng ma"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 225
  },
  {
    "id": "MAN-07",
    "code": "MAN-07",
    "title": "Màn hình không tự xoay",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "screen",
    "severity": "easy",
    "estimatedTime": "5 phút",
    "summary": "Dấu hiệu: Nghiêng máy ngang nhưng giao diện vẫn dọc. Nguyên nhân phổ biến: đang bật khóa xoay màn hình.",
    "symptoms": [
      "Nghiêng máy ngang nhưng giao diện vẫn dọc"
    ],
    "causes": [
      "Đang bật khóa xoay màn hình",
      "Ứng dụng không hỗ trợ xoay ngang",
      "Lỗi phần mềm tạm thời"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Android",
        "instructions": "Android: bật Xoay tự động trong bảng thông báo. iPhone: tắt Khóa hướng dọc trong Trung tâm điều khiển."
      },
      {
        "stepNumber": 2,
        "title": "Thử xoay trong một ứng dụng hỗ trợ xoay...",
        "instructions": "Thử xoay trong một ứng dụng hỗ trợ xoay như trình duyệt hoặc trình phát video."
      },
      {
        "stepNumber": 3,
        "title": "Khởi động lại máy",
        "instructions": "Khởi động lại máy."
      },
      {
        "stepNumber": 4,
        "title": "Bỏ ốp hoặc phụ kiện có nam châm mạnh gần máy và thử lại",
        "instructions": "Bỏ ốp hoặc phụ kiện có nam châm mạnh gần máy và thử lại."
      }
    ],
    "seeTechnicianIf": [
      "Không xoay ở bất kỳ ứng dụng nào sau khi khởi động lại - nghi lỗi cảm biến."
    ],
    "tags": [
      "MAN-07",
      "không xoay",
      "xoay màn hình",
      "auto rotate",
      "khóa xoay"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 222
  },
  {
    "id": "MAN-08",
    "code": "MAN-08",
    "title": "Miếng dán cường lực nứt, bọt khí hoặc bong",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "screen",
    "severity": "medium",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Miếng dán nứt, mẻ cạnh. Nguyên nhân phổ biến: va đập, rơi máy.",
    "symptoms": [
      "Miếng dán nứt, mẻ cạnh",
      "Có bọt khí hoặc bụi bên dưới",
      "Mép dán bị bong"
    ],
    "causes": [
      "Va đập, rơi máy",
      "Dán trong môi trường nhiều bụi",
      "Miếng dán kém chất lượng"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Rửa tay, chọn nơi ít bụi",
        "instructions": "Rửa tay, chọn nơi ít bụi."
      },
      {
        "stepNumber": 2,
        "title": "Lau sạch màn hình bằng khăn lau, dùng băng dính gỡ bụi còn sót",
        "instructions": "Lau sạch màn hình bằng khăn lau, dùng băng dính gỡ bụi còn sót."
      },
      {
        "stepNumber": 3,
        "title": "Dán từ một mép, dùng thẻ mềm ép bọt khí ra ngoài",
        "instructions": "Dán từ một mép, dùng thẻ mềm ép bọt khí ra ngoài."
      },
      {
        "stepNumber": 4,
        "title": "Nếu dán lệch hoặc bọt khí lớn, bóc ra dán lại hoặc dùng miếng mới",
        "instructions": "Nếu dán lệch hoặc bọt khí lớn, bóc ra dán lại hoặc dùng miếng mới."
      }
    ],
    "requiredTools": [
      "Miếng dán mới",
      "Khăn lau màn hình",
      "Băng dính gỡ bụi",
      "Thẻ mềm"
    ],
    "warnings": [
      "Miếng dán đã nứt dễ làm xước tay và giảm độ nhạy cảm ứng - nên thay."
    ],
    "seeTechnicianIf": [
      "Màn hình bên dưới miếng dán cũng đã nứt."
    ],
    "tags": [
      "MAN-08",
      "dán màn hình",
      "bọt khí",
      "miếng dán nứt",
      "cường lực"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 219
  },
  {
    "id": "PM-01",
    "code": "PM-01",
    "title": "Máy chạy chậm, giật lag",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "system",
    "severity": "easy",
    "estimatedTime": "20 phút",
    "summary": "Dấu hiệu: Mở ứng dụng lâu. Nguyên nhân phổ biến: bộ nhớ gần đầy.",
    "symptoms": [
      "Mở ứng dụng lâu",
      "Vuốt màn hình bị giật",
      "Chuyển ứng dụng bị chậm"
    ],
    "causes": [
      "Bộ nhớ gần đầy",
      "Quá nhiều ứng dụng chạy nền",
      "Máy lâu chưa khởi động lại hoặc chưa cập nhật"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Khởi động lại máy",
        "instructions": "Khởi động lại máy."
      },
      {
        "stepNumber": 2,
        "title": "Kiểm tra dung lượng trống, nên để trống khoảng 10-20%",
        "instructions": "Kiểm tra dung lượng trống, nên để trống khoảng 10-20%."
      },
      {
        "stepNumber": 3,
        "title": "Xóa cache, gỡ ứng dụng ít dùng, tắt chạy nền ứng dụng không cần",
        "instructions": "Xóa cache, gỡ ứng dụng ít dùng, tắt chạy nền ứng dụng không cần."
      },
      {
        "stepNumber": 4,
        "title": "Cập nhật hệ điều hành và ứng dụng",
        "instructions": "Cập nhật hệ điều hành và ứng dụng."
      },
      {
        "stepNumber": 5,
        "title": "Nếu vẫn chậm",
        "instructions": "Nếu vẫn chậm: sao lưu dữ liệu rồi đặt lại cài đặt gốc."
      }
    ],
    "warnings": [
      "Đặt lại cài đặt gốc sẽ xóa dữ liệu - phải sao lưu trước."
    ],
    "seeTechnicianIf": [
      "Máy vẫn rất chậm sau khi đặt lại cài đặt gốc."
    ],
    "tags": [
      "PM-01",
      "lag",
      "giật",
      "chạy chậm",
      "máy ì"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 216
  },
  {
    "id": "PM-02",
    "code": "PM-02",
    "title": "Hết dung lượng, bộ nhớ đầy",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "system",
    "severity": "easy",
    "estimatedTime": "20 phút",
    "summary": "Dấu hiệu: Báo bộ nhớ đầy hoặc sắp đầy. Nguyên nhân phổ biến: ảnh và video dung lượng lớn.",
    "symptoms": [
      "Báo bộ nhớ đầy hoặc sắp đầy",
      "Không chụp được ảnh, không cài được ứng dụng"
    ],
    "causes": [
      "Ảnh và video dung lượng lớn",
      "Cache ứng dụng, tệp tải xuống tích lũy",
      "Tin nhắn có tệp đính kèm"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Vào Cài đặt > Lưu trữ để xem mục nào chiếm nhiều nhất",
        "instructions": "Vào Cài đặt > Lưu trữ để xem mục nào chiếm nhiều nhất."
      },
      {
        "stepNumber": 2,
        "title": "Sao lưu ảnh và video lên đám mây hoặc máy tính rồi xóa trên máy",
        "instructions": "Sao lưu ảnh và video lên đám mây hoặc máy tính rồi xóa trên máy."
      },
      {
        "stepNumber": 3,
        "title": "Xóa cache, tệp tải xuống không cần và gỡ ứng dụng ít dùng",
        "instructions": "Xóa cache, tệp tải xuống không cần và gỡ ứng dụng ít dùng."
      },
      {
        "stepNumber": 4,
        "title": "Dọn tin nhắn có ảnh, video đính kèm nặng",
        "instructions": "Dọn tin nhắn có ảnh, video đính kèm nặng."
      }
    ],
    "warnings": [
      "Kiểm tra bản sao lưu đã đầy đủ trước khi xóa ảnh gốc."
    ],
    "tags": [
      "PM-02",
      "đầy bộ nhớ",
      "hết dung lượng",
      "storage full",
      "dọn dẹp"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 213
  },
  {
    "id": "PM-03",
    "code": "PM-03",
    "title": "Ứng dụng tự thoát hoặc không mở được",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "system",
    "severity": "easy",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Mở ứng dụng vài giây rồi tự thoát. Nguyên nhân phổ biến: phiên bản ứng dụng cũ hoặc lỗi.",
    "symptoms": [
      "Mở ứng dụng vài giây rồi tự thoát",
      "Ứng dụng đứng ở màn hình trắng hoặc logo"
    ],
    "causes": [
      "Phiên bản ứng dụng cũ hoặc lỗi",
      "Cache hỏng",
      "Thiếu dung lượng trống"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Đóng hẳn ứng dụng và mở lại",
        "instructions": "Đóng hẳn ứng dụng và mở lại."
      },
      {
        "stepNumber": 2,
        "title": "Android",
        "instructions": "Android: Buộc dừng, xóa cache ứng dụng trong Cài đặt > Ứng dụng."
      },
      {
        "stepNumber": 3,
        "title": "Cập nhật ứng dụng và hệ điều hành",
        "instructions": "Cập nhật ứng dụng và hệ điều hành."
      },
      {
        "stepNumber": 4,
        "title": "Gỡ cài đặt rồi cài lại ứng dụng",
        "instructions": "Gỡ cài đặt rồi cài lại ứng dụng."
      },
      {
        "stepNumber": 5,
        "title": "Kiểm tra dung lượng trống",
        "instructions": "Kiểm tra dung lượng trống."
      }
    ],
    "warnings": [
      "Gỡ ứng dụng có thể mất dữ liệu cục bộ - đăng nhập tài khoản trước để đồng bộ."
    ],
    "seeTechnicianIf": [
      "Nhiều ứng dụng khác nhau cùng thoát liên tục."
    ],
    "tags": [
      "PM-03",
      "app crash",
      "ứng dụng tự thoát",
      "không mở được app",
      "văng app"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 210
  },
  {
    "id": "PM-04",
    "code": "PM-04",
    "title": "Máy treo, đơ hoặc màn hình đen nhưng vẫn có tiếng",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "system",
    "severity": "easy",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Không phản hồi khi chạm. Nguyên nhân phổ biến: ứng dụng treo, thiếu bộ nhớ.",
    "symptoms": [
      "Không phản hồi khi chạm",
      "Màn hình đen nhưng máy vẫn rung hoặc có chuông"
    ],
    "causes": [
      "Ứng dụng treo, thiếu bộ nhớ",
      "Lỗi phần mềm tạm thời",
      "Vừa cập nhật hệ điều hành chưa xong"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Chờ 1-2 phút nếu vừa cập nhật",
        "instructions": "Chờ 1-2 phút nếu vừa cập nhật."
      },
      {
        "stepNumber": 2,
        "title": "Ép khởi động lại",
        "instructions": "Ép khởi động lại. iPhone: nhấn nhả tăng âm lượng, nhấn nhả giảm âm lượng, giữ nút nguồn đến khi hiện logo. Android: giữ nút nguồn kết hợp giảm âm lượng khoảng 10-15 giây."
      },
      {
        "stepNumber": 3,
        "title": "Sạc máy 15-30 phút rồi thử lại",
        "instructions": "Sạc máy 15-30 phút rồi thử lại."
      },
      {
        "stepNumber": 4,
        "title": "Sau khi lên được, dọn bộ nhớ và cập nhật hệ điều hành",
        "instructions": "Sau khi lên được, dọn bộ nhớ và cập nhật hệ điều hành."
      }
    ],
    "seeTechnicianIf": [
      "Vẫn đen màn hình dù máy rung và có tiếng - nghi hỏng màn hình hoặc cáp màn hình."
    ],
    "tags": [
      "PM-04",
      "treo máy",
      "đơ máy",
      "đứng hình",
      "màn hình đen vẫn rung"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 207
  },
  {
    "id": "PM-05",
    "code": "PM-05",
    "title": "Máy tự khởi động lại liên tục hoặc kẹt logo",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "system",
    "severity": "medium",
    "estimatedTime": "60 phút",
    "summary": "Dấu hiệu: Máy tự khởi động lại nhiều lần. Nguyên nhân phổ biến: ứng dụng mới cài gây xung đột.",
    "symptoms": [
      "Máy tự khởi động lại nhiều lần",
      "Kẹt ở logo hãng, không vào được màn hình chính"
    ],
    "causes": [
      "Ứng dụng mới cài gây xung đột",
      "Hết dung lượng",
      "Lỗi hệ điều hành sau cập nhật",
      "Pin yếu"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Rút sạc, để máy nguội rồi khởi động lại",
        "instructions": "Rút sạc, để máy nguội rồi khởi động lại."
      },
      {
        "stepNumber": 2,
        "title": "Android",
        "instructions": "Android: vào Chế độ an toàn, gỡ ứng dụng mới cài gần đây."
      },
      {
        "stepNumber": 3,
        "title": "Giải phóng dung lượng nếu vào được máy",
        "instructions": "Giải phóng dung lượng nếu vào được máy."
      },
      {
        "stepNumber": 4,
        "title": "Cập nhật hoặc khôi phục hệ điều hành theo...",
        "instructions": "Cập nhật hoặc khôi phục hệ điều hành theo hướng dẫn chính hãng (ví dụ chế độ Recovery với iPhone, Smart Switch hoặc Recovery với Android)."
      },
      {
        "stepNumber": 5,
        "title": "Sao lưu dữ liệu nếu có thể trước khi khôi phục",
        "instructions": "Sao lưu dữ liệu nếu có thể trước khi khôi phục."
      }
    ],
    "requiredTools": [
      "Máy tính",
      "Cáp chính hãng"
    ],
    "warnings": [
      "Khôi phục hệ điều hành có thể xóa toàn bộ dữ liệu."
    ],
    "seeTechnicianIf": [
      "Khôi phục hệ điều hành không khắc phục được, hoặc máy báo lỗi phần cứng."
    ],
    "tags": [
      "PM-05",
      "bootloop",
      "tự khởi động lại",
      "kẹt logo",
      "restart liên tục"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 204
  },
  {
    "id": "PM-06",
    "code": "PM-06",
    "title": "Máy nóng khi dùng bình thường",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "system",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Thân máy ấm hoặc nóng dù chỉ lướt web. Nguyên nhân phổ biến: chơi game nặng, quay video lâu.",
    "symptoms": [
      "Thân máy ấm hoặc nóng dù chỉ lướt web",
      "Máy giảm hiệu năng, giảm độ sáng khi nóng"
    ],
    "causes": [
      "Chơi game nặng, quay video lâu",
      "Ốp dày, ánh nắng trực tiếp",
      "Sóng yếu khiến máy tiêu hao nhiều",
      "Vừa cập nhật hoặc khôi phục dữ liệu nên máy đang xử lý nền"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Đóng ứng dụng nặng, tháo ốp, để máy nơi mát",
        "instructions": "Đóng ứng dụng nặng, tháo ốp, để máy nơi mát."
      },
      {
        "stepNumber": 2,
        "title": "Kiểm tra ứng dụng nào dùng pin và CPU nhiều",
        "instructions": "Kiểm tra ứng dụng nào dùng pin và CPU nhiều."
      },
      {
        "stepNumber": 3,
        "title": "Bật chế độ máy bay một lúc nếu nghi ngờ do sóng yếu",
        "instructions": "Bật chế độ máy bay một lúc nếu nghi ngờ do sóng yếu."
      },
      {
        "stepNumber": 4,
        "title": "Cập nhật hệ điều hành và ứng dụng",
        "instructions": "Cập nhật hệ điều hành và ứng dụng."
      }
    ],
    "warnings": [
      "Không cho máy vào tủ lạnh hoặc để gần nguồn lạnh để làm mát nhanh - dễ gây đọng hơi nước."
    ],
    "seeTechnicianIf": [
      "Máy nóng bất thường khi không dùng gì, kèm hao pin nhanh."
    ],
    "tags": [
      "PM-06",
      "nóng máy",
      "máy nóng",
      "quá nhiệt",
      "tỏa nhiệt"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 201
  },
  {
    "id": "PM-07",
    "code": "PM-07",
    "title": "Không cập nhật được hệ điều hành",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "system",
    "severity": "easy",
    "estimatedTime": "30 phút",
    "summary": "Dấu hiệu: Báo thiếu dung lượng. Nguyên nhân phổ biến: thiếu dung lượng trống.",
    "symptoms": [
      "Báo thiếu dung lượng",
      "Tải về bị đứng hoặc báo lỗi",
      "Không thấy bản cập nhật"
    ],
    "causes": [
      "Thiếu dung lượng trống",
      "Mạng yếu hoặc không ổn định",
      "Pin thấp",
      "Máy đã hết thời gian được hỗ trợ cập nhật"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Cắm sạc và kết nối Wi-Fi ổn định",
        "instructions": "Cắm sạc và kết nối Wi-Fi ổn định."
      },
      {
        "stepNumber": 2,
        "title": "Giải phóng dung lượng (xem PM-02)",
        "instructions": "Giải phóng dung lượng (xem PM-02)."
      },
      {
        "stepNumber": 3,
        "title": "Khởi động lại máy rồi thử lại",
        "instructions": "Khởi động lại máy rồi thử lại."
      },
      {
        "stepNumber": 4,
        "title": "Đặt lại cài đặt mạng nếu tải về bị lỗi",
        "instructions": "Đặt lại cài đặt mạng nếu tải về bị lỗi."
      },
      {
        "stepNumber": 5,
        "title": "iPhone",
        "instructions": "iPhone: có thể cập nhật qua máy tính. Kiểm tra máy còn được hãng hỗ trợ cập nhật không."
      }
    ],
    "warnings": [
      "Không tắt máy hoặc rút sạc giữa lúc đang cài cập nhật."
    ],
    "seeTechnicianIf": [
      "Cập nhật báo lỗi lặp lại dù đã đủ dung lượng và mạng tốt."
    ],
    "tags": [
      "PM-07",
      "cập nhật",
      "update lỗi",
      "không update được",
      "lỗi cập nhật"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 198
  },
  {
    "id": "PM-08",
    "code": "PM-08",
    "title": "Không tải được ứng dụng từ CH Play hoặc App Store",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "system",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Đứng ở trạng thái chờ tải. Nguyên nhân phổ biến: mạng yếu hoặc đang bật vpn.",
    "symptoms": [
      "Đứng ở trạng thái chờ tải",
      "Báo lỗi khi tải hoặc cập nhật",
      "Không tìm thấy ứng dụng"
    ],
    "causes": [
      "Mạng yếu hoặc đang bật VPN",
      "Ngày giờ máy không chính xác",
      "Thiếu dung lượng",
      "Lỗi tài khoản hoặc cache cửa hàng"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Kiểm tra mạng và tắt VPN",
        "instructions": "Kiểm tra mạng và tắt VPN."
      },
      {
        "stepNumber": 2,
        "title": "Đặt ngày giờ về chế độ tự động",
        "instructions": "Đặt ngày giờ về chế độ tự động."
      },
      {
        "stepNumber": 3,
        "title": "Kiểm tra dung lượng trống",
        "instructions": "Kiểm tra dung lượng trống."
      },
      {
        "stepNumber": 4,
        "title": "Đăng xuất và đăng nhập lại tài khoản cửa hàng ứng dụng",
        "instructions": "Đăng xuất và đăng nhập lại tài khoản cửa hàng ứng dụng."
      },
      {
        "stepNumber": 5,
        "title": "Android",
        "instructions": "Android: xóa cache và dữ liệu của CH Play."
      }
    ],
    "tags": [
      "PM-08",
      "CH Play",
      "App Store",
      "không tải được app",
      "lỗi tải ứng dụng"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 195
  },
  {
    "id": "PM-09",
    "code": "PM-09",
    "title": "Thông báo không hiện hoặc đến trễ",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "system",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Chỉ thấy tin nhắn khi mở ứng dụng. Nguyên nhân phổ biến: chưa cấp quyền thông báo.",
    "symptoms": [
      "Chỉ thấy tin nhắn khi mở ứng dụng",
      "Thông báo đến rất trễ"
    ],
    "causes": [
      "Chưa cấp quyền thông báo",
      "Đang bật Không làm phiền hoặc chế độ Tập trung",
      "Tối ưu pin chặn ứng dụng chạy nền",
      "Mạng yếu"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Kiểm tra quyền thông báo của từng ứng dụng",
        "instructions": "Kiểm tra quyền thông báo của từng ứng dụng."
      },
      {
        "stepNumber": 2,
        "title": "Tắt Không làm phiền hoặc chế độ Tập trung",
        "instructions": "Tắt Không làm phiền hoặc chế độ Tập trung."
      },
      {
        "stepNumber": 3,
        "title": "Android",
        "instructions": "Android: bỏ tối ưu hóa pin hoặc cho phép chạy nền với ứng dụng cần thiết."
      },
      {
        "stepNumber": 4,
        "title": "iPhone",
        "instructions": "iPhone: bật Làm mới ứng dụng trong nền."
      },
      {
        "stepNumber": 5,
        "title": "Kiểm tra kết nối mạng",
        "instructions": "Kiểm tra kết nối mạng."
      }
    ],
    "tags": [
      "PM-09",
      "thông báo",
      "notification",
      "không báo tin nhắn",
      "trễ thông báo"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 192
  },
  {
    "id": "PM-10",
    "code": "PM-10",
    "title": "Quảng cáo bật lên liên tục, nghi nhiễm mã độc",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "system",
    "severity": "medium",
    "estimatedTime": "30 phút",
    "summary": "Dấu hiệu: Quảng cáo bật lên ngoài ứng dụng. Nguyên nhân phổ biến: cài ứng dụng ngoài kho chính thức.",
    "symptoms": [
      "Quảng cáo bật lên ngoài ứng dụng",
      "Xuất hiện ứng dụng lạ không tự cài",
      "Trình duyệt tự chuyển trang"
    ],
    "causes": [
      "Cài ứng dụng ngoài kho chính thức",
      "Bấm vào đường dẫn hoặc quảng cáo độc hại",
      "Cho phép thông báo từ trang web lạ"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Android",
        "instructions": "Android: vào Chế độ an toàn, gỡ các ứng dụng lạ hoặc mới cài."
      },
      {
        "stepNumber": 2,
        "title": "Thu hồi quyền Hiển thị trên ứng dụng khác...",
        "instructions": "Thu hồi quyền Hiển thị trên ứng dụng khác và Quản trị thiết bị của ứng dụng lạ."
      },
      {
        "stepNumber": 3,
        "title": "Quét bằng Google Play Protect, xóa dữ liệu trình...",
        "instructions": "Quét bằng Google Play Protect, xóa dữ liệu trình duyệt và tắt thông báo trang web."
      },
      {
        "stepNumber": 4,
        "title": "iPhone",
        "instructions": "iPhone: Cài đặt > Safari > Chặn cửa sổ bật lên, xóa lịch sử và dữ liệu trang web."
      },
      {
        "stepNumber": 5,
        "title": "Đổi mật khẩu các tài khoản quan trọng nếu nghi ngờ bị lộ",
        "instructions": "Đổi mật khẩu các tài khoản quan trọng nếu nghi ngờ bị lộ."
      }
    ],
    "warnings": [
      "Không bấm vào đường dẫn lạ, không cài ứng dụng từ nguồn không chính thức."
    ],
    "seeTechnicianIf": [
      "Vẫn bị quảng cáo sau khi gỡ ứng dụng lạ - cân nhắc sao lưu rồi đặt lại cài đặt gốc."
    ],
    "tags": [
      "PM-10",
      "quảng cáo popup",
      "mã độc",
      "virus",
      "ứng dụng lạ",
      "adware"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 189
  },
  {
    "id": "KN-01",
    "code": "KN-01",
    "title": "Wi-Fi không kết nối hoặc sóng yếu",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "network",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Không thấy mạng Wi-Fi. Nguyên nhân phổ biến: router hoặc modem đang lỗi.",
    "symptoms": [
      "Không thấy mạng Wi-Fi",
      "Báo lỗi xác thực khi kết nối",
      "Wi-Fi chập chờn, hay rớt"
    ],
    "causes": [
      "Router hoặc modem đang lỗi",
      "Mật khẩu sai hoặc đổi",
      "Cài đặt mạng trên máy bị lỗi"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Bật tắt chế độ máy bay rồi kết nối lại",
        "instructions": "Bật tắt chế độ máy bay rồi kết nối lại."
      },
      {
        "stepNumber": 2,
        "title": "Quên mạng Wi-Fi rồi nhập lại mật khẩu",
        "instructions": "Quên mạng Wi-Fi rồi nhập lại mật khẩu."
      },
      {
        "stepNumber": 3,
        "title": "Khởi động lại router",
        "instructions": "Khởi động lại router."
      },
      {
        "stepNumber": 4,
        "title": "Thử kết nối thiết bị khác để xác định lỗi ở máy hay ở router",
        "instructions": "Thử kết nối thiết bị khác để xác định lỗi ở máy hay ở router."
      },
      {
        "stepNumber": 5,
        "title": "Đặt lại cài đặt mạng trên máy (sẽ xóa Wi-Fi đã lưu)",
        "instructions": "Đặt lại cài đặt mạng trên máy (sẽ xóa Wi-Fi đã lưu)."
      }
    ],
    "seeTechnicianIf": [
      "Chỉ riêng máy này không bắt được Wi-Fi, các thiết bị khác bình thường dù đã đặt lại cài đặt mạng."
    ],
    "tags": [
      "KN-01",
      "wifi",
      "không bắt được wifi",
      "wifi yếu",
      "mất wifi"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 186
  },
  {
    "id": "KN-02",
    "code": "KN-02",
    "title": "Có Wi-Fi nhưng không vào được Internet",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "network",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Biểu tượng Wi-Fi hiện nhưng web không tải. Nguyên nhân phổ biến: router mất kết nối ra ngoài hoặc nhà mạng lỗi.",
    "symptoms": [
      "Biểu tượng Wi-Fi hiện nhưng web không tải",
      "Báo kết nối không có Internet"
    ],
    "causes": [
      "Router mất kết nối ra ngoài hoặc nhà mạng lỗi",
      "DNS có vấn đề",
      "Đang bật VPN hoặc proxy"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Thử thiết bị khác cùng Wi-Fi để biết lỗi ở router hay ở máy",
        "instructions": "Thử thiết bị khác cùng Wi-Fi để biết lỗi ở router hay ở máy."
      },
      {
        "stepNumber": 2,
        "title": "Tắt VPN",
        "instructions": "Tắt VPN."
      },
      {
        "stepNumber": 3,
        "title": "Khởi động lại router và máy",
        "instructions": "Khởi động lại router và máy."
      },
      {
        "stepNumber": 4,
        "title": "Thử đổi DNS (ví dụ 8",
        "instructions": "Thử đổi DNS (ví dụ 8.8.8.8 hoặc 1.1.1.1) trong cài đặt Wi-Fi."
      },
      {
        "stepNumber": 5,
        "title": "Đặt lại cài đặt mạng",
        "instructions": "Đặt lại cài đặt mạng."
      }
    ],
    "seeTechnicianIf": [
      "Các thiết bị khác ổn định, riêng máy này vẫn lỗi sau mọi bước."
    ],
    "tags": [
      "KN-02",
      "wifi không internet",
      "có wifi không vào mạng",
      "đổi DNS",
      "kết nối không có internet"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 183
  },
  {
    "id": "KN-03",
    "code": "KN-03",
    "title": "Bluetooth không ghép nối hoặc ngắt liên tục",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "network",
    "severity": "easy",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Không thấy thiết bị khi quét. Nguyên nhân phổ biến: thiết bị đang kết nối với máy khác.",
    "symptoms": [
      "Không thấy thiết bị khi quét",
      "Kết nối được rồi tự ngắt",
      "Âm thanh bị giật qua Bluetooth"
    ],
    "causes": [
      "Thiết bị đang kết nối với máy khác",
      "Khoảng cách xa hoặc nhiễu sóng",
      "Dữ liệu ghép nối cũ bị lỗi"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Tắt rồi bật lại Bluetooth ở cả hai thiết bị",
        "instructions": "Tắt rồi bật lại Bluetooth ở cả hai thiết bị."
      },
      {
        "stepNumber": 2,
        "title": "Xóa thiết bị khỏi danh sách đã ghép rồi ghép lại",
        "instructions": "Xóa thiết bị khỏi danh sách đã ghép rồi ghép lại."
      },
      {
        "stepNumber": 3,
        "title": "Đưa hai thiết bị lại gần nhau, tắt các...",
        "instructions": "Đưa hai thiết bị lại gần nhau, tắt các thiết bị Bluetooth khác đang kết nối."
      },
      {
        "stepNumber": 4,
        "title": "Sạc đầy tai nghe hoặc loa",
        "instructions": "Sạc đầy tai nghe hoặc loa."
      },
      {
        "stepNumber": 5,
        "title": "Đặt lại cài đặt mạng nếu vẫn lỗi",
        "instructions": "Đặt lại cài đặt mạng nếu vẫn lỗi."
      }
    ],
    "seeTechnicianIf": [
      "Bluetooth không bật được hoặc không thấy bất kỳ thiết bị nào."
    ],
    "tags": [
      "KN-03",
      "bluetooth",
      "tai nghe bluetooth",
      "ghép nối",
      "ngắt kết nối"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 180
  },
  {
    "id": "KN-04",
    "code": "KN-04",
    "title": "Mất sóng hoặc báo Không có dịch vụ",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "network",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Thanh sóng trống hoặc báo Không có dịch vụ. Nguyên nhân phổ biến: khu vực sóng yếu.",
    "symptoms": [
      "Thanh sóng trống hoặc báo Không có dịch vụ",
      "Không gọi được, không dùng được dữ liệu di động"
    ],
    "causes": [
      "Khu vực sóng yếu",
      "SIM hoặc chế độ mạng bị lỗi",
      "Đang bật chế độ máy bay"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Kiểm tra chế độ máy bay đã tắt chưa",
        "instructions": "Kiểm tra chế độ máy bay đã tắt chưa."
      },
      {
        "stepNumber": 2,
        "title": "Bật tắt chế độ máy bay hoặc khởi động lại máy",
        "instructions": "Bật tắt chế độ máy bay hoặc khởi động lại máy."
      },
      {
        "stepNumber": 3,
        "title": "Chọn lại nhà mạng ở chế độ tự động",
        "instructions": "Chọn lại nhà mạng ở chế độ tự động."
      },
      {
        "stepNumber": 4,
        "title": "Tháo và lắp lại SIM (xem KN-05)",
        "instructions": "Tháo và lắp lại SIM (xem KN-05)."
      },
      {
        "stepNumber": 5,
        "title": "Thử SIM trên máy khác để xác định lỗi",
        "instructions": "Thử SIM trên máy khác để xác định lỗi."
      }
    ],
    "seeTechnicianIf": [
      "SIM chạy tốt trên máy khác nhưng máy này vẫn mất sóng ở nhiều khu vực."
    ],
    "tags": [
      "KN-04",
      "mất sóng",
      "không có dịch vụ",
      "no service",
      "không bắt sóng"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 177
  },
  {
    "id": "KN-05",
    "code": "KN-05",
    "title": "Máy không nhận SIM",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "network",
    "severity": "medium",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Báo Không có SIM hoặc SIM không hợp lệ. Nguyên nhân phổ biến: sim lắp lệch hoặc khay không khớp.",
    "symptoms": [
      "Báo Không có SIM hoặc SIM không hợp lệ",
      "Mất sóng sau khi lắp SIM"
    ],
    "causes": [
      "SIM lắp lệch hoặc khay không khớp",
      "Chân SIM bẩn hoặc oxy hóa",
      "SIM hỏng hoặc chưa kích hoạt"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Tắt máy",
        "instructions": "Tắt máy."
      },
      {
        "stepNumber": 2,
        "title": "Dùng que lấy SIM mở khay, lấy SIM ra",
        "instructions": "Dùng que lấy SIM mở khay, lấy SIM ra."
      },
      {
        "stepNumber": 3,
        "title": "Lau nhẹ phần chân vàng của SIM bằng vải khô mềm",
        "instructions": "Lau nhẹ phần chân vàng của SIM bằng vải khô mềm."
      },
      {
        "stepNumber": 4,
        "title": "Lắp lại SIM đúng chiều, đẩy khay vào hết",
        "instructions": "Lắp lại SIM đúng chiều, đẩy khay vào hết."
      },
      {
        "stepNumber": 5,
        "title": "Thử SIM trên máy khác hoặc thử SIM khác trên máy này",
        "instructions": "Thử SIM trên máy khác hoặc thử SIM khác trên máy này."
      }
    ],
    "requiredTools": [
      "Que lấy SIM",
      "Vải khô mềm"
    ],
    "warnings": [
      "Không dùng lực mạnh khi mở hoặc đóng khay SIM."
    ],
    "seeTechnicianIf": [
      "SIM ổn trên máy khác nhưng máy này không nhận SIM nào - nghi hỏng đầu đọc SIM."
    ],
    "tags": [
      "KN-05",
      "không nhận sim",
      "no sim",
      "chưa lắp sim",
      "sim lỗi"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 174
  },
  {
    "id": "KN-06",
    "code": "KN-06",
    "title": "Mạng di động (4G/5G) chậm hoặc hay rớt",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "network",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Tải web hoặc video chậm. Nguyên nhân phổ biến: sóng yếu trong khu vực.",
    "symptoms": [
      "Tải web hoặc video chậm",
      "Mạng tụt từ 4G xuống 3G",
      "Dữ liệu di động không hoạt động"
    ],
    "causes": [
      "Sóng yếu trong khu vực",
      "Chưa bật dữ liệu di động hoặc hết gói cước",
      "Cấu hình APN hoặc cài đặt mạng lỗi"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Kiểm tra dữ liệu di động đã bật và còn gói cước",
        "instructions": "Kiểm tra dữ liệu di động đã bật và còn gói cước."
      },
      {
        "stepNumber": 2,
        "title": "Bật tắt chế độ máy bay",
        "instructions": "Bật tắt chế độ máy bay."
      },
      {
        "stepNumber": 3,
        "title": "Chọn chế độ mạng tự động (4G/5G)",
        "instructions": "Chọn chế độ mạng tự động (4G/5G)."
      },
      {
        "stepNumber": 4,
        "title": "Thử di chuyển sang vị trí khác hoặc ra gần cửa sổ",
        "instructions": "Thử di chuyển sang vị trí khác hoặc ra gần cửa sổ."
      },
      {
        "stepNumber": 5,
        "title": "Đặt lại cài đặt mạng hoặc liên hệ nhà mạng kiểm tra cấu hình",
        "instructions": "Đặt lại cài đặt mạng hoặc liên hệ nhà mạng kiểm tra cấu hình."
      }
    ],
    "tags": [
      "KN-06",
      "4G chậm",
      "5G",
      "dữ liệu di động",
      "mạng chậm",
      "3G"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 171
  },
  {
    "id": "KN-07",
    "code": "KN-07",
    "title": "Không nhận hoặc không gửi được SMS, OTP",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "network",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Không nhận mã OTP. Nguyên nhân phổ biến: sóng yếu.",
    "symptoms": [
      "Không nhận mã OTP",
      "Tin nhắn gửi đi báo lỗi hoặc chờ mãi"
    ],
    "causes": [
      "Sóng yếu",
      "Bộ nhớ tin nhắn đầy hoặc số tổng đài tin nhắn sai",
      "Ứng dụng tin nhắn mặc định bị lỗi",
      "Số điện thoại bị chặn dịch vụ"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Kiểm tra sóng và bật tắt chế độ máy bay",
        "instructions": "Kiểm tra sóng và bật tắt chế độ máy bay."
      },
      {
        "stepNumber": 2,
        "title": "Khởi động lại máy",
        "instructions": "Khởi động lại máy."
      },
      {
        "stepNumber": 3,
        "title": "Xóa bớt tin nhắn cũ, xóa cache ứng dụng Tin nhắn (Android)",
        "instructions": "Xóa bớt tin nhắn cũ, xóa cache ứng dụng Tin nhắn (Android)."
      },
      {
        "stepNumber": 4,
        "title": "Kiểm tra tin nhắn rác hoặc danh sách chặn",
        "instructions": "Kiểm tra tin nhắn rác hoặc danh sách chặn."
      },
      {
        "stepNumber": 5,
        "title": "Liên hệ nhà mạng nếu vẫn không nhận được",
        "instructions": "Liên hệ nhà mạng nếu vẫn không nhận được."
      }
    ],
    "warnings": [
      "Không chia sẻ mã OTP cho bất kỳ ai."
    ],
    "tags": [
      "KN-07",
      "tin nhắn",
      "SMS",
      "OTP",
      "không nhận mã",
      "không gửi tin nhắn"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 168
  },
  {
    "id": "KN-08",
    "code": "KN-08",
    "title": "Phát Wi-Fi (hotspot) không hoạt động",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "network",
    "severity": "easy",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Thiết bị khác không thấy hoặc không kết nối được. Nguyên nhân phổ biến: chưa bật dữ liệu di động hoặc chưa đăng ký gói hỗ trợ chia sẻ.",
    "symptoms": [
      "Thiết bị khác không thấy hoặc không kết nối được",
      "Kết nối được nhưng không có mạng"
    ],
    "causes": [
      "Chưa bật dữ liệu di động hoặc chưa đăng ký gói hỗ trợ chia sẻ",
      "Chế độ tiết kiệm pin tự tắt hotspot",
      "Sai mật khẩu hoặc băng tần không tương thích"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Bật dữ liệu di động và kiểm tra gói cước có cho phép chia sẻ",
        "instructions": "Bật dữ liệu di động và kiểm tra gói cước có cho phép chia sẻ."
      },
      {
        "stepNumber": 2,
        "title": "Tắt chế độ tiết kiệm pin",
        "instructions": "Tắt chế độ tiết kiệm pin."
      },
      {
        "stepNumber": 3,
        "title": "Tắt rồi bật lại hotspot, thử đổi băng tần 2",
        "instructions": "Tắt rồi bật lại hotspot, thử đổi băng tần 2.4GHz."
      },
      {
        "stepNumber": 4,
        "title": "Thử đổi tên và mật khẩu hotspot",
        "instructions": "Thử đổi tên và mật khẩu hotspot."
      },
      {
        "stepNumber": 5,
        "title": "Khởi động lại cả hai thiết bị",
        "instructions": "Khởi động lại cả hai thiết bị."
      }
    ],
    "tags": [
      "KN-08",
      "hotspot",
      "phát wifi",
      "chia sẻ mạng",
      "tethering"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 165
  },
  {
    "id": "KN-09",
    "code": "KN-09",
    "title": "GPS định vị sai hoặc không bắt được",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "network",
    "severity": "easy",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Vị trí trên bản đồ lệch hoặc nhảy. Nguyên nhân phổ biến: dịch vụ vị trí tắt hoặc ở chế độ tiết kiệm.",
    "symptoms": [
      "Vị trí trên bản đồ lệch hoặc nhảy",
      "Mất nhiều thời gian mới xác định được vị trí"
    ],
    "causes": [
      "Dịch vụ vị trí tắt hoặc ở chế độ tiết kiệm",
      "Đang ở trong nhà, tòa nhà che sóng",
      "Ứng dụng bản đồ lỗi hoặc la bàn chưa hiệu chuẩn"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Bật Vị trí và chọn chế độ độ chính xác cao",
        "instructions": "Bật Vị trí và chọn chế độ độ chính xác cao."
      },
      {
        "stepNumber": 2,
        "title": "Ra nơi thoáng, chờ vài phút",
        "instructions": "Ra nơi thoáng, chờ vài phút."
      },
      {
        "stepNumber": 3,
        "title": "Hiệu chuẩn la bàn bằng cách vẽ hình số...",
        "instructions": "Hiệu chuẩn la bàn bằng cách vẽ hình số 8 với máy (trong ứng dụng bản đồ)."
      },
      {
        "stepNumber": 4,
        "title": "Tháo ốp có kim loại hoặc nam châm, cập nhật ứng dụng bản đồ",
        "instructions": "Tháo ốp có kim loại hoặc nam châm, cập nhật ứng dụng bản đồ."
      },
      {
        "stepNumber": 5,
        "title": "Khởi động lại máy",
        "instructions": "Khởi động lại máy."
      }
    ],
    "seeTechnicianIf": [
      "Ngoài trời thoáng đãng vẫn không bắt được vị trí sau mọi bước."
    ],
    "tags": [
      "KN-09",
      "GPS",
      "định vị",
      "bản đồ sai",
      "không bắt được vị trí"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 162
  },
  {
    "id": "KN-10",
    "code": "KN-10",
    "title": "NFC, thanh toán chạm không hoạt động",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "network",
    "severity": "easy",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Chạm vào máy POS hoặc thẻ không nhận. Nguyên nhân phổ biến: nfc chưa bật.",
    "symptoms": [
      "Chạm vào máy POS hoặc thẻ không nhận",
      "Không thấy tùy chọn NFC"
    ],
    "causes": [
      "NFC chưa bật",
      "Chạm sai vị trí ăng-ten NFC trên máy",
      "Ốp dày hoặc có miếng kim loại, thẻ phía sau",
      "Ứng dụng thanh toán chưa đặt làm mặc định"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Bật NFC trong Cài đặt kết nối (Android)",
        "instructions": "Bật NFC trong Cài đặt kết nối (Android)."
      },
      {
        "stepNumber": 2,
        "title": "Đặt phần ăng-ten NFC (thường ở phía sau, gần...",
        "instructions": "Đặt phần ăng-ten NFC (thường ở phía sau, gần camera hoặc giữa lưng máy) sát đầu đọc, giữ yên 1-2 giây."
      },
      {
        "stepNumber": 3,
        "title": "Tháo ốp, bỏ thẻ và vật kim loại phía sau máy",
        "instructions": "Tháo ốp, bỏ thẻ và vật kim loại phía sau máy."
      },
      {
        "stepNumber": 4,
        "title": "Đặt ứng dụng thanh toán mặc định và kiểm tra thẻ đã được thêm đúng",
        "instructions": "Đặt ứng dụng thanh toán mặc định và kiểm tra thẻ đã được thêm đúng."
      }
    ],
    "seeTechnicianIf": [
      "Không có tùy chọn NFC dù máy có hỗ trợ NFC, hoặc NFC không bao giờ nhận."
    ],
    "tags": [
      "KN-10",
      "NFC",
      "thanh toán chạm",
      "quẹt thẻ",
      "ví điện tử"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 159
  },
  {
    "id": "AT-01",
    "code": "AT-01",
    "title": "Loa ngoài nhỏ, rè hoặc không có tiếng",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "hardware",
    "severity": "medium",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Âm thanh nhỏ hoặc rè dù đã tăng âm lượng. Nguyên nhân phổ biến: bụi bẩn bám lưới loa.",
    "symptoms": [
      "Âm thanh nhỏ hoặc rè dù đã tăng âm lượng",
      "Không nghe được nhạc, video, chuông"
    ],
    "causes": [
      "Bụi bẩn bám lưới loa",
      "Đang bật chế độ im lặng hoặc kết nối Bluetooth",
      "Âm lượng phương tiện bị hạ thấp"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Tăng âm lượng phương tiện, kiểm tra chế độ im lặng",
        "instructions": "Tăng âm lượng phương tiện, kiểm tra chế độ im lặng."
      },
      {
        "stepNumber": 2,
        "title": "Tắt Bluetooth để chắc chắn âm thanh không đi sang thiết bị khác",
        "instructions": "Tắt Bluetooth để chắc chắn âm thanh không đi sang thiết bị khác."
      },
      {
        "stepNumber": 3,
        "title": "Khởi động lại máy",
        "instructions": "Khởi động lại máy."
      },
      {
        "stepNumber": 4,
        "title": "Dùng bàn chải mềm khô quét nhẹ lưới loa",
        "instructions": "Dùng bàn chải mềm khô quét nhẹ lưới loa."
      }
    ],
    "requiredTools": [
      "Bàn chải lông mềm khô"
    ],
    "warnings": [
      "Không dùng vật nhọn chọc vào lưới loa, không dùng khí nén."
    ],
    "seeTechnicianIf": [
      "Loa vẫn rè hoặc im lặng sau khi vệ sinh - nghi hỏng loa."
    ],
    "tags": [
      "AT-01",
      "loa nhỏ",
      "loa rè",
      "mất tiếng",
      "loa ngoài"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 156
  },
  {
    "id": "AT-02",
    "code": "AT-02",
    "title": "Loa thoại (nghe cuộc gọi) nhỏ hoặc không nghe được",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "hardware",
    "severity": "medium",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Áp tai không nghe rõ người gọi. Nguyên nhân phổ biến: bụi hoặc dầu bám lưới loa thoại phía trên màn hình.",
    "symptoms": [
      "Áp tai không nghe rõ người gọi",
      "Chỉ nghe được khi bật loa ngoài"
    ],
    "causes": [
      "Bụi hoặc dầu bám lưới loa thoại phía trên màn hình",
      "Miếng dán che lỗ loa",
      "Ốp hoặc phụ kiện che loa"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Tăng âm lượng cuộc gọi trong lúc đang gọi",
        "instructions": "Tăng âm lượng cuộc gọi trong lúc đang gọi."
      },
      {
        "stepNumber": 2,
        "title": "Kiểm tra miếng dán và ốp có che lỗ loa thoại không",
        "instructions": "Kiểm tra miếng dán và ốp có che lỗ loa thoại không."
      },
      {
        "stepNumber": 3,
        "title": "Vệ sinh lưới loa thoại bằng bàn chải mềm khô",
        "instructions": "Vệ sinh lưới loa thoại bằng bàn chải mềm khô."
      },
      {
        "stepNumber": 4,
        "title": "Khởi động lại máy và thử gọi lại",
        "instructions": "Khởi động lại máy và thử gọi lại."
      }
    ],
    "requiredTools": [
      "Bàn chải lông mềm khô"
    ],
    "warnings": [
      "Không chọc vật nhọn vào lỗ loa."
    ],
    "seeTechnicianIf": [
      "Vẫn không nghe được dù đã vệ sinh, trong khi loa ngoài vẫn bình thường."
    ],
    "tags": [
      "AT-02",
      "loa trong",
      "nghe gọi nhỏ",
      "loa thoại",
      "không nghe được cuộc gọi"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 153
  },
  {
    "id": "AT-03",
    "code": "AT-03",
    "title": "Người khác không nghe thấy mình (lỗi mic)",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "hardware",
    "severity": "easy",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Người gọi báo không nghe hoặc nghe rất nhỏ. Nguyên nhân phổ biến: lỗ mic bị bụi che hoặc bị ốp che.",
    "symptoms": [
      "Người gọi báo không nghe hoặc nghe rất nhỏ",
      "Ghi âm hoặc quay video không có tiếng"
    ],
    "causes": [
      "Lỗ mic bị bụi che hoặc bị ốp che",
      "Ứng dụng chưa được cấp quyền micro",
      "Đang kết nối tai nghe Bluetooth"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Kiểm tra quyền micro của ứng dụng đang gọi hoặc ghi âm",
        "instructions": "Kiểm tra quyền micro của ứng dụng đang gọi hoặc ghi âm."
      },
      {
        "stepNumber": 2,
        "title": "Tắt Bluetooth để chắc chắn mic của máy được sử dụng",
        "instructions": "Tắt Bluetooth để chắc chắn mic của máy được sử dụng."
      },
      {
        "stepNumber": 3,
        "title": "Tháo ốp, vệ sinh lỗ mic bằng bàn chải mềm khô",
        "instructions": "Tháo ốp, vệ sinh lỗ mic bằng bàn chải mềm khô."
      },
      {
        "stepNumber": 4,
        "title": "Thử ghi âm bằng ứng dụng mặc định để...",
        "instructions": "Thử ghi âm bằng ứng dụng mặc định để kiểm tra từng mic (mic dưới, mic gần camera)."
      }
    ],
    "requiredTools": [
      "Bàn chải lông mềm khô"
    ],
    "seeTechnicianIf": [
      "Cả mic dưới và mic gần camera đều không thu được âm thanh."
    ],
    "tags": [
      "AT-03",
      "mic",
      "micro",
      "không nghe tiếng mình",
      "mic lỗi"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 150
  },
  {
    "id": "AT-04",
    "code": "AT-04",
    "title": "Tai nghe có dây không nhận hoặc chỉ nghe một bên",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "hardware",
    "severity": "medium",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Máy không nhận tai nghe, âm thanh vẫn ra loa ngoài. Nguyên nhân phổ biến: tai nghe hoặc jack cắm hỏng.",
    "symptoms": [
      "Máy không nhận tai nghe, âm thanh vẫn ra loa ngoài",
      "Chỉ nghe được một bên tai"
    ],
    "causes": [
      "Tai nghe hoặc jack cắm hỏng",
      "Cổng cắm bám bụi",
      "Cân bằng âm thanh trái phải bị chỉnh lệch"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Thử tai nghe trên thiết bị khác để loại trừ lỗi tai nghe",
        "instructions": "Thử tai nghe trên thiết bị khác để loại trừ lỗi tai nghe."
      },
      {
        "stepNumber": 2,
        "title": "Kiểm tra cài đặt cân bằng âm thanh trái/phải trong Trợ năng",
        "instructions": "Kiểm tra cài đặt cân bằng âm thanh trái/phải trong Trợ năng."
      },
      {
        "stepNumber": 3,
        "title": "Tắt nguồn và vệ sinh cổng cắm nhẹ nhàng",
        "instructions": "Tắt nguồn và vệ sinh cổng cắm nhẹ nhàng."
      },
      {
        "stepNumber": 4,
        "title": "Khởi động lại máy rồi cắm lại tai nghe",
        "instructions": "Khởi động lại máy rồi cắm lại tai nghe."
      }
    ],
    "requiredTools": [
      "Tai nghe khác để thử",
      "Tăm nhựa hoặc bàn chải mềm"
    ],
    "warnings": [
      "Không dùng vật kim loại chọc vào cổng tai nghe."
    ],
    "seeTechnicianIf": [
      "Nhiều tai nghe khác nhau đều không nhận trên máy này."
    ],
    "tags": [
      "AT-04",
      "tai nghe có dây",
      "tai nghe một bên",
      "jack tai nghe",
      "tai nghe không nhận"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 147
  },
  {
    "id": "AT-05",
    "code": "AT-05",
    "title": "Không có tiếng khi xem video hoặc nghe nhạc",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "hardware",
    "severity": "easy",
    "estimatedTime": "5 phút",
    "summary": "Dấu hiệu: Video có hình nhưng không có tiếng. Nguyên nhân phổ biến: âm lượng phương tiện bị hạ về 0.",
    "symptoms": [
      "Video có hình nhưng không có tiếng",
      "Chuông gọi vẫn kêu nhưng nhạc thì im"
    ],
    "causes": [
      "Âm lượng phương tiện bị hạ về 0",
      "Đang bật chế độ im lặng hoặc Không làm phiền",
      "Âm thanh đang phát ra thiết bị Bluetooth khác",
      "Ứng dụng bị tắt tiếng riêng"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Tăng âm lượng phương tiện (không chỉ âm lượng chuông)",
        "instructions": "Tăng âm lượng phương tiện (không chỉ âm lượng chuông)."
      },
      {
        "stepNumber": 2,
        "title": "Tắt chế độ im lặng",
        "instructions": "Tắt chế độ im lặng."
      },
      {
        "stepNumber": 3,
        "title": "Tắt Bluetooth hoặc ngắt thiết bị Bluetooth đang kết nối",
        "instructions": "Tắt Bluetooth hoặc ngắt thiết bị Bluetooth đang kết nối."
      },
      {
        "stepNumber": 4,
        "title": "Kiểm tra tiếng trong chính ứng dụng (nút loa trên video)",
        "instructions": "Kiểm tra tiếng trong chính ứng dụng (nút loa trên video)."
      },
      {
        "stepNumber": 5,
        "title": "Khởi động lại máy",
        "instructions": "Khởi động lại máy."
      }
    ],
    "seeTechnicianIf": [
      "Không có tiếng ở mọi ứng dụng và mọi chế độ sau khi khởi động lại."
    ],
    "tags": [
      "AT-05",
      "mất tiếng",
      "không có tiếng",
      "video không tiếng",
      "âm lượng phương tiện"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 144
  },
  {
    "id": "AT-06",
    "code": "AT-06",
    "title": "Camera chụp mờ, không lấy nét",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "hardware",
    "severity": "easy",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Ảnh mờ hoặc có quầng sáng. Nguyên nhân phổ biến: ống kính bám dấu vân tay hoặc bụi.",
    "symptoms": [
      "Ảnh mờ hoặc có quầng sáng",
      "Lấy nét chậm hoặc không lấy nét được"
    ],
    "causes": [
      "Ống kính bám dấu vân tay hoặc bụi",
      "Ốp hoặc miếng dán che một phần ống kính",
      "Kính camera bị xước hoặc đọng hơi nước"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lau ống kính bằng khăn microfiber khô",
        "instructions": "Lau ống kính bằng khăn microfiber khô."
      },
      {
        "stepNumber": 2,
        "title": "Tháo ốp và kiểm tra có che ống kính không",
        "instructions": "Tháo ốp và kiểm tra có che ống kính không."
      },
      {
        "stepNumber": 3,
        "title": "Nếu đọng hơi nước, để máy nơi khô thoáng một lúc",
        "instructions": "Nếu đọng hơi nước, để máy nơi khô thoáng một lúc."
      },
      {
        "stepNumber": 4,
        "title": "Thử các chế độ chụp khác nhau và khởi động lại ứng dụng camera",
        "instructions": "Thử các chế độ chụp khác nhau và khởi động lại ứng dụng camera."
      }
    ],
    "requiredTools": [
      "Khăn microfiber"
    ],
    "warnings": [
      "Không dùng giấy thô hoặc vật cứng lau ống kính."
    ],
    "seeTechnicianIf": [
      "Ảnh vẫn mờ sau khi lau sạch - nghi kính camera trầy hoặc hỏng mô-đun camera."
    ],
    "tags": [
      "AT-06",
      "camera mờ",
      "chụp mờ",
      "không lấy nét",
      "ống kính bẩn"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 141
  },
  {
    "id": "AT-07",
    "code": "AT-07",
    "title": "Camera đen màn hình hoặc báo không mở được camera",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "hardware",
    "severity": "easy",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Mở camera chỉ thấy màn hình đen. Nguyên nhân phổ biến: ứng dụng camera bị treo hoặc lỗi cache.",
    "symptoms": [
      "Mở camera chỉ thấy màn hình đen",
      "Báo lỗi Không thể kết nối camera"
    ],
    "causes": [
      "Ứng dụng camera bị treo hoặc lỗi cache",
      "Ứng dụng khác đang dùng camera",
      "Lỗi phần mềm sau cập nhật"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Đóng hẳn ứng dụng camera và mở lại",
        "instructions": "Đóng hẳn ứng dụng camera và mở lại."
      },
      {
        "stepNumber": 2,
        "title": "Đóng các ứng dụng khác có thể đang dùng camera",
        "instructions": "Đóng các ứng dụng khác có thể đang dùng camera."
      },
      {
        "stepNumber": 3,
        "title": "Android",
        "instructions": "Android: xóa cache của ứng dụng camera."
      },
      {
        "stepNumber": 4,
        "title": "Khởi động lại máy và cập nhật hệ điều hành",
        "instructions": "Khởi động lại máy và cập nhật hệ điều hành."
      }
    ],
    "seeTechnicianIf": [
      "Mọi ứng dụng đều không dùng được camera sau khi khởi động lại - nghi hỏng mô-đun camera."
    ],
    "tags": [
      "AT-07",
      "camera lỗi",
      "camera đen",
      "không mở được camera",
      "lỗi camera"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 138
  },
  {
    "id": "AT-08",
    "code": "AT-08",
    "title": "Đèn flash không sáng",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "hardware",
    "severity": "easy",
    "estimatedTime": "5 phút",
    "summary": "Dấu hiệu: Bật đèn pin không sáng. Nguyên nhân phổ biến: pin thấp hoặc đang bật tiết kiệm pin.",
    "symptoms": [
      "Bật đèn pin không sáng",
      "Chụp ảnh không có đèn flash"
    ],
    "causes": [
      "Pin thấp hoặc đang bật tiết kiệm pin",
      "Máy quá nóng",
      "Ứng dụng camera đang chiếm đèn",
      "Lỗi phần mềm"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Sạc pin và tắt chế độ tiết kiệm pin",
        "instructions": "Sạc pin và tắt chế độ tiết kiệm pin."
      },
      {
        "stepNumber": 2,
        "title": "Để máy nguội nếu đang nóng",
        "instructions": "Để máy nguội nếu đang nóng."
      },
      {
        "stepNumber": 3,
        "title": "Đóng ứng dụng camera rồi bật lại đèn pin",
        "instructions": "Đóng ứng dụng camera rồi bật lại đèn pin."
      },
      {
        "stepNumber": 4,
        "title": "Khởi động lại máy",
        "instructions": "Khởi động lại máy."
      }
    ],
    "seeTechnicianIf": [
      "Đèn không sáng sau khi pin ổn định và máy nguội - nghi hỏng đèn LED."
    ],
    "tags": [
      "AT-08",
      "đèn flash",
      "đèn pin",
      "flash không sáng",
      "đèn LED"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 135
  },
  {
    "id": "CUNG-01",
    "code": "CUNG-01",
    "title": "Nút nguồn hoặc nút âm lượng bấm kẹt, không ăn",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "hardware",
    "severity": "medium",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Nút cứng, không nảy lại. Nguyên nhân phổ biến: bụi bẩn tích tụ quanh nút.",
    "symptoms": [
      "Nút cứng, không nảy lại",
      "Bấm nhiều lần mới nhận"
    ],
    "causes": [
      "Bụi bẩn tích tụ quanh nút",
      "Ốp lưng ép vào nút",
      "Lỗi phần mềm tạm thời"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Tháo ốp lưng và thử lại",
        "instructions": "Tháo ốp lưng và thử lại."
      },
      {
        "stepNumber": 2,
        "title": "Quét sạch bụi quanh viền nút bằng bàn chải mềm",
        "instructions": "Quét sạch bụi quanh viền nút bằng bàn chải mềm."
      },
      {
        "stepNumber": 3,
        "title": "Dùng tăm bông hơi ẩm cồn isopropyl lau quanh...",
        "instructions": "Dùng tăm bông hơi ẩm cồn isopropyl lau quanh viền nút, không để cồn chảy vào bên trong."
      },
      {
        "stepNumber": 4,
        "title": "Trong lúc chờ sửa, dùng nút ảo thay thế...",
        "instructions": "Trong lúc chờ sửa, dùng nút ảo thay thế (Trợ năng Android hoặc AssistiveTouch trên iPhone)."
      }
    ],
    "requiredTools": [
      "Tăm bông",
      "Cồn isopropyl 70% (lượng rất ít)",
      "Bàn chải mềm"
    ],
    "warnings": [
      "Không cạy, không dùng lực mạnh ấn nút liên tục."
    ],
    "seeTechnicianIf": [
      "Nút vẫn kẹt hoặc không ăn sau khi vệ sinh."
    ],
    "tags": [
      "CUNG-01",
      "nút nguồn",
      "nút âm lượng",
      "nút kẹt",
      "nút liệt",
      "bấm không ăn"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 132
  },
  {
    "id": "CUNG-02",
    "code": "CUNG-02",
    "title": "Khay SIM bị kẹt, không mở được",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "hardware",
    "severity": "medium",
    "estimatedTime": "10 phút",
    "summary": "Dấu hiệu: Chọc que vào lỗ nhỏ nhưng khay không bật ra. Nguyên nhân phổ biến: chọc không đúng vị trí hoặc không vuông góc.",
    "symptoms": [
      "Chọc que vào lỗ nhỏ nhưng khay không bật ra",
      "Khay ra một nửa rồi kẹt"
    ],
    "causes": [
      "Chọc không đúng vị trí hoặc không vuông góc",
      "Khay bị cong hoặc dính bụi",
      "Khay bị gỉ hoặc bị ẩm"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Tắt máy",
        "instructions": "Tắt máy."
      },
      {
        "stepNumber": 2,
        "title": "Chọc que vuông góc vào lỗ nhỏ cạnh khay, đẩy dứt khoát nhưng vừa lực",
        "instructions": "Chọc que vuông góc vào lỗ nhỏ cạnh khay, đẩy dứt khoát nhưng vừa lực."
      },
      {
        "stepNumber": 3,
        "title": "Dùng móng tay hoặc nhíp nhựa kéo nhẹ khay ra thẳng",
        "instructions": "Dùng móng tay hoặc nhíp nhựa kéo nhẹ khay ra thẳng."
      },
      {
        "stepNumber": 4,
        "title": "Kiểm tra khay và SIM có bị cong không, lắp lại đúng hướng",
        "instructions": "Kiểm tra khay và SIM có bị cong không, lắp lại đúng hướng."
      }
    ],
    "requiredTools": [
      "Que lấy SIM chính hãng hoặc kẹp giấy thẳng"
    ],
    "warnings": [
      "Không cạy hay dùng lực mạnh làm cong khay hoặc kẹt đầu đọc SIM."
    ],
    "seeTechnicianIf": [
      "Khay kẹt cứng hoặc bị cong, không lấy ra được bằng lực nhẹ."
    ],
    "tags": [
      "CUNG-02",
      "khay SIM",
      "kẹt SIM",
      "không mở được khay SIM",
      "que lấy SIM"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 129
  },
  {
    "id": "CUNG-03",
    "code": "CUNG-03",
    "title": "Vân tay hoặc Face ID không nhận, nhận chậm",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "security",
    "severity": "easy",
    "estimatedTime": "15 phút",
    "summary": "Dấu hiệu: Quét vân tay nhiều lần mới mở được. Nguyên nhân phổ biến: ngón tay hoặc cảm biến bẩn, ướt.",
    "symptoms": [
      "Quét vân tay nhiều lần mới mở được",
      "Face ID báo không nhận ra khuôn mặt"
    ],
    "causes": [
      "Ngón tay hoặc cảm biến bẩn, ướt",
      "Miếng dán không tương thích với cảm biến vân tay trong màn hình",
      "Dữ liệu vân tay hoặc khuôn mặt đăng ký chưa đủ"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lau sạch cảm biến và ngón tay",
        "instructions": "Lau sạch cảm biến và ngón tay."
      },
      {
        "stepNumber": 2,
        "title": "Tháo miếng dán nếu nghi che hoặc không tương...",
        "instructions": "Tháo miếng dán nếu nghi che hoặc không tương thích với cảm biến vân tay trong màn hình."
      },
      {
        "stepNumber": 3,
        "title": "Xóa và đăng ký lại vân tay, đăng ký thêm vài lần cho cùng một ngón",
        "instructions": "Xóa và đăng ký lại vân tay, đăng ký thêm vài lần cho cùng một ngón."
      },
      {
        "stepNumber": 4,
        "title": "Face ID",
        "instructions": "Face ID: đảm bảo không bị che mặt, đăng ký lại nếu cần."
      },
      {
        "stepNumber": 5,
        "title": "Cập nhật hệ điều hành",
        "instructions": "Cập nhật hệ điều hành."
      }
    ],
    "requiredTools": [
      "Khăn mềm"
    ],
    "seeTechnicianIf": [
      "Không đăng ký được vân tay hoặc Face ID báo lỗi phần cứng."
    ],
    "tags": [
      "CUNG-03",
      "vân tay",
      "Face ID",
      "mở khóa",
      "không nhận vân tay",
      "sinh trắc học"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 126
  },
  {
    "id": "CUNG-04",
    "code": "CUNG-04",
    "title": "Máy rơi vào nước hoặc bị ướt (sơ cứu)",
    "platform": "hardware",
    "platforms": [
      "iphone",
      "android"
    ],
    "category": "hardware",
    "severity": "hard",
    "estimatedTime": "30 phút",
    "summary": "Dấu hiệu: Máy bị ngấm nước hoặc ướt do mưa, đổ nước. Nguyên nhân phổ biến: ngâm nước, mưa lớn, đổ nước lên máy.",
    "symptoms": [
      "Máy bị ngấm nước hoặc ướt do mưa, đổ nước",
      "Màn hình có vệt hoặc hơi nước bên trong"
    ],
    "causes": [
      "Ngâm nước, mưa lớn, đổ nước lên máy",
      "Độ ngăn nước của máy suy giảm theo thời gian"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Lấy máy ra khỏi nước ngay, tắt nguồn",
        "instructions": "Lấy máy ra khỏi nước ngay, tắt nguồn."
      },
      {
        "stepNumber": 2,
        "title": "Không cắm sạc, không bấm nút liên tục",
        "instructions": "Không cắm sạc, không bấm nút liên tục."
      },
      {
        "stepNumber": 3,
        "title": "Rút SIM và thẻ nhớ, lau khô bên ngoài bằng khăn mềm",
        "instructions": "Rút SIM và thẻ nhớ, lau khô bên ngoài bằng khăn mềm."
      },
      {
        "stepNumber": 4,
        "title": "Để máy nơi khô thoáng, cổng sạc hướng xuống, chờ ít nhất 24-48 giờ",
        "instructions": "Để máy nơi khô thoáng, cổng sạc hướng xuống, chờ ít nhất 24-48 giờ."
      },
      {
        "stepNumber": 5,
        "title": "Sau khi khô, mang máy đến trung tâm bảo hành để kiểm tra sớm",
        "instructions": "Sau khi khô, mang máy đến trung tâm bảo hành để kiểm tra sớm."
      }
    ],
    "requiredTools": [
      "Khăn khô mềm"
    ],
    "warnings": [
      "Không dùng máy sấy, không dùng gạo, không dùng khí nén. Nước làm ăn mòn bo mạch dần theo thời gian, nên cần kiểm tra sớm."
    ],
    "seeTechnicianIf": [
      "Máy từng vào nước đáng kể, dù có vẻ vẫn hoạt động bình thường."
    ],
    "tags": [
      "CUNG-04",
      "rơi nước",
      "vào nước",
      "máy ướt",
      "ngâm nước",
      "sơ cứu"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 123
  },
  {
    "id": "windows-wifi-no-internet",
    "code": "WIN-01",
    "title": "Windows đã kết nối Wi-Fi nhưng báo \"No Internet, secured\"",
    "platform": "windows",
    "platforms": [
      "windows"
    ],
    "category": "network",
    "severity": "easy",
    "estimatedTime": "5 phút",
    "summary": "Máy tính Windows bắt được sóng Wi-Fi nhưng không vào được web do lỗi DNS, IP xung đột hoặc Winsock.",
    "symptoms": [
      "Biểu tượng Wi-Fi có dấu chấm than hoặc báo No Internet",
      "Điện thoại cùng mạng vẫn truy cập bình thường",
      "Trình duyệt báo DNS_PROBE_FINISHED_NO_INTERNET"
    ],
    "causes": [
      "Bộ nhớ đệm DNS hoặc TCP/IP Winsock bị lỗi",
      "Router cấp trùng địa chỉ IP nội bộ",
      "Cấu hình Proxy hoặc VPN cũ chặn kết nối"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Khởi động lại bộ định tuyến và ngắt VPN",
        "instructions": "Tắt hoàn toàn các phần mềm VPN/Proxy trên máy, sau đó tắt nguồn modem/router Wi-Fi 30 giây rồi bật lại."
      },
      {
        "stepNumber": 2,
        "title": "Làm mới IP và đặt lại Winsock bằng Command Prompt",
        "instructions": "Mở Start -> gõ cmd -> Run as administrator -> chạy lần lượt: ipconfig /flushdns, netsh winsock reset, netsh int ip reset rồi khởi động lại máy.",
        "tip": "Khởi động lại Windows là bắt buộc sau lệnh netsh winsock reset."
      },
      {
        "stepNumber": 3,
        "title": "Đổi DNS sang Cloudflare (1.1.1.1) hoặc Google (8.8.8.8)",
        "instructions": "Vào Settings > Network & internet > Wi-Fi > Hardware properties > DNS server assignment -> Edit -> Manual -> IPv4: 1.1.1.1 và 8.8.8.8."
      }
    ],
    "tags": [
      "WIN-01",
      "wifi",
      "no internet",
      "windows",
      "dns",
      "mat mang"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 184
  },
  {
    "id": "windows-slow-startup",
    "code": "WIN-02",
    "title": "Windows khởi động chậm và Full Disk 100%",
    "platform": "windows",
    "platforms": [
      "windows"
    ],
    "category": "system",
    "severity": "medium",
    "estimatedTime": "10 phút",
    "summary": "Khắc phục tình trạng máy tính Windows mở lâu, đơ lag sau khi đăng nhập do quá nhiều ứng dụng khởi động cùng hệ thống.",
    "symptoms": [
      "Mất hơn 2 phút mới vào được màn hình chính",
      "Task Manager báo Disk 100% hoặc CPU cao liên tục",
      "Quạt tản nhiệt quay mạnh dù chưa mở phần mềm"
    ],
    "causes": [
      "Quá nhiều ứng dụng bật Startup cùng Windows",
      "Windows Update hoặc Windows Search đang chạy ngầm",
      "Ổ cứng gần đầy hoặc ổ HDD cơ bị phân mảnh"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Tắt các ứng dụng khởi động cùng Windows",
        "instructions": "Nhấn Ctrl + Shift + Esc mở Task Manager -> chuyển sang tab Startup apps -> nhấn chuột phải vào các app không cần thiết (Spotify, Teams, Discord...) và chọn Disable."
      },
      {
        "stepNumber": 2,
        "title": "Kiểm tra dung lượng trống ổ C",
        "instructions": "Mở File Explorer -> đảm bảo ổ C: còn trống tối thiểu 15-20% dung lượng. Dùng Storage Sense hoặc Disk Cleanup để dọn file tạm."
      },
      {
        "stepNumber": 3,
        "title": "Chờ Windows Update hoàn tất và quét lỗi hệ thống",
        "instructions": "Vào Settings > Windows Update kiểm tra xem có bản cập nhật đang dở không, cài đặt xong và khởi động lại máy."
      }
    ],
    "tags": [
      "WIN-02",
      "full disk 100%",
      "windows cham",
      "startup",
      "giat lag"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 215
  },
  {
    "id": "mac-low-battery-life",
    "code": "MAC-01",
    "title": "MacBook tụt pin nhanh, nóng máy và quạt kêu to",
    "platform": "mac",
    "platforms": [
      "mac"
    ],
    "category": "battery",
    "severity": "easy",
    "estimatedTime": "8 phút",
    "summary": "Kiểm tra tiến trình ngốn năng lượng trên macOS và tối ưu lại thiết lập giúp MacBook mát hơn và tăng thời lượng pin.",
    "symptoms": [
      "Pin MacBook tụt nhanh bất thường dù chỉ lướt web nhẹ",
      "Kê tay hoặc mặt dưới máy nóng lên nhanh chóng",
      "Thanh menu báo các app đang \"Using Significant Energy\""
    ],
    "causes": [
      "Tab trình duyệt Chrome/Safari hoặc tiến trình nền bị treo ngốn CPU",
      "Màn hình để độ sáng tối đa và bàn phím sáng liên tục",
      "iCloud Drive hoặc Spotlight đang đồng bộ/lập chỉ mục lượng lớn dữ liệu"
    ],
    "steps": [
      {
        "stepNumber": 1,
        "title": "Mở Activity Monitor tìm ứng dụng ngốn CPU/Pin",
        "instructions": "Nhấn Command + Space -> gõ Activity Monitor -> xem tab CPU và Energy để phát hiện ứng dụng đứng đầu bảng (%CPU > 50%) và Force Quit nếu bị treo."
      },
      {
        "stepNumber": 2,
        "title": "Bật Chế độ Nguồn điện thấp (Low Power Mode)",
        "instructions": "Vào System Settings > Battery -> ở mục Low Power Mode chọn \"Only on Battery\" để tối ưu xung nhịp khi dùng pin."
      },
      {
        "stepNumber": 3,
        "title": "Kiểm tra tình trạng pin MacBook",
        "instructions": "Vào System Settings > Battery -> bấm biểu tượng chữ (i) cạnh Battery Health để xem Maximum Capacity; nếu dưới 80% nên cân nhắc thay pin chính hãng."
      }
    ],
    "tags": [
      "MAC-01",
      "macbook",
      "hao pin",
      "nong may",
      "macos",
      "activity monitor"
    ],
    "author": "TechCare Engineering",
    "createdAt": "2026-11-19",
    "helpfulCount": 162
  }
];
