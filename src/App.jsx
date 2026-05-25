import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  Brain,
  Calculator,
  Check,
  ChevronRight,
  ClipboardCheck,
  Download,
  Eye,
  FileSearch,
  FileText,
  GraduationCap,
  Layers,
  Menu,
  Play,
  RotateCcw,
  Search,
  Shuffle,
  Timer,
  X,
} from "lucide-react";
import { chapters, flashcards, formulaEquivalents, formulas, learningMethods, theoryNotes } from "./data/courseData";
import { teacherExams } from "./data/teacherExams";
import {
  calculateEvm,
  calculateIncentive,
  formatMoney,
  generateExam,
  makeSeed,
} from "./utils/examGenerator";

const DAY = 24 * 60 * 60 * 1000;

const navItems = [
  { id: "dashboard", label: "Tổng quan", icon: GraduationCap },
  { id: "theory", label: "Lý thuyết", icon: BookOpen },
  { id: "cards", label: "Flashcard", icon: Brain },
  { id: "formulas", label: "Công thức", icon: Calculator },
  { id: "exam", label: "Luyện đề", icon: ClipboardCheck },
  { id: "sources", label: "Nguồn PDF", icon: FileSearch },
];

const teacherEvmInput = {
  bac: 200,
  planned: 30,
  actual: 25,
  ac: 70,
  forecastBac: 120,
};

const teacherContractInput = {
  targetCost: 54,
  targetFee: 5,
  actualCost: 50,
  sellerShare: 20,
};

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

function percent(value, total) {
  if (!total) return 0;
  return Math.round((value / total) * 100);
}

function toNumber(value) {
  const next = Number(value);
  return Number.isFinite(next) ? next : 0;
}

function formatIndex(value) {
  return Number.isFinite(value) ? value.toFixed(2) : "N/A";
}

function teacherExamLabel(title) {
  return title
    .replace("Đề thầy mới 04 -", "Đề 04 -")
    .replace("Đề thầy mới -", "Đề")
    .replace("Đề thầy mới", "Đề");
}

function costStatus(cpi) {
  if (!Number.isFinite(cpi)) return "N/A";
  if (Math.abs(cpi - 1) < 0.005) return "Đúng ngân sách";
  return cpi < 1 ? "Vượt chi phí" : "Tiết kiệm";
}

function scheduleStatus(spi) {
  if (!Number.isFinite(spi)) return "N/A";
  if (Math.abs(spi - 1) < 0.005) return "Đúng tiến độ";
  return spi < 1 ? "Chậm tiến độ" : "Nhanh tiến độ";
}

function StatCard({ icon: Icon, label, value, detail, tone = "green" }) {
  return (
    <section className={cx("stat-card", `tone-${tone}`)}>
      <div className="stat-icon">
        <Icon size={20} />
      </div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
        <span>{detail}</span>
      </div>
    </section>
  );
}

function TopBar({ active, onMenu }) {
  const item = navItems.find((entry) => entry.id === active) || navItems[0];
  return (
    <header className="topbar">
      <button className="icon-button mobile-only" onClick={onMenu} title="Mở menu" type="button">
        <Menu size={20} />
      </button>
      <div>
        <p className="eyebrow">Quản lý dự án CNTT</p>
        <h1>{item.label}</h1>
      </div>
    </header>
  );
}

function Sidebar({ active, setActive, open, setOpen }) {
  return (
    <>
      <div className={cx("scrim", open && "show")} onClick={() => setOpen(false)} />
      <aside className={cx("sidebar", open && "open")}>
        <div className="brand">
          <div className="brand-mark">QL</div>
          <div>
            <strong>Ôn Thi QLDA</strong>
            <span>5 câu • 60 phút</span>
          </div>
          <button className="icon-button mobile-only" onClick={() => setOpen(false)} title="Đóng menu" type="button">
            <X size={18} />
          </button>
        </div>
        <nav>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                className={cx("nav-button", active === item.id && "active")}
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  setOpen(false);
                }}
                type="button"
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="sidebar-note">
          <span>Trọng tâm</span>
          <strong>Chi phí • Nhân lực • Truyền thông • Rủi ro • Mua sắm • Stakeholder</strong>
        </div>
      </aside>
    </>
  );
}

