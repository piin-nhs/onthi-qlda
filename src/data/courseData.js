export const learningMethods = [
  {
    id: "retrieval",
    title: "Tự kiểm tra trước khi xem đáp án",
    short: "App ưu tiên câu hỏi mở, flashcard và đề 60 phút để buộc nhớ lại kiến thức.",
    source: "Roediger & Karpicke, 2006; Dunlosky et al., 2013",
  },
  {
    id: "spacing",
    title: "Lặp cách quãng theo mức tự tin",
    short: "Flashcard được hẹn lại theo Hard / Good / Easy, không học lại mọi thứ như nhau.",
    source: "Cepeda et al., 2006; Dunlosky et al., 2013",
  },
  {
    id: "interleaving",
    title: "Trộn chủ đề giống phòng thi",
    short: "Một đề luôn pha lý thuyết, RACI, rủi ro, EVM, truyền thông và hợp đồng.",
    source: "Dunlosky et al., 2013",
  },
  {
    id: "worked",
    title: "Bài giải mẫu từng bước",
    short: "Các câu tính toán hiện công thức, thay số, kết luận bằng ngôn ngữ chấm điểm.",
    source: "Applied worked-example practice",
  },
];

export const chapters = [
  {
    id: "cost",
    chapter: 7,
    titleVi: "Quản lý chi phí dự án",
    titleEn: "Project Cost Management",
    accent: "#0f766e",
    examRole: "Câu tính EVM gần như chắc chắn xuất hiện.",
    quickWin:
      "Nhớ bộ BAC, PV, EV, AC trước; sau đó suy ra CPI, SPI, CV, SV, EAC, ETC, VAC.",
    objectives: [
      "Giải thích chi phí, ngân sách và cost baseline.",
      "Phân biệt direct, indirect, sunk, tangible, intangible, life-cycle cost.",
      "Nắm 4 quy trình: plan cost management, estimate costs, determine budget, control costs.",
      "Tính và nhận xét tình trạng dự án bằng Earned Value Management.",
    ],
    sections: [
      {
        title: "Bản chất quản lý chi phí",
        body:
          "Project cost management bảo đảm dự án hoàn thành trong ngân sách đã được phê duyệt. Với dự án CNTT, PM phải chuyển dữ liệu kỹ thuật thành ngôn ngữ tài chính để sponsor dễ quyết định.",
        bullets: [
          "Cost là nguồn lực hy sinh để đạt mục tiêu, thường đo bằng tiền.",
          "Budget là mức tiền được phê duyệt; cost baseline là ngân sách theo thời gian dùng để so sánh hiệu suất.",
          "Life-cycle costing xét cả chi phí phát triển, vận hành, bảo trì và hỗ trợ sau triển khai.",
          "Sunk cost là tiền đã chi trong quá khứ, không nên dùng để quyết định tiếp tục hay dừng dự án.",
        ],
      },
      {
        title: "Các loại chi phí và lợi ích",
        body:
          "Đề lý thuyết thường yêu cầu định nghĩa ngắn kèm ví dụ đúng ngữ cảnh dự án phần mềm.",
        bullets: [
          "Direct costs: gắn trực tiếp với sản phẩm dự án như lương lập trình viên, máy chủ riêng.",
          "Indirect costs: chi phí hỗ trợ chung như điện, văn phòng, quản trị hệ thống dùng chung.",
          "Tangible costs/benefits: đo được bằng tiền như phí license, doanh thu tăng.",
          "Intangible costs/benefits: khó lượng hóa như uy tín, trải nghiệm người dùng, sự hài lòng.",
          "Profit = revenue - expenditures; profit margin là tỷ lệ lợi nhuận so với doanh thu.",
        ],
      },
      {
        title: "Ước tính và lập ngân sách",
        body:
          "Ước tính chi phí tốt cần WBS rõ, giả định rõ, và mức chính xác phù hợp giai đoạn dự án.",
        bullets: [
          "Analogous / top-down: nhanh, dựa dự án tương tự, phù hợp khi thiếu chi tiết nhưng độ chính xác thấp hơn.",
          "Bottom-up: ước tính từng work package rồi cộng lại, chính xác hơn nhưng tốn thời gian.",
          "Parametric: dùng tham số định lượng, ví dụ chi phí trên màn hình, API, story point hoặc dòng code.",
          "Cost budgeting phân bổ ước tính cho từng hạng mục theo thời gian để tạo cost baseline.",
          "Reserve gồm contingency reserve cho rủi ro đã biết và management reserve cho unknown unknowns.",
        ],
      },
      {
        title: "Earned Value Management",
        body:
          "EVM kết hợp phạm vi, thời gian và chi phí. Đi thi nên trình bày theo thứ tự: xác định BAC/PV/EV/AC, tính chỉ số, kết luận.",
        bullets: [
          "BAC: tổng ngân sách tại thời điểm hoàn thành.",
          "PV = BAC x phần trăm kế hoạch phải hoàn thành tại thời điểm đo.",
          "EV = BAC x phần trăm thực tế đã hoàn thành.",
          "AC: chi phí thực tế đã chi.",
          "CPI = EV / AC; SPI = EV / PV.",
          "CV = EV - AC; SV = EV - PV.",
          "ETC = (BAC - EV) / CPI nếu giả định hiệu suất chi phí hiện tại tiếp diễn.",
          "EAC = AC + ETC; công thức này tương đương EAC = BAC / CPI trong cùng giả định.",
          "VAC = BAC - EAC.",
        ],
      },
      {
        title: "Cách nhận xét để lấy điểm",
        body:
          "Không chỉ ghi công thức. Sau mỗi chỉ số, thêm một câu diễn giải tình trạng dự án.",
        bullets: [
          "CPI < 1: vượt ngân sách; CPI > 1: tiết kiệm chi phí so với giá trị tạo ra.",
          "SPI < 1: chậm tiến độ; SPI > 1: nhanh hơn kế hoạch.",
          "CV âm nghĩa là chi nhiều hơn giá trị thu được; SV âm nghĩa là khối lượng hoàn thành thấp hơn kế hoạch.",
          "VAC âm nghĩa là dự báo vượt BAC khi hoàn thành.",
        ],
      },
    ],
    checklist: [
      "Luôn đổi phần trăm về số thập phân trước khi tính.",
      "PV đi với kế hoạch, EV đi với thực tế hoàn thành, AC đi với tiền đã chi.",
      "Ghi đơn vị tiền ở EAC, ETC, VAC; chỉ số CPI/SPI không có đơn vị.",
      "Nếu đề nói hiệu suất hiện tại tiếp diễn, làm theo kiểu thầy: ETC = (BAC - EV) / CPI, EAC = AC + ETC. Nếu đề nói tương lai theo đúng kế hoạch, dùng EAC = AC + (BAC - EV).",
    ],
    traps: [
      "Nhầm PV với EV khi đề nói 'dự kiến hoàn thành' và 'thực tế hoàn thành'.",
      "CPI > 1 nhưng SPI < 1: dự án tiết kiệm tiền nhưng chậm tiến độ, không được kết luận chung chung là tốt.",
      "VAC = BAC - EAC, không phải EAC - BAC.",
    ],
  },
  {
    id: "hr",
    chapter: 9,
    titleVi: "Quản lý nguồn nhân lực dự án",
    titleEn: "Project Human Resource Management",
    accent: "#d45d45",
    examRole: "Hay vào câu RACI, Tuckman, phong cách lãnh đạo và xung đột.",
    quickWin:
      "Với RACI: mỗi công việc phải có đúng một Accountable; Responsible có thể nhiều người.",
    objectives: [
      "Nắm plan, acquire, develop, manage project team.",
      "Lập được RAM/RACI, OBS và phân vai theo tình huống.",
      "Liên hệ Tuckman với hành động của PM.",
      "Chọn phong cách lãnh đạo và phương pháp xử lý xung đột phù hợp.",
    ],
    sections: [
      {
        title: "Các quy trình HR",
        body:
          "Project human resource management tổ chức, quản lý và dẫn dắt đội dự án để hoàn thành mục tiêu.",
        bullets: [
          "Plan human resource management: xác định vai trò, trách nhiệm, kỹ năng, reporting relationship và staffing plan.",
          "Acquire project team: xác nhận và huy động nhân sự cần thiết.",
          "Develop project team: cải thiện năng lực, phối hợp và môi trường làm việc.",
          "Manage project team: theo dõi hiệu suất, phản hồi, giải quyết vấn đề và thay đổi nhân sự.",
        ],
      },
      {
        title: "RAM, RACI và OBS",
        body:
          "Responsibility Assignment Matrix nối công việc với người chịu trách nhiệm. RACI là dạng phổ biến nhất trong đề thi.",
        bullets: [
          "R - Responsible: người trực tiếp thực hiện công việc.",
          "A - Accountable: người chịu trách nhiệm cuối cùng, phê duyệt kết quả.",
          "C - Consulted: người được hỏi ý kiến hai chiều trước hoặc trong khi làm.",
          "I - Informed: người cần được cập nhật một chiều.",
          "OBS nhóm nhân sự theo bộ phận/đơn vị; WBS nhóm công việc theo deliverable.",
        ],
      },
      {
        title: "Tuckman và vai trò PM",
        body:
          "Mô hình Tuckman mô tả sự trưởng thành của đội: Forming, Storming, Norming, Performing, Adjourning.",
        bullets: [
          "Forming: đội mới hình thành, PM cần mục tiêu rõ, vai trò rõ, quy tắc làm việc rõ.",
          "Storming: xung đột vai trò/cách làm, PM cần lắng nghe, giải quyết xung đột, thống nhất nguyên tắc.",
          "Norming: đội bắt đầu tin nhau, PM củng cố chuẩn làm việc và trao quyền dần.",
          "Performing: đội hiệu suất cao, PM tập trung gỡ cản trở, bảo vệ nhóm và tối ưu phối hợp.",
          "Adjourning: kết thúc, PM ghi nhận đóng góp, lessons learned và bàn giao.",
        ],
      },
      {
        title: "Lãnh đạo và động lực",
        body:
          "PM không chỉ phân công việc mà còn tạo điều kiện để đội làm việc hiệu quả.",
        bullets: [
          "Autocratic: quyết định tập trung, phù hợp khi khẩn cấp, rủi ro cao, thiếu thời gian hoặc đội thiếu kinh nghiệm.",
          "Democratic: khuyến khích tham gia, tốt khi cần cam kết và chất lượng quyết định.",
          "Laissez-faire: trao quyền mạnh, chỉ phù hợp với đội rất trưởng thành và nhiệm vụ rõ.",
          "Reward, expert, legitimate, coercive và referent power ảnh hưởng đến cách PM dẫn dắt.",
          "Động lực có thể đến từ thành tựu, ghi nhận, trách nhiệm, phát triển năng lực và môi trường làm việc công bằng.",
        ],
      },
      {
        title: "Tuyển dụng và phát triển đội",
        body:
          "Đề mới có thể hỏi trực tiếp quy trình tuyển dụng và phát triển đội ngũ trong dự án CNTT.",
        bullets: [
          "Xác định nhu cầu nhân sự từ phạm vi, WBS, tiến độ và kỹ năng cần có.",
          "Lập tiêu chí chọn người: vai trò, năng lực chuyên môn, kinh nghiệm domain, kỹ năng phối hợp và tiêu chuẩn bảo mật.",
          "Tuyển/chọn từ nguồn nội bộ, thuê ngoài hoặc vendor; đánh giá bằng phỏng vấn, bài test, hồ sơ và kinh nghiệm dự án tương tự.",
          "Onboarding giúp thành viên hiểu mục tiêu, RACI, công cụ, quy trình báo cáo và quy tắc lưu tài liệu.",
          "Phát triển đội bằng đào tạo, mentoring, workshop, review định kỳ và chia sẻ lessons learned.",
        ],
      },
      {
        title: "Maslow trong quản lý dự án",
        body:
          "Tháp Maslow giúp PM hiểu động lực của thành viên thay vì chỉ nhìn lương/thưởng.",
        bullets: [
          "Sinh lý: điều kiện làm việc, nghỉ ngơi và tải công việc ở mức chịu được.",
          "An toàn: vai trò rõ, quy trình rõ, môi trường ít đổ lỗi, kỳ vọng ổn định.",
          "Xã hội: cảm giác thuộc về nhóm, giao tiếp tốt và được hỗ trợ khi gặp khó.",
          "Được tôn trọng: ghi nhận đóng góp, lắng nghe chuyên môn và trao quyền phù hợp.",
          "Tự hoàn thiện: cơ hội học công nghệ mới, xử lý bài toán khó và phát triển nghề nghiệp.",
        ],
      },
      {
        title: "Xử lý xung đột",
        body:
          "Trong dự án CNTT, xung đột thường đến từ ưu tiên kỹ thuật, tài nguyên, lịch, yêu cầu và chất lượng.",
        bullets: [
          "Confronting / problem solving: xử lý gốc vấn đề, thường là lựa chọn tốt nhất nếu có đủ thời gian.",
          "Compromising: mỗi bên nhượng bộ một phần, phù hợp khi cần quyết định nhanh và lợi ích tương đối cân bằng.",
          "Smoothing: nhấn mạnh điểm chung, hữu ích để giảm căng thẳng tạm thời.",
          "Forcing: áp đặt quyết định, dùng khi khẩn cấp hoặc có ràng buộc không thể thương lượng.",
          "Withdrawing: trì hoãn hoặc rút lui, chỉ nên dùng khi vấn đề nhỏ hoặc cần thêm thông tin.",
        ],
      },
    ],
    checklist: [
      "Câu Tuckman phải nêu đúng giai đoạn và hành động PM trong giai đoạn đó.",
      "RACI nên trình bày dạng bảng, mỗi hàng công việc có đúng một A.",
      "Nếu đề hỏi autocratic, nêu rõ điều kiện: khẩn cấp, an toàn, bảo mật, thiếu kinh nghiệm, deadline gấp.",
      "Câu tuyển dụng/phát triển đội nên đi từ nhu cầu nhân sự, chọn người, onboarding, đào tạo đến quản lý hiệu suất.",
      "Câu Maslow nên nêu đủ 5 tầng và liên hệ cách PM tạo động lực cho đội dự án.",
    ],
    traps: [
      "Gán A cho nhiều người trong một công việc.",
      "Nhầm Consulted với Informed: C là hai chiều, I là một chiều.",
      "Nói Storming là xấu tuyệt đối; thực ra đây là giai đoạn bình thường cần PM dẫn dắt.",
    ],
  },
  {
    id: "communications",
    chapter: 10,
    titleVi: "Quản lý truyền thông dự án",
    titleEn: "Project Communications Management",
    accent: "#3f5f8f",
    examRole: "Thường hỏi số kênh truyền thông và kế hoạch báo cáo tiến độ.",
    quickWin:
      "Số kênh truyền thông với n người là n(n-1)/2; thêm một người có thể tăng rất nhiều kênh.",
    objectives: [
      "Hiểu tầm quan trọng của truyền thông trong dự án.",
      "Lập communication management plan có đối tượng, nội dung, tần suất, kênh, chủ sở hữu.",
      "Tính số kênh truyền thông.",
      "Chọn phương pháp interactive, push, pull và quy trình báo cáo phù hợp.",
    ],
    sections: [
      {
        title: "Mục tiêu của truyền thông",
        body:
          "Project communications management bảo đảm thông tin dự án được tạo, thu thập, phân phối, lưu trữ, truy xuất và kiểm soát đúng người, đúng thời điểm.",
        bullets: [
          "PM dành nhiều thời gian để giao tiếp với team, sponsor, khách hàng, vendor và các bên liên quan.",
          "Thông tin sai hoặc trễ có thể làm sai yêu cầu, trễ tiến độ, tăng chi phí và gây xung đột.",
          "Truyền thông tốt cần cả nội dung, kênh, tần suất, người chịu trách nhiệm và cơ chế phản hồi.",
        ],
      },
      {
        title: "Ba quy trình chính",
        body:
          "Bài tiếng Anh tập trung vào planning, managing và controlling communications.",
        bullets: [
          "Plan communications management: xác định nhu cầu thông tin và cách tiếp cận truyền thông.",
          "Manage communications: tạo, phân phối, lưu trữ, truy xuất và xử lý thông tin theo kế hoạch.",
          "Control communications: giám sát và điều chỉnh truyền thông để đáp ứng nhu cầu stakeholder.",
        ],
      },
      {
        title: "Communication management plan",
        body:
          "Một kế hoạch truyền thông tốt làm rõ ai cần biết gì, nhận qua đâu, khi nào và phản hồi thế nào.",
        bullets: [
          "Stakeholder / audience: ai nhận thông tin.",
          "Information needs: nội dung cần nhận như tiến độ, rủi ro, chi phí, quyết định, issue.",
          "Format and channel: họp trực tiếp, email, dashboard, chat, repository, biên bản.",
          "Frequency: hằng ngày, hằng tuần, theo milestone hoặc khi có escalation.",
          "Owner: người tạo và gửi thông tin; escalation path cho vấn đề vượt thẩm quyền.",
        ],
      },
      {
        title: "Kênh và phương thức truyền thông",
        body:
          "Số kênh tăng theo tổ hợp cặp người, vì vậy đội càng lớn càng cần quy tắc truyền thông rõ.",
        bullets: [
          "Communication channels = n(n-1)/2.",
          "Interactive: họp, call, workshop; tốt khi cần trao đổi hai chiều.",
          "Push: email, memo, thông báo; tốt khi cần gửi thông tin đến người nhận cụ thể.",
          "Pull: intranet, wiki, drive, dashboard; tốt khi lượng thông tin lớn và người nhận tự truy cập.",
          "Performance reporting tổng hợp scope, schedule, cost, quality, risk và issue.",
        ],
      },
      {
        title: "Quy trình báo cáo tiến độ",
        body:
          "Câu thi thường yêu cầu đề xuất quy trình báo cáo hằng tuần giữa thành viên và PM.",
        bullets: [
          "Mỗi thành viên cập nhật việc đã làm, việc tuần tới, phần trăm hoàn thành, issue, rủi ro và nhu cầu hỗ trợ.",
          "PM tổng hợp thành dashboard/weekly report cho sponsor và stakeholder chính.",
          "Issue quan trọng được ghi vào issue log, có owner, deadline và trạng thái.",
          "Tài liệu nên lưu ở một nơi chung như PMIS, drive dự án hoặc công cụ quản lý task để truy vết.",
        ],
      },
      {
        title: "Project Archive",
        body:
          "Đề mới có thể hỏi tầm quan trọng của lưu trữ tài liệu dự án khi đóng dự án hoặc bàn giao vận hành.",
        bullets: [
          "Project archive lưu các tài liệu chính thức: kế hoạch, baseline, yêu cầu, thiết kế, RACI, biên bản, change request, risk/issue log, nghiệm thu, hợp đồng và lessons learned.",
          "Giúp truy vết quyết định, chứng minh phạm vi đã được duyệt và xử lý tranh chấp với stakeholder/vendor.",
          "Hỗ trợ bàn giao vận hành vì đội sau dự án có tài liệu cấu hình, hướng dẫn và tiêu chí nghiệm thu.",
          "Tạo kho tri thức cho dự án sau, giúp ước tính tốt hơn và tránh lặp lại lỗi cũ.",
          "Cần có cấu trúc thư mục, phân quyền, quy tắc đặt tên phiên bản, owner cập nhật và bản chính thức.",
        ],
      },
    ],
    checklist: [
      "Tính kênh truyền thông bằng tổng số người trong dự án, bao gồm PM nếu đề nói PM nằm trong đội.",
      "Kế hoạch truyền thông phải có tần suất, kênh, người nhận, người gửi và nội dung.",
      "Với dự án lớn, kết hợp họp ngắn, dashboard, biên bản và nơi lưu trữ chung.",
      "Nếu hỏi Sponsor, đề xuất kết hợp báo cáo push, dashboard pull và họp interactive theo milestone.",
      "Nếu hỏi Project Archive, nhấn mạnh truy vết, bàn giao, pháp lý/hợp đồng và lessons learned.",
    ],
    traps: [
      "Quên PM khi tính n.",
      "Chỉ nói 'dùng email' mà không nêu ai gửi, gửi gì, khi nào, lưu ở đâu.",
      "Dùng họp cho mọi thông tin lớn; tài liệu lớn nên dùng pull communication.",
    ],
  },
  {
    id: "risk",
    chapter: 11,
    titleVi: "Quản lý rủi ro dự án",
    titleEn: "Project Risk Management",
    accent: "#b7791f",
    examRole: "Hay vào câu xác định 3 rủi ro, phân tích định tính và tính EMV.",
    quickWin:
      "Risk = sự kiện không chắc chắn. EMV = xác suất x tác động tiền tệ.",
    objectives: [
      "Phân biệt risk, issue, opportunity và risk appetite/tolerance.",
      "Nắm quy trình plan, identify, qualitative, quantitative, response, control.",
      "Lập bảng xác suất - ảnh hưởng - phản ứng.",
      "Tính EMV và đề xuất dự phòng.",
    ],
    sections: [
      {
        title: "Khái niệm rủi ro",
        body:
          "Project risk là sự kiện hoặc điều kiện không chắc chắn, nếu xảy ra sẽ có tác động tích cực hoặc tiêu cực đến mục tiêu dự án.",
        bullets: [
          "Threat là rủi ro tiêu cực; opportunity là rủi ro tích cực.",
          "Issue là vấn đề đã xảy ra, không còn là khả năng.",
          "Risk appetite là mức rủi ro tổ chức sẵn sàng chấp nhận; risk tolerance là ngưỡng cụ thể hơn.",
          "Risk register là tài liệu sống, cập nhật suốt dự án.",
        ],
      },
      {
        title: "Quy trình quản lý rủi ro",
        body:
          "Trình tự chuẩn giúp PM đi từ cách làm, nhận diện, xếp hạng, định lượng, phản ứng đến kiểm soát.",
        bullets: [
          "Plan risk management: xác định phương pháp, vai trò, ngân sách, thời điểm và thang đo.",
          "Identify risks: dùng brainstorming, checklist, interview, SWOT, assumptions analysis.",
          "Perform qualitative risk analysis: xếp ưu tiên bằng xác suất và ảnh hưởng.",
          "Perform quantitative risk analysis: lượng hóa bằng EMV, decision tree, simulation khi cần.",
          "Plan risk responses: chọn chiến lược phản ứng.",
          "Control risks: theo dõi trigger, residual risk, secondary risk và hiệu quả phản ứng.",
        ],
      },
      {
        title: "Phân tích định tính",
        body:
          "Đề mẫu thường yêu cầu liệt kê 3 rủi ro lớn và phân tích xác suất, ảnh hưởng, phản ứng.",
        bullets: [
          "Probability có thể chia Low/Medium/High hoặc phần trăm.",
          "Impact có thể tác động đến chi phí, tiến độ, phạm vi, chất lượng, bảo mật hoặc sự hài lòng.",
          "Risk score = probability x impact nếu dùng thang điểm.",
          "Nên nêu trigger để biết khi nào rủi ro có dấu hiệu xảy ra.",
          "Response phải cụ thể, ví dụ không chỉ 'giảm thiểu' mà là 'backup dữ liệu hằng ngày và diễn tập restore'.",
        ],
      },
      {
        title: "Rủi ro Buyer, bảo mật và Scope Creep",
        body:
          "Ba đề mới đổi cách hỏi: không chỉ rủi ro chung mà còn khoanh vào phía Buyer, bảo mật dữ liệu hoặc phạm vi dự án.",
        bullets: [
          "Rủi ro Buyer: khách hàng chậm phản hồi, đổi đầu mối, chưa chuẩn bị dữ liệu/người nghiệm thu hoặc yêu cầu thay đổi sau khi đã chốt.",
          "Rủi ro bảo mật dữ liệu: lộ dữ liệu, phân quyền sai, mã hóa không đạt chuẩn, log/monitoring thiếu và nhà thầu bảo mật bàn giao trễ.",
          "Scope creep: thêm chức năng, báo cáo, tích hợp hoặc chi nhánh ngoài baseline mà không có change request được duyệt.",
          "Biện pháp chung: thống nhất đầu mối phê duyệt, change control, tiêu chí nghiệm thu, lịch phản hồi và escalation path.",
        ],
      },
      {
        title: "EMV và dự phòng",
        body:
          "Expected Monetary Value giúp quy đổi rủi ro thành giá trị tiền kỳ vọng.",
        bullets: [
          "EMV = probability x impact.",
          "Nếu tác động là thiệt hại, EMV là chi phí kỳ vọng cần cân nhắc cho contingency.",
          "Tổng EMV của các rủi ro ưu tiên có thể dùng làm gợi ý contingency reserve.",
          "Decision tree dùng EMV để so sánh lựa chọn có rủi ro khác nhau.",
        ],
      },
      {
        title: "Chiến lược phản ứng",
        body:
          "Phản ứng tốt phải phù hợp loại rủi ro, chi phí phản ứng và mức ưu tiên.",
        bullets: [
          "Threat: avoid, mitigate, transfer, accept.",
          "Opportunity: exploit, enhance, share, accept.",
          "Mitigate giảm xác suất hoặc ảnh hưởng; transfer chuyển một phần trách nhiệm tài chính qua bảo hiểm/hợp đồng.",
          "Accept có thể chủ động bằng contingency plan hoặc thụ động chỉ theo dõi.",
          "Fallback plan dùng khi phản ứng chính không hiệu quả.",
        ],
      },
    ],
    checklist: [
      "Câu rủi ro theo mẫu thầy nên có bảng 4 cột: Rủi ro, Xác suất, Ảnh hưởng, Biện pháp ứng phó.",
      "EMV ghi rõ xác suất dạng thập phân nhân với thiệt hại.",
      "Không biến rủi ro thành issue; rủi ro phải có yếu tố chưa chắc xảy ra.",
      "Nếu đề hỏi Scope Creep, phải nêu thay đổi ngoài baseline và cơ chế change request.",
      "Nếu đề hỏi Buyer, tập trung vào phản hồi, nghiệm thu, dữ liệu đầu vào và quyết định của khách hàng.",
    ],
    traps: [
      "Ghi rủi ro quá chung như 'dự án thất bại' thay vì sự kiện cụ thể.",
      "Response không khớp: đã gọi transfer nhưng lại mô tả tự làm backup.",
      "Quên owner và trigger trong bảng phân tích.",
    ],
  },
  {
    id: "procurement",
    chapter: 12,
    titleVi: "Quản lý mua sắm dự án",
    titleEn: "Project Procurement Management",
    accent: "#7c3aed",
    examRole: "Hay vào câu hợp đồng FPIF/CPIF tính Final Fee và Final Price.",
    quickWin:
      "Final Fee = Target Fee + Seller share x (Target Cost - Actual Cost). Final Price = Actual Cost + Final Fee.",
    objectives: [
      "Hiểu make-or-buy và vai trò buyer/seller.",
      "Nắm plan, conduct, control, close procurements.",
      "Phân biệt fixed-price, cost-reimbursable, T&M và incentive contracts.",
      "Tính được fee/price trong hợp đồng có chia sẻ tiết kiệm/vượt chi phí.",
    ],
    sections: [
      {
        title: "Vai trò của mua sắm",
        body:
          "Procurement management quản lý việc mua hoặc thuê sản phẩm, dịch vụ và kết quả từ bên ngoài đội dự án.",
        bullets: [
          "Buyer là bên mua/thuê; seller là nhà cung cấp/nhà thầu.",
          "Make-or-buy analysis quyết định tự làm hay mua ngoài dựa trên chi phí, năng lực, thời gian, rủi ro và chiến lược.",
          "Statement of Work mô tả công việc hoặc sản phẩm cần mua đủ rõ để seller báo giá và thực hiện.",
          "Procurement ảnh hưởng lớn đến rủi ro, tiến độ và chất lượng dự án CNTT.",
        ],
      },
      {
        title: "Các quy trình mua sắm",
        body:
          "Quy trình mua sắm đi từ lập kế hoạch đến chọn nhà cung cấp, quản lý hợp đồng và đóng hợp đồng.",
        bullets: [
          "Plan procurement management: xác định mua gì, khi nào, bằng loại hợp đồng nào.",
          "Conduct procurements: gửi RFP/RFQ, nhận proposal, chọn seller và ký hợp đồng.",
          "Control procurements: quản lý quan hệ hợp đồng, hiệu suất, thay đổi, thanh toán và tranh chấp.",
          "Close procurements: xác nhận hoàn tất, nghiệm thu, lưu hồ sơ, lessons learned.",
        ],
      },
      {
        title: "Loại hợp đồng",
        body:
          "Loại hợp đồng quyết định cách chia sẻ rủi ro giữa buyer và seller.",
        bullets: [
          "Fixed-price: giá cố định, seller chịu nhiều rủi ro chi phí hơn nếu phạm vi rõ.",
          "Cost-reimbursable: buyer hoàn chi phí hợp lệ cộng fee, buyer chịu nhiều rủi ro hơn khi phạm vi chưa rõ.",
          "Time and Material: trả theo thời gian và vật tư, linh hoạt nhưng cần kiểm soát trần chi phí.",
          "Incentive fee chia sẻ tiết kiệm hoặc vượt chi phí theo tỷ lệ buyer/seller để khuyến khích hiệu suất.",
          "CPFF có fee cố định; CPIF có fee thay đổi theo incentive; FPIF có target cost, target fee và sharing ratio.",
        ],
      },
      {
        title: "Tài liệu và chọn nhà cung cấp",
        body:
          "Một câu lý thuyết có thể hỏi PM cần chuẩn bị gì khi thuê ngoài.",
        bullets: [
          "RFP dùng khi cần proposal giải pháp; RFQ dùng khi yêu cầu rõ và cần báo giá.",
          "Source selection criteria gồm giá, kỹ thuật, kinh nghiệm, năng lực, rủi ro, bảo hành, hỗ trợ.",
          "Bidder conference giúp các seller nhận cùng thông tin, tránh thiên vị.",
          "Procurement negotiations làm rõ phạm vi, trách nhiệm, giá, điều khoản thanh toán và thay đổi.",
        ],
      },
      {
        title: "Tính incentive fee",
        body:
          "Đề thường cho Target Cost, Target Fee, Actual Cost và sharing ratio Buyer/Seller.",
        bullets: [
          "Target Price = Target Cost + Target Fee.",
          "Cost difference = Target Cost - Actual Cost.",
          "Nếu Actual Cost thấp hơn Target Cost, seller được cộng phần Seller share của khoản tiết kiệm.",
          "Nếu Actual Cost cao hơn Target Cost, seller bị trừ phần Seller share của khoản vượt.",
          "Final Fee = Target Fee + Seller share x Cost difference.",
          "Final Price = Actual Cost + Final Fee, nếu đề không cho ceiling price.",
        ],
      },
    ],
    checklist: [
      "Sharing ratio ghi Buyer/Seller, khi tính Final Fee dùng phần Seller.",
      "Trình bày giống thầy: Target Price trước, rồi Cost Variance, phần Seller hưởng/chịu, Final Fee, Final Price.",
      "Actual Cost thấp hơn Target Cost thì seller được thưởng; cao hơn thì bị giảm fee.",
      "Final Price luôn cộng Actual Cost với Final Fee trong dạng đề thầy cho.",
    ],
    traps: [
      "Dùng buyer share để tính fee của seller.",
      "Quên đổi 70/30 thành seller share = 30%.",
      "Nhầm Target Fee với Final Fee.",
      "Tự chặn Final Fee ở 0 khi đề không cho minimum fee/floor.",
    ],
  },
  {
    id: "stakeholders",
    chapter: 13,
    titleVi: "Quản lý bên liên quan dự án",
    titleEn: "Project Stakeholder Management",
    accent: "#0e7490",
    examRole: "Dễ vào câu lý thuyết hoặc lồng với truyền thông, rủi ro và nhân sự.",
    quickWin:
      "Stakeholder engagement matrix: Unaware, Resistant, Neutral, Supportive, Leading.",
    objectives: [
      "Nhận diện stakeholder và mức ảnh hưởng/kỳ vọng.",
      "Lập stakeholder register và phân tích power/interest.",
      "Lập kế hoạch, quản lý và kiểm soát mức tham gia.",
      "Gắn stakeholder với communication plan và risk response.",
    ],
    sections: [
      {
        title: "Stakeholder là ai",
        body:
          "Stakeholder là cá nhân, nhóm hoặc tổ chức có thể ảnh hưởng, bị ảnh hưởng hoặc tự nhận là bị ảnh hưởng bởi dự án.",
        bullets: [
          "Ví dụ: sponsor, khách hàng, người dùng, PM, team, vendor, phòng IT vận hành, pháp chế, ban giám hiệu, phụ huynh, sinh viên.",
          "Stakeholder không chỉ là người ủng hộ; người phản đối cũng cần được quản lý.",
          "Quản lý stakeholder tốt giúp giảm thay đổi bất ngờ, tăng chấp nhận sản phẩm và bảo vệ mục tiêu dự án.",
        ],
      },
      {
        title: "Các quy trình stakeholder",
        body:
          "Project stakeholder management tập trung vào nhận diện, lập kế hoạch, gắn kết và kiểm soát sự tham gia.",
        bullets: [
          "Identify stakeholders: tạo stakeholder register và phân tích ảnh hưởng.",
          "Plan stakeholder management: chọn chiến lược gắn kết cho từng nhóm.",
          "Manage stakeholder engagement: giao tiếp, xử lý kỳ vọng và tăng sự ủng hộ.",
          "Control stakeholder engagement: theo dõi quan hệ và điều chỉnh chiến lược.",
        ],
      },
      {
        title: "Công cụ phân tích",
        body:
          "Phân loại stakeholder giúp PM dùng thời gian đúng chỗ.",
        bullets: [
          "Power/Interest grid: quyền lực cao và quan tâm cao cần manage closely.",
          "Power/Influence hoặc Influence/Impact grid dùng khi cần nhìn khả năng tác động.",
          "Salience model xét power, legitimacy và urgency.",
          "Stakeholder register thường có tên, vai trò, kỳ vọng, mức ảnh hưởng, thái độ, thông tin liên hệ, chiến lược.",
        ],
      },
      {
        title: "Engagement assessment matrix",
        body:
          "Ma trận này so sánh mức tham gia hiện tại và mong muốn để xác định khoảng cách.",
        bullets: [
          "Unaware: chưa biết dự án và tác động.",
          "Resistant: biết dự án nhưng phản đối.",
          "Neutral: biết nhưng chưa ủng hộ hay phản đối.",
          "Supportive: ủng hộ thay đổi và mục tiêu dự án.",
          "Leading: chủ động thúc đẩy dự án thành công.",
        ],
      },
      {
        title: "Chiến lược gắn kết",
        body:
          "Một câu trả lời tốt nêu stakeholder chính, nhu cầu thông tin, rủi ro kỳ vọng và cách quản lý.",
        bullets: [
          "Sponsor cần báo cáo ra quyết định: chi phí, tiến độ, rủi ro, thay đổi phạm vi.",
          "Người dùng cần đào tạo, hướng dẫn, kênh phản hồi và thử nghiệm chấp nhận.",
          "Nhóm phản đối cần lắng nghe nguyên nhân, minh bạch tác động và đưa vào quá trình thay đổi.",
          "Vendor cần điều khoản rõ, tiêu chí nghiệm thu và nhịp họp kiểm soát.",
        ],
      },
    ],
    checklist: [
      "Stakeholder analysis nên nối với communication plan.",
      "Nêu chiến lược riêng cho nhóm quyền lực cao / quan tâm cao.",
      "Đừng chỉ liệt kê người; phải nói họ cần gì và PM làm gì.",
    ],
    traps: [
      "Bỏ quên người dùng cuối vì chỉ tập trung sponsor.",
      "Không cập nhật stakeholder register khi phạm vi hoặc tổ chức thay đổi.",
      "Đánh đồng stakeholder neutral với supportive.",
    ],
  },
];

