import { projectDomains } from "../data/courseData.js";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function makeSeed() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function hashString(input) {
  let hash = 1779033703 ^ input.length;
  for (let index = 0; index < input.length; index += 1) {
    hash = Math.imul(hash ^ input.charCodeAt(index), 3432918353);
    hash = (hash << 13) | (hash >>> 19);
  }
  return () => {
    hash = Math.imul(hash ^ (hash >>> 16), 2246822507);
    hash = Math.imul(hash ^ (hash >>> 13), 3266489909);
    return (hash ^= hash >>> 16) >>> 0;
  };
}

function seededRandom(seed) {
  const seedFn = hashString(seed);
  let state = seedFn();
  return () => {
    state += 0x6d2b79f5;
    let next = state;
    next = Math.imul(next ^ (next >>> 15), next | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(random, list) {
  return list[Math.floor(random() * list.length)];
}

function sample(random, list, count) {
  const copy = [...list];
  const output = [];
  while (copy.length && output.length < count) {
    output.push(copy.splice(Math.floor(random() * copy.length), 1)[0]);
  }
  return output;
}

function roundTo(value, precision = 2) {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
}

function roundToFive(value) {
  return Math.round(value / 5) * 5;
}

export function formatMoney(value) {
  if (!Number.isFinite(value)) return "N/A";
  return `${roundTo(value, 2).toLocaleString("vi-VN")} triệu`;
}

function safeDivide(numerator, denominator) {
  return denominator ? numerator / denominator : Number.NaN;
}

export function calculateEvm({
  bac,
  plannedPercent,
  actualPercent,
  actualCost,
  forecastBudget = bac,
  useRoundedCpiForForecast = false,
}) {
  const pv = bac * plannedPercent;
  const ev = bac * actualPercent;
  const ac = actualCost;
  const cpi = safeDivide(ev, ac);
  const spi = safeDivide(ev, pv);
  const cv = ev - ac;
  const sv = ev - pv;
  const forecastBac = Number.isFinite(forecastBudget) ? forecastBudget : bac;
  const cpiForForecast = useRoundedCpiForForecast ? roundTo(cpi, 2) : cpi;
  const etc = safeDivide(forecastBac - ev, cpiForForecast);
  const eac = ac + etc;
  const vac = forecastBac - eac;
  const eacPlanned = ac + (forecastBac - ev);
  const tcpiBac = safeDivide(forecastBac - ev, forecastBac - ac);
  const tcpiEac = safeDivide(forecastBac - ev, eac - ac);
  return {
    pv,
    ev,
    ac,
    cpi,
    spi,
    cv,
    sv,
    forecastBac,
    cpiForForecast,
    eac,
    etc,
    vac,
    eacPlanned,
    tcpi: tcpiBac,
    tcpiBac,
    tcpiEac,
  };
}

export function calculateIncentive({ targetCost, targetFee, actualCost, sellerShare }) {
  const costDifference = targetCost - actualCost;
  const targetPrice = targetCost + targetFee;
  const sellerAdjustment = sellerShare * costDifference;
  const finalFee = targetFee + sellerShare * costDifference;
  const finalPrice = actualCost + finalFee;
  return { costDifference, targetPrice, sellerAdjustment, finalFee, finalPrice };
}

const teamPatterns = [
  [1, 1, 1, 2, 1, 1],
  [1, 1, 1, 3, 1, 1],
  [1, 2, 1, 3, 1, 1],
  [1, 1, 2, 2, 1, 1],
];

const q1Theory = [
  {
    id: "tuckman",
    title: "Tuckman và vai trò PM",
    prompt:
      "Trình bày các giai đoạn hình thành và phát triển nhóm theo Tuckman. Liên hệ vai trò của PM trong giai đoạn Storming của dự án này.",
  },
  {
    id: "leadership",
    title: "Phong cách lãnh đạo",
    prompt:
      "Trình bày các phong cách lãnh đạo Autocratic, Democratic, Laissez-faire. Khi nào PM nên dùng Autocratic trong dự án này?",
  },
  {
    id: "conflict",
    title: "Giải quyết xung đột",
    prompt:
      "Nêu các phương pháp giải quyết xung đột trong dự án. PM nên chọn phương pháp nào khi có mâu thuẫn kỹ thuật giữa hai lập trình viên?",
  },
  {
    id: "staffing",
    title: "Tuyển dụng và phát triển đội",
    prompt: "Trình bày quy trình tuyển dụng và phát triển đội ngũ trong dự án CNTT.",
  },
  {
    id: "maslow",
    title: "Tháp nhu cầu Maslow",
    prompt: "Trình bày lý thuyết về Tháp nhu cầu Maslow trong quản lý nhân sự dự án.",
  },
];

function joinShort(list, count = 2) {
  return list.slice(0, count).join(", ");
}

function findDomainRole(domain, patterns, fallbackIndex = 0, fallback = "PM") {
  return (
    domain.roles.find((role) => patterns.some((pattern) => role.toLowerCase().includes(pattern))) ||
    domain.roles[fallbackIndex] ||
    fallback
  );
}

function buildQ1TheoryAnswer(theory, domain, team, raci) {
  const pm = findDomainRole(domain, ["pm", "quản lý"], 0, "PM");
  const analyst = findDomainRole(domain, ["analyst", "ba", "phân tích", "nghiệp vụ", "chuyên viên"], 1, "BA");
  const developer = findDomainRole(domain, ["developer", "lập trình", "phần mềm", "kiến trúc"], 3, "Lập trình viên");
  const tester = findDomainRole(domain, ["tester", "qa", "kiểm thử"], 4, "Tester");
  const deliverables = joinShort(domain.deliverables, 3);
  const risks = joinShort(domain.risks, 2);
  const tasks = raci.map((row) => row.task).join(", ");
  const teamSummary = team.map((member) => member.role).join(", ");

  if (theory.id === "tuckman") {
    return [
      "Khái niệm Tuckman",
      "Forming: nhóm mới hình thành, còn phụ thuộc vào PM; cần làm rõ mục tiêu, phạm vi, vai trò, quy tắc làm việc.",
      "Storming: bắt đầu có xung đột về cách làm, ưu tiên, trách nhiệm hoặc tiêu chuẩn kỹ thuật.",
      "Norming: nhóm thống nhất cách phối hợp, quy trình và kênh trao đổi.",
      "Performing: nhóm làm việc ổn định, hiệu suất cao, PM chủ yếu gỡ cản trở và bảo vệ mục tiêu dự án.",
      "Adjourning: kết thúc dự án, bàn giao, ghi nhận đóng góp và rút lessons learned.",
      "",
      `Liên hệ trực tiếp với dự án ${domain.name}`,
      `Dự án này có các đầu việc như ${tasks}, đội gồm ${teamSummary}. Vì vậy Storming có thể xảy ra khi ${analyst} muốn ưu tiên đúng nghiệp vụ, ${developer} muốn chọn phương án kỹ thuật dễ triển khai, ${tester} yêu cầu tiêu chuẩn kiểm thử rõ, còn chủ đầu tư quan tâm các deliverable như ${deliverables}.`,
      `Vai trò của ${pm} trong Storming là không chỉ "hòa giải" chung chung mà phải kéo nhóm về mục tiêu dự án: làm rõ phạm vi, cập nhật RACI để biết ai R/A/C/I, thống nhất tiêu chí quyết định như chi phí, tiến độ, chất lượng và rủi ro (${risks}), rồi chốt action item có owner và deadline.`,
      "Kết luận nên viết trong bài: Storming là giai đoạn bình thường; nếu PM xử lý tốt bằng lắng nghe, problem solving và quy tắc phối hợp rõ ràng thì nhóm mới chuyển sang Norming/Performing.",
    ].join("\n");
  }

  if (theory.id === "leadership") {
    return [
      "Ba phong cách lãnh đạo",
      "Autocratic: PM ra quyết định tập trung, yêu cầu nhóm thực hiện nhanh; phù hợp khi cần tốc độ, kỷ luật và một đầu mối chịu trách nhiệm.",
      "Democratic: PM cho nhóm tham gia thảo luận trước khi quyết định; phù hợp khi cần cam kết, nhiều chuyên môn và chất lượng phương án.",
      "Laissez-faire: PM trao quyền cao, ít can thiệp; chỉ phù hợp khi đội đã trưởng thành, mục tiêu và tiêu chuẩn đầu ra rất rõ.",
      "",
      `Liên hệ trực tiếp với dự án ${domain.name}`,
      `Vì dự án đang làm các deliverable như ${deliverables}, PM không nên lúc nào cũng autocratic. Khi thu thập yêu cầu, thiết kế giao diện/API hoặc bàn giao, democratic thường tốt hơn vì cần ý kiến ${analyst}, ${developer}, ${tester} và đại diện chủ đầu tư.`,
      `PM nên dùng Autocratic trong dự án này khi có tình huống khẩn cấp hoặc ràng buộc không thể thương lượng, ví dụ ${risks}. Khi đó ${pm} cần chốt nhanh phương án, phân công rõ người xử lý, đặt deadline ngắn và thông báo cho stakeholder bị ảnh hưởng.`,
      "Câu trả lời đủ điểm nên nhấn mạnh: autocratic không phải phong cách mặc định; nó hợp khi thời gian gấp, an toàn/bảo mật/chất lượng bị đe dọa, hoặc nhóm cần một quyết định thống nhất ngay.",
    ].join("\n");
  }

  if (theory.id === "staffing") {
    return [
      "Quy trình tuyển dụng và phát triển đội ngũ dự án CNTT",
      "1. Xác định nhu cầu nhân sự: dựa vào phạm vi, WBS, tiến độ và kỹ năng cần có để lập danh sách vai trò, số lượng, thời điểm tham gia.",
      "2. Lập tiêu chí tuyển/chọn: mô tả công việc, năng lực kỹ thuật, kinh nghiệm domain, kỹ năng phối hợp, yêu cầu bảo mật và tiêu chuẩn chất lượng.",
      "3. Tìm và lựa chọn nhân sự: có thể dùng nguồn nội bộ, thuê ngoài, vendor hoặc chuyên gia; đánh giá bằng CV, phỏng vấn, bài test, portfolio hoặc kinh nghiệm dự án tương tự.",
      "4. Onboarding: giới thiệu mục tiêu dự án, phạm vi, RACI, công cụ, quy trình báo cáo, quy tắc lưu tài liệu và tiêu chuẩn bàn giao.",
      "5. Phát triển đội: đào tạo kỹ thuật/nghiệp vụ, mentoring, pair work, workshop, review định kỳ và chia sẻ lessons learned.",
      "6. Quản lý hiệu suất: theo dõi tiến độ, chất lượng, issue, phản hồi, ghi nhận đóng góp và xử lý thiếu hụt năng lực kịp thời.",
      "",
      `Liên hệ trực tiếp với dự án ${domain.name}`,
      `Dự án có các hạng mục như ${deliverables}, đội gồm ${teamSummary}. PM cần bảo đảm ${analyst} hiểu nghiệp vụ, ${developer} đủ năng lực triển khai, ${tester} có tiêu chuẩn kiểm thử rõ và các vai trò chuyên môn được đưa vào đúng thời điểm.`,
      `Nếu phát sinh rủi ro như ${risks}, PM cần bổ sung đào tạo, gọi chuyên gia, điều chỉnh phân công hoặc dùng vendor để tránh ảnh hưởng tiến độ và chất lượng.`,
      "Kết luận nên viết trong bài: tuyển đúng người mới là bước đầu; phát triển đội và quản lý hiệu suất trong suốt dự án mới giúp nhóm đạt mục tiêu.",
    ].join("\n");
  }

  if (theory.id === "maslow") {
    return [
      "Tháp nhu cầu Maslow trong quản lý nhân sự dự án",
      "Maslow cho rằng nhu cầu con người có thể nhìn theo 5 tầng: sinh lý, an toàn, xã hội, được tôn trọng và tự hoàn thiện. Khi nhu cầu nền tảng chưa được đáp ứng, nhân sự khó tập trung vào nhu cầu cao hơn.",
      "",
      "Áp dụng cho đội dự án CNTT",
      "1. Sinh lý: điều kiện làm việc tối thiểu, thời gian nghỉ, khối lượng công việc không quá tải kéo dài.",
      "2. An toàn: hợp đồng/thu nhập ổn định, vai trò rõ, quy trình rõ, môi trường ít đổ lỗi khi phát hiện lỗi.",
      "3. Xã hội: cảm giác thuộc về nhóm, giao tiếp cởi mở, phối hợp giữa PM, nghiệp vụ, lập trình và kiểm thử.",
      "4. Được tôn trọng: ghi nhận đóng góp, lắng nghe ý kiến chuyên môn, giao quyền phù hợp.",
      "5. Tự hoàn thiện: cơ hội học công nghệ mới, giải quyết bài toán khó, đề xuất cải tiến và phát triển nghề nghiệp.",
      "",
      `Liên hệ trực tiếp với dự án ${domain.name}`,
      `Với các đầu việc như ${tasks}, PM có thể dùng Maslow để giữ động lực: làm rõ deadline và RACI để tạo cảm giác an toàn, tổ chức review/demo để tăng phối hợp, ghi nhận người xử lý tốt các phần ${deliverables}, và tạo cơ hội học hỏi khi gặp rủi ro ${risks}.`,
      "Kết luận nên viết trong bài: Maslow giúp PM hiểu động lực không chỉ đến từ tiền thưởng; đội làm việc tốt hơn khi nhu cầu nền tảng, quan hệ nhóm, sự ghi nhận và cơ hội phát triển đều được quan tâm.",
    ].join("\n");
  }

  return [
    "Các phương pháp giải quyết xung đột",
    "Confronting / problem solving: đối diện vấn đề, dùng dữ kiện để xử lý nguyên nhân gốc; thường là cách tốt nhất cho xung đột kỹ thuật.",
    "Compromising: mỗi bên nhượng bộ một phần; dùng khi cần quyết định nhanh và mức ảnh hưởng không quá nghiêm trọng.",
    "Smoothing: nhấn mạnh điểm chung để giảm căng thẳng; chỉ phù hợp tạm thời, không giải quyết gốc vấn đề.",
    "Forcing: PM hoặc người có thẩm quyền áp quyết định; dùng khi khẩn cấp hoặc có tiêu chuẩn bắt buộc.",
    "Withdrawing: tạm hoãn/rút khỏi xung đột; chỉ nên dùng khi vấn đề nhỏ hoặc cần thêm thông tin.",
    "",
    `Liên hệ trực tiếp với dự án ${domain.name}`,
    `Nếu hai lập trình viên mâu thuẫn kỹ thuật trong các phần ${deliverables}, PM nên ưu tiên problem solving. Ví dụ một người muốn giải pháp nhanh để kịp tiến độ, người kia lo rủi ro như ${risks}; PM cần yêu cầu hai bên đưa tiêu chí so sánh: tác động đến BAC/tiến độ, bảo mật, hiệu năng, khả năng kiểm thử và khả năng bảo trì.`,
    `Cách làm cụ thể: ${pm} mời ${developer}, ${tester} và vai trò nghiệp vụ liên quan (${analyst}) cùng xem dữ liệu, prototype/POC hoặc tiêu chuẩn kiến trúc; sau đó chốt phương án, ghi quyết định vào biên bản/task board, cập nhật RACI nếu trách nhiệm chưa rõ.`,
    "Nếu deadline quá gấp hoặc có ràng buộc an toàn/bảo mật, PM có thể dùng forcing để chốt tạm thời; nếu hai phương án đều chấp nhận được thì dùng compromising. Nhưng bài thi nên chọn problem solving trước vì câu hỏi là mâu thuẫn kỹ thuật cần quyết định dựa trên dữ kiện.",
  ].join("\n");
}

const raciTasks = [
  "Thu thập yêu cầu",
  "Thiết kế dữ liệu/API",
  "Thiết kế giao diện",
  "Lập trình chức năng chính",
  "Kiểm thử hệ thống",
  "Chuyển đổi dữ liệu",
  "Đào tạo và bàn giao",
];

function buildTeam(domain, random) {
  const counts = pick(random, domain.teamPatterns || teamPatterns);
  return domain.roles.slice(0, counts.length).map((role, index) => ({
    role,
    count: counts[index] || 1,
  }));
}

function teamText(team) {
  return team
    .map((member) => `${member.count.toString().padStart(2, "0")} ${member.role}`)
    .join(", ");
}

function totalPeople(team) {
  return team.reduce((sum, member) => sum + member.count, 0);
}

function splitAssignees(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function toRoleList(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return splitAssignees(value);
}

function makeRaciRow(task, assignments) {
  const used = new Set();
  const row = { task };
  ["R", "A", "C", "I"].forEach((letter) => {
    const roles = [];
    toRoleList(assignments[letter]).forEach((role) => {
      if (!used.has(role)) {
        roles.push(role);
        used.add(role);
      }
    });
    row[letter] = roles.join(", ");
  });
  return row;
}

function buildRaci(domain, random) {
  const taskPool = domain.raciTasks?.length ? domain.raciTasks : raciTasks;
  const tasks = sample(random, taskPool, Math.min(4, taskPool.length));
  const allRoles = domain.roles;
  const findRole = (patterns, fallbackIndex, fallback) =>
    allRoles.find((role) => patterns.some((pattern) => role.toLowerCase().includes(pattern))) ||
    allRoles[fallbackIndex] ||
    fallback;
  const pm = findRole(["pm", "quản lý"], 0, "PM");
  const analyst = findRole(["analyst", "ba", "phân tích", "nghiệp vụ", "chuyên viên"], 1, "Business Analyst");
  const backend = findRole(["backend", "kiến trúc", "phần mềm", "developer", "lập trình"], 3, "Developer");
  const frontend = findRole(["frontend", "mobile", "developer", "lập trình", "phần mềm"], 3, backend);
  const designer = findRole(["ui/ux", "thiết kế"], 2, frontend);
  const developer = backend;
  const tester = findRole(["tester", "qa", "kiểm thử"], 4, "Tester");
  const ai = findRole(["ai", "machine learning", "mô hình"], 1, developer);
  const hardware = findRole(["phần cứng", "hardware", "thiết bị"], 2, developer);
  const security = findRole(["bảo mật", "security"], 3, tester);
  const finance = findRole(["tài chính", "ngân hàng"], 1, analyst);
  const marketing = findRole(["marketing", "sales"], 5, analyst);
  const data = findRole(["data", "dữ liệu", "quản trị"], 5, developer);
  const owner = "Đại diện chủ đầu tư";

  const mapping = tasks.map((task) => {
    if (task.includes("Camera")) {
      return makeRaciRow(task, { R: hardware, A: pm, C: [ai, owner], I: tester });
    }
    if (task.includes("Huấn luyện") || task.includes("AI")) {
      return makeRaciRow(task, { R: ai, A: pm, C: [developer, analyst], I: [owner, tester] });
    }
    if (task.includes("Dashboard")) {
      return makeRaciRow(task, { R: developer, A: pm, C: [analyst, owner], I: tester });
    }
    if (task.includes("Lắp đặt")) {
      return makeRaciRow(task, { R: hardware, A: pm, C: [owner, tester], I: ai });
    }
    if (task.includes("Đánh giá hệ thống cũ")) {
      return makeRaciRow(task, { R: analyst, A: pm, C: [developer, security, owner], I: tester });
    }
    if (task.includes("Kiểm thử tải")) {
      return makeRaciRow(task, { R: tester, A: pm, C: [developer, security], I: owner });
    }
    if (task.includes("nhân viên ngân hàng")) {
      return makeRaciRow(task, { R: finance, A: pm, C: [security, tester], I: [owner, developer] });
    }
    if (task.includes("hành vi khách hàng")) {
      return makeRaciRow(task, { R: analyst, A: pm, C: [marketing, owner], I: developer });
    }
    if (task.includes("luồng dữ liệu")) {
      return makeRaciRow(task, { R: data, A: pm, C: [analyst, developer, owner], I: tester });
    }
    if (task.includes("Module tích hợp")) {
      return makeRaciRow(task, { R: developer, A: pm, C: [analyst, data, tester], I: owner });
    }
    if (task.includes("Sales")) {
      return makeRaciRow(task, { R: marketing, A: pm, C: [analyst, owner], I: developer });
    }
    if (task.includes("Thu thập")) {
      return makeRaciRow(task, { R: analyst, A: pm, C: owner, I: [developer, tester] });
    }
    if (task.includes("giao diện")) {
      return makeRaciRow(task, { R: designer, A: pm, C: [analyst, owner], I: [developer, tester] });
    }
    if (task.includes("dữ liệu") || task.includes("API")) {
      return makeRaciRow(task, { R: developer, A: pm, C: [analyst, tester], I: owner });
    }
    if (task.includes("Lập trình")) {
      return makeRaciRow(task, { R: developer, A: pm, C: analyst, I: [owner, tester] });
    }
    if (task.includes("Kiểm thử")) {
      return makeRaciRow(task, { R: tester, A: pm, C: developer, I: owner });
    }
    if (task.includes("Chuyển đổi")) {
      return makeRaciRow(task, { R: developer, A: pm, C: [analyst, owner], I: tester });
    }
    return makeRaciRow(task, { R: analyst, A: pm, C: [owner, tester], I: developer });
  });

  return mapping;
}

function raciMarkdown(rows, domain) {
  const owner = "Đại diện chủ đầu tư";
  const appearedRoles = new Set();
  rows.forEach((row) => {
    ["R", "A", "C", "I"].forEach((letter) => {
      splitAssignees(row[letter]).forEach((role) => appearedRoles.add(role));
    });
  });

  const roleOrder = [...domain.roles, owner].filter((role) => appearedRoles.has(role));
  const header = `| Công việc | ${roleOrder.join(" | ")} |\n|---|${roleOrder.map(() => "---").join("|")}|`;
  const body = rows
    .map((row) => {
      const cells = roleOrder.map((role) => {
        const letters = ["R", "A", "C", "I"].filter((letter) => splitAssignees(row[letter]).includes(role));
        return letters.join("/");
      });
      return `| ${row.task} | ${cells.join(" | ")} |`;
    })
    .join("\n");
  return `${header}\n${body}`;
}

function raciRowExplanation(rows) {
  return rows
    .map((row) => {
      const parts = [
        `${row.R} giữ R vì trực tiếp thực hiện.`,
        `${row.A} giữ A vì chịu trách nhiệm cuối cùng và chốt kết quả.`,
      ];
      if (row.C) parts.push(`${row.C} giữ C vì cần được hỏi ý kiến hai chiều trước hoặc trong khi làm.`);
      if (row.I) parts.push(`${row.I} giữ I vì chỉ cần được cập nhật kết quả/tiến độ.`);
      return `- ${row.task}: ${parts.join(" ")}`;
    })
    .join("\n");
}

function riskResponseFor(risk) {
  const text = risk.toLowerCase();
  if (text.includes("mất dữ liệu") || text.includes("chuyển đổi") || text.includes("đồng bộ sai") || text.includes("dữ liệu sách")) {
    return "Mitigate: sao lưu trước khi chuyển đổi, chạy migration thử, đối soát dữ liệu và chuẩn bị rollback plan.";
  }
  if (text.includes("bảo mật") || text.includes("lỗ hổng") || text.includes("tấn công") || text.includes("bảo vệ dữ liệu")) {
    return "Mitigate/Transfer: kiểm thử bảo mật sớm, phân quyền/mã hóa dữ liệu và đưa SLA bảo mật vào hợp đồng vendor.";
  }
  if (text.includes("hiệu năng") || text.includes("traffic") || text.includes("tải hệ thống") || text.includes("ngừng hoạt động")) {
    return "Mitigate: load test sớm, chuẩn bị auto-scaling/monitoring, tối ưu truy vấn và có kế hoạch vận hành khi cao điểm.";
  }
  if (text.includes("tích hợp") || text.includes("api") || text.includes("hệ thống cũ")) {
    return "Mitigate: chốt interface sớm, dùng mock/stub để test tích hợp, lập lịch phối hợp với hệ thống liên quan.";
  }
  if (text.includes("thiết bị") || text.includes("giao trễ") || text.includes("vendor") || text.includes("dịch vụ")) {
    return "Transfer/Mitigate: đưa SLA, mốc giao hàng, phạt trễ vào hợp đồng và chuẩn bị nhà cung cấp/phương án thay thế.";
  }
  if (text.includes("buyer") || text.includes("khách hàng") || text.includes("sponsor") || text.includes("sales")) {
    return "Mitigate: thống nhất đầu mối phê duyệt, lịch phản hồi, tiêu chí nghiệm thu và cơ chế escalation khi khách hàng phản hồi chậm.";
  }
  if (text.includes("thay đổi") || text.includes("phạm vi") || text.includes("yêu cầu") || text.includes("quy định pháp lý")) {
    return "Mitigate/Avoid: dùng change control, đóng băng yêu cầu theo milestone và yêu cầu sponsor phê duyệt tác động chi phí/tiến độ.";
  }
  if (
    text.includes("người dùng") ||
    text.includes("phụ huynh") ||
    text.includes("bác sĩ") ||
    text.includes("uat") ||
    text.includes("khó sử dụng")
  ) {
    return "Mitigate: truyền thông sớm, đào tạo/hướng dẫn người dùng, đặt lịch UAT rõ và lấy phản hồi theo từng nhóm đại diện.";
  }
  return "Mitigate: lập kế hoạch dự phòng, theo dõi trigger, chỉ định owner và cập nhật risk register hằng tuần.";
}

function riskOwnerFor(domain, risk) {
  const text = risk.toLowerCase();
  if (text.includes("bảo mật") || text.includes("lỗ hổng") || text.includes("tấn công") || text.includes("bảo vệ dữ liệu")) {
    return findDomainRole(domain, ["bảo mật", "security"], 3, "Security/PM");
  }
  if (text.includes("dữ liệu") || text.includes("đồng bộ") || text.includes("chuyển đổi")) {
    return findDomainRole(domain, ["data", "dữ liệu", "engineer", "quản trị"], 5, "Data/PM");
  }
  if (text.includes("hiệu năng") || text.includes("traffic") || text.includes("tích hợp") || text.includes("api") || text.includes("ngừng")) {
    return findDomainRole(domain, ["kiến trúc", "developer", "lập trình", "phần mềm", "backend"], 3, "Tech Lead");
  }
  if (text.includes("người dùng") || text.includes("phụ huynh") || text.includes("bác sĩ") || text.includes("yêu cầu") || text.includes("uat")) {
    return findDomainRole(domain, ["analyst", "ba", "nghiệp vụ", "product", "chuyên viên"], 1, "BA/PM");
  }
  if (text.includes("buyer") || text.includes("khách hàng") || text.includes("sponsor") || text.includes("sales")) {
    return "PM/Business Owner";
  }
  return "PM";
}

function riskOptionsFor(domain) {
  const options = [
    {
      id: "general",
      prompt: "Xác định 3 rủi ro lớn của dự án và phân tích định tính.",
      answerIntro:
        "Phân tích định tính không chỉ liệt kê rủi ro. Cần nêu xác suất, ảnh hưởng, mức ưu tiên, owner và biện pháp phản ứng.",
      risks: domain.risks,
    },
  ];

  if (domain.buyerRisks?.length) {
    options.push({
      id: "buyer",
      prompt: "Liệt kê 3 rủi ro về phía khách hàng (Buyer) và phân tích định tính.",
      answerIntro:
        "Rủi ro phía Buyer thường đến từ phản hồi chậm, thay đổi yêu cầu, thiếu người nghiệm thu hoặc không thống nhất đầu mối quyết định.",
      risks: domain.buyerRisks,
    });
  }

  if (domain.securityRisks?.length) {
    options.push({
      id: "security",
      prompt: "Xác định 3 rủi ro lớn nhất về bảo mật dữ liệu và phân tích định tính.",
      answerIntro:
        "Rủi ro bảo mật cần nêu rõ tác động đến dữ liệu, vận hành, tuân thủ và uy tín; biện pháp nên có kiểm thử, phân quyền, mã hóa và giám sát.",
      risks: domain.securityRisks,
    });
  }

  if (domain.scopeRisks?.length) {
    options.push({
      id: "scope",
      prompt: 'Xác định 3 rủi ro về mặt "Phạm vi dự án" (Scope Creep) và phân tích định tính.',
      answerIntro:
        "Scope creep là việc phạm vi phình ra ngoài baseline mà không kiểm soát tác động chi phí, tiến độ, chất lượng và nguồn lực.",
      risks: domain.scopeRisks,
    });
  }

  return options;
}

function buildRiskRows(domain, random, riskList = domain.risks) {
  const selectedRisks = sample(random, riskList, 3);
  const probabilities = [10, 15, 20, 25, 30, 35, 40];
  const impacts = [20, 30, 40, 50, 60, 80, 100, 150, 200];

  return selectedRisks.map((risk) => ({
    risk,
    probability: pick(random, probabilities),
    impact: pick(random, impacts),
    response: riskResponseFor(risk),
    owner: riskOwnerFor(domain, risk),
  }));
}

function buildRiskQuestion(domain, random) {
  const option = pick(random, riskOptionsFor(domain));
  const risks = buildRiskRows(domain, random, option.risks);
  const emvRisk = pick(random, risks);
  const emv = (emvRisk.probability / 100) * emvRisk.impact;

  return {
    risks,
    emvRisk,
    emv,
    prompt: `a. ${option.prompt}\n\nb. Rủi ro "${emvRisk.risk}" có xác suất ${emvRisk.probability}%, thiệt hại dự kiến ${formatMoney(emvRisk.impact)}. Tính EMV và đề xuất dự phòng.`,
    answer: `a. Bảng phân tích định tính:\n\n${riskTable(risks)}\n\n${option.answerIntro} Rủi ro có EMV/điểm cao hơn nên được theo dõi sát hơn trong risk register.\n\nb. Tính EMV\nEMV = Probability x Impact = ${emvRisk.probability}% x ${formatMoney(emvRisk.impact)} = ${formatMoney(emv)}.\n\nÝ nghĩa: EMV là giá trị tiền tệ kỳ vọng của rủi ro, dùng để ước lượng mức dự phòng hợp lý chứ không phải chắc chắn sẽ mất đúng số tiền này.\n\nĐề xuất dự phòng: dùng ${formatMoney(emv)} làm cơ sở contingency reserve cho rủi ro này, nhưng vẫn phải có biện pháp giảm thiểu cụ thể, trigger cảnh báo và owner chịu trách nhiệm. Nếu rủi ro có tác động rất cao, nên chuẩn bị thêm fallback plan.`,
  };
}

function riskTable(rows) {
  const header = "| Rủi ro | Xác suất | Ảnh hưởng | EMV/điểm | Ưu tiên | Biện pháp | Owner |\n|---|---:|---:|---:|---|---|---|";
  const body = rows
    .map((row) => {
      const score = (row.probability / 100) * row.impact;
      const priority = score >= 35 ? "Cao" : score >= 15 ? "Trung bình" : "Thấp";
      return `| ${row.risk} | ${row.probability}% | ${formatMoney(row.impact)} | ${formatMoney(score)} | ${priority} | ${row.response} | ${row.owner} |`;
    })
    .join("\n");
  return `${header}\n${body}`;
}

function buildProjectContext(domain, team, random) {
  const bac = pick(random, [180, 200, 250, 300, 400, 500, 650, 800, 1000, 1200]);
  const duration = pick(random, [40, 45, 50, 60, 75, 90, 120]);
  const deliverables = sample(random, domain.deliverables, Math.min(3, domain.deliverables.length));
  return {
    bac,
    duration,
    paragraph: `Dự án "${domain.name.toUpperCase()}" do ${domain.owner} làm đơn vị triển khai chính, ${domain.sponsor} là nhà tài trợ. Mục tiêu là xây dựng một hệ thống CNTT hỗ trợ ${deliverables.join(", ")}.`,
    bullets: [
      `Ngân sách ban đầu (BAC): ${formatMoney(bac)} VNĐ.`,
      `Thời gian dự kiến: ${duration} ngày làm việc.`,
      `Nhân sự: ${teamText(team)}.`,
    ],
  };
}

function buildEvmQuestion(random, bac) {
  if (random() < 0.45) {
    const plannedPercent = pick(random, [0.25, 0.3, 1 / 3, 0.4, 0.5]);
    const actualPercent = clamp(plannedPercent + pick(random, [-0.12, -0.1, -0.08, -0.05, 0, 0.05]), 0.1, 0.85);
    const pv = roundToFive(bac * plannedPercent);
    const ev = roundToFive(bac * actualPercent);
    const costFactor = pick(random, [0.9, 0.95, 1, 1.05, 1.08, 1.12, 1.2]);
    const actualCost = roundToFive(ev * costFactor);
    const result = calculateEvm({
      bac,
      plannedPercent: pv / bac,
      actualPercent: ev / bac,
      actualCost,
    });

    return {
      mode: "direct",
      bac,
      checkpointDay: pick(random, [30, 40, 45, 50, 60]),
      plannedPercent: pv / bac,
      actualPercent: ev / bac,
      actualCost,
      result,
    };
  }

  const stageCount = pick(random, [3, 4, 5]);
  const completedStage = pick(random, Array.from({ length: stageCount - 1 }, (_, index) => index + 1));
  const plannedPercent = completedStage / stageCount;
  const actualPercentRaw = clamp(plannedPercent + pick(random, [-0.15, -0.1, -0.05, 0, 0.05, 0.1]), 0.15, 0.9);
  const actualPercent = Math.round(actualPercentRaw * 20) / 20;
  const ev = bac * actualPercent;
  const costFactor = pick(random, [0.82, 0.9, 0.96, 1, 1.08, 1.15, 1.22]);
  const actualCost = roundToFive(ev * costFactor);
  const result = calculateEvm({ bac, plannedPercent, actualPercent, actualCost });

  return {
    mode: "stages",
    bac,
    stageCount,
    completedStage,
    plannedPercent,
    actualPercent,
    actualCost,
    result,
  };
}

function evmStatus(result) {
  return {
    cost:
      result.cpi < 0.995 ? "vượt ngân sách" : result.cpi > 1.005 ? "tiết kiệm ngân sách" : "đúng ngân sách",
    schedule:
      result.spi < 0.995 ? "chậm tiến độ" : result.spi > 1.005 ? "nhanh hơn kế hoạch" : "đúng tiến độ",
  };
}

function cvComment(value) {
  if (value < 0) return "CV âm nên chi phí bất lợi, dự án đang vượt ngân sách.";
  if (value > 0) return "CV dương nên chi phí thuận lợi, dự án đang tiết kiệm ngân sách.";
  return "CV bằng 0 nên chi phí đúng với giá trị công việc tạo ra.";
}

function svComment(value) {
  if (value < 0) return "SV âm nên tiến độ bất lợi, dự án đang chậm hơn kế hoạch.";
  if (value > 0) return "SV dương nên tiến độ thuận lợi, dự án đang nhanh hơn kế hoạch.";
  return "SV bằng 0 nên dự án đúng tiến độ theo giá trị kế hoạch.";
}

function vacComment(value) {
  if (value < 0) return "VAC âm nghĩa là dự báo vượt ngân sách khi hoàn thành.";
  if (value > 0) return "VAC dương nghĩa là dự báo còn dư ngân sách khi hoàn thành.";
  return "VAC bằng 0 nghĩa là dự báo hoàn thành đúng BAC.";
}

function forecastUsingDisplayedCpi(evm) {
  const r = evm.result;
  const cpi = roundTo(r.cpi, 2);
  const etc = (evm.bac - r.ev) / cpi;
  const eac = r.ac + etc;
  const vac = evm.bac - eac;
  const tcpiEac = (evm.bac - r.ev) / (eac - r.ac);
  return { cpi, etc, eac, vac, tcpiEac };
}

function evmBaseContext(evm) {
  if (evm.mode === "direct") {
    const r = evm.result;
    return [
      `Sau ${evm.checkpointDay} ngày làm việc, dự án ghi nhận các chỉ số:`,
      `- PV = ${formatMoney(r.pv)}.`,
      `- EV = ${formatMoney(r.ev)}.`,
      `- AC = ${formatMoney(r.ac)}.`,
    ].join("\n");
  }

  return [
    `Dự án chia làm ${evm.stageCount} giai đoạn bằng nhau. Hết giai đoạn ${evm.completedStage}:`,
    `- Theo kế hoạch đã hoàn thành ${Math.round(evm.plannedPercent * 100)}% công việc.`,
    `- Chi phí thực tế (AC) = ${formatMoney(evm.actualCost)}.`,
    `- Khối lượng công việc thực tế hoàn thành = ${Math.round(evm.actualPercent * 100)}%.`,
  ].join("\n");
}

function evmFullAnswer(evm) {
  const r = evm.result;
  const status = evmStatus(r);
  const forecast = forecastUsingDisplayedCpi(evm);
  const tcpiEacText = Number.isFinite(forecast.tcpiEac)
    ? `TCPI theo EAC dự báo = (BAC - EV) / (EAC - AC) = ${roundTo(forecast.tcpiEac, 2)}. Cách này khớp kiểu thầy giải khi đã tính ETC/EAC trước; nếu EAC được lập từ CPI thì TCPI này thường xấp xỉ CPI.`
    : "TCPI theo EAC không xác định vì mẫu số EAC - AC bằng 0.";
  const tcpiBacText = Number.isFinite(r.tcpiBac)
    ? `TCPI nếu vẫn muốn giữ BAC ban đầu = (BAC - EV) / (BAC - AC) = ${roundTo(r.tcpiBac, 2)}. Dùng dòng này khi đề hỏi hiệu suất cần đạt để hoàn thành trong ngân sách gốc.`
    : "TCPI theo BAC không xác định vì mẫu số BAC - AC bằng 0.";
  return [
    "Bước 1. Xác định giá trị gốc",
    `- BAC là ngân sách ban đầu: BAC = ${formatMoney(evm.bac || 0)}.`,
    `- PV là giá trị kế hoạch: PV = BAC x % kế hoạch = ${formatMoney(r.pv)}.`,
    `- EV là giá trị công việc thực tế đã hoàn thành: EV = BAC x % thực tế = ${formatMoney(r.ev)}.`,
    `- AC là chi phí thực tế đã chi: AC = ${formatMoney(r.ac)}.`,
    "",
    "Bước 2. Tính hiệu suất và sai lệch",
    `- CPI = EV / AC = ${roundTo(r.cpi, 2)} => dự án ${status.cost}.`,
    `- SPI = EV / PV = ${roundTo(r.spi, 2)} => dự án ${status.schedule}.`,
    `- CV = EV - AC = ${formatMoney(r.cv)}. ${cvComment(r.cv)}`,
    `- SV = EV - PV = ${formatMoney(r.sv)}. ${svComment(r.sv)}`,
    "",
    "Bước 3. Dự báo khi hoàn thành theo cách thầy giải",
    `- Dùng CPI đã làm tròn khi trình bày: CPI ≈ ${forecast.cpi}.`,
    `- ETC = (BAC - EV) / CPI = ${formatMoney(forecast.etc)}.`,
    `- EAC = AC + ETC = ${formatMoney(forecast.eac)}.`,
    `- VAC = BAC - EAC = ${formatMoney(forecast.vac)}. ${vacComment(forecast.vac)}`,
    `- ${tcpiEacText}`,
    `- ${tcpiBacText}`,
    "",
    "Ghi chú thêm",
    `EAC = BAC / CPI cho cùng kết quả với EAC = AC + (BAC - EV) / CPI trong giả định hiệu suất chi phí hiện tại tiếp diễn. Nếu đề ghi rõ phần còn lại chạy đúng kế hoạch, dùng EAC = AC + (BAC - EV) = ${formatMoney(r.eacPlanned)}.`,
  ].join("\n");
}

function evmBasicAnswer(evm) {
  const r = evm.result;
  const status = evmStatus(r);
  return [
    "Bước 1. Xác định giá trị gốc",
    `- BAC = ngân sách ban đầu = ${formatMoney(evm.bac || 0)}.`,
    `- PV = BAC x % kế hoạch = ${formatMoney(r.pv)}.`,
    `- EV = BAC x % thực tế = ${formatMoney(r.ev)}.`,
    `- AC = chi phí thực tế = ${formatMoney(r.ac)}.`,
    "",
    "Bước 2. Tính CPI và SPI",
    `- CPI = EV / AC = ${roundTo(r.cpi, 2)} => ${status.cost}.`,
    `- SPI = EV / PV = ${roundTo(r.spi, 2)} => ${status.schedule}.`,
    "",
    "Kết luận",
    `Về chi phí: dự án ${status.cost}. Về tiến độ: dự án ${status.schedule}. Đây là kiểu câu giống slide chỉ yêu cầu BAC, AC, PV, EV, CPI, SPI và nhận xét.`,
  ].join("\n");
}

function evmVarianceAnswer(evm) {
  const r = evm.result;
  const status = evmStatus(r);
  return [
    "Bước 1. Tính BAC, PV, EV, AC",
    `- BAC = ngân sách ban đầu = ${formatMoney(evm.bac || 0)}.`,
    `- PV = BAC x % kế hoạch = ${formatMoney(r.pv)}.`,
    `- EV = BAC x % thực tế = ${formatMoney(r.ev)}.`,
    `- AC = ${formatMoney(r.ac)}.`,
    "",
    "Bước 2. Tính chỉ số và sai lệch",
    `- SPI = EV / PV = ${roundTo(r.spi, 2)} => ${status.schedule}.`,
    `- SV = EV - PV = ${formatMoney(r.sv)}. ${svComment(r.sv)}`,
    `- CPI = EV / AC = ${roundTo(r.cpi, 2)} => ${status.cost}.`,
    `- CV = EV - AC = ${formatMoney(r.cv)}. ${cvComment(r.cv)}`,
    "",
    "Kết luận",
    `Tách riêng hai ý khi chấm: về thời gian, dự án ${status.schedule}; về ngân sách, dự án ${status.cost}. Không kết luận chung chung chỉ bằng một chỉ số.`,
  ].join("\n");
}

function evmForecastAnswer(evm) {
  const r = evm.result;
  const status = evmStatus(r);
  const forecast = forecastUsingDisplayedCpi(evm);
  return [
    "Bước 1. Tính PV, EV, CPI và SPI",
    `- PV = BAC x % kế hoạch = ${formatMoney(r.pv)}.`,
    `- EV = BAC x % thực tế = ${formatMoney(r.ev)}.`,
    `- CPI = EV / AC = ${roundTo(r.cpi, 2)} => ${status.cost}.`,
    `- SPI = EV / PV = ${roundTo(r.spi, 2)} => ${status.schedule}.`,
    "",
    "Bước 2. Dự báo theo cách thầy giải",
    `- Dùng CPI đã làm tròn khi trình bày: CPI ≈ ${forecast.cpi}.`,
    `- ETC = (BAC - EV) / CPI = ${formatMoney(forecast.etc)}.`,
    `- EAC = AC + ETC = ${formatMoney(forecast.eac)}.`,
    `- VAC = BAC - EAC = ${formatMoney(forecast.vac)}.`,
    "",
    "Bước 3. Diễn giải",
    forecast.vac < 0
      ? `VAC âm nên dự án dự báo vượt ngân sách ${formatMoney(Math.abs(forecast.vac))}.`
      : forecast.vac > 0
        ? `VAC dương nên dự án dự báo tiết kiệm ${formatMoney(forecast.vac)} so với BAC.`
        : "VAC bằng 0 nên dự án dự báo đúng ngân sách.",
    "Dạng này hỏi cả CPI/SPI và forecast, nên tính CPI/SPI trước, rồi dùng CPI để dự báo ETC/EAC/VAC như bài thầy giải.",
  ].join("\n");
}

function evmExplainAnswer(evm) {
  const r = evm.result;
  const status = evmStatus(r);
  const forecast = forecastUsingDisplayedCpi(evm);
  return [
    "Giải thích các chỉ số",
    "- PV (Planned Value): giá trị kế hoạch đáng ra phải hoàn thành tại thời điểm đo.",
    "- EV (Earned Value): giá trị công việc thực tế đã hoàn thành.",
    "- AC (Actual Cost): chi phí thực tế đã chi.",
    "- CPI = EV / AC: hiệu suất chi phí; < 1 là vượt ngân sách, > 1 là tiết kiệm.",
    "- SPI = EV / PV: hiệu suất tiến độ; < 1 là chậm, > 1 là nhanh.",
    "- ETC = (BAC - EV) / CPI: chi phí còn cần để hoàn thành nếu hiệu suất chi phí hiện tại tiếp diễn.",
    "- EAC = AC + ETC: dự báo tổng chi phí khi hoàn thành. Công thức này tương đương BAC / CPI trong giả định hiện tại tiếp diễn.",
    "",
    "Áp dụng vào số liệu đề",
    `- BAC = ${formatMoney(evm.bac || 0)}, PV = ${formatMoney(r.pv)}, EV = ${formatMoney(r.ev)}, AC = ${formatMoney(r.ac)}.`,
    `- CPI = ${roundTo(r.cpi, 2)} => ${status.cost}.`,
    `- SPI = ${roundTo(r.spi, 2)} => ${status.schedule}.`,
    `- Dùng CPI đã làm tròn khi trình bày: CPI ≈ ${forecast.cpi}.`,
    `- ETC = (BAC - EV) / CPI = ${formatMoney(forecast.etc)}, EAC = AC + ETC = ${formatMoney(forecast.eac)}.`,
  ].join("\n");
}

function evmPlanAssumptionAnswer(evm) {
  const r = evm.result;
  return [
    "Bước 1. Tính BAC, PV, EV, AC",
    `- BAC = ngân sách ban đầu = ${formatMoney(evm.bac || 0)}.`,
    `- PV = BAC x % kế hoạch = ${formatMoney(r.pv)}.`,
    `- EV = BAC x % thực tế = ${formatMoney(r.ev)}.`,
    `- AC = ${formatMoney(r.ac)}.`,
    "",
    "Bước 2. Tính CPI, SPI, CV, SV",
    `- CPI = EV / AC = ${roundTo(r.cpi, 2)}.`,
    `- SPI = EV / PV = ${roundTo(r.spi, 2)}.`,
    `- CV = EV - AC = ${formatMoney(r.cv)}. ${cvComment(r.cv)}`,
    `- SV = EV - PV = ${formatMoney(r.sv)}. ${svComment(r.sv)}`,
    "",
    "Bước 3. EAC theo giả định sai lệch hiện tại không tiếp diễn",
    `- EAC = AC + (BAC - EV) = ${formatMoney(r.eacPlanned)}.`,
    `- ETC = BAC - EV = ${formatMoney((evm.bac || 0) - r.ev)}.`,
    "Dạng này chỉ dùng khi đề ghi rõ phần còn lại theo đúng kế hoạch hoặc sai lệch hiện tại không tiếp diễn.",
  ].join("\n");
}

function buildEvmVariant(random, evm) {
  const variants = [
    {
      id: "basic",
      prompt: `${evmBaseContext(evm)}\n\nTính BAC, AC, PV, EV, CPI, SPI và nhận xét tình trạng chi phí, tiến độ của dự án.`,
      answer: evmBasicAnswer(evm),
    },
    {
      id: "variance",
      prompt: `${evmBaseContext(evm)}\n\nTính BAC, AC, SV, SPI, PV, EV, CV, CPI. Kết luận về thời gian thực hiện và ngân sách của dự án.`,
      answer: evmVarianceAnswer(evm),
    },
    {
      id: "forecast",
      prompt: `${evmBaseContext(evm)}\n\nTính CPI, SPI. Sau đó tính ETC, EAC, VAC theo giả định hiệu suất chi phí hiện tại tiếp diễn.`,
      answer: evmForecastAnswer(evm),
    },
    {
      id: "full",
      prompt: `${evmBaseContext(evm)}\n\nTính PV, EV, CPI, SPI, CV, SV. Nhận xét tình trạng dự án. Dự báo ETC, EAC, VAC và TCPI.`,
      answer: evmFullAnswer(evm),
    },
    {
      id: "explain",
      prompt: `${evmBaseContext(evm)}\n\nTính CPI, SPI, ETC và EAC. Giải thích các chỉ số PV, EV, AC, CPI, SPI, ETC, EAC là gì.`,
      answer: evmExplainAnswer(evm),
    },
    {
      id: "plan-assumption",
      prompt: `${evmBaseContext(evm)}\n\nTính CPI, SPI, CV, SV. Tính EAC theo giả thiết các sai lệch chi phí hiện tại sẽ không tiếp diễn trong tương lai.`,
      answer: evmPlanAssumptionAnswer(evm),
    },
  ];
  return pick(random, variants);
}

function buildContractQuestion(random) {
  const targetCost = pick(random, [60, 80, 90, 100, 120, 150, 180, 200]);
  const targetFee = pick(random, [6, 8, 10, 12, 15, 18, 20]);
  const [buyerShare, sellerSharePercent] = pick(random, [
    [50, 50],
    [70, 30],
    [75, 25],
    [80, 20],
    [60, 40],
  ]);
  const sellerShare = sellerSharePercent / 100;
  const delta = pick(random, [-30, -20, -10, -4, 0, 10, 20, 30]);
  const actualCost = Math.max(40, targetCost + delta);
  const result = calculateIncentive({ targetCost, targetFee, actualCost, sellerShare });
  return { targetCost, targetFee, buyerShare, sellerSharePercent, sellerShare, actualCost, result };
}

function contractAnswer(contract) {
  const r = contract.result;
  const varianceLabel =
    r.costDifference > 0
      ? "Số tiền tiết kiệm được"
      : r.costDifference < 0
        ? "Số tiền vượt chi phí"
        : "Chênh lệch chi phí";
  const adjustmentDirection =
    r.sellerAdjustment > 0
      ? "Seller được cộng thêm do tiết kiệm"
      : r.sellerAdjustment < 0
        ? "Seller bị trừ do vượt chi phí"
        : "Seller không bị cộng/trừ thêm";
  const finalFeeNote =
    r.finalFee < 0
      ? "Final Fee âm theo công thức vì đề không cho minimum fee/floor. Nếu hợp đồng có quy định fee tối thiểu, phải áp dụng giới hạn đó; còn dạng đề mẫu của thầy thì tính trực tiếp theo dữ liệu đề."
      : "Final Fee là số tiền lợi/fee cuối cùng seller nhận được theo công thức incentive.";
  return [
    "Bước 1. Xác định dữ liệu hợp đồng",
    `- Target Cost = ${formatMoney(contract.targetCost)}.`,
    `- Target Fee = ${formatMoney(contract.targetFee)}.`,
    `- Sharing ratio = ${contract.buyerShare}/${contract.sellerSharePercent} (Buyer/Seller), nên phần Seller dùng để tính fee là ${contract.sellerSharePercent}%.`,
    `- Actual Cost = ${formatMoney(contract.actualCost)}.`,
    `- Target Price = Target Cost + Target Fee = ${formatMoney(contract.targetCost)} + ${formatMoney(contract.targetFee)} = ${formatMoney(r.targetPrice)}.`,
    "",
    "Bước 2. Tính phần tiết kiệm hoặc vượt chi phí",
    `${varianceLabel}: Cost Variance = Target Cost - Actual Cost = ${formatMoney(contract.targetCost)} - ${formatMoney(contract.actualCost)} = ${formatMoney(r.costDifference)}.`,
    `${adjustmentDirection}: Seller share x Cost Variance = ${contract.sellerSharePercent}% x ${formatMoney(r.costDifference)} = ${formatMoney(r.sellerAdjustment)}.`,
    "",
    "Bước 3. Tính Final Fee",
    `Final Fee = Target Fee + Seller share x Cost Variance = ${formatMoney(contract.targetFee)} + ${formatMoney(r.sellerAdjustment)} = ${formatMoney(r.finalFee)}.`,
    finalFeeNote,
    "",
    "Bước 4. Tính Final Price",
    `Final Price = Actual Cost + Final Fee = ${formatMoney(contract.actualCost)} + ${formatMoney(r.finalFee)} = ${formatMoney(r.finalPrice)}.`,
    "",
    "Kết luận",
    `Seller nhận Final Fee ${formatMoney(r.finalFee)}; Buyer trả Final Price ${formatMoney(r.finalPrice)} nếu đề không cho ceiling price, minimum fee hoặc điều kiện giới hạn khác.`,
    "",
    "Mẹo theo bài thầy giải",
    `Sharing ratio là ${contract.buyerShare}/${contract.sellerSharePercent} (Buyer/Seller), nên phần dùng để tính fee của seller là ${contract.sellerSharePercent}%, không phải ${contract.buyerShare}%.`,
  ].join("\n");
}

function buildCommunicationVariant(random, { domain, channelsN, channels }) {
  const pmName = pick(random, ["Phương", "Minh", "Lan", "Huy", "An"]);
  const deliverables = joinShort(domain.deliverables, 3);
  const risks = joinShort(domain.risks, 2);
  const variants = [
    {
      id: "weekly-report",
      prompt: "Đề xuất quy trình báo cáo tiến độ hằng tuần giữa các thành viên và PM.",
      answer: [
        "b. Quy trình báo cáo hằng tuần",
        `Với dự án ${domain.name}, báo cáo tuần cần theo dõi sát các hạng mục ${deliverables} và các rủi ro như ${risks}.`,
        "1. Trước cuộc họp: từng thành viên cập nhật việc đã hoàn thành, việc tuần tới, % hoàn thành, issue, rủi ro, blocker và nhu cầu hỗ trợ.",
        "2. Trong cuộc họp: PM rà soát lệch tiến độ/chi phí/phạm vi, chốt owner và deadline cho từng issue.",
        "3. Sau cuộc họp: PM gửi weekly status report cho stakeholder cần biết, cập nhật dashboard/task board, ghi issue vào issue log.",
        "4. Lưu trữ: biên bản, báo cáo, quyết định và tài liệu liên quan lưu ở PMIS/drive/wiki chung để truy vết.",
        "",
        "Nên phân biệt: status report nói dự án đang ở đâu, progress report nói tuần qua đã làm gì, forecast dự báo rủi ro/trạng thái sắp tới.",
      ].join("\n"),
    },
    {
      id: "tools-storage",
      prompt: `Làm ${pmName} (PM) nên sử dụng công cụ gì để quản lý truyền thông và lưu trữ cho một dự án quy mô ${channelsN} người như thế này?`,
      answer: [
        "b. Công cụ quản lý truyền thông và lưu trữ",
        `${pmName} không nên chỉ dùng chat rời rạc hoặc email cá nhân, vì dự án ${domain.name} có ${channelsN} người, ${channels} kênh trao đổi và cần truy vết quyết định.`,
        "",
        "| Nhu cầu | Công cụ phù hợp | Cách dùng trong dự án |",
        "|---|---|---|",
        "| Theo dõi công việc | Trello/Jira/MS Project/Planner | Mỗi task có owner, deadline, trạng thái, comment và file liên quan |",
        "| Lưu tài liệu | Google Drive/SharePoint/OneDrive/Wiki | Lưu SOW, biên bản họp, yêu cầu, thiết kế, test case, lessons learned theo thư mục chuẩn |",
        "| Trao đổi nhanh | Teams/Slack/Zalo nhóm có quy định | Dùng cho nhắc nhanh, blocker; quyết định quan trọng phải ghi lại ở biên bản hoặc task |",
        "| Báo cáo | Dashboard/Google Sheet/Power BI | Tổng hợp tiến độ, issue, rủi ro, chi phí, mốc sắp tới cho PM và sponsor |",
        "| Tri thức dự án | Wiki/Confluence/Notion | Lưu quy trình, FAQ, hướng dẫn triển khai và project archives |",
        "",
        "Kết luận: công nghệ chỉ là công cụ hỗ trợ. PM cần quy định rõ ai cập nhật, cập nhật khi nào, tài liệu đặt ở đâu, phiên bản nào là chính thức và khi nào phải escalation.",
      ].join("\n"),
    },
    {
      id: "project-archive",
      prompt: "Phân tích tầm quan trọng của việc lưu trữ tài liệu dự án (Project Archive).",
      answer: [
        "b. Tầm quan trọng của Project Archive",
        "Project Archive là nơi lưu toàn bộ tài liệu chính thức sau và trong dự án: charter/SOW, kế hoạch, baseline, yêu cầu, thiết kế, RACI, biên bản họp, quyết định thay đổi, test case, nghiệm thu, hợp đồng, issue log, risk register và lessons learned.",
        "",
        "| Lợi ích | Ý nghĩa trong dự án |",
        "|---|---|",
        `| Truy vết quyết định | Khi có tranh luận về ${deliverables}, PM xem lại biên bản, change request và người phê duyệt |`,
        "| Bàn giao và vận hành | Đội vận hành có tài liệu cấu hình, hướng dẫn, tài khoản, checklist và tiêu chí nghiệm thu |",
        "| Kiểm soát rủi ro/pháp lý | Có bằng chứng về phê duyệt, phạm vi, bảo mật, nghiệm thu và thay đổi hợp đồng |",
        "| Học cho dự án sau | Lessons learned giúp ước tính, truyền thông và xử lý rủi ro tốt hơn ở dự án tiếp theo |",
        "",
        "Cách làm tốt: đặt cấu trúc thư mục chuẩn, phân quyền rõ, quy tắc đặt tên phiên bản, lưu bản chính thức, có owner cập nhật và khóa/lưu trữ khi đóng dự án.",
      ].join("\n"),
    },
    {
      id: "communication-plan",
      prompt: "Trình bày nội dung chính của một kế hoạch quản lý truyền thông (Communication Management Plan).",
      answer: [
        "b. Nội dung Communication Management Plan",
        "Một kế hoạch quản lý truyền thông là tài liệu hướng dẫn việc tạo, phân phối, lưu trữ, truy xuất và kiểm soát thông tin dự án.",
        `Với dự án ${domain.name}, kế hoạch này phải nói rõ ai nhận thông tin về ${deliverables}, ai báo cáo rủi ro như ${risks}, kênh nào là chính thức và tần suất cập nhật.`,
        "",
        "| Thành phần | Ý nghĩa | Ví dụ áp dụng |",
        "|---|---|---|",
        "| Stakeholder/audience | Ai cần nhận thông tin | Sponsor, PM, team, vendor, người dùng cuối |",
        "| Information needs | Họ cần biết gì | Tiến độ, rủi ro, issue, thay đổi phạm vi, chi phí |",
        "| Format/detail | Định dạng và mức chi tiết | Dashboard 1 trang cho sponsor, task detail cho team |",
        "| Sender/receiver | Ai gửi, ai nhận | PM gửi weekly report cho sponsor; tester gửi bug report cho developer |",
        "| Channel/technology | Kênh/công nghệ | Họp, email, Teams/Slack, Google Drive, SharePoint, Wiki |",
        "| Frequency | Tần suất | Daily standup, weekly report, báo cáo milestone |",
        "| Escalation | Cách xử lý khiếu nại/vấn đề vượt thẩm quyền | Issue nghiêm trọng báo PM trong 2 giờ, PM báo sponsor trong 24 giờ |",
        "",
        "Điểm lấy điểm: câu trả lời phải có người nhận, nội dung, kênh, tần suất, người chịu trách nhiệm và cơ chế escalation.",
      ].join("\n"),
    },
    {
      id: "methods",
      prompt: "Phân biệt các phương thức giao tiếp Interactive, Push, Pull và đề xuất cách dùng phù hợp cho dự án này.",
      answer: [
        "b. Phương thức giao tiếp",
        "Ba phương thức không thay thế nhau hoàn toàn; PM nên phối hợp theo mục đích thông tin.",
        "",
        "| Phương thức | Khi nào dùng | Ví dụ trong dự án | Lưu ý |",
        "|---|---|---|---|",
        "| Interactive | Cần trao đổi hai chiều, làm rõ hiểu nhầm, ra quyết định | Họp yêu cầu, video call xử lý blocker, workshop UAT | Hiệu quả nhất để hiểu nhau nhưng tốn thời gian |",
        "| Push | Cần gửi thông tin đến người nhận cụ thể | Email báo cáo tuần, thông báo lịch họp, gửi biên bản | Gửi được chưa chắc người nhận đã hiểu |",
        "| Pull | Thông tin lớn, người nhận tự tra cứu khi cần | Wiki, Drive, SharePoint, dashboard, e-learning | Phải đặt cấu trúc rõ và cập nhật phiên bản |",
        "",
        `Với dự án ${domain.name}, PM nên dùng interactive cho họp yêu cầu/issue khó về ${deliverables}, push cho báo cáo chính thức, pull cho tài liệu thiết kế, test case, hướng dẫn và project archives.`,
      ].join("\n"),
    },
    {
      id: "performance-bad-news",
      prompt: "Trình bày các loại báo cáo hiệu suất trong dự án và cách PM nên giao tiếp khi phải báo tin xấu.",
      answer: [
        "b. Báo cáo hiệu suất và giao tiếp tin xấu",
        "Theo slide tiếng Việt, báo cáo hiệu suất gồm status reports, progress reports và forecasts.",
        "",
        "| Loại báo cáo | Nội dung | Ví dụ |",
        "|---|---|---|",
        "| Status report | Dự án đang ở đâu tại một thời điểm | Hiện hoàn thành 45%, CPI 0.9, có 3 issue mở |",
        "| Progress report | Nhóm đã làm được gì trong một khoảng thời gian | Tuần này hoàn tất API đăng nhập và test module thông báo |",
        "| Forecast | Dự báo trạng thái tương lai dựa trên dữ liệu hiện tại | Nếu không thêm tester, UAT có thể trễ 1 tuần |",
        "",
        "Khi báo tin xấu, PM không nên chôn vùi hoặc báo mơ hồ. Cách làm tốt: nêu dữ kiện, tác động, nguyên nhân, phương án xử lý, quyết định cần sponsor hỗ trợ và thời hạn cập nhật tiếp theo.",
        `Ví dụ trong dự án ${domain.name}: nếu hạng mục ${deliverables.split(", ")[0]} trễ do ${risks.split(", ")[0]}, PM cần nêu tác động, phương án xử lý, người chịu trách nhiệm và thời hạn cập nhật tiếp theo.`,
      ].join("\n"),
    },
    {
      id: "meeting-template",
      prompt: "Đề xuất cách tổ chức họp hiệu quả và sử dụng mẫu biểu (templates) để cải thiện truyền thông dự án.",
      answer: [
        "b. Họp hiệu quả và templates",
        "Slide tiếng Việt nhấn mạnh: chỉ họp khi cần thiết, có agenda rõ ràng, dùng templates để tiết kiệm thời gian và tiền bạc.",
        "",
        "Cách tổ chức họp:",
        "1. Xác định mục tiêu họp: ra quyết định, làm rõ yêu cầu, xử lý issue hay cập nhật tiến độ.",
        "2. Gửi agenda trước: chủ đề, người phụ trách, thời lượng, tài liệu cần đọc.",
        "3. Trong họp: ghi quyết định, action item, owner, deadline, rủi ro/issue phát sinh.",
        "4. Sau họp: gửi minutes of meeting và lưu vào nơi chung.",
        "",
        `Với dự án ${domain.name}, các cuộc họp nên bám các mốc của ${deliverables}, tránh họp chung chung không ra quyết định.`,
        "",
        "Templates nên dùng:",
        "- Mẫu báo cáo tuần: hoàn thành, kế hoạch, issue, risk, cần hỗ trợ.",
        "- Mẫu biên bản họp: quyết định, action items, owner, deadline.",
        "- Mẫu change request và issue log.",
        "- Mẫu lessons learned và project archive khi kết thúc dự án.",
      ].join("\n"),
    },
    {
      id: "communication-matrix",
      prompt: "Lập một ma trận truyền thông ngắn cho dự án: ai nhận thông tin, nội dung gì, kênh nào, tần suất nào.",
      answer: [
        "b. Ma trận truyền thông đề xuất",
        "Ma trận truyền thông giúp PM biến communication plan thành lịch giao tiếp cụ thể, tránh tình trạng ai cũng nhận mọi thứ hoặc không ai biết thông tin quan trọng.",
        `Với dự án ${domain.name}, ma trận nên ưu tiên luồng thông tin cho ${deliverables} và rủi ro ${risks}.`,
        "",
        "| Người nhận | Nội dung | Kênh | Tần suất | Người gửi |",
        "|---|---|---|---|---|",
        "| Sponsor/chủ đầu tư | Tổng quan tiến độ, chi phí, rủi ro, quyết định cần duyệt | Email + dashboard + họp | Hằng tuần hoặc theo milestone | PM |",
        "| Đội dự án | Task, blocker, thay đổi yêu cầu, bug quan trọng | Daily meeting + task board + chat | Hằng ngày | PM/Team lead |",
        "| Người dùng/đại diện nghiệp vụ | Demo, yêu cầu, phản hồi UAT, lịch đào tạo | Workshop + biên bản + email | Theo giai đoạn | BA/PM |",
        "| Vendor/nhà cung cấp | SLA, tiến độ giao hàng, issue tích hợp | Email chính thức + họp kỹ thuật | Hằng tuần hoặc khi có issue | PM/Procurement |",
        "| Kho tài liệu chung | Yêu cầu, thiết kế, test case, biên bản, lessons learned | Drive/SharePoint/Wiki | Cập nhật khi có thay đổi | Owner từng tài liệu |",
        "",
        "Điểm quan trọng: mỗi dòng cần có người nhận, nội dung, kênh, tần suất và người chịu trách nhiệm gửi/cập nhật.",
      ].join("\n"),
    },
    {
      id: "sponsor-updates",
      prompt: "Đề xuất 03 phương pháp truyền thông để đảm bảo khách hàng/Sponsor nắm bắt kịp thời tiến độ.",
      answer: [
        "b. Ba phương pháp truyền thông cho Sponsor",
        `Với dự án ${domain.name}, Sponsor không cần mọi chi tiết kỹ thuật nhưng cần biết tiến độ, chi phí, rủi ro, thay đổi phạm vi và quyết định đang chờ duyệt.`,
        "",
        "1. Weekly status report dạng push: PM gửi email/báo cáo 1 trang mỗi tuần gồm % hoàn thành, mốc đã đạt, CPI/SPI nếu có, issue/risk lớn, quyết định cần sponsor hỗ trợ.",
        "2. Dashboard dùng pull communication: dashboard/PMIS cập nhật realtime hoặc hằng tuần để Sponsor tự xem trạng thái task, mốc, rủi ro, chi phí và blocker.",
        "3. Họp milestone hoặc steering meeting dạng interactive: dùng khi cần ra quyết định, duyệt change request, xử lý rủi ro lớn hoặc demo kết quả quan trọng.",
        "",
        "Kết luận: nên kết hợp push, pull và interactive. Báo cáo giúp sponsor nhận thông tin chính thức; dashboard giúp theo dõi nhanh; họp giúp ra quyết định kịp thời.",
      ].join("\n"),
    },
  ];

  return pick(random, variants);
}

export function generateExam(seed = makeSeed()) {
  const random = seededRandom(seed);
  const domain = pick(random, projectDomains);
  const team = buildTeam(domain, random);
  const context = buildProjectContext(domain, team, random);
  const theory = pick(random, q1Theory);
  const raci = buildRaci(domain, random);
  const theoryAnswer = buildQ1TheoryAnswer(theory, domain, team, raci);
  const q2 = buildRiskQuestion(domain, random);
  const evm = buildEvmQuestion(random, context.bac);
  const q3 = buildEvmVariant(random, evm);
  const internalPeople = totalPeople(team);
  const externalPeople = domain.externalPeople ? pick(random, domain.externalPeople) : pick(random, [0, 0, 1, 2, 3]);
  const channelsN = internalPeople + externalPeople;
  const channels = (channelsN * (channelsN - 1)) / 2;
  const q4b = buildCommunicationVariant(random, { domain, channelsN, channels });
  const contract = buildContractQuestion(random);
  const contractType = pick(random, ["FPIF", "CPIF"]);

  return {
    seed,
    domain: domain.id,
    title: `Đề luyện ngẫu nhiên - ${domain.name}`,
    context,
    meta: {
      duration: 60,
      totalPoints: 10,
      generatedAt: new Date().toISOString(),
    },
    questions: [
      {
        id: "q1",
        points: 2,
        title: "Câu 1",
        tags: ["HR", "RACI"],
        prompt: `a. ${theory.prompt}\n\nb. Lập ma trận RACI cho các công việc: ${raci.map((row) => row.task).join(", ")}.`,
        answer: `a. Gợi ý trả lời lý thuyết\n${theoryAnswer}\n\nb. Một phương án RACI hợp lý:\n\n${raciMarkdown(raci, domain)}\n\nGiải thích theo từng công việc:\n${raciRowExplanation(raci)}\n\nCách đọc bảng: mỗi hàng là một công việc, mỗi cột là một vai trò/người trong dự án, ô bên trong ghi R/A/C/I. R là người trực tiếp làm, A là người chịu trách nhiệm cuối cùng và phê duyệt, C là người cần hỏi ý kiến hai chiều, I là người chỉ cần được thông báo.\n\nKiểm tra theo bài giảng: mỗi hàng có đúng một A; mỗi công việc có ít nhất một R; không lạm dụng quá nhiều C; người phê duyệt/chủ đầu tư thường nên là A hoặc I, chỉ đặt C khi thật sự cần hỏi ý kiến trước khi làm như thu thập yêu cầu, UI hoặc bàn giao.`,
      },
      {
        id: "q2",
        points: 2,
        title: "Câu 2",
        tags: ["Risk", "EMV"],
        prompt: q2.prompt,
        answer: q2.answer,
      },
      {
        id: "q3",
        points: 3,
        title: "Câu 3",
        tags: ["Cost", "EVM"],
        prompt: q3.prompt,
        answer: q3.answer,
      },
      {
        id: "q4",
        points: 2,
        title: "Câu 4",
        tags: ["Communications"],
        prompt: `${externalPeople ? `Dự án có ${internalPeople} người nội bộ và ${externalPeople} người phía đối tác/khách hàng.` : `Dự án có tổng cộng ${channelsN} thành viên.`}\n\na. Tính số kênh truyền thông.\n\nb. ${q4b.prompt}`,
        answer: `a. Tính số kênh\nCông thức: n(n-1)/2. Với n = ${channelsN}, số kênh = ${channelsN} x ${channelsN - 1} / 2 = ${channels} kênh.\n\nÝ nghĩa: số kênh tăng rất nhanh khi thêm người, nên dự án đông thành viên phải có communication plan, kênh lưu trữ chung và quy tắc escalation rõ ràng.\n\n${q4b.answer}`,
      },
      {
        id: "q5",
        points: 1,
        title: "Câu 5",
        tags: ["Procurement"],
        prompt: `Hợp đồng ${contractType} cho ${domain.procurement}: Target Cost = ${formatMoney(contract.targetCost)}, Target Fee = ${formatMoney(contract.targetFee)}, Sharing ratio ${contract.buyerShare}/${contract.sellerSharePercent} (Buyer/Seller). Actual Cost = ${formatMoney(contract.actualCost)}. Tính Final Fee và Final Price.`,
        answer: contractAnswer(contract),
      },
    ],
  };
}