function Dashboard({ dueCount, progress, setActive, setSelectedChapter }) {
  const completed = progress.completedChapters?.length || 0;
  const cardProgress = Object.keys(progress.cards || {}).length;
  const latestExam = progress.lastExamSeed || "chưa có";

  return (
    <div className="view-stack">
      <section className="stats-grid">
        <StatCard icon={BookOpen} label="Chương trọng tâm" value={chapters.length} detail={`${completed} chương đã đánh dấu`} />
        <StatCard icon={Brain} label="Thẻ đến hạn" value={dueCount} detail={`${cardProgress}/${flashcards.length} thẻ đã luyện`} tone="red" />
        <StatCard icon={ClipboardCheck} label="Mẫu đề thi" value="5 câu" detail="10 điểm trong 60 phút" tone="blue" />
        <StatCard icon={Shuffle} label="Seed đề gần nhất" value={latestExam} detail="Mỗi seed tạo một biến thể" tone="amber" />
      </section>

      <section className="panel">
        <div className="section-title">
          <div>
            <p className="eyebrow">Phương pháp học</p>
            <h2>Nhịp ôn tập đề xuất</h2>
          </div>
        </div>
        <div className="method-grid">
          {learningMethods.map((method) => (
            <article className="method-card" key={method.id}>
              <strong>{method.title}</strong>
              <p>{method.short}</p>
              <span>{method.source}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="chapter-grid">
        {chapters.map((chapter) => (
          <article className="chapter-card" key={chapter.id} style={{ "--accent": chapter.accent }}>
            <div>
              <span>Chương {chapter.chapter}</span>
              <h3>{chapter.titleVi}</h3>
              <p>{chapter.examRole}</p>
            </div>
            <button
              className="ghost-button"
              onClick={() => {
                setSelectedChapter(chapter.id);
                setActive("theory");
              }}
              type="button"
            >
              <BookOpen size={17} />
              Học chương
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}

function TheoryView({ selectedChapter, setSelectedChapter, progress, setProgress }) {
  const chapter = chapters.find((entry) => entry.id === selectedChapter) || chapters[0];
  const chapterFormulas = formulas.filter((formula) => formula.chapter === chapter.chapter);
  const notes = theoryNotes[chapter.id] || {};
  const completed = progress.completedChapters?.includes(chapter.id);

  function toggleCompleted() {
    setProgress((current) => {
      const set = new Set(current.completedChapters || []);
      if (set.has(chapter.id)) set.delete(chapter.id);
      else set.add(chapter.id);
      return { ...current, completedChapters: [...set] };
    });
  }

  return (
    <div className="two-column">
      <aside className="chapter-list panel">
        {chapters.map((entry) => (
          <button
            className={cx("chapter-pill", entry.id === chapter.id && "active")}
            key={entry.id}
            onClick={() => setSelectedChapter(entry.id)}
            style={{ "--accent": entry.accent }}
            type="button"
          >
            <span>Ch. {entry.chapter}</span>
            <strong>{entry.titleVi}</strong>
          </button>
        ))}
      </aside>

      <section className="panel theory-panel" style={{ "--accent": chapter.accent }}>
        <div className="chapter-heading">
          <div>
            <p className="eyebrow">Chương {chapter.chapter} • {chapter.titleEn}</p>
            <h2>{chapter.titleVi}</h2>
            <p>{chapter.quickWin}</p>
          </div>
          <button className={cx("primary-button", completed && "done")} onClick={toggleCompleted} type="button">
            <Check size={17} />
            {completed ? "Đã ôn" : "Đánh dấu ôn"}
          </button>
        </div>

        <div className="objective-strip">
          {chapter.objectives.map((objective) => (
            <span key={objective}>{objective}</span>
          ))}
        </div>

        <div className="theory-sections">
          {chapter.sections.map((section) => {
            const note = notes[section.title];
            return (
              <article className="theory-section" key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {note?.items?.length ? (
                  <div className="matched-note">
                    <strong>Chú thích và ví dụ bám theo các ý trên</strong>
                    <div className="table-scroll">
                      <table className="answer-table note-table">
                        <thead>
                          <tr>
                            <th>Ý phía trên</th>
                            <th>Chú thích</th>
                            <th>Ví dụ</th>
                          </tr>
                        </thead>
                        <tbody>
                          {note.items.map((item) => (
                            <tr key={item.term}>
                              <td>{item.term}</td>
                              <td>{item.note}</td>
                              <td>{item.example}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : note ? (
                  <div className="note-grid">
                    <div className="theory-note">
                      <strong>Ghi chú tổng hợp</strong>
                      <span>{note.note}</span>
                    </div>
                    <div className="theory-note example-note">
                      <strong>Ví dụ tổng hợp</strong>
                      <span>{note.example}</span>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>

        {!!chapterFormulas.length && (
          <section className="mini-panel">
            <h3>Công thức trong chương</h3>
            <div className="formula-strip">
              {chapterFormulas.map((formula) => (
                <article key={formula.id}>
                  <strong>{formula.name}</strong>
                  <code>{formula.formula}</code>
                  <span>{formula.meaning}</span>
                </article>
              ))}
            </div>
          </section>
        )}

        {chapter.chapter === 7 && <FormulaEquivalents chapter={7} />}

        <div className="split-panels">
          <section className="mini-panel">
            <h3>Checklist đi thi</h3>
            <ul className="check-list">
              {chapter.checklist.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="mini-panel">
            <h3>Lỗi hay mất điểm</h3>
            <ul className="trap-list">
              {chapter.traps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}

function dueDateLabel(timestamp) {
  if (!timestamp) return "đến hạn";
  const days = Math.ceil((timestamp - Date.now()) / DAY);
  if (days <= 0) return "đến hạn";
  return `còn ${days} ngày`;
}

function CardsView({ progress, setProgress }) {
  const [chapterFilter, setChapterFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const cards = useMemo(() => {
    return flashcards.filter((card) => chapterFilter === "all" || card.chapterId === chapterFilter);
  }, [chapterFilter]);

  const queue = cards.filter((card) => {
    if (showAll) return true;
    const item = progress.cards?.[card.id];
    return !item?.dueAt || item.dueAt <= Date.now();
  });

  const activeCard = queue[index % Math.max(queue.length, 1)];
  const chapter = activeCard ? chapters.find((entry) => entry.id === activeCard.chapterId) : null;

  useEffect(() => {
    setIndex(0);
    setRevealed(false);
  }, [chapterFilter, showAll]);

  function grade(rating) {
    if (!activeCard) return;
    setProgress((current) => {
      const old = current.cards?.[activeCard.id] || { ease: 2.2, interval: 0, reps: 0 };
      let ease = old.ease || 2.2;
      let interval = old.interval || 0;

      if (rating === "hard") {
        ease = Math.max(1.4, ease - 0.2);
        interval = 1;
      } else if (rating === "good") {
        ease = Math.min(3, ease + 0.05);
        interval = interval ? Math.max(2, Math.round(interval * ease)) : 3;
      } else {
        ease = Math.min(3.2, ease + 0.15);
        interval = interval ? Math.max(4, Math.round(interval * (ease + 0.4))) : 5;
      }

      return {
        ...current,
        cards: {
          ...(current.cards || {}),
          [activeCard.id]: {
            ease,
            interval,
            reps: (old.reps || 0) + 1,
            lastRating: rating,
            lastReviewedAt: Date.now(),
            dueAt: Date.now() + interval * DAY,
          },
        },
      };
    });
    setRevealed(false);
    setIndex((current) => current + 1);
  }

  return (
    <div className="view-stack">
      <section className="panel controls-row">
        <div className="segmented">
          <button className={cx(chapterFilter === "all" && "active")} onClick={() => setChapterFilter("all")} type="button">
            Tất cả
          </button>
          {chapters.map((chapterItem) => (
            <button
              className={cx(chapterFilter === chapterItem.id && "active")}
              key={chapterItem.id}
              onClick={() => setChapterFilter(chapterItem.id)}
              type="button"
            >
              {chapterItem.chapter}
            </button>
          ))}
        </div>
        <label className="switch">
          <input checked={showAll} onChange={(event) => setShowAll(event.target.checked)} type="checkbox" />
          <span>Tất cả thẻ</span>
        </label>
      </section>

      <section className="flashcard-wrap">
        {activeCard ? (
          <article className="flashcard" style={{ "--accent": chapter?.accent || "#0f766e" }}>
            <div className="card-meta">
              <span>Chương {chapter?.chapter}</span>
              <span>{dueDateLabel(progress.cards?.[activeCard.id]?.dueAt)}</span>
            </div>
            <h2>{activeCard.front}</h2>
            {revealed ? <p>{activeCard.back}</p> : <div className="answer-placeholder">Tự trả lời trong đầu hoặc ra giấy trước khi lật đáp án.</div>}
            <div className="flashcard-actions">
              <button className="secondary-button" onClick={() => setRevealed((value) => !value)} type="button">
                <Eye size={17} />
                {revealed ? "Ẩn đáp án" : "Hiện đáp án"}
              </button>
              <button className="ghost-button" onClick={() => setIndex((current) => current + 1)} type="button">
                <ChevronRight size={17} />
                Thẻ khác
              </button>
            </div>
            {revealed && (
              <div className="grade-row">
                <button onClick={() => grade("hard")} type="button">Hard</button>
                <button onClick={() => grade("good")} type="button">Good</button>
                <button onClick={() => grade("easy")} type="button">Easy</button>
              </div>
            )}
          </article>
        ) : (
          <article className="empty-state panel">
            <Brain size={32} />
            <h2>Không còn thẻ đến hạn</h2>
            <p>Bật “Tất cả thẻ” để luyện thêm hoặc chuyển sang tạo đề ngẫu nhiên.</p>
          </article>
        )}
      </section>
    </div>
  );
}

function FormulaCard({ formula }) {
  return (
    <article className="formula-card">
      <span>Chương {formula.chapter}</span>
      <h3>{formula.name}</h3>
      <code>{formula.formula}</code>
      <p>{formula.meaning}</p>
      <small>{formula.example}</small>
    </article>
  );
}

function FormulaEquivalents({ chapter }) {
  const groups = formulaEquivalents.filter((group) => !chapter || group.chapter === chapter);

  return (
    <section className="panel equivalent-panel">
      <div className="section-title">
        <div>
          <p className="eyebrow">Chọn công thức theo giả định</p>
          <h2>Công thức tương đương và dễ nhầm</h2>
        </div>
      </div>
      <div className="equivalent-grid">
        {groups.map((group) => (
          <article className="equivalent-card" key={group.id}>
            <div className="equivalent-head">
              <h3>{group.title}</h3>
              <span className={cx("source-badge", group.sourceStatus === "Có trong slide" && "in-slide", group.sourceStatus === "Một phần" && "partial")}>
                {group.sourceStatus}
              </span>
            </div>
            <div className="equation-list">
              {group.formulas.map((formula) => (
                <code key={formula}>{formula}</code>
              ))}
            </div>
            <p className="source-note">{group.sourceNote}</p>
            <p>{group.explanation}</p>
            <div className="use-when">
              <strong>Khi dùng</strong>
              <span>{group.useWhen}</span>
            </div>
            <div className="use-when warning">
              <strong>Lưu ý</strong>
              <span>{group.warning}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FormulasView() {
  const [evmInput, setEvmInput] = useState(teacherEvmInput);
  const [people, setPeople] = useState(7);
  const [contract, setContract] = useState(teacherContractInput);

  const evm = calculateEvm({
    bac: toNumber(evmInput.bac),
    plannedPercent: toNumber(evmInput.planned) / 100,
    actualPercent: toNumber(evmInput.actual) / 100,
    actualCost: toNumber(evmInput.ac),
    forecastBudget: toNumber(evmInput.forecastBac),
    useRoundedCpiForForecast: true,
  });

  const incentive = calculateIncentive({
    targetCost: toNumber(contract.targetCost),
    targetFee: toNumber(contract.targetFee),
    actualCost: toNumber(contract.actualCost),
    sellerShare: toNumber(contract.sellerShare) / 100,
  });

  const peopleCount = toNumber(people);
  const channels = peopleCount > 1 ? (peopleCount * (peopleCount - 1)) / 2 : 0;

  function updateEvm(key, value) {
    setEvmInput((current) => ({ ...current, [key]: value }));
  }

  function updateContract(key, value) {
    setContract((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="view-stack">
      <section className="formula-grid">
        {formulas.map((formula) => (
          <FormulaCard formula={formula} key={formula.id} />
        ))}
      </section>

      <FormulaEquivalents />

      <section className="calculator-grid">
        <article className="panel calc-panel">
          <div className="section-title">
            <div>
              <p className="eyebrow">EVM</p>
              <h2>Máy tính chi phí</h2>
            </div>
            <button className="ghost-button compact-button" onClick={() => setEvmInput({ ...teacherEvmInput })} type="button">
              <RotateCcw size={16} />
              Bài thầy
            </button>
          </div>
          <div className="input-grid">
            <label>BAC gốc <input value={evmInput.bac} onChange={(e) => updateEvm("bac", e.target.value)} type="number" /></label>
            <label>% kế hoạch <input value={evmInput.planned} onChange={(e) => updateEvm("planned", e.target.value)} type="number" /></label>
            <label>% thực tế <input value={evmInput.actual} onChange={(e) => updateEvm("actual", e.target.value)} type="number" /></label>
            <label>AC <input value={evmInput.ac} onChange={(e) => updateEvm("ac", e.target.value)} type="number" /></label>
            <label>BAC dự báo <input value={evmInput.forecastBac} onChange={(e) => updateEvm("forecastBac", e.target.value)} type="number" /></label>
          </div>
          <div className="result-grid">
            <span>PV <strong>{formatMoney(evm.pv)}</strong></span>
            <span>EV <strong>{formatMoney(evm.ev)}</strong></span>
            <span>AC <strong>{formatMoney(evm.ac)}</strong></span>
            <span>CPI <strong>{formatIndex(evm.cpi)}</strong></span>
            <span>SPI <strong>{formatIndex(evm.spi)}</strong></span>
            <span>CV <strong>{formatMoney(evm.cv)}</strong></span>
            <span>SV <strong>{formatMoney(evm.sv)}</strong></span>
            <span>ETC <strong>{formatMoney(evm.etc)}</strong></span>
            <span>EAC <strong>{formatMoney(evm.eac)}</strong></span>
            <span>VAC <strong>{formatMoney(evm.vac)}</strong></span>
            <span>TCPI theo EAC <strong>{formatIndex(evm.tcpiEac)}</strong></span>
            <span>TCPI giữ BAC <strong>{formatIndex(evm.tcpiBac)}</strong></span>
            <span>Chi phí <strong>{costStatus(evm.cpi)}</strong></span>
            <span>Tiến độ <strong>{scheduleStatus(evm.spi)}</strong></span>
          </div>
        </article>

        <article className="panel calc-panel">
          <div className="section-title">
            <div>
              <p className="eyebrow">Truyền thông</p>
              <h2>Số kênh</h2>
            </div>
          </div>
          <label className="wide-input">Số người <input value={people} onChange={(e) => setPeople(e.target.value)} type="number" /></label>
          <div className="big-result">{Number.isFinite(channels) ? channels : 0} kênh</div>
        </article>

        <article className="panel calc-panel">
          <div className="section-title">
            <div>
              <p className="eyebrow">Hợp đồng</p>
              <h2>Final Fee</h2>
            </div>
            <button className="ghost-button compact-button" onClick={() => setContract({ ...teacherContractInput })} type="button">
              <RotateCcw size={16} />
              Bài thầy
            </button>
          </div>
          <div className="input-grid">
            <label>Target Cost <input value={contract.targetCost} onChange={(e) => updateContract("targetCost", e.target.value)} type="number" /></label>
            <label>Target Fee <input value={contract.targetFee} onChange={(e) => updateContract("targetFee", e.target.value)} type="number" /></label>
            <label>Actual Cost <input value={contract.actualCost} onChange={(e) => updateContract("actualCost", e.target.value)} type="number" /></label>
            <label>Seller % <input value={contract.sellerShare} onChange={(e) => updateContract("sellerShare", e.target.value)} type="number" /></label>
          </div>
          <div className="result-grid">
            <span>Target Price <strong>{formatMoney(incentive.targetPrice)}</strong></span>
            <span>Cost Variance <strong>{formatMoney(incentive.costDifference)}</strong></span>
            <span>Seller +/- <strong>{formatMoney(incentive.sellerAdjustment)}</strong></span>
            <span>Final Fee <strong>{formatMoney(incentive.finalFee)}</strong></span>
            <span>Final Price <strong>{formatMoney(incentive.finalPrice)}</strong></span>
          </div>
        </article>
      </section>
    </div>
  );
}

function splitMarkdownRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isMarkdownSeparator(line) {
  return /^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function parseAnswerSegments(text) {
  const lines = text.split("\n");
  const segments = [];
  let buffer = [];

  function flushText() {
    const value = buffer.join("\n").trim();
    if (value) segments.push({ type: "text", value });
    buffer = [];
  }

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const next = lines[index + 1] || "";
    if (line.trim().startsWith("|") && isMarkdownSeparator(next)) {
      flushText();
      const header = splitMarkdownRow(line);
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(splitMarkdownRow(lines[index]));
        index += 1;
      }
      index -= 1;
      segments.push({ type: "table", header, rows });
    } else {
      buffer.push(line);
    }
  }
  flushText();
  return segments;
}

function RichAnswer({ text }) {
  const segments = parseAnswerSegments(text);
  return (
    <div className="answer-block rich-answer">
      {segments.map((segment, index) => {
        if (segment.type === "table") {
          return (
            <div className="table-scroll" key={`table-${index}`}>
              <table className="answer-table">
                <thead>
                  <tr>
                    {segment.header.map((cell) => (
                      <th key={cell}>{cell}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {segment.rows.map((row, rowIndex) => (
                    <tr key={`${row.join("-")}-${rowIndex}`}>
                      {segment.header.map((_, cellIndex) => (
                        <td key={cellIndex}>{row[cellIndex] || ""}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <pre className="answer-text" key={`text-${index}`}>
            {segment.value}
          </pre>
        );
      })}
    </div>
  );
}

function ExamView({ progress, setProgress }) {
  const [seedInput, setSeedInput] = useState(() => progress.lastExamSeed || makeSeed());
  const [exam, setExam] = useState(() => generateExam(progress.lastExamSeed || seedInput));
  const [visibleAnswers, setVisibleAnswers] = useState({});
  const [timerRunning, setTimerRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60 * 60);

  useEffect(() => {
    if (!timerRunning) return undefined;
    const id = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return current - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [timerRunning]);

  function regenerate(nextSeed = makeSeed()) {
    const nextExam = generateExam(nextSeed);
    setExam(nextExam);
    setSeedInput(nextSeed);
    setVisibleAnswers({});
    setProgress((current) => ({ ...current, lastExamSeed: nextSeed }));
  }

  function generateFromInput() {
    regenerate(seedInput.trim() || makeSeed());
  }

  function loadTeacherExam(nextExam) {
    setExam(nextExam);
    setSeedInput(nextExam.seed);
    setVisibleAnswers({});
    setTimerRunning(false);
    setSecondsLeft(60 * 60);
  }

  function exportExam() {
    const text = [
      exam.title,
      `Seed: ${exam.seed}`,
      exam.context.paragraph,
      ...exam.context.bullets,
      "",
      ...exam.questions.map((question) => `${question.title} (${question.points}đ)\n${question.prompt}\n\nĐáp án gợi ý:\n${question.answer}`),
    ].join("\n\n");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `de-on-qlda-${exam.seed}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  const minutes = Math.floor(secondsLeft / 60).toString().padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");

  return (
    <div className="view-stack">
      <section className="panel exam-toolbar">
        <div className="seed-box">
          <label>Seed đề</label>
          <input value={seedInput} onChange={(event) => setSeedInput(event.target.value)} />
        </div>
        <button className="primary-button" onClick={() => regenerate()} type="button">
          <Shuffle size={17} />
          Tạo đề mới
        </button>
        <button className="secondary-button" onClick={generateFromInput} type="button">
          <RotateCcw size={17} />
          Dùng seed
        </button>
        <button className="ghost-button" onClick={exportExam} type="button">
          <Download size={17} />
          Xuất TXT
        </button>
      </section>

      <section className="panel teacher-exam-panel">
        <div>
          <p className="eyebrow">Đề mới của thầy</p>
          <h2>Chọn nhanh đề mẫu</h2>
        </div>
        <div className="teacher-exam-buttons">
          {teacherExams.map((item) => (
            <button
              className={cx("secondary-button", exam.seed === item.seed && "active-teacher-exam")}
              key={item.seed}
              onClick={() => loadTeacherExam(item)}
              type="button"
            >
              <ClipboardCheck size={17} />
              {teacherExamLabel(item.title)}
            </button>
          ))}
        </div>
      </section>

      <section className="exam-layout">
        <article className="panel exam-paper">
          <div className="exam-head">
            <div>
              <p className="eyebrow">Seed {exam.seed}</p>
              <h2>{exam.title}</h2>
            </div>
            <div className="score-badge">10 điểm</div>
          </div>
          <p className="project-context">{exam.context.paragraph}</p>
          <ul className="context-list">
            {exam.context.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {exam.questions.map((question) => (
            <article className="question-block" key={question.id}>
              <div className="question-title">
                <h3>{question.title} ({question.points}đ)</h3>
                <div className="tag-row">
                  {question.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <pre>{question.prompt}</pre>
              <button
                className="secondary-button"
                onClick={() => setVisibleAnswers((current) => ({ ...current, [question.id]: !current[question.id] }))}
                type="button"
              >
                <Eye size={16} />
                {visibleAnswers[question.id] ? "Ẩn đáp án" : "Hiện đáp án"}
              </button>
              {visibleAnswers[question.id] && <RichAnswer text={question.answer} />}
            </article>
          ))}
        </article>

        <aside className="panel timer-panel">
          <div className="timer-circle">
            <Timer size={26} />
            <strong>{minutes}:{seconds}</strong>
          </div>
          <button className="primary-button" onClick={() => setTimerRunning((value) => !value)} type="button">
            <Play size={17} />
            {timerRunning ? "Tạm dừng" : "Bắt đầu"}
          </button>
          <button
            className="ghost-button"
            onClick={() => {
              setSecondsLeft(60 * 60);
              setTimerRunning(false);
            }}
            type="button"
          >
            <RotateCcw size={17} />
            Reset
          </button>
          <button
            className="secondary-button"
            onClick={() => {
              const allVisible = exam.questions.every((question) => visibleAnswers[question.id]);
              setVisibleAnswers(Object.fromEntries(exam.questions.map((question) => [question.id, !allVisible])));
            }}
            type="button"
          >
            <Eye size={17} />
            Đáp án
          </button>
        </aside>
      </section>
    </div>
  );
}

function SourcesView() {
  const [sources, setSources] = useState(null);
  const [selected, setSelected] = useState("cost");
  const [language, setLanguage] = useState("english");
  const [query, setQuery] = useState("");

  useEffect(() => {
    let mounted = true;
    import("./data/sourceSlides").then((module) => {
      if (mounted) setSources(module.sourceSlides);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!sources) {
    return (
      <section className="panel empty-state">
        <FileText size={32} />
        <h2>Đang nạp dữ liệu PDF</h2>
      </section>
    );
  }

  const source = sources.find((entry) => entry.id === selected) || sources[0];
  const sourceData = source?.[language];
  const pages = sourceData?.pageTexts?.length ? sourceData.pageTexts : [{ page: 1, text: sourceData?.text || "" }];
  const normalized = query.trim().toLowerCase();
  const filteredPages = normalized
    ? pages.filter((page) => page.text.toLowerCase().includes(normalized))
    : pages;

  return (
    <div className="two-column">
      <aside className="panel chapter-list">
        {sources.map((entry) => (
          <button
            className={cx("chapter-pill", selected === entry.id && "active")}
            key={entry.id}
            onClick={() => setSelected(entry.id)}
            type="button"
          >
            <span>Ch. {entry.chapter}</span>
            <strong>{entry.viTitle}</strong>
          </button>
        ))}
      </aside>

      <section className="panel source-panel">
        <div className="source-toolbar">
          <div>
            <p className="eyebrow">Toàn văn từ PDF</p>
            <h2>{source.viTitle}</h2>
          </div>
          <div className="segmented">
            <button className={cx(language === "english" && "active")} onClick={() => setLanguage("english")} type="button">
              English
            </button>
            <button className={cx(language === "vietnamese" && "active")} onClick={() => setLanguage("vietnamese")} type="button">
              Tiếng Việt
            </button>
          </div>
        </div>
        <label className="search-box">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm trong slide..." />
        </label>
        <div className="source-meta">
          <span>{sourceData.pages} trang PDF</span>
          <span>{filteredPages.length} mục đang hiển thị</span>
          <span>{sourceData.file}</span>
        </div>
        <div className="source-pages">
          {filteredPages.map((page) => (
            <article className="source-page" key={`${language}-${page.page}`}>
              <span>Trang {page.page}</span>
              <pre>{page.text}</pre>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function App() {
  const [active, setActive] = useLocalStorage("qlda-active-view", "dashboard");
  const [selectedChapter, setSelectedChapter] = useLocalStorage("qlda-selected-chapter", "cost");
  const [progress, setProgress] = useLocalStorage("qlda-progress", {
    completedChapters: [],
    cards: {},
    lastExamSeed: "",
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const dueCount = flashcards.filter((card) => {
    const item = progress.cards?.[card.id];
    return !item?.dueAt || item.dueAt <= Date.now();
  }).length;

  return (
    <div className="app-shell">
      <Sidebar active={active} setActive={setActive} open={menuOpen} setOpen={setMenuOpen} />
      <main className="main">
        <TopBar active={active} onMenu={() => setMenuOpen(true)} />
        {active === "dashboard" && (
          <Dashboard
            dueCount={dueCount}
            progress={progress}
            setActive={setActive}
            setSelectedChapter={setSelectedChapter}
          />
        )}
        {active === "theory" && (
          <TheoryView
            progress={progress}
            selectedChapter={selectedChapter}
            setProgress={setProgress}
            setSelectedChapter={setSelectedChapter}
          />
        )}
        {active === "cards" && <CardsView progress={progress} setProgress={setProgress} />}
        {active === "formulas" && <FormulasView />}
        {active === "exam" && <ExamView progress={progress} setProgress={setProgress} />}
        {active === "sources" && <SourcesView />}
      </main>
    </div>
  );
}

export default App;