export const theoryNotes = {
  cost: {
    "Bản chất quản lý chi phí": {
      note:
        "Chú thích: trong bài thi, 'ngân sách' không chỉ là số tiền tổng. PM phải theo dõi ngân sách theo thời gian để biết tại thời điểm kiểm tra dự án đáng ra phải tạo ra bao nhiêu giá trị.",
      example:
        "Ví dụ: dự án BAC 200 triệu, hết nửa thời gian theo kế hoạch phải xong 50%. Khi đó PV = 100 triệu, dù thực tế đã chi nhiều hay ít.",
      items: [
        {
          term: "Cost",
          note: "Chi phí là nguồn lực phải hy sinh để đạt mục tiêu dự án, thường quy đổi thành tiền.",
          example: "Trả 30 triệu cho cloud server trong tháng triển khai là một khoản cost.",
        },
        {
          term: "Budget / BAC",
          note: "Budget là ngân sách được phê duyệt; BAC là tổng ngân sách tại thời điểm hoàn thành.",
          example: "Đề cho ngân sách dự án 200 triệu thì BAC = 200 triệu.",
        },
        {
          term: "Cost baseline",
          note: "Ngân sách được trải theo thời gian để PM so sánh kế hoạch với thực tế.",
          example: "Sau 20/40 ngày, kế hoạch xong 50% thì PV = 50% x BAC.",
        },
        {
          term: "Life-cycle costing",
          note: "Tính cả chi phí phát triển lẫn vận hành, bảo trì, hỗ trợ sau khi bàn giao.",
          example: "App rẻ lúc làm nhưng phí vận hành cloud cao thì tổng life-cycle cost vẫn lớn.",
        },
        {
          term: "Sunk cost",
          note: "Chi phí đã chi trong quá khứ, không nên dùng để quyết định tiếp tục hay dừng dự án.",
          example: "Prototype đã tốn 20 triệu nhưng sai yêu cầu; không nên tiếp tục chỉ vì tiếc 20 triệu.",
        },
      ],
    },
    "Các loại chi phí và lợi ích": {
      note:
        "Chú thích: đề thường chấm điểm ở khả năng phân biệt chi phí trực tiếp/gián tiếp và chi phí chìm. Sunk cost không được dùng để biện minh tiếp tục một dự án kém hiệu quả.",
      example:
        "Ví dụ: tiền thuê lập trình viên cho app là direct cost; tiền điện văn phòng là indirect cost; tiền đã trả cho bản prototype bị bỏ là sunk cost.",
      items: [
        {
          term: "Direct costs",
          note: "Chi phí gắn trực tiếp với sản phẩm/dịch vụ của dự án; bỏ dự án thì khoản này thường cũng mất.",
          example: "Lương lập trình viên làm module mượn/trả sách; phí thuê server riêng cho hệ thống thư viện.",
        },
        {
          term: "Indirect costs",
          note: "Chi phí hỗ trợ chung, không gắn riêng với một deliverable nhưng cần để dự án vận hành.",
          example: "Tiền điện văn phòng, internet công ty, bộ phận IT hỗ trợ chung nhiều dự án.",
        },
        {
          term: "Tangible costs/benefits",
          note: "Khoản có thể đo tương đối rõ bằng tiền.",
          example: "Phí license 15 triệu; hệ thống giúp giảm 10 triệu/tháng tiền giấy tờ.",
        },
        {
          term: "Intangible costs/benefits",
          note: "Khoản khó lượng hóa trực tiếp nhưng vẫn ảnh hưởng quyết định dự án.",
          example: "Uy tín trường tăng, phụ huynh hài lòng hơn, trải nghiệm người dùng tốt hơn.",
        },
        {
          term: "Profit / Profit margin",
          note: "Profit là doanh thu trừ chi phí; profit margin cho biết tỷ lệ lợi nhuận trên doanh thu.",
          example: "Doanh thu 100 triệu, chi phí 80 triệu thì profit = 20 triệu, margin = 20%.",
        },
      ],
    },
    "Ước tính và lập ngân sách": {
      note:
        "Chú thích: top-down nhanh nhưng thô; bottom-up chậm hơn nhưng đáng tin hơn nếu WBS rõ; parametric tốt khi có dữ liệu lịch sử.",
      example:
        "Ví dụ: ước tính 20 màn hình x 3 triệu/màn hình là parametric; hỏi dự án năm trước làm tương tự tốn bao nhiêu là analogous.",
      items: [
        {
          term: "Analogous / Top-down",
          note: "Dựa vào dự án tương tự trước đây; nhanh nhưng phụ thuộc độ giống nhau giữa hai dự án.",
          example: "Năm trước app điểm danh tốn 180 triệu, năm nay app sổ liên lạc tương tự ước khoảng 200 triệu.",
        },
        {
          term: "Bottom-up",
          note: "Ước tính từng work package nhỏ rồi cộng lại; chính xác hơn khi WBS rõ nhưng tốn thời gian.",
          example: "UI 20 triệu + API 50 triệu + database 25 triệu + test 15 triệu = 110 triệu.",
        },
        {
          term: "Parametric",
          note: "Dùng tham số định lượng và công thức đơn giá.",
          example: "12 màn hình x 4 triệu/màn hình = 48 triệu.",
        },
        {
          term: "Cost budgeting",
          note: "Phân bổ tổng ước tính theo công việc và thời gian để tạo cost baseline.",
          example: "Giai đoạn phân tích 20%, lập trình 50%, kiểm thử 20%, bàn giao 10% ngân sách.",
        },
        {
          term: "Reserve",
          note: "Tiền dự phòng cho rủi ro; contingency cho rủi ro đã biết, management reserve cho bất định lớn hơn.",
          example: "Dự phòng 10 triệu cho rủi ro vendor giao thiết bị trễ.",
        },
      ],
    },
    "Earned Value Management": {
      note:
        "Chú thích tiếng Việt: PV là 'đáng ra phải làm được', EV là 'thực tế đã làm được', AC là 'đã chi'. Chỉ cần tách ba ý này thì bài EVM rất khó nhầm.",
      example:
        "Ví dụ: BAC 300 triệu, kế hoạch 60%, thực tế 45%, AC 160 triệu. PV = 180, EV = 135, CPI = 135/160 = 0.84, SPI = 135/180 = 0.75.",
      items: [
        {
          term: "BAC",
          note: "Tổng ngân sách dự án khi hoàn thành; là nền để tính PV và EV.",
          example: "Đề cho ngân sách 300 triệu thì BAC = 300 triệu.",
        },
        {
          term: "PV",
          note: "Giá trị kế hoạch: tại thời điểm đo, đáng ra phải hoàn thành bao nhiêu phần ngân sách.",
          example: "BAC 300 triệu, kế hoạch 60% => PV = 180 triệu.",
        },
        {
          term: "EV",
          note: "Giá trị thu được: thực tế đã hoàn thành bao nhiêu phần công việc, quy ra ngân sách.",
          example: "BAC 300 triệu, thực tế xong 45% => EV = 135 triệu.",
        },
        {
          term: "AC",
          note: "Chi phí thực tế đã chi để tạo ra khối lượng công việc hiện tại.",
          example: "Đã trả nhân sự, server, license tổng 160 triệu => AC = 160 triệu.",
        },
        {
          term: "CPI / SPI",
          note: "CPI đọc hiệu suất chi phí, SPI đọc hiệu suất tiến độ.",
          example: "CPI = 135/160 = 0.84 là vượt ngân sách; SPI = 135/180 = 0.75 là chậm tiến độ.",
        },
        {
          term: "EAC / ETC / VAC",
          note: "EAC dự báo tổng chi phí, ETC là chi phí còn cần, VAC là chênh lệch so với BAC.",
          example: "BAC 300, CPI 0.84 => EAC khoảng 357.14; nếu AC 160 thì ETC khoảng 197.14.",
        },
      ],
    },
    "Cách nhận xét để lấy điểm": {
      note:
        "Chú thích: sau khi tính số, luôn kết luận theo hai trục riêng: chi phí và tiến độ. Một dự án có thể tiết kiệm chi phí nhưng vẫn chậm tiến độ.",
      example:
        "Ví dụ: CPI = 1.1 và SPI = 0.8 => chi phí tốt hơn kế hoạch nhưng tiến độ chậm, PM cần điều tra nguyên nhân chậm trước khi kết luận dự án tốt.",
      items: [
        {
          term: "CPI",
          note: "Dùng để nhận xét chi phí: nhỏ hơn 1 là vượt ngân sách, lớn hơn 1 là tiết kiệm.",
          example: "CPI = 0.75 => cứ tạo 1 đồng giá trị thì đang tốn khoảng 1.33 đồng chi phí.",
        },
        {
          term: "SPI",
          note: "Dùng để nhận xét tiến độ: nhỏ hơn 1 là chậm, lớn hơn 1 là nhanh hơn kế hoạch.",
          example: "SPI = 0.9 => giá trị hoàn thành mới đạt 90% so với kế hoạch tại thời điểm đo.",
        },
        {
          term: "CV",
          note: "Sai lệch chi phí theo giá trị tuyệt đối; âm là bất lợi về chi phí.",
          example: "EV 90, AC 120 => CV = -30 triệu, đã chi nhiều hơn giá trị tạo ra.",
        },
        {
          term: "SV",
          note: "Sai lệch tiến độ theo giá trị tuyệt đối; âm là bất lợi về tiến độ.",
          example: "EV 90, PV 100 => SV = -10 triệu, hoàn thành thấp hơn kế hoạch.",
        },
        {
          term: "VAC",
          note: "Dự báo chênh lệch ngân sách khi hoàn thành; âm là dự báo vượt BAC.",
          example: "BAC 200, EAC 250 => VAC = -50 triệu, dự án dự báo vượt 50 triệu.",
        },
      ],
    },
  },
  hr: {
    "Các quy trình HR": {
      note:
        "Chú thích: HR trong PMBOK không chỉ là tuyển người. Nó bao gồm lập vai trò, huy động, phát triển năng lực, theo dõi hiệu suất và xử lý xung đột.",
      example:
        "Ví dụ: dự án thiếu tester ở giai đoạn kiểm thử là vấn đề acquire team; tester có nhưng làm không ăn ý với developer là develop/manage team.",
      items: [
        {
          term: "Plan human resource management",
          note: "Xác định trước vai trò, trách nhiệm, kỹ năng cần có, sơ đồ báo cáo và kế hoạch nhân sự.",
          example: "Dự án cần PM, BA, UI/UX, 2 developer, tester; PM lập staffing plan và RACI.",
        },
        {
          term: "Acquire project team",
          note: "Huy động đúng người vào dự án, có thể từ nội bộ hoặc thuê ngoài.",
          example: "Giai đoạn UAT thiếu tester nên PM xin bổ sung 1 QA từ phòng kiểm thử.",
        },
        {
          term: "Develop project team",
          note: "Nâng kỹ năng và phối hợp nhóm để làm việc hiệu quả hơn.",
          example: "Tổ chức training quy trình bug report và buổi team building sau giai đoạn storming.",
        },
        {
          term: "Manage project team",
          note: "Theo dõi hiệu suất, phản hồi, xử lý xung đột và điều chỉnh nhân sự khi cần.",
          example: "Developer trễ task liên tục; PM trao đổi nguyên nhân, gỡ blocker hoặc đổi phân công.",
        },
      ],
    },
    "RAM, RACI và OBS": {
      note:
        "Chú thích: RACI là cách trả lời cực hợp với câu 'lập ma trận'. Mỗi hàng là một công việc, mỗi cột là vai trò. Chữ A nên có đúng một người.",
      example:
        "Ví dụ: 'Kiểm thử hệ thống' thường R = Tester, A = PM, C = Developer/BA, I = chủ đầu tư.",
      items: [
        {
          term: "R - Responsible",
          note: "Người trực tiếp làm công việc. Một việc có thể có nhiều R nếu nhiều người cùng thực hiện.",
          example: "Lập trình chức năng mượn/trả: R = Lập trình viên.",
        },
        {
          term: "A - Accountable",
          note: "Người chịu trách nhiệm cuối cùng và phê duyệt kết quả. Mỗi công việc nên có đúng một A.",
          example: "Thiết kế database: A = PM hoặc Tech Lead tùy tổ chức.",
        },
        {
          term: "C - Consulted",
          note: "Người cần hỏi ý kiến hai chiều trước hoặc trong khi làm.",
          example: "Thiết kế giao diện: C = Đại diện người dùng, BA.",
        },
        {
          term: "I - Informed",
          note: "Người chỉ cần được thông báo kết quả/trạng thái, không bắt buộc tham gia quyết định.",
          example: "Sau khi test xong, I = chủ đầu tư hoặc sponsor.",
        },
        {
          term: "OBS / WBS",
          note: "OBS nhìn theo tổ chức/người; WBS nhìn theo công việc/deliverable. RAM nối hai thứ này lại.",
          example: "WBS có 'Kiểm thử'; OBS có 'QA team'; RACI gán QA team là R.",
        },
      ],
    },
    "Tuckman và vai trò PM": {
      note:
        "Chú thích: Storming không phải là nhóm thất bại; đây là giai đoạn bình thường khi người trong nhóm bắt đầu tranh luận cách làm và quyền quyết định.",
      example:
        "Ví dụ: hai lập trình viên tranh luận React Native hay native app. PM nên dùng problem solving: tiêu chí kỹ thuật, rủi ro, deadline, năng lực team, rồi chốt phương án.",
      items: [
        {
          term: "Forming",
          note: "Nhóm mới hình thành, còn lịch sự và chưa rõ cách phối hợp; PM cần làm rõ mục tiêu và vai trò.",
          example: "Kick-off dự án, PM giới thiệu scope, timeline, RACI và kênh giao tiếp.",
        },
        {
          term: "Storming",
          note: "Bắt đầu có xung đột về cách làm, quyền quyết định, ưu tiên; PM cần giải quyết xung đột.",
          example: "BA và developer tranh luận phạm vi API; PM dùng problem solving để thống nhất tiêu chí.",
        },
        {
          term: "Norming",
          note: "Nhóm đã có quy tắc chung và tin nhau hơn; PM củng cố chuẩn làm việc.",
          example: "Team thống nhất quy trình review code và cách ghi bug.",
        },
        {
          term: "Performing",
          note: "Nhóm vận hành hiệu quả; PM tập trung gỡ cản trở và tối ưu nguồn lực.",
          example: "Team tự xử lý task hằng ngày, PM chỉ can thiệp khi có blocker hoặc thay đổi lớn.",
        },
        {
          term: "Adjourning",
          note: "Dự án kết thúc hoặc nhóm giải tán; PM cần ghi nhận, bàn giao và rút kinh nghiệm.",
          example: "Tổ chức lessons learned và bàn giao tài liệu vận hành.",
        },
      ],
    },
    "Lãnh đạo và động lực": {
      note:
        "Chú thích từ bản tiếng Việt: động lực gồm nội tại và bên ngoài; Maslow đi từ nhu cầu cơ bản đến tự thể hiện; Herzberg tách yếu tố duy trì và yếu tố tạo động lực.",
      example:
        "Ví dụ: thưởng tiền là động lực bên ngoài; được làm module quan trọng và được ghi nhận là động lực nội tại.",
      items: [
        {
          term: "Autocratic",
          note: "PM quyết định tập trung, phù hợp khi khẩn cấp, bảo mật cao hoặc team thiếu kinh nghiệm.",
          example: "Sự cố rò rỉ dữ liệu; PM chốt ngay phương án khóa truy cập và rollback.",
        },
        {
          term: "Democratic",
          note: "PM lấy ý kiến nhóm để tăng cam kết và chất lượng quyết định.",
          example: "Chọn quy trình sprint, PM cho team thảo luận rồi thống nhất cách làm.",
        },
        {
          term: "Laissez-faire",
          note: "Trao quyền nhiều, chỉ hợp khi team rất trưởng thành và mục tiêu rõ.",
          example: "Nhóm senior tự chọn giải pháp refactor module không ảnh hưởng deadline.",
        },
        {
          term: "Power của PM",
          note: "Reward, expert, legitimate, coercive, referent power ảnh hưởng cách PM tác động đến team.",
          example: "PM có expert power khi hiểu kỹ thuật đủ để tư vấn giải pháp cho developer.",
        },
        {
          term: "Động lực",
          note: "Động lực đến từ phần thưởng bên ngoài hoặc ý nghĩa/phát triển bên trong.",
          example: "Thưởng hoàn thành milestone là extrinsic; được ghi nhận năng lực là intrinsic.",
        },
      ],
    },
    "Xử lý xung đột": {
      note:
        "Chú thích: xung đột nhiệm vụ có thể tốt nếu giúp nhóm tìm phương án đúng; xung đột cảm xúc thường làm giảm hiệu suất. Tránh groupthink, tức cả nhóm đồng ý quá nhanh mà không phản biện.",
      example:
        "Ví dụ: bất đồng về thiết kế database nên giải bằng dữ liệu và tiêu chí; công kích cá nhân trong họp cần PM can thiệp ngay.",
      items: [
        {
          term: "Confronting / problem solving",
          note: "Giải quyết gốc vấn đề bằng dữ liệu, tiêu chí và trao đổi trực tiếp; thường là cách tốt nhất.",
          example: "Hai dev bất đồng framework; PM yêu cầu so sánh hiệu năng, rủi ro, deadline rồi chốt.",
        },
        {
          term: "Compromising",
          note: "Mỗi bên nhượng bộ một phần để có quyết định đủ tốt trong thời gian ngắn.",
          example: "Giữ tính năng lõi trong sprint này, chuyển tính năng phụ sang sprint sau.",
        },
        {
          term: "Smoothing",
          note: "Nhấn mạnh điểm chung để giảm căng thẳng, nhưng có thể chưa xử lý gốc vấn đề.",
          example: "PM nhắc cả team cùng mục tiêu bàn giao UAT trước khi quay lại tranh luận chi tiết.",
        },
        {
          term: "Forcing",
          note: "Áp đặt quyết định khi khẩn cấp hoặc có ràng buộc không thể thương lượng.",
          example: "Deadline bảo mật bắt buộc; PM yêu cầu tạm dừng feature để vá lỗi nghiêm trọng.",
        },
        {
          term: "Withdrawing",
          note: "Trì hoãn/rút lui, chỉ hợp khi vấn đề nhỏ hoặc cần thêm thông tin.",
          example: "Chưa đủ số liệu tải hệ thống, PM hẹn quyết định sau khi chạy load test.",
        },
      ],
    },
  },
  communications: {
    "Mục tiêu của truyền thông": {
      note:
        "Chú thích từ slide tiếng Việt: thất bại giao tiếp là một nguyên nhân lớn làm dự án thất bại; PM có thể dành tới phần lớn thời gian cho giao tiếp.",
      example:
        "Ví dụ: BA hiểu sai yêu cầu 'báo cáo điểm' thành báo cáo tổng hợp, trong khi trường cần báo cáo theo từng lớp. Lỗi này không phải coding, mà là communication.",
      items: [
        {
          term: "PM giao tiếp với nhiều bên",
          note: "PM là nút điều phối thông tin giữa team, sponsor, khách hàng, vendor và stakeholder.",
          example: "PM vừa họp với sponsor về tiến độ, vừa trao đổi với vendor về SLA, vừa cập nhật task cho team.",
        },
        {
          term: "Thông tin sai hoặc trễ",
          note: "Thông tin không đúng thời điểm có thể làm sai yêu cầu, trễ tiến độ, tăng chi phí hoặc gây xung đột.",
          example: "Thay đổi yêu cầu không báo tester nên test case cũ vẫn được dùng và lỗi lọt sang UAT.",
        },
        {
          term: "Truyền thông tốt",
          note: "Cần rõ nội dung, kênh, tần suất, owner và cơ chế phản hồi/escalation.",
          example: "Bug nghiêm trọng gửi qua task board, tag owner, deadline 24h và escalation cho PM nếu quá hạn.",
        },
      ],
    },
    "Ba quy trình chính": {
      note:
        "Chú thích: planning trả lời 'ai cần gì'; managing trả lời 'gửi và lưu thế nào'; controlling trả lời 'thông tin có còn đúng nhu cầu không'.",
      example:
        "Ví dụ: nếu sponsor muốn dashboard hằng ngày thay vì báo cáo tuần, PM phải cập nhật communication plan.",
      items: [
        {
          term: "Plan communications management",
          note: "Xác định stakeholder cần thông tin gì, nhận qua đâu, tần suất nào và ai chịu trách nhiệm.",
          example: "Sponsor nhận báo cáo tuần; team dùng daily standup; người dùng nhận lịch UAT qua email.",
        },
        {
          term: "Manage communications",
          note: "Thực hiện tạo, gửi, lưu trữ, truy xuất và xử lý thông tin theo kế hoạch.",
          example: "PM gửi biên bản họp, lưu lên Drive và cập nhật issue log.",
        },
        {
          term: "Control communications",
          note: "Giám sát truyền thông có đáp ứng nhu cầu không và điều chỉnh nếu cần.",
          example: "Stakeholder nói email quá dài khó theo dõi; PM đổi sang dashboard 1 trang.",
        },
      ],
    },
    "Communication management plan": {
      note:
        "Chú thích: kế hoạch truyền thông tốt phải có yêu cầu stakeholder, nội dung, định dạng, người gửi, người nhận, công nghệ, tần suất và escalation.",
      example:
        "Ví dụ: issue blocker gửi ngay qua chat + gọi PM; báo cáo tuần gửi email PDF; tài liệu yêu cầu lưu trên drive chung.",
      items: [
        {
          term: "Stakeholder / audience",
          note: "Xác định ai cần nhận thông tin để tránh gửi thiếu hoặc gửi tràn lan.",
          example: "Sponsor cần tổng quan; developer cần task chi tiết; người dùng cần lịch UAT.",
        },
        {
          term: "Information needs",
          note: "Mỗi nhóm cần loại thông tin khác nhau về tiến độ, chi phí, rủi ro, issue hoặc quyết định.",
          example: "Sponsor cần rủi ro cao và quyết định cần duyệt, không cần từng bug nhỏ.",
        },
        {
          term: "Format and channel",
          note: "Chọn định dạng và kênh phù hợp với mức độ tương tác và lượng thông tin.",
          example: "Workshop cho yêu cầu mới; dashboard cho tiến độ; Wiki cho tài liệu dài.",
        },
        {
          term: "Frequency",
          note: "Quy định nhịp gửi thông tin: hằng ngày, hằng tuần, theo milestone hoặc khi có escalation.",
          example: "Daily standup mỗi sáng, weekly report thứ Sáu, báo issue nghiêm trọng trong 2 giờ.",
        },
        {
          term: "Owner / escalation",
          note: "Mỗi luồng thông tin cần người chịu trách nhiệm và đường leo thang khi vượt thẩm quyền.",
          example: "QA owner bug report; nếu bug blocker quá 24h thì escalation lên PM.",
        },
      ],
    },
    "Kênh và phương thức truyền thông": {
      note:
        "Chú thích: số kênh tăng theo công thức tổ hợp n(n-1)/2. Vì vậy thêm người không chỉ thêm công sức mà còn thêm độ phức tạp phối hợp.",
      example:
        "Ví dụ: 6 người có 15 kênh; 10 người có 45 kênh. Đây là lý do đội lớn cần quy trình báo cáo chặt hơn.",
      items: [
        {
          term: "Communication channels",
          note: "Số kênh giao tiếp giữa n người là n(n-1)/2, tăng rất nhanh khi thêm người.",
          example: "8 người có 8 x 7 / 2 = 28 kênh.",
        },
        {
          term: "Interactive",
          note: "Trao đổi hai chiều, hiệu quả khi cần hiểu nhau và ra quyết định.",
          example: "Họp xử lý xung đột yêu cầu giữa BA và developer.",
        },
        {
          term: "Push",
          note: "Gửi thông tin đến người nhận cụ thể, nhưng không đảm bảo họ đã hiểu.",
          example: "Email báo cáo tuần hoặc gửi biên bản họp cho sponsor.",
        },
        {
          term: "Pull",
          note: "Người nhận tự truy cập thông tin khi cần, phù hợp tài liệu lớn.",
          example: "Drive/SharePoint/Wiki chứa SRS, thiết kế, test case, lessons learned.",
        },
        {
          term: "Performance reporting",
          note: "Tổng hợp tình trạng dự án về scope, schedule, cost, quality, risk và issue.",
          example: "Weekly report ghi % hoàn thành, CPI/SPI, top risks và blocker.",
        },
      ],
    },
    "Quy trình báo cáo tiến độ": {
      note:
        "Chú thích từ slide tiếng Việt: status report cho biết dự án đang ở đâu; progress report cho biết nhóm đã làm gì trong một khoảng thời gian; forecast dự báo tương lai.",
      example:
        "Ví dụ: 'tuần này xong API đăng nhập' là progress; 'dự án đang chậm 5 ngày' là status; 'nếu không thêm tester sẽ trễ UAT' là forecast.",
      items: [
        {
          term: "Cập nhật của thành viên",
          note: "Thông tin đầu vào phải đủ việc đã làm, việc sắp làm, % hoàn thành, issue, risk và nhu cầu hỗ trợ.",
          example: "Developer báo API thanh toán xong 80%, còn blocker do cổng thanh toán đổi tài liệu.",
        },
        {
          term: "PM tổng hợp",
          note: "PM chuyển cập nhật rời rạc thành dashboard/weekly report dễ đọc cho stakeholder.",
          example: "PM tổng hợp task board thành báo cáo: đúng tiến độ, 2 issue mở, 1 risk cao.",
        },
        {
          term: "Issue log",
          note: "Issue quan trọng phải có owner, deadline, trạng thái và bước xử lý tiếp theo.",
          example: "Issue: vendor chậm API; owner: PM; deadline escalation: 17h hôm nay.",
        },
        {
          term: "Lưu trữ chung",
          note: "Tài liệu cần lưu ở PMIS/Drive/Wiki để truy vết và tránh mất thông tin trong chat.",
          example: "Biên bản họp và quyết định change request lưu vào thư mục Project Archives.",
        },
      ],
    },
  },
  risk: {
    "Khái niệm rủi ro": {
      note:
        "Chú thích: rủi ro có thể tiêu cực hoặc tích cực. Khi đã xảy ra thì gọi là issue, không còn là risk.",
      example:
        "Ví dụ: 'server có thể quá tải ngày mở đăng ký' là risk; 'server đã sập sáng nay' là issue.",
      items: [
        {
          term: "Threat",
          note: "Rủi ro tiêu cực, nếu xảy ra sẽ gây hại cho mục tiêu dự án.",
          example: "Mất dữ liệu khi chuyển đổi làm trễ bàn giao và tăng chi phí khôi phục.",
        },
        {
          term: "Opportunity",
          note: "Rủi ro tích cực, nếu xảy ra sẽ tạo lợi ích cho dự án.",
          example: "Vendor giảm giá license 20% nếu ký trước cuối tháng.",
        },
        {
          term: "Issue",
          note: "Vấn đề đã xảy ra, cần xử lý ngay; không còn là khả năng tương lai.",
          example: "Server production đã ngừng hoạt động trong buổi demo.",
        },
        {
          term: "Risk appetite / tolerance",
          note: "Appetite là mức rủi ro tổ chức sẵn sàng nhận; tolerance là ngưỡng cụ thể hơn.",
          example: "Ngân hàng có tolerance rất thấp với rủi ro mất dữ liệu khách hàng.",
        },
        {
          term: "Risk register",
          note: "Tài liệu sống ghi rủi ro, xác suất, tác động, trigger, response, owner và trạng thái.",
          example: "Risk register cập nhật rủi ro vendor chậm giao API sau mỗi tuần.",
        },
      ],
    },
    "Quy trình quản lý rủi ro": {
      note:
        "Chú thích từ bản tiếng Việt: chương này có 7 quy trình, gồm cả giám sát/kiểm soát rủi ro. Risk management là việc lặp lại trong suốt dự án, không làm một lần rồi bỏ.",
      example:
        "Ví dụ: sau mỗi sprint, team cập nhật risk register nếu API nhà cung cấp đổi deadline hoặc severity thay đổi.",
      items: [
        {
          term: "Plan risk management",
          note: "Quy định cách quản lý rủi ro: phương pháp, vai trò, ngân sách, thang đo và tần suất rà soát.",
          example: "PM quy định rủi ro High phải review hằng tuần và có owner rõ.",
        },
        {
          term: "Identify risks",
          note: "Tìm các rủi ro có thể xảy ra bằng brainstorming, checklist, interview, SWOT, assumptions analysis.",
          example: "Team brainstorming rủi ro dữ liệu cũ sai định dạng khi migration.",
        },
        {
          term: "Qualitative analysis",
          note: "Xếp ưu tiên rủi ro bằng xác suất và ảnh hưởng.",
          example: "Rủi ro bảo mật xác suất Medium, impact High nên ưu tiên cao.",
        },
        {
          term: "Quantitative analysis",
          note: "Lượng hóa rủi ro bằng tiền/số liệu như EMV, decision tree, simulation.",
          example: "Xác suất 10%, thiệt hại 200 triệu => EMV = 20 triệu.",
        },
        {
          term: "Plan risk responses",
          note: "Chọn cách phản ứng phù hợp với rủi ro và chi phí phản ứng.",
          example: "Mitigate bằng backup hằng ngày và diễn tập restore.",
        },
        {
          term: "Control risks",
          note: "Theo dõi trigger, residual risk, secondary risk và hiệu quả response trong suốt dự án.",
          example: "Sau khi thuê pentest, PM vẫn theo dõi rủi ro lỗ hổng mới phát sinh.",
        },
      ],
    },
    "Phân tích định tính": {
      note:
        "Chú thích: định tính là xếp ưu tiên nhanh bằng xác suất và tác động. Đề thi thường không cần mô hình phức tạp, nhưng cần bảng rõ ràng.",
      example:
        "Ví dụ: xác suất Cao, ảnh hưởng Cao => ưu tiên Cao; PM phải gán owner và biện pháp cụ thể.",
      items: [
        {
          term: "Probability",
          note: "Khả năng rủi ro xảy ra, có thể ghi Low/Medium/High hoặc phần trăm.",
          example: "Rủi ro người dùng thay đổi yêu cầu: xác suất 30%.",
        },
        {
          term: "Impact",
          note: "Mức tác động đến chi phí, tiến độ, phạm vi, chất lượng, bảo mật hoặc hài lòng.",
          example: "Mất dữ liệu có impact 200 triệu và ảnh hưởng uy tín.",
        },
        {
          term: "Risk score",
          note: "Điểm ưu tiên nếu dùng thang điểm: probability x impact.",
          example: "P = 0.3, impact = 80 triệu => score/EMV = 24 triệu.",
        },
        {
          term: "Trigger",
          note: "Dấu hiệu cảnh báo rủi ro sắp xảy ra.",
          example: "Vendor trễ phản hồi quá 3 ngày là trigger rủi ro giao API muộn.",
        },
        {
          term: "Response cụ thể",
          note: "Không chỉ ghi tên chiến lược; phải nói PM làm gì, ai làm, khi nào.",
          example: "Mitigate: backup dữ liệu hằng ngày, test restore mỗi tuần, owner là DBA.",
        },
      ],
    },
    "EMV và dự phòng": {
      note:
        "Chú thích: EMV chỉ là giá trị kỳ vọng, không phải số tiền chắc chắn mất. Nó giúp PM lý luận về contingency reserve.",
      example:
        "Ví dụ: xác suất mất dữ liệu 5%, thiệt hại 200 triệu => EMV = 10 triệu. Vẫn phải có backup/restore plan, không chỉ để 10 triệu.",
      items: [
        {
          term: "EMV",
          note: "Giá trị tiền tệ kỳ vọng bằng xác suất nhân tác động tiền tệ.",
          example: "15% x 40 triệu = 6 triệu.",
        },
        {
          term: "Thiệt hại",
          note: "Nếu impact là thiệt hại, EMV là chi phí kỳ vọng cần cân nhắc cho dự phòng.",
          example: "Rủi ro downtime có EMV 10 triệu, PM đề xuất contingency tương ứng.",
        },
        {
          term: "Tổng EMV",
          note: "Cộng EMV của các rủi ro ưu tiên để ước lượng contingency reserve.",
          example: "Ba rủi ro có EMV 6 + 10 + 4 = 20 triệu.",
        },
        {
          term: "Decision tree",
          note: "So sánh lựa chọn trong điều kiện không chắc chắn bằng EMV.",
          example: "So sánh thuê vendor A rẻ nhưng rủi ro cao với vendor B đắt nhưng ổn định hơn.",
        },
      ],
    },
    "Chiến lược phản ứng": {
      note:
        "Chú thích từ slide tiếng Việt: rủi ro tiêu cực có avoid, accept, transfer, mitigate, escalate; cơ hội có exploit, enhance, share, accept.",
      example:
        "Ví dụ: rủi ro bảo mật nghiêm trọng vượt thẩm quyền PM thì escalate lên steering committee hoặc CISO.",
      items: [
        {
          term: "Threat responses",
          note: "Rủi ro tiêu cực có thể avoid, mitigate, transfer hoặc accept.",
          example: "Transfer rủi ro thiết bị bằng điều khoản SLA/phạt trong hợp đồng vendor.",
        },
        {
          term: "Opportunity responses",
          note: "Cơ hội có thể exploit, enhance, share hoặc accept.",
          example: "Exploit cơ hội giảm giá bằng cách ký hợp đồng sớm nếu chắc chắn có lợi.",
        },
        {
          term: "Mitigate / Transfer",
          note: "Mitigate giảm xác suất/tác động; transfer chuyển một phần trách nhiệm/tài chính cho bên khác.",
          example: "Mitigate bằng kiểm thử sớm; transfer bằng bảo hiểm hoặc hợp đồng bảo hành.",
        },
        {
          term: "Accept",
          note: "Chấp nhận rủi ro, có thể thụ động theo dõi hoặc chủ động chuẩn bị contingency plan.",
          example: "Chấp nhận rủi ro nhỏ về đổi màu giao diện, chỉ xử lý nếu người dùng phản hồi.",
        },
        {
          term: "Fallback plan",
          note: "Kế hoạch dự phòng nếu response chính không hiệu quả.",
          example: "Nếu migration tự động lỗi, fallback là chuyển dữ liệu theo lô nhỏ và kiểm tra thủ công.",
        },
      ],
    },
  },
  procurement: {
    "Vai trò của mua sắm": {
      note:
        "Chú thích từ bản tiếng Việt: outsourcing không chỉ để tiết kiệm chi phí; lý do lớn là tiếp cận kỹ năng/công nghệ mà tổ chức thiếu.",
      example:
        "Ví dụ: thuê pentest bên ngoài vì team nội bộ không đủ chuyên môn kiểm thử bảo mật độc lập.",
      items: [
        {
          term: "Buyer / Seller",
          note: "Buyer là bên mua/thuê; seller là bên cung cấp hàng hóa hoặc dịch vụ.",
          example: "Trường đại học là buyer; công ty cung cấp máy quét mã vạch là seller.",
        },
        {
          term: "Make-or-buy analysis",
          note: "So sánh tự làm/tự mua với thuê ngoài dựa trên chi phí, năng lực, thời gian, rủi ro và chiến lược.",
          example: "Mua server nếu dùng trên 30 ngày rẻ hơn thuê theo ngày.",
        },
        {
          term: "Statement of Work",
          note: "Mô tả công việc/sản phẩm cần mua đủ rõ để seller hiểu, báo giá và thực hiện.",
          example: "SOW ghi số lượng máy quét, chuẩn kết nối, thời hạn giao, bảo hành và nghiệm thu.",
        },
        {
          term: "Ảnh hưởng procurement",
          note: "Mua sắm có thể ảnh hưởng tiến độ, chi phí, chất lượng và rủi ro dự án.",
          example: "Vendor giao thiết bị trễ làm chậm kiểm thử tích hợp.",
        },
      ],
    },
    "Các quy trình mua sắm": {
      note:
        "Chú thích: mua sắm có vòng đời riêng: plan, conduct, control, close. Khi seller làm xong vẫn cần nghiệm thu, lưu hồ sơ và lessons learned.",
      example:
        "Ví dụ: mua máy chủ cần SOW, RFQ/RFP, tiêu chí chọn nhà cung cấp, theo dõi giao hàng, nghiệm thu và đóng hợp đồng.",
      items: [
        {
          term: "Plan procurement management",
          note: "Xác định mua gì, khi nào, loại hợp đồng nào, tiêu chí chọn seller và tài liệu mua sắm.",
          example: "PM quyết định thuê dịch vụ SMS và dùng RFQ vì yêu cầu đã rõ.",
        },
        {
          term: "Conduct procurements",
          note: "Gửi RFP/RFQ, nhận proposal/quote, đánh giá seller và ký hợp đồng.",
          example: "Nhận 3 báo giá cloud, chấm theo giá, SLA, hỗ trợ và bảo mật.",
        },
        {
          term: "Control procurements",
          note: "Theo dõi hiệu suất hợp đồng, thay đổi, thanh toán, tranh chấp và quan hệ với seller.",
          example: "PM kiểm tra vendor có giao đúng SLA và xử lý change request bằng văn bản.",
        },
        {
          term: "Close procurements",
          note: "Xác nhận hoàn tất, nghiệm thu, thanh lý hợp đồng, lưu hồ sơ và lessons learned.",
          example: "Sau khi nghiệm thu máy chủ, PM lưu biên bản bàn giao và đóng hợp đồng.",
        },
      ],
    },
    "Loại hợp đồng": {
      note:
        "Chú thích: fixed-price chuyển nhiều rủi ro chi phí cho seller; cost-reimbursable chuyển nhiều rủi ro cho buyer; T&M linh hoạt nhưng dễ vượt nếu không có trần.",
      example:
        "Ví dụ: phạm vi rõ như mua 20 máy quét dùng fixed-price; nghiên cứu tích hợp chưa rõ dùng T&M/CPIF nhưng phải kiểm soát.",
      items: [
        {
          term: "Fixed-price",
          note: "Giá cố định cho phạm vi rõ; seller chịu rủi ro chi phí nhiều hơn.",
          example: "Mua 30 máy quét barcode với giá cố định 90 triệu.",
        },
        {
          term: "Cost-reimbursable",
          note: "Buyer hoàn chi phí hợp lệ cộng fee; phù hợp khi phạm vi chưa rõ nhưng buyer chịu rủi ro cao hơn.",
          example: "Thuê nghiên cứu tích hợp hệ thống cũ, trả chi phí thực tế cộng fee.",
        },
        {
          term: "Time and Material",
          note: "Trả theo giờ/ngày công và vật tư; linh hoạt nhưng cần trần chi phí hoặc kiểm soát chặt.",
          example: "Thuê chuyên gia bảo mật 10 ngày x 5 triệu/ngày.",
        },
        {
          term: "Incentive fee",
          note: "Chia sẻ tiết kiệm/vượt chi phí để khuyến khích seller tối ưu hiệu suất.",
          example: "Target Cost 100, tiết kiệm 10, seller share 20% thì seller được thưởng 2.",
        },
        {
          term: "CPFF / CPIF / FPIF",
          note: "CPFF fee cố định; CPIF fee thay đổi theo incentive; FPIF có target cost, target fee và sharing ratio.",
          example: "Đề thi thường cho Target Cost, Target Fee, Actual Cost, sharing ratio rồi tính Final Fee.",
        },
      ],
    },
    "Tài liệu và chọn nhà cung cấp": {
      note:
        "Chú thích từ slide tiếng Việt: SOW mô tả công việc; RFP xin đề xuất giải pháp; RFQ xin báo giá khi hàng/dịch vụ đã rõ.",
      example:
        "Ví dụ: 'hãy đề xuất giải pháp lưu trữ bệnh án' là RFP; 'báo giá 2 server cấu hình X' là RFQ.",
      items: [
        {
          term: "RFP / RFQ",
          note: "RFP dùng khi cần giải pháp; RFQ dùng khi yêu cầu đã rõ và cần báo giá.",
          example: "RFP cho giải pháp e-learning; RFQ cho 100 tài khoản SMS gateway.",
        },
        {
          term: "Source selection criteria",
          note: "Tiêu chí chọn seller gồm giá, kỹ thuật, kinh nghiệm, năng lực, rủi ro, bảo hành, hỗ trợ.",
          example: "Chấm vendor theo 40% kỹ thuật, 30% giá, 20% kinh nghiệm, 10% hỗ trợ.",
        },
        {
          term: "Bidder conference",
          note: "Buổi trao đổi để các seller nhận cùng thông tin, giảm hiểu sai và tránh thiên vị.",
          example: "PM tổ chức Q&A chung để mọi vendor đều biết yêu cầu bảo mật mới.",
        },
        {
          term: "Procurement negotiations",
          note: "Đàm phán để làm rõ phạm vi, trách nhiệm, giá, thanh toán, thay đổi và nghiệm thu.",
          example: "Đàm phán điều khoản phạt nếu giao máy chủ trễ quá 5 ngày.",
        },
      ],
    },
    "Tính incentive fee": {
      note:
        "Chú thích: sharing ratio luôn đọc theo Buyer/Seller. Khi tính fee của seller thì dùng phần Seller share, không dùng phần Buyer.",
      example:
        "Ví dụ: 80/20 Buyer/Seller, Target Cost 100, Actual Cost 90, Target Fee 12 => seller được cộng 20% x 10 = 2, Final Fee = 14.",
      items: [
        {
          term: "Cost difference",
          note: "Chênh lệch chi phí = Target Cost - Actual Cost.",
          example: "TC 100, AC 90 => chênh lệch = 10 triệu.",
        },
        {
          term: "Actual Cost thấp hơn Target Cost",
          note: "Seller được thưởng thêm phần Seller share của khoản tiết kiệm.",
          example: "Tiết kiệm 10, seller share 20% => cộng 2 triệu vào fee.",
        },
        {
          term: "Actual Cost cao hơn Target Cost",
          note: "Seller bị giảm fee theo phần Seller share của khoản vượt chi phí.",
          example: "Vượt 20, seller share 30% => trừ 6 triệu khỏi target fee.",
        },
        {
          term: "Final Fee",
          note: "Fee cuối cùng seller nhận sau khi cộng/trừ incentive.",
          example: "Target Fee 12 + 2 thưởng = Final Fee 14 triệu.",
        },
        {
          term: "Final Price",
          note: "Giá cuối buyer trả = Actual Cost + Final Fee nếu đề không cho ceiling price.",
          example: "AC 90 + Final Fee 14 = Final Price 104 triệu.",
        },
      ],
    },
  },
  stakeholders: {
    "Stakeholder là ai": {
      note:
        "Chú thích: stakeholder không chỉ là người ký tiền. Người dùng cuối, vendor, phòng vận hành, pháp chế hoặc nhóm phản đối đều có thể ảnh hưởng dự án.",
      example:
        "Ví dụ: phụ huynh trong app sổ liên lạc là stakeholder vì họ quyết định mức chấp nhận sản phẩm.",
      items: [
        {
          term: "Ví dụ stakeholder",
          note: "Stakeholder là cá nhân/nhóm/tổ chức ảnh hưởng hoặc bị ảnh hưởng bởi dự án.",
          example: "Sponsor, PM, team, vendor, phụ huynh, học sinh, phòng vận hành, pháp chế.",
        },
        {
          term: "Người phản đối",
          note: "Stakeholder không chỉ là người ủng hộ; nhóm phản đối càng cần được hiểu và quản lý.",
          example: "Giáo viên phản đối app mới vì sợ tăng việc nhập liệu.",
        },
        {
          term: "Lợi ích quản lý stakeholder",
          note: "Quản lý tốt giúp giảm thay đổi bất ngờ, tăng chấp nhận sản phẩm và bảo vệ mục tiêu dự án.",
          example: "Mời người dùng tham gia UAT sớm để giảm phản đối lúc nghiệm thu.",
        },
      ],
    },
    "Các quy trình stakeholder": {
      note:
        "Chú thích: quản lý stakeholder là nhận diện, lập chiến lược, gắn kết và kiểm soát mức tham gia. Trọng tâm là kỳ vọng và sự ủng hộ.",
      example:
        "Ví dụ: stakeholder mới xuất hiện sau khi thay đổi quy định dữ liệu thì PM phải cập nhật register và communication plan.",
      items: [
        {
          term: "Identify stakeholders",
          note: "Nhận diện stakeholder và ghi vào stakeholder register, kèm kỳ vọng và mức ảnh hưởng.",
          example: "Thêm phòng pháp chế vào register vì dự án xử lý dữ liệu cá nhân.",
        },
        {
          term: "Plan stakeholder management",
          note: "Chọn chiến lược gắn kết phù hợp cho từng nhóm.",
          example: "Sponsor manage closely; người dùng keep informed và mời demo định kỳ.",
        },
        {
          term: "Manage stakeholder engagement",
          note: "Giao tiếp, xử lý kỳ vọng, giải quyết issue và tăng sự ủng hộ.",
          example: "PM họp với nhóm phản đối để giải thích lợi ích và nhận phản hồi.",
        },
        {
          term: "Control stakeholder engagement",
          note: "Theo dõi mức tham gia hiện tại và điều chỉnh kế hoạch khi quan hệ thay đổi.",
          example: "Stakeholder từ neutral chuyển sang resistant sau thay đổi scope, PM cập nhật chiến lược.",
        },
      ],
    },
    "Công cụ phân tích": {
      note:
        "Chú thích từ bản tiếng Việt: Power/Interest Grid có 4 ô: manage closely, keep satisfied, keep informed, monitor.",
      example:
        "Ví dụ: sponsor quyền lực cao/quan tâm cao => manage closely; người dùng quyền lực thấp/quan tâm cao => keep informed.",
      items: [
        {
          term: "Power/Interest grid",
          note: "Phân loại theo quyền lực và mức quan tâm; nhóm cao/cao cần quản lý chặt.",
          example: "Sponsor có quyền duyệt ngân sách và quan tâm cao => manage closely.",
        },
        {
          term: "Power/Influence hoặc Influence/Impact",
          note: "Dùng khi cần nhìn khả năng tác động hoặc mức ảnh hưởng đến kết quả dự án.",
          example: "Trưởng phòng vận hành có influence cao vì quyết định đội có dùng hệ thống hay không.",
        },
        {
          term: "Salience model",
          note: "Xét power, legitimacy và urgency để biết stakeholder nào cần ưu tiên.",
          example: "Cơ quan quản lý có legitimacy và urgency cao khi yêu cầu tuân thủ bảo mật.",
        },
        {
          term: "Stakeholder register",
          note: "Danh mục lưu thông tin nhận dạng, kỳ vọng, ảnh hưởng, thái độ và chiến lược.",
          example: "Register ghi phụ huynh cần hướng dẫn dùng app và kênh hỗ trợ sau triển khai.",
        },
      ],
    },
    "Engagement assessment matrix": {
      note:
        "Chú thích: ma trận này so sánh hiện tại và mong muốn. Nếu stakeholder hiện tại Resistant nhưng mong muốn Supportive, PM phải có kế hoạch chuyển đổi.",
      example:
        "Ví dụ: phòng vận hành sợ tăng việc sau triển khai, PM cần demo lợi ích, đào tạo và cam kết hỗ trợ giai đoạn đầu.",
      items: [
        {
          term: "Unaware",
          note: "Chưa biết dự án hoặc tác động của dự án đến mình.",
          example: "Nhân viên thư viện chưa được thông báo sẽ dùng hệ thống mới.",
        },
        {
          term: "Resistant",
          note: "Biết dự án nhưng phản đối hoặc lo ngại thay đổi.",
          example: "Người dùng phản đối vì sợ phải nhập dữ liệu nhiều hơn.",
        },
        {
          term: "Neutral",
          note: "Biết dự án nhưng chưa ủng hộ cũng chưa phản đối.",
          example: "Một phòng ban chờ xem demo rồi mới có ý kiến.",
        },
        {
          term: "Supportive",
          note: "Ủng hộ mục tiêu và sẵn sàng hợp tác.",
          example: "Sponsor duyệt nguồn lực và hỗ trợ PM xử lý blocker.",
        },
        {
          term: "Leading",
          note: "Chủ động thúc đẩy dự án thành công, không chỉ ủng hộ thụ động.",
          example: "Trưởng khoa vận động giáo viên tham gia UAT và góp ý quy trình.",
        },
      ],
    },
    "Chiến lược gắn kết": {
      note:
        "Chú thích từ slide tiếng Việt: stakeholder management plan có thể chứa thông tin nhạy cảm nên không phải lúc nào cũng công khai toàn bộ.",
      example:
        "Ví dụ: chiến lược xử lý một trưởng phòng phản đối dự án nên được PM và sponsor quản lý kín, không đưa vào tài liệu chung cho toàn bộ stakeholder.",
      items: [
        {
          term: "Sponsor",
          note: "Cần thông tin để ra quyết định về scope, time, cost, risk và thay đổi.",
          example: "PM gửi weekly report có CPI/SPI, top risks và quyết định cần duyệt.",
        },
        {
          term: "Người dùng",
          note: "Cần đào tạo, hướng dẫn, kênh phản hồi và cơ hội thử nghiệm chấp nhận.",
          example: "Tổ chức demo và UAT cho giáo viên/phụ huynh trước khi go-live.",
        },
        {
          term: "Nhóm phản đối",
          note: "Cần lắng nghe nguyên nhân, minh bạch tác động và đưa họ vào quá trình thay đổi.",
          example: "PM phỏng vấn nhóm lo ngại tăng tải công việc rồi điều chỉnh quy trình nhập liệu.",
        },
        {
          term: "Vendor",
          note: "Cần hợp đồng rõ, tiêu chí nghiệm thu, nhịp họp kiểm soát và kênh escalation.",
          example: "Họp kỹ thuật hằng tuần với vendor, theo dõi SLA và biên bản giao hàng.",
        },
      ],
    },
  },
};

export const formulas = [
  {
    id: "channels",
    chapter: 10,
    name: "Communication channels",
    formula: "n(n - 1) / 2",
    meaning: "Số kênh giao tiếp giữa n người.",
    example: "7 người: 7 x 6 / 2 = 21 kênh.",
  },
  {
    id: "pv",
    chapter: 7,
    name: "Planned Value",
    formula: "PV = BAC x % planned complete",
    meaning: "Giá trị kế hoạch phải đạt tại thời điểm đo.",
    example: "BAC 200 triệu, kế hoạch 50%: PV = 100 triệu.",
  },
  {
    id: "ev",
    chapter: 7,
    name: "Earned Value",
    formula: "EV = BAC x % actual complete",
    meaning: "Giá trị của khối lượng thực tế đã hoàn thành.",
    example: "BAC 200 triệu, thực tế 45%: EV = 90 triệu.",
  },
  {
    id: "cpi",
    chapter: 7,
    name: "Cost Performance Index",
    formula: "CPI = EV / AC",
    meaning: "Hiệu suất chi phí; < 1 là vượt ngân sách.",
    example: "EV 90, AC 120: CPI = 0.75.",
  },
  {
    id: "spi",
    chapter: 7,
    name: "Schedule Performance Index",
    formula: "SPI = EV / PV",
    meaning: "Hiệu suất tiến độ; < 1 là chậm tiến độ.",
    example: "EV 90, PV 100: SPI = 0.90.",
  },
  {
    id: "cv",
    chapter: 7,
    name: "Cost Variance",
    formula: "CV = EV - AC",
    meaning: "Sai lệch chi phí; âm là bất lợi.",
    example: "EV 90, AC 120: CV = -30 triệu.",
  },
  {
    id: "sv",
    chapter: 7,
    name: "Schedule Variance",
    formula: "SV = EV - PV",
    meaning: "Sai lệch tiến độ theo giá trị; âm là chậm.",
    example: "EV 90, PV 100: SV = -10 triệu.",
  },
  {
    id: "eac-cpi",
    chapter: 7,
    name: "Estimate at Completion",
    formula: "EAC = AC + (BAC - EV) / CPI = BAC / CPI",
    meaning: "Dự báo tổng chi phí nếu hiệu suất chi phí hiện tại tiếp diễn.",
    example: "BAC 120, EV 50, AC 70, CPI 0.71: ETC ≈ 98.6, EAC ≈ 168.6 triệu.",
  },
  {
    id: "etc",
    chapter: 7,
    name: "Estimate to Complete",
    formula: "ETC = (BAC - EV) / CPI = EAC - AC",
    meaning: "Chi phí còn cần để hoàn thành.",
    example: "BAC 120, EV 50, CPI 0.71: ETC ≈ 98.6 triệu.",
  },
  {
    id: "vac",
    chapter: 7,
    name: "Variance at Completion",
    formula: "VAC = BAC - EAC",
    meaning: "Dự báo chênh lệch ngân sách khi hoàn thành.",
    example: "BAC 200, EAC 250: VAC = -50 triệu.",
  },
  {
    id: "eac-plan",
    chapter: 7,
    name: "EAC nếu phần còn lại đúng kế hoạch",
    formula: "EAC = AC + (BAC - EV)",
    meaning: "Dự báo tổng chi phí khi các sai lệch hiện tại không tiếp diễn trong tương lai.",
    example: "BAC 200, EV 90, AC 120: EAC = 120 + 110 = 230 triệu.",
  },
  {
    id: "tcpi-bac",
    chapter: 7,
    name: "To-Complete Performance Index",
    formula: "TCPI = (BAC - EV) / (EAC - AC) hoặc (BAC - EV) / (BAC - AC)",
    meaning: "Hiệu suất chi phí cần đạt ở phần còn lại theo mục tiêu EAC dự báo hoặc BAC ban đầu.",
    example: "Theo EAC thầy giải: TCPI = (BAC - EV)/(EAC - AC), thường xấp xỉ CPI nếu EAC tính từ CPI.",
  },
  {
    id: "risk-score",
    chapter: 11,
    name: "Qualitative risk score",
    formula: "Risk Score = Probability x Impact",
    meaning: "Điểm ưu tiên rủi ro trong phân tích định tính.",
    example: "Xác suất 0.4, ảnh hưởng 5/5: score = 2.0, ưu tiên cao.",
  },
  {
    id: "emv",
    chapter: 11,
    name: "Expected Monetary Value",
    formula: "EMV = Probability x Impact",
    meaning: "Giá trị tiền tệ kỳ vọng của rủi ro.",
    example: "Xác suất 15%, thiệt hại 40 triệu: EMV = 6 triệu.",
  },
  {
    id: "make-buy",
    chapter: 12,
    name: "Make-or-Buy break-even",
    formula: "Buy fixed + Buy variable x d = Rent rate x d",
    meaning: "Tìm số ngày/số lượng hòa vốn giữa tự mua và thuê ngoài.",
    example: "12.000 + 400d = 800d => d = 30 ngày; trên 30 ngày thì mua kinh tế hơn.",
  },
  {
    id: "target-price",
    chapter: 12,
    name: "Incentive target price",
    formula: "Target Price = Target Cost + Target Fee",
    meaning: "Giá mục tiêu ban đầu trước khi điều chỉnh theo tiết kiệm hoặc vượt chi phí.",
    example: "Target Cost 54, Target Fee 5: Target Price = 59 triệu.",
  },
  {
    id: "incentive",
    chapter: 12,
    name: "Incentive final fee",
    formula: "Final Fee = Target Fee + Seller Share x (Target Cost - Actual Cost)",
    meaning: "Fee thực nhận của seller trong hợp đồng incentive.",
    example: "TC 100, TF 12, share seller 20%, AC 90: Final Fee = 14 triệu.",
  },
  {
    id: "final-price",
    chapter: 12,
    name: "Incentive final price",
    formula: "Final Price = Actual Cost + Final Fee",
    meaning: "Giá cuối cùng buyer trả cho seller trong dạng đề incentive không có ceiling price.",
    example: "AC 90, Final Fee 14: Final Price = 104 triệu.",
  },
];

export const formulaEquivalents = [
  {
    id: "eac-current-cpi",
    chapter: 7,
    title: "EAC khi hiệu suất chi phí hiện tại tiếp diễn",
    sourceStatus: "Có trong slide",
    sourceNote:
      "Slide tiếng Anh có EAC = BAC / CPI. Bài giải mẫu của thầy trình bày theo dạng tương đương: ETC = (BAC - EV) / CPI, rồi EAC = AC + ETC.",
    formulas: [
      "EAC = BAC / CPI",
      "EAC = AC + (BAC - EV) / CPI",
      "ETC = EAC - AC = (BAC - EV) / CPI",
    ],
    explanation:
      "Hai công thức EAC đầu tương đương vì CPI = EV / AC. Chúng cùng giả định phần việc còn lại sẽ tiếp tục có hiệu suất chi phí giống hiện tại.",
    useWhen:
      "Dùng khi CPI hiện tại phản ánh xu hướng thật của dự án, ví dụ team ước tính thấp, năng suất thấp, lỗi kỹ thuật kéo dài hoặc cách làm hiện tại sẽ tiếp tục.",
    warning:
      "Khi đi thi nên viết theo cách thầy: ETC trước, EAC = AC + ETC, VAC = BAC - EAC. Có thể ghi thêm EAC = BAC / CPI là công thức tương đương.",
  },
  {
    id: "eac-plan",
    chapter: 7,
    title: "EAC khi phần còn lại làm đúng kế hoạch",
    sourceStatus: "Bổ sung",
    sourceNote:
      "Không thấy công thức này trong slide đã trích. Đây là biến thể EVM chuẩn, chỉ nên dùng khi đề nói phần còn lại theo đúng kế hoạch.",
    formulas: ["EAC = AC + (BAC - EV)", "ETC = BAC - EV"],
    explanation:
      "Công thức này bỏ qua CPI cho phần còn lại. Nó chỉ cộng chi phí đã chi với ngân sách của phần việc chưa hoàn thành.",
    useWhen:
      "Dùng khi sai lệch hiện tại là sự kiện một lần và không lặp lại, hoặc đề nói rõ 'các sai lệch hiện tại sẽ không tiếp diễn' / 'phần còn lại theo đúng kế hoạch'.",
    warning:
      "Không dùng công thức này nếu đề nói hiệu suất hiện tại tiếp tục hoặc đề cho CPI để dự báo.",
  },
  {
    id: "eac-bottom-up",
    chapter: 7,
    title: "EAC khi cần ước tính lại từ đầu phần còn lại",
    sourceStatus: "Bổ sung",
    sourceNote:
      "Slide có nói bottom-up estimate ở phần ước tính chi phí, nhưng không ghi công thức EAC = AC + Bottom-up ETC.",
    formulas: ["EAC = AC + Bottom-up ETC", "ETC = ước tính mới cho phần việc còn lại"],
    explanation:
      "Đây không phải biến đổi đại số từ CPI. PM tự ước tính lại phần còn lại bằng dữ liệu mới rồi cộng với AC.",
    useWhen:
      "Dùng khi kế hoạch cũ không còn đáng tin, phạm vi/giải pháp thay đổi lớn, hoặc team có estimate mới chi tiết cho remaining work.",
    warning:
      "Trong đề thi ngắn 60 phút thường ít dùng nếu đề không cho 'ETC mới' hoặc dữ liệu ước tính lại.",
  },
  {
    id: "eac-cpi-spi",
    chapter: 7,
    title: "EAC khi cả chi phí và tiến độ cùng ảnh hưởng",
    sourceStatus: "Bổ sung",
    sourceNote:
      "Không thấy trong slide. Đây là biến thể nâng cao, không nên ưu tiên nếu đề thi chỉ theo công thức thầy cho.",
    formulas: ["EAC = AC + (BAC - EV) / (CPI x SPI)"],
    explanation:
      "Biến thể này phạt cả hiệu suất chi phí và hiệu suất tiến độ. Nó thường cho dự báo thận trọng hơn khi chậm tiến độ kéo theo tăng chi phí.",
    useWhen:
      "Dùng khi đề hoặc bối cảnh nói rõ schedule pressure làm tăng chi phí tương lai, ví dụ phải OT, thuê thêm người, hoặc chậm tiến độ gây chi phí kéo dài.",
    warning:
      "Không tự dùng trong đề mẫu nếu thầy chỉ yêu cầu công thức cơ bản và không nhắc CPI x SPI.",
  },
  {
    id: "tcpi-target",
    chapter: 7,
    title: "TCPI theo mục tiêu BAC hoặc EAC",
    sourceStatus: "Một phần",
    sourceNote:
      "Slide tiếng Anh trang 30 chỉ nêu tên TCPI, nhưng text trích không có công thức TCPI. Công thức ở đây là bổ sung chuẩn EVM.",
    formulas: ["TCPI = (BAC - EV) / (BAC - AC)", "TCPI = (BAC - EV) / (EAC - AC)"],
    explanation:
      "TCPI không dự báo tổng chi phí; nó cho biết phần còn lại phải đạt hiệu suất chi phí bao nhiêu để chạm một mục tiêu. Nếu dùng mục tiêu EAC đã dự báo từ CPI, kết quả thường xấp xỉ CPI như bài thầy giải.",
    useWhen:
      "Dùng mẫu EAC nếu đề/bài giải đã tính EAC rồi hỏi TCPI theo dự toán mới. Dùng mẫu BAC nếu hỏi rõ hiệu suất cần đạt để vẫn hoàn thành trong ngân sách ban đầu.",
    warning:
      "TCPI > 1 nghĩa là phần còn lại phải làm hiệu quả hơn mức 1.0; càng cao càng khó đạt.",
  },
  {
    id: "variance-vs-index",
    chapter: 7,
    title: "CV/SV và CPI/SPI không tương đương nhưng đọc cùng một vấn đề",
    sourceStatus: "Có trong slide",
    sourceNote:
      "Slide tiếng Anh trang 26-27 có SPI, SV, CPI, CV; bản tiếng Việt chương 7 có CPI và SPI.",
    formulas: ["CV = EV - AC; CPI = EV / AC", "SV = EV - PV; SPI = EV / PV"],
    explanation:
      "CV/SV cho biết lệch bao nhiêu tiền/giá trị tuyệt đối. CPI/SPI cho biết hiệu suất tương đối theo tỷ lệ.",
    useWhen:
      "Dùng CV/SV để nói mức lệch cụ thể, ví dụ chậm 30 triệu giá trị. Dùng CPI/SPI để kết luận nhanh tốt/xấu và so sánh giữa dự án lớn nhỏ.",
    warning:
      "Kết luận phải tách hai trục: CPI/CV là chi phí, SPI/SV là tiến độ.",
  },
  {
    id: "pv-ev-percent",
    chapter: 7,
    title: "PV và EV đều nhân BAC nhưng khác loại phần trăm",
    sourceStatus: "Có trong slide",
    sourceNote:
      "Slide tiếng Anh trang 20-23 có PV = BAC x % planned và EV = % actual x BAC; bản tiếng Việt có định nghĩa PV, EV, AC.",
    formulas: ["PV = BAC x % planned complete", "EV = BAC x % actual complete"],
    explanation:
      "Chúng nhìn giống nhau nhưng không thay thế được nhau. PV dùng phần trăm kế hoạch; EV dùng phần trăm thực tế hoàn thành.",
    useWhen:
      "Dùng PV khi đề nói 'theo kế hoạch đến thời điểm này phải xong'. Dùng EV khi đề nói 'thực tế hoàn thành'.",
    warning:
      "Đây là lỗi sai phổ biến nhất trong bài EVM: lấy % thực tế đi tính PV hoặc lấy % kế hoạch đi tính EV.",
  },
];

export const flashcards = [
  {
    id: "cost-1",
    chapterId: "cost",
    front: "PV và EV khác nhau ở đâu?",
    back: "PV dùng % kế hoạch phải hoàn thành; EV dùng % thực tế đã hoàn thành. Cả hai đều nhân với BAC.",
  },
  {
    id: "cost-2",
    chapterId: "cost",
    front: "CPI = 0.82 nói gì về dự án?",
    back: "CPI < 1 nghĩa là dự án đang vượt ngân sách: chi phí thực tế cao hơn giá trị công việc tạo ra.",
  },
  {
    id: "cost-3",
    chapterId: "cost",
    front: "SPI = 1.12 nói gì về tiến độ?",
    back: "SPI > 1 nghĩa là hoàn thành nhiều giá trị hơn kế hoạch tại thời điểm đo, tức đang nhanh hơn kế hoạch.",
  },
  {
    id: "cost-4",
    chapterId: "cost",
    front: "Khi nào dùng EAC = BAC / CPI?",
    back: "Khi giả định hiệu suất chi phí hiện tại sẽ tiếp diễn cho phần còn lại của dự án.",
  },
  {
    id: "cost-5",
    chapterId: "cost",
    front: "VAC âm nghĩa là gì?",
    back: "VAC = BAC - EAC. VAC âm nghĩa là EAC lớn hơn BAC, dự án dự báo vượt ngân sách.",
  },
  {
    id: "hr-1",
    chapterId: "hr",
    front: "Trong RACI, một công việc nên có bao nhiêu Accountable?",
    back: "Đúng một Accountable để tránh mơ hồ trách nhiệm phê duyệt cuối cùng.",
  },
  {
    id: "hr-2",
    chapterId: "hr",
    front: "Storming trong Tuckman cần PM làm gì?",
    back: "Làm rõ vai trò, lắng nghe xung đột, giải quyết vấn đề, thống nhất quy tắc phối hợp và ưu tiên.",
  },
  {
    id: "hr-3",
    chapterId: "hr",
    front: "Khi nào phong cách autocratic hợp lý?",
    back: "Khi khẩn cấp, bảo mật/an toàn cao, deadline gấp, đội thiếu kinh nghiệm hoặc cần quyết định tập trung.",
  },
  {
    id: "hr-4",
    chapterId: "hr",
    front: "Consulted và Informed khác nhau thế nào?",
    back: "Consulted là trao đổi hai chiều để lấy ý kiến; Informed là cập nhật một chiều.",
  },
  {
    id: "communications-1",
    chapterId: "communications",
    front: "Công thức số kênh truyền thông là gì?",
    back: "n(n-1)/2, với n là số người trong mạng truyền thông.",
  },
  {
    id: "communications-2",
    chapterId: "communications",
    front: "Pull communication phù hợp khi nào?",
    back: "Khi thông tin lớn hoặc không cần gửi trực tiếp, ví dụ wiki, drive, dashboard, repository.",
  },
  {
    id: "communications-3",
    chapterId: "communications",
    front: "Một weekly status report nên có gì?",
    back: "Việc đã làm, kế hoạch tuần tới, % hoàn thành, issue, rủi ro, nhu cầu hỗ trợ, owner và deadline.",
  },
  {
    id: "risk-1",
    chapterId: "risk",
    front: "Risk khác issue thế nào?",
    back: "Risk là sự kiện chưa chắc xảy ra; issue là vấn đề đã xảy ra và cần xử lý.",
  },
  {
    id: "risk-2",
    chapterId: "risk",
    front: "EMV được tính như thế nào?",
    back: "EMV = xác suất x tác động tiền tệ. Ví dụ 5% x 200 triệu = 10 triệu.",
  },
  {
    id: "risk-3",
    chapterId: "risk",
    front: "Mitigate và transfer khác nhau thế nào?",
    back: "Mitigate giảm xác suất/ảnh hưởng; transfer chuyển trách nhiệm hoặc tác động tài chính cho bên khác như bảo hiểm/hợp đồng.",
  },
  {
    id: "procurement-1",
    chapterId: "procurement",
    front: "Sharing ratio 80/20 Buyer/Seller, dùng phần nào để tính Final Fee của seller?",
    back: "Dùng phần Seller: 20%. Buyer share không dùng để cộng/trừ fee của seller.",
  },
  {
    id: "procurement-2",
    chapterId: "procurement",
    front: "Actual Cost thấp hơn Target Cost thì Final Fee thay đổi thế nào?",
    back: "Seller được thưởng thêm Seller share của phần tiết kiệm.",
  },
  {
    id: "procurement-3",
    chapterId: "procurement",
    front: "Final Price trong dạng đề incentive được tính thế nào?",
    back: "Final Price = Actual Cost + Final Fee, nếu đề không cho ceiling price hoặc điều kiện khác.",
  },
  {
    id: "stakeholders-1",
    chapterId: "stakeholders",
    front: "Power/Interest cao-cao nên quản lý thế nào?",
    back: "Manage closely: giao tiếp sát, tham gia quyết định quan trọng, xử lý kỳ vọng và rủi ro sớm.",
  },
  {
    id: "stakeholders-2",
    chapterId: "stakeholders",
    front: "Resistant stakeholder là gì?",
    back: "Người biết dự án nhưng phản đối hoặc không ủng hộ thay đổi/mục tiêu dự án.",
  },
  {
    id: "stakeholders-3",
    chapterId: "stakeholders",
    front: "Stakeholder register nên có các thông tin nào?",
    back: "Tên/nhóm, vai trò, kỳ vọng, mức ảnh hưởng, thái độ hiện tại, nhu cầu thông tin và chiến lược gắn kết.",
  },
  {
    id: "cost-6",
    chapterId: "cost",
    front: "TCPI cho biết điều gì?",
    back: "TCPI cho biết hiệu suất chi phí cần đạt ở phần còn lại. Theo bài thầy giải sau khi có EAC: TCPI = (BAC - EV)/(EAC - AC). Nếu hỏi giữ BAC ban đầu thì dùng (BAC - EV)/(BAC - AC).",
  },
  {
    id: "cost-7",
    chapterId: "cost",
    front: "Khi đề nói phần còn lại làm đúng kế hoạch, EAC nên tính thế nào?",
    back: "Dùng EAC = AC + (BAC - EV), vì chỉ cộng chi phí thực tế đã chi với ngân sách còn lại theo kế hoạch.",
  },
  {
    id: "cost-8",
    chapterId: "cost",
    front: "CV âm và SV âm khác nhau thế nào?",
    back: "CV âm là bất lợi về chi phí: EV < AC. SV âm là bất lợi về tiến độ: EV < PV.",
  },
  {
    id: "cost-9",
    chapterId: "cost",
    front: "Cost baseline là gì?",
    back: "Cost baseline là ngân sách được phân bổ theo thời gian, dùng làm mốc đo hiệu suất chi phí.",
  },
  {
    id: "cost-10",
    chapterId: "cost",
    front: "Analogous, bottom-up và parametric khác nhau thế nào?",
    back: "Analogous dựa dự án tương tự; bottom-up cộng từ work package nhỏ; parametric dùng mô hình/tham số như chi phí mỗi màn hình.",
  },
  {
    id: "cost-11",
    chapterId: "cost",
    front: "Sunk cost có nên dùng để quyết định tiếp tục dự án không?",
    back: "Không. Sunk cost là tiền đã mất trong quá khứ, không nên chi phối quyết định tương lai.",
  },
  {
    id: "hr-5",
    chapterId: "hr",
    front: "Resource leveling là gì?",
    back: "Là kỹ thuật trì hoãn hoặc điều chỉnh nhiệm vụ để xử lý xung đột nguồn lực, giảm quá tải và làm mức sử dụng nhân sự ổn định hơn.",
  },
  {
    id: "hr-6",
    chapterId: "hr",
    front: "Resource histogram dùng để làm gì?",
    back: "Dùng để hiển thị số lượng hoặc mức sử dụng nguồn lực theo thời gian, giúp PM thấy giai đoạn nào thiếu hoặc quá tải nhân sự.",
  },
  {
    id: "hr-7",
    chapterId: "hr",
    front: "Động lực nội tại và bên ngoài khác nhau thế nào?",
    back: "Nội tại đến từ hứng thú, ý nghĩa, phát triển bản thân; bên ngoài đến từ thưởng, phạt, lương, điểm số hoặc áp lực.",
  },
  {
    id: "hr-8",
    chapterId: "hr",
    front: "Groupthink là gì và nguy hiểm ở đâu?",
    back: "Groupthink là đồng thuận quá mức, ít phản biện. Nó nguy hiểm vì nhóm có thể bỏ qua rủi ro hoặc phương án tốt hơn.",
  },
  {
    id: "hr-9",
    chapterId: "hr",
    front: "Xung đột nhiệm vụ có luôn xấu không?",
    back: "Không. Xung đột nhiệm vụ có thể giúp tìm giải pháp tốt nếu tập trung vào dữ liệu và mục tiêu; xung đột cảm xúc mới thường gây hại.",
  },
  {
    id: "hr-10",
    chapterId: "hr",
    front: "OBS và WBS khác nhau thế nào?",
    back: "WBS phân rã công việc/deliverable; OBS phân rã tổ chức/nhóm/người chịu trách nhiệm.",
  },
  {
    id: "hr-11",
    chapterId: "hr",
    front: "Quy trình tuyển dụng và phát triển đội dự án CNTT nên nêu những bước nào?",
    back: "Xác định nhu cầu nhân sự, lập tiêu chí chọn người, tuyển/chọn, onboarding, đào tạo/phát triển đội và quản lý hiệu suất.",
  },
  {
    id: "hr-12",
    chapterId: "hr",
    front: "Maslow giúp PM quản lý động lực đội dự án như thế nào?",
    back: "PM cần quan tâm từ điều kiện làm việc và an toàn vai trò đến gắn kết nhóm, ghi nhận đóng góp và cơ hội phát triển năng lực.",
  },
  {
    id: "communications-4",
    chapterId: "communications",
    front: "Status report, progress report và forecast khác nhau thế nào?",
    back: "Status report mô tả trạng thái hiện tại; progress report nói việc đã làm trong kỳ; forecast dự báo tương lai dựa trên dữ liệu hiện tại.",
  },
  {
    id: "communications-5",
    chapterId: "communications",
    front: "Theo định luật Brooks, vì sao thêm người chưa chắc làm dự án nhanh hơn?",
    back: "Vì thêm người làm tăng thời gian onboarding và số kênh giao tiếp, có thể khiến phối hợp phức tạp hơn.",
  },
  {
    id: "communications-6",
    chapterId: "communications",
    front: "Interactive communication phù hợp khi nào?",
    back: "Khi cần trao đổi hai chiều và làm rõ hiểu nhầm, ví dụ họp, workshop, video call, gọi điện.",
  },
  {
    id: "communications-7",
    chapterId: "communications",
    front: "Push communication có điểm yếu gì?",
    back: "Nó bảo đảm thông tin được gửi đi nhưng không bảo đảm người nhận đã đọc, hiểu hoặc đồng ý.",
  },
  {
    id: "communications-8",
    chapterId: "communications",
    front: "Communication plan phải có những mục nào để đủ ý?",
    back: "Người nhận, nhu cầu thông tin, nội dung, định dạng, tần suất, kênh/công nghệ, người gửi và escalation procedure.",
  },
  {
    id: "communications-9",
    chapterId: "communications",
    front: "Vì sao không nên che giấu tin xấu trong dự án?",
    back: "Tin xấu bị giấu làm sponsor không kịp quyết định, issue phình to và mất niềm tin. PM nên báo sớm với bối cảnh và phương án xử lý.",
  },
  {
    id: "communications-10",
    chapterId: "communications",
    front: "Project Archive quan trọng ở đâu?",
    back: "Giúp truy vết quyết định, bàn giao vận hành, chứng minh phạm vi/nghiệm thu, xử lý tranh chấp và lưu lessons learned cho dự án sau.",
  },
  {
    id: "communications-11",
    chapterId: "communications",
    front: "Muốn sponsor nắm kịp tiến độ nên phối hợp 3 cách truyền thông nào?",
    back: "Báo cáo tuần dạng push, dashboard/PMIS dạng pull và họp milestone/steering dạng interactive để ra quyết định.",
  },
  {
    id: "risk-4",
    chapterId: "risk",
    front: "Risk register gồm những gì?",
    back: "ID, mô tả rủi ro, nguyên nhân, phân loại, xác suất, tác động, trigger, response, owner và trạng thái.",
  },
  {
    id: "risk-5",
    chapterId: "risk",
    front: "Trigger trong quản lý rủi ro là gì?",
    back: "Trigger là dấu hiệu cảnh báo rủi ro có thể sắp xảy ra, giúp PM kích hoạt kế hoạch phản ứng sớm.",
  },
  {
    id: "risk-6",
    chapterId: "risk",
    front: "Contingency reserve và management reserve khác nhau thế nào?",
    back: "Contingency reserve dành cho rủi ro đã biết; management reserve dành cho unknown unknowns và thường cần cấp quản lý phê duyệt.",
  },
  {
    id: "risk-7",
    chapterId: "risk",
    front: "RBS trong quản lý rủi ro là gì?",
    back: "Risk Breakdown Structure là cấu trúc phân rã nguồn rủi ro, ví dụ kỹ thuật, tổ chức, kinh doanh, quản lý dự án.",
  },
  {
    id: "risk-8",
    chapterId: "risk",
    front: "Delphi technique dùng để nhận dạng rủi ro như thế nào?",
    back: "Thu thập ý kiến chuyên gia ẩn danh qua nhiều vòng để giảm thiên vị và tiến tới đồng thuận.",
  },
  {
    id: "risk-9",
    chapterId: "risk",
    front: "Fallback plan khác contingency plan thế nào?",
    back: "Contingency plan là kế hoạch nếu rủi ro xảy ra; fallback plan dùng khi phản ứng chính không hiệu quả hoặc rủi ro tác động cao.",
  },
  {
    id: "risk-10",
    chapterId: "risk",
    front: "Escalate risk nghĩa là gì?",
    back: "Chuyển rủi ro lên cấp cao hơn khi nó vượt thẩm quyền hoặc khả năng xử lý của PM/team.",
  },
  {
    id: "risk-11",
    chapterId: "risk",
    front: "Scope creep là gì?",
    back: "Là phạm vi dự án mở rộng ngoài baseline mà không được kiểm soát bằng change request, làm tăng chi phí, trễ tiến độ hoặc giảm chất lượng.",
  },
  {
    id: "risk-12",
    chapterId: "risk",
    front: "Rủi ro phía Buyer thường là gì?",
    back: "Khách hàng chậm phản hồi, đổi yêu cầu, thiếu dữ liệu đầu vào, không bố trí người nghiệm thu hoặc chậm phê duyệt quyết định.",
  },
  {
    id: "procurement-4",
    chapterId: "procurement",
    front: "Make-or-buy analysis dùng để làm gì?",
    back: "Dùng để quyết định tự làm/tự mua hay thuê ngoài dựa trên chi phí, năng lực, thời gian, rủi ro và chiến lược.",
  },
  {
    id: "procurement-5",
    chapterId: "procurement",
    front: "Điểm hòa vốn thuê/mua tính như thế nào?",
    back: "Đặt tổng chi phí mua bằng tổng chi phí thuê. Ví dụ 12.000 + 400d = 800d => d = 30 ngày.",
  },
  {
    id: "procurement-6",
    chapterId: "procurement",
    front: "SOW là gì?",
    back: "Statement of Work là bản mô tả công việc/yêu cầu mua sắm đủ rõ để seller hiểu, báo giá và thực hiện.",
  },
  {
    id: "procurement-7",
    chapterId: "procurement",
    front: "RFP và RFQ khác nhau thế nào?",
    back: "RFP dùng khi cần đề xuất giải pháp; RFQ dùng khi yêu cầu đã rõ và chủ yếu cần báo giá.",
  },
  {
    id: "procurement-8",
    chapterId: "procurement",
    front: "Fixed-price và cost-reimbursable khác nhau về rủi ro ra sao?",
    back: "Fixed-price seller chịu nhiều rủi ro chi phí hơn; cost-reimbursable buyer chịu nhiều rủi ro hơn vì hoàn chi phí hợp lệ cộng fee.",
  },
  {
    id: "procurement-9",
    chapterId: "procurement",
    front: "Constructive change order là gì?",
    back: "Là thay đổi phát sinh từ yêu cầu/chỉ dẫn không chính thức. PM cần đưa mọi thay đổi qua quy trình phê duyệt và văn bản hóa.",
  },
  {
    id: "stakeholders-4",
    chapterId: "stakeholders",
    front: "Power/Interest Grid có 4 cách quản lý nào?",
    back: "Quyền lực cao/quan tâm cao: manage closely; cao/thấp: keep satisfied; thấp/cao: keep informed; thấp/thấp: monitor.",
  },
  {
    id: "stakeholders-5",
    chapterId: "stakeholders",
    front: "Stakeholder management plan vì sao có thể nhạy cảm?",
    back: "Vì nó chứa đánh giá thái độ, quyền lực, chiến lược tác động và quan hệ giữa stakeholder, nên không phải lúc nào cũng công khai.",
  },
  {
    id: "stakeholders-6",
    chapterId: "stakeholders",
    front: "Issue log dùng để làm gì?",
    back: "Ghi lại, theo dõi và giải quyết vấn đề đã xảy ra, tránh để issue không xử lý làm lệch kỳ vọng stakeholder.",
  },
  {
    id: "stakeholders-7",
    chapterId: "stakeholders",
    front: "Leading stakeholder khác supportive thế nào?",
    back: "Supportive là ủng hộ dự án; leading là chủ động thúc đẩy, vận động và giúp dự án thành công.",
  },
  {
    id: "stakeholders-8",
    chapterId: "stakeholders",
    front: "Khi sponsor yêu cầu điều không thực tế, PM nên làm gì?",
    back: "Không chỉ nói 'không'; cần giải thích hậu quả, đưa dữ kiện và đề xuất phương án khả thi hơn.",
  },
];

export const projectDomains = [
  {
    id: "library",
    name: "hệ thống quản lý thư viện thông minh cho trường đại học",
    sponsor: "Ban giám hiệu",
    owner: "Trung tâm thư viện",
    deliverables: ["quản lý mượn/trả", "tra cứu sách", "thẻ bạn đọc", "báo cáo tồn kho"],
    roles: [
      "PM",
      "Kỹ sư phân tích",
      "Thiết kế UI/UX",
      "Lập trình viên",
      "Tester",
      "Quản trị dữ liệu",
    ],
    risks: [
      "dữ liệu sách cũ không đồng nhất",
      "thiết bị quét mã vạch giao trễ",
      "người dùng thay đổi quy trình mượn/trả",
      "hiệu năng tra cứu giảm khi nhập dữ liệu lớn",
    ],
    procurement: "máy quét mã vạch và máy in thẻ",
  },
  {
    id: "schoolbook",
    name: "ứng dụng sổ tay liên lạc điện tử cho phụ huynh và học sinh",
    sponsor: "Sở Giáo dục",
    owner: "Phòng Công nghệ thông tin",
    deliverables: ["thông báo", "điểm danh", "kết quả học tập", "nhắn tin giáo viên"],
    roles: ["PM", "Business Analyst", "UI/UX", "Mobile Developer", "Backend Developer", "QA"],
    risks: [
      "phụ huynh không cài ứng dụng đúng hạn",
      "quy định bảo vệ dữ liệu học sinh thay đổi",
      "tải hệ thống tăng mạnh vào giờ thông báo điểm",
      "yêu cầu từ các trường không thống nhất",
    ],
    procurement: "dịch vụ gửi SMS/notification",
  },
  {
    id: "banking",
    name: "nâng cấp ứng dụng core banking cho ngân hàng",
    sponsor: "Khối vận hành ngân hàng",
    owner: "Giám đốc CNTT",
    deliverables: ["chuyển đổi dữ liệu", "nâng cấp bảo mật", "kiểm thử tích hợp", "đào tạo nhân viên"],
    raciTasks: ["Đánh giá hệ thống cũ", "Chuyển đổi dữ liệu", "Kiểm thử tải", "Đào tạo nhân viên ngân hàng"],
    roles: [
      "PM",
      "Chuyên gia tài chính",
      "Kỹ sư phần mềm",
      "Chuyên gia bảo mật",
      "QA",
      "Data Engineer",
    ],
    risks: [
      "mất dữ liệu khi chuyển đổi",
      "hệ thống ngừng hoạt động quá giờ quy định",
      "lỗ hổng bảo mật phát hiện muộn",
      "người dùng nghiệp vụ không tham gia UAT đầy đủ",
    ],
    securityRisks: [
      "dữ liệu khách hàng bị lộ trong quá trình chuyển đổi",
      "lỗ hổng phân quyền cho phép truy cập sai tài khoản",
      "mã hóa dữ liệu nhạy cảm không đạt chuẩn ngân hàng",
      "log giao dịch thiếu giám sát bất thường",
      "nhà thầu kiểm thử bảo mật bàn giao báo cáo trễ",
    ],
    externalPeople: [0, 1, 2],
    procurement: "dịch vụ kiểm thử bảo mật độc lập",
  },
  {
    id: "face-attendance",
    name: "hệ thống quản lý chấm công bằng nhận diện khuôn mặt",
    sponsor: "Ban Giám đốc nhân sự",
    owner: "Phòng Công nghệ thông tin",
    deliverables: ["lựa chọn thiết bị Camera", "huấn luyện mô hình AI", "dashboard quản lý", "lắp đặt thực tế"],
    raciTasks: ["Lựa chọn thiết bị Camera", "Huấn luyện mô hình AI", "Xây dựng Dashboard quản lý", "Lắp đặt thực tế"],
    roles: ["PM", "Chuyên gia AI", "Kỹ sư phần cứng", "Lập trình viên", "Tester"],
    teamPatterns: [[1, 1, 1, 2, 1]],
    risks: [
      "thiết bị phần cứng về chậm",
      "mô hình AI nhận diện sai trong điều kiện ánh sáng yếu",
      "dữ liệu khuôn mặt cần bảo mật cao",
      "nhân viên phản đối vì lo ngại quyền riêng tư",
    ],
    buyerRisks: [
      "khách hàng chậm chốt vị trí lắp camera",
      "đầu mối nhân sự thay đổi yêu cầu báo cáo chấm công",
      "khách hàng chưa chuẩn bị danh sách nhân viên để huấn luyện mô hình",
      "khách hàng chậm nghiệm thu lắp đặt thực tế",
      "quy định nội bộ về dữ liệu khuôn mặt chưa được phê duyệt",
    ],
    securityRisks: [
      "dữ liệu khuôn mặt bị truy cập trái phép",
      "camera lưu ảnh thô lâu hơn chính sách cho phép",
      "quyền truy cập dashboard chấm công phân quyền chưa chặt",
    ],
    externalPeople: [0, 2, 3],
    procurement: "thiết bị Camera và dịch vụ lắp đặt nhận diện khuôn mặt",
  },
  {
    id: "hospital",
    name: "hệ thống đặt lịch khám và quản lý hồ sơ bệnh án điện tử",
    sponsor: "Ban giám đốc bệnh viện",
    owner: "Phòng Kế hoạch tổng hợp",
    deliverables: ["đặt lịch khám", "hồ sơ bệnh án", "thanh toán", "báo cáo bác sĩ"],
    roles: ["PM", "BA y tế", "UI/UX", "Backend Developer", "Frontend Developer", "Tester"],
    risks: [
      "dữ liệu bệnh án cần bảo mật cao",
      "bác sĩ thiếu thời gian xác nhận yêu cầu",
      "tích hợp với hệ thống cũ lỗi",
      "quy trình tiếp nhận bệnh nhân thay đổi",
    ],
    procurement: "máy chủ lưu trữ hồ sơ và chứng thư số",
  },
  {
    id: "ecommerce",
    name: "nền tảng thương mại điện tử cho chuỗi cửa hàng bán lẻ",
    sponsor: "Giám đốc kinh doanh",
    owner: "Phòng Digital",
    deliverables: ["catalog sản phẩm", "giỏ hàng", "thanh toán", "quản lý đơn hàng"],
    roles: ["PM", "Product Owner", "UI/UX", "Frontend Developer", "Backend Developer", "QA"],
    risks: [
      "cổng thanh toán thay đổi API",
      "tồn kho đồng bộ sai",
      "traffic tăng đột biến trong ngày khuyến mãi",
      "phạm vi tính năng marketing mở rộng liên tục",
    ],
    scopeRisks: [
      "phòng marketing liên tục thêm chương trình khuyến mãi ngoài baseline",
      "đại diện cửa hàng yêu cầu thêm báo cáo vận hành chưa được duyệt",
      "tích hợp loyalty phát sinh thêm sau khi đã chốt phạm vi",
      "sponsor muốn mở rộng kênh bán hàng khi chưa đánh giá tác động",
    ],
    procurement: "dịch vụ cổng thanh toán trực tuyến",
  },
  {
    id: "retail-crm",
    name: "hệ thống quản trị quan hệ khách hàng (CRM) cho tập đoàn bán lẻ",
    sponsor: "Giám đốc kinh doanh tập đoàn",
    owner: "Phòng Chuyển đổi số",
    deliverables: ["khảo sát hành vi khách hàng", "thiết kế luồng dữ liệu", "module tích hợp", "đào tạo đội ngũ Sales"],
    raciTasks: ["Khảo sát hành vi khách hàng", "Thiết kế luồng dữ liệu", "Lập trình Module tích hợp", "Đào tạo đội ngũ Sales"],
    roles: ["PM", "Chuyên viên Phân tích nghiệp vụ (BA)", "Lập trình viên", "Kiểm thử viên (Tester)", "Chuyên viên Marketing"],
    teamPatterns: [[1, 2, 2, 1, 1]],
    risks: [
      "tích hợp dữ liệu lỗi với hệ thống cũ",
      "đội Sales nhập dữ liệu khách hàng không nhất quán",
      "phạm vi báo cáo marketing mở rộng liên tục",
      "khách hàng dùng thử CRM phản hồi chậm",
    ],
    buyerRisks: [
      "sponsor chậm phê duyệt luồng dữ liệu khách hàng",
      "đội Sales không tham gia đầy đủ buổi đào tạo",
      "phòng Marketing thay đổi tiêu chí phân khúc khách hàng",
    ],
    scopeRisks: [
      "yêu cầu thêm dashboard marketing ngoài phạm vi ban đầu",
      "đề nghị tích hợp thêm hệ thống loyalty chưa có trong baseline",
      "đội Sales yêu cầu thêm workflow chăm sóc khách hàng sau khi đã chốt thiết kế",
      "sponsor muốn mở rộng CRM sang chi nhánh mới mà chưa điều chỉnh ngân sách",
      "báo cáo quản trị phát sinh thêm nhiều chỉ tiêu chưa được duyệt change request",
    ],
    externalPeople: [0, 1, 2],
    procurement: "module tích hợp CRM",
  },
  {
    id: "city",
    name: "cổng dịch vụ công trực tuyến cho thành phố",
    sponsor: "Ủy ban nhân dân thành phố",
    owner: "Sở Thông tin và Truyền thông",
    deliverables: ["nộp hồ sơ", "tra cứu trạng thái", "thanh toán lệ phí", "ký số"],
    roles: ["PM", "Chuyên viên nghiệp vụ", "Kiến trúc sư hệ thống", "Developer", "Tester", "Bảo mật"],
    risks: [
      "tích hợp dữ liệu giữa các sở ban ngành chậm",
      "người dân khó sử dụng giao diện mới",
      "quy định pháp lý về ký số thay đổi",
      "tấn công từ chối dịch vụ vào ngày cao điểm",
    ],
    procurement: "dịch vụ ký số và hạ tầng cloud",
  },
];
