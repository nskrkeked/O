/* =========================================================
   픽셀 탐정: 기억 복원 사무소 — 게임 로직
   네오 사이버시티 중앙지구를 배경으로 한 연결된 3개 챕터.
   Chapter 1(변수) -> Chapter 2(조건문) -> Chapter 3(반복문)
========================================================= */

const CHAPTERS = [
  {
    chapter: 1,
    location: "중앙지구 빵집 앞",
    title: "사라진 옷의 색상",
    client: "의뢰인 : 목격자 김빵집 (빵집 사장)",
    memoryText:
      "그날 밤, 저는 분명히 빨간 옷을 입은 사람이 가게 앞에서 뛰쳐나가는 걸 봤어요. " +
      "그런데 제 기억 장치에 저장된 기록에는 파란 옷이라고 되어 있네요. " +
      "탐정님, 제 기억이 어딘가 손상된 것 같아요. 색깔을 다시 맞춰주실 수 있나요?",
    buggyCode:
`let suspectShirtColor = "blue";
let witnessMemory = "red";

console.log(
  "도주자는 " + suspectShirtColor + "색 옷을 입고 있었다."
);`,
    expectedValue:
`let suspectShirtColor = "red";
let witnessMemory = "red";

console.log(
  "도주자는 " + suspectShirtColor + "색 옷을 입고 있었다."
);`,
    hintTier1:
      "코드에 등장하는 변수를 하나씩 살펴보세요. 목격자의 진짜 기억(witnessMemory)과 다른 값을 가진 변수가 있을 거예요.",
    hint:
      "suspectShirtColor 변수의 값이 witnessMemory와 다릅니다. 목격자의 진술에 맞춰 suspectShirtColor 값을 \"red\"로 고쳐보세요.",
    transitionText:
      "기억이 선명하게 복원되자, 도주자가 흘리고 간 낯선 키카드 하나가 함께 떠오른다. " +
      "카드 표면에는 옅게 새겨진 문양— '중앙 박물관' 출입증이었다. " +
      "탐정은 곧장 길 건너 박물관으로 향한다.",
    sceneType: "bakery",
    frames: [
      "사건 전날 — 평범한 저녁의 빵집",
      "사건 발생 — 정체불명의 인영이 뛰쳐나감",
      "사건 직후 — 흘리고 간 키카드 발견",
    ],
  },
  {
    chapter: 2,
    location: "중앙지구 박물관 (빵집 건너편)",
    title: "중앙 박물관 경보 오류",
    client: "의뢰인 : 박물관 보안팀장 서보안",
    memoryText:
      "분명 키카드가 없는 사람은 들어올 수 없게 설계했는데, 그날 밤 경보가 단 한 번도 울리지 않았어요. " +
      "보안 시스템의 기억 로그를 복원해서, 그날 밤 출입 로직에 어떤 문제가 있었는지 찾아주세요.",
    buggyCode:
`let hasKeycard = false;
let accessLevel = 3;

if (hasKeycard = true) {
  console.log("접근 허용: 경보 해제");
} else {
  console.log("접근 거부: 경보 발동");
}`,
    expectedValue:
`let hasKeycard = false;
let accessLevel = 3;

if (hasKeycard === true) {
  console.log("접근 허용: 경보 해제");
} else {
  console.log("접근 거부: 경보 발동");
}`,
    hintTier1:
      "if문 괄호 안을 자세히 들여다보세요. 값을 비교하는 연산자와 값을 대입하는 연산자는 생김새가 비슷하지만 하는 일이 완전히 달라요.",
    hint:
      "if (hasKeycard = true) 는 비교가 아니라 대입입니다. 그래서 hasKeycard 값과 상관없이 항상 true가 되어버려요. = 를 === 로 고쳐보세요.",
    transitionText:
      "경보 로직을 바로잡자, 그날 밤 진짜 벌어진 일이 드러난다. 키카드가 없던 침입자도 " +
      "항상 '접근 허용'되고 있었던 것이다. 유물을 훔친 그는 도로 건너, 불 켜진 시청 타워로 향하고 있었다.",
    sceneType: "museum",
    frames: [
      "사건 전날 — 고요한 박물관 야간 경비",
      "사건 발생 — 경보 없이 통과한 침입자",
      "사건 직후 — 사라진 유물과 흔적",
    ],
  },
  {
    chapter: 3,
    location: "중앙지구 시청 타워 (박물관 건너편)",
    title: "시청 타워 무한 루프",
    client: "의뢰인 : 시청 타워 관리인 오엘베",
    memoryText:
      "엘리베이터가 13층에서 멈춰야 하는데, 몇 시간째 층수만 세면서 멈추질 않아요. " +
      "그 안에 사건의 배후가 갇혀 있다고 들었어요. 저 반복되는 기억을 멈춰서 문을 열어주세요.",
    buggyCode:
`let currentFloor = 1;
let targetFloor = 13;

while (currentFloor !== targetFloor) {
  console.log(currentFloor + "층을 통과합니다.");
}`,
    expectedValue:
`let currentFloor = 1;
let targetFloor = 13;

while (currentFloor !== targetFloor) {
  console.log(currentFloor + "층을 통과합니다.");
  currentFloor++;
}`,
    hintTier1:
      "반복문이 멈추려면, 조건에 사용된 변수가 반복이 실행되는 동안 실제로 바뀌어야 해요. 지금 currentFloor는 반복문 안에서 몇 번 바뀌고 있나요?",
    hint:
      "while문 안에 currentFloor 값을 바꾸는 코드가 없습니다. console.log 다음 줄에 currentFloor++; 를 추가해보세요.",
    transitionText:
      "무한히 반복되던 엘리베이터가 마침내 13층에 멈춰 선다. 문이 열리고, " +
      "그토록 쫓던 배후 인물의 얼굴이 드러난다. 네오 사이버시티의 밤이 다시 조용해졌다.",
    sceneType: "tower",
    frames: [
      "사건 전날 — 평소처럼 오가던 엘리베이터",
      "사건 발생 — 13층에서 멈추지 않는 순환",
      "사건 직후 — 마침내 열린 문, 드러난 배후",
    ],
  },
];

/* =========================================================
   상태
========================================================= */
const state = {
  difficulty: "novice",
  chapterIndex: 0,
  revealedTiers: new Set(),
};

const $ = (id) => document.getElementById(id);

const screens = {
  title: $("screen-title"),
  difficulty: $("screen-difficulty"),
  game: $("screen-game"),
  end: $("screen-end"),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

/* =========================================================
   화면 전환
========================================================= */
$("btn-start").addEventListener("click", () => showScreen("difficulty"));
$("btn-back-title").addEventListener("click", () => showScreen("title"));

document.querySelectorAll(".diff-card").forEach((card) => {
  card.addEventListener("click", () => {
    state.difficulty = card.dataset.level;
    $("diff-badge").textContent = state.difficulty === "beginner" ? "완전 초보자" : "입문자";
    state.chapterIndex = 0;
    showScreen("game");
    loadChapter(0);
  });
});

$("btn-restart").addEventListener("click", () => {
  state.chapterIndex = 0;
  showScreen("title");
});

// 윈도우 닫기 버튼: 장식용 — 살짝 흔들리기만 함
document.querySelectorAll(".window-close").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("shake");
    setTimeout(() => btn.classList.remove("shake"), 300);
  });
});

/* =========================================================
   챕터 로드
========================================================= */
function loadChapter(idx) {
  const data = CHAPTERS[idx];
  state.revealedTiers = new Set();

  document.querySelector(".header-case").textContent = `CASE 0${data.chapter} / ${CHAPTERS.length}`;
  $("case-location").textContent = data.location;
  $("case-title").textContent = data.title;
  $("case-client").textContent = data.client;
  $("case-memory").textContent = data.memoryText;

  const editor = $("code-editor");
  editor.value = data.buggyCode;
  updateHighlight();
  updateLineNumbers();

  $("result-msg").textContent = "";
  $("result-msg").className = "result-msg";
  $("story-transition").classList.add("hidden");

  const hintOutput = $("hint-output");
  hintOutput.innerHTML = '<p class="hint-placeholder">탐정 도구를 사용하면 이곳에 단서가 표시됩니다.</p>';

  // 좌측 폴라로이드 3컷
  document.querySelectorAll(".polaroid").forEach((el) => {
    const stage = parseInt(el.dataset.stage, 10);
    el.querySelector(".frame-caption").textContent = data.frames[stage];
    drawFrame(el.querySelector(".frame-canvas"), data.sceneType, stage);
  });

  if (state.difficulty === "beginner") {
    revealHint("scan");
  }
}

/* =========================================================
   코드 에디터: 줄 번호 + 신택스 하이라이팅 동기화
========================================================= */
const editor = $("code-editor");
const highlightEl = $("code-highlight").querySelector("code");

function updateLineNumbers() {
  const lineCount = editor.value.split("\n").length;
  let out = "";
  for (let i = 1; i <= lineCount; i++) out += i + "\n";
  $("line-numbers").textContent = out.trim();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function highlightCode(code) {
  const regex = /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(===|!==|==|!=)|(=)|\b(let|const|var|if|else|while|for|function|return|true|false|console|log)\b|(\b\d+\b)/g;
  let result = "";
  let lastIndex = 0;
  let m;
  while ((m = regex.exec(code)) !== null) {
    result += escapeHtml(code.slice(lastIndex, m.index));
    if (m[1]) result += `<span class="tok-comment">${escapeHtml(m[1])}</span>`;
    else if (m[2]) result += `<span class="tok-string">${escapeHtml(m[2])}</span>`;
    else if (m[3]) result += `<span class="tok-compare">${escapeHtml(m[3])}</span>`;
    else if (m[4]) result += `<span class="tok-assign">${escapeHtml(m[4])}</span>`;
    else if (m[5]) result += `<span class="tok-keyword">${escapeHtml(m[5])}</span>`;
    else if (m[6]) result += `<span class="tok-number">${escapeHtml(m[6])}</span>`;
    lastIndex = regex.lastIndex;
  }
  result += escapeHtml(code.slice(lastIndex));
  return result + "\n";
}

function updateHighlight() {
  highlightEl.innerHTML = highlightCode(editor.value);
}

editor.addEventListener("input", () => {
  updateLineNumbers();
  updateHighlight();
});
editor.addEventListener("scroll", () => {
  $("line-numbers").scrollTop = editor.scrollTop;
  $("code-highlight").scrollTop = editor.scrollTop;
  $("code-highlight").scrollLeft = editor.scrollLeft;
});

$("btn-reset-code").addEventListener("click", () => {
  editor.value = CHAPTERS[state.chapterIndex].buggyCode;
  updateLineNumbers();
  updateHighlight();
  $("result-msg").textContent = "";
  $("result-msg").className = "result-msg";
});

/* =========================================================
   정답 검증
========================================================= */
function normalize(str) {
  return str.replace(/\s+/g, "").trim();
}

$("btn-restore").addEventListener("click", () => {
  const data = CHAPTERS[state.chapterIndex];
  const userCode = normalize(editor.value);
  const answer = normalize(data.expectedValue);
  const resultMsg = $("result-msg");

  if (userCode === answer) {
    resultMsg.textContent = "▶ 기억이 선명하게 복원되었습니다.";
    resultMsg.className = "result-msg ok";
    $("transition-text").textContent = data.transitionText;
    $("story-transition").classList.remove("hidden");
  } else {
    resultMsg.textContent = "▶ 기억이 여전히 흐릿합니다... 코드를 다시 살펴보세요.";
    resultMsg.className = "result-msg fail";
    revealHint("scan");
  }
});

$("btn-next-chapter").addEventListener("click", () => {
  const nextIdx = state.chapterIndex + 1;
  if (nextIdx < CHAPTERS.length) {
    state.chapterIndex = nextIdx;
    loadChapter(nextIdx);
  } else {
    $("end-text").textContent = CHAPTERS[CHAPTERS.length - 1].transitionText;
    showScreen("end");
  }
});

/* =========================================================
   탐정 도구 / 힌트
========================================================= */
document.querySelectorAll(".tool-btn").forEach((btn) => {
  btn.addEventListener("click", () => revealHint(btn.dataset.tool));
});

function revealHint(tool) {
  const data = CHAPTERS[state.chapterIndex];
  if (state.revealedTiers.has(tool)) return;
  state.revealedTiers.add(tool);

  const hintOutput = $("hint-output");
  if (hintOutput.querySelector(".hint-placeholder")) hintOutput.innerHTML = "";

  let tag, text;
  if (tool === "scan") {
    tag = "코딩 스캐너";
    text = data.hintTier1;
  } else if (tool === "memory") {
    tag = "기억 조각 맞추기";
    text = data.hint;
  } else if (tool === "debug") {
    tag = "디버그 모드";
    text = "정답 코드:\n" + data.expectedValue;
  }

  const entry = document.createElement("div");
  entry.className = "hint-entry";
  entry.innerHTML = `<span class="hint-tag">${tag}</span><div>${escapeHtml(text).replace(/\n/g, "<br>")}</div>`;
  hintOutput.appendChild(entry);
  hintOutput.scrollTop = hintOutput.scrollHeight;
}

/* =========================================================
   좌측 폴라로이드: 챕터별 3단계 픽셀 씬
========================================================= */
function px(c, x, y, w, h, color) {
  c.fillStyle = color;
  c.fillRect(x, y, w, h);
}

function drawFrame(canvas, type, stage) {
  const c = canvas.getContext("2d");
  c.imageSmoothingEnabled = false;
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.save();
  c.scale(canvas.width / 320, canvas.height / 180);

  const sky = c.createLinearGradient(0, 0, 0, 130);
  sky.addColorStop(0, "#160e2b");
  sky.addColorStop(1, "#2a1a3a");
  c.fillStyle = sky;
  c.fillRect(0, 0, 320, 130);
  for (let i = 0; i < 18; i++) {
    px(c, (i * 41) % 320, (i * 53) % 110, 2, 2, i % 5 === 0 ? "#ff4fa3" : "#e8ddc7");
  }
  px(c, 0, 130, 320, 50, "#0d0806");
  px(c, 0, 130, 320, 4, "#4a3728");

  if (type === "bakery") drawBakeryFrame(c, stage);
  else if (type === "museum") drawMuseumFrame(c, stage);
  else if (type === "tower") drawTowerFrame(c, stage);

  c.restore();
}

function drawBakeryFrame(c, stage) {
  px(c, 40, 60, 140, 70, "#5a3a2a");
  px(c, 40, 60, 140, 8, "#3a2418");
  px(c, 60, 78, 24, 22, "#ffb454");
  px(c, 150, 78, 24, 22, "#4ce8d8");
  for (let i = 0; i < 7; i++) px(c, 40 + i * 20, 60, 20, 8, i % 2 === 0 ? "#ff4fa3" : "#e8ddc7");
  px(c, 96, 96, 28, 34, "#2a1810");
  px(c, 70, 40, 80, 14, "#120d0b");
  px(c, 74, 44, 72, 6, "#ffb454");

  if (stage === 1) {
    px(c, 210, 92, 14, 26, "#8a8a92");
    px(c, 212, 96, 10, 12, "#c7c7d0");
    px(c, 230, 122, 6, 3, "#7a6a52");
    px(c, 244, 126, 6, 3, "#7a6a52");
    px(c, 258, 122, 6, 3, "#7a6a52");
  } else if (stage === 2) {
    px(c, 232, 118, 10, 6, "#ffb454");
    px(c, 234, 120, 6, 2, "#fff3d6");
    for (let i = 0; i < 5; i++) px(c, 226 + i * 6, 112 - (i % 2) * 4, 2, 2, "#4ce8d8");
  }
}

function drawMuseumFrame(c, stage) {
  px(c, 30, 70, 260, 60, "#3a3450");
  px(c, 30, 70, 260, 6, "#221e30");
  for (let i = 0; i < 6; i++) px(c, 46 + i * 40, 76, 14, 54, "#c7bfe0");
  c.fillStyle = "#221e30";
  c.beginPath();
  c.moveTo(20, 70); c.lineTo(160, 40); c.lineTo(300, 70); c.closePath(); c.fill();

  px(c, 150, 50, 20, 10, stage === 0 ? "#6a5a72" : "#ff4fa3");
  px(c, 154, 46, 12, 6, stage === 0 ? "#8a7a92" : "#ff9fce");

  if (stage === 0) {
    px(c, 120, 120, 40, 10, "#0d0806");
    px(c, 122, 114, 6, 6, "#4ce8d8");
    px(c, 150, 114, 6, 6, "#4ce8d8");
  } else if (stage === 1) {
    px(c, 120, 118, 40, 12, "#0d0806");
    px(c, 122, 114, 6, 6, "#4ce8d8");
    px(c, 150, 116, 6, 6, "#4ce8d8");
    px(c, 210, 92, 14, 26, "#1a1311");
    px(c, 212, 96, 10, 12, "#ff4fa3");
  } else if (stage === 2) {
    px(c, 120, 118, 40, 12, "#0d0806");
    px(c, 140, 122, 24, 3, "#7a6a52");
    px(c, 200, 124, 24, 3, "#7a6a52");
  }
}

function drawTowerFrame(c, stage) {
  px(c, 120, 10, 80, 120, "#241a30");
  px(c, 120, 10, 80, 6, "#160e20");
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 3; col++) {
      const lit = (row + col) % 3 !== 0;
      px(c, 132 + col * 22, 20 + row * 13, 12, 8, lit ? "#ffb454" : "#160e20");
    }
  }
  px(c, 206, 30, 16, 90, "#0d0806");

  if (stage === 0) {
    px(c, 208, 34, 12, 10, "#5a6a72");
  } else if (stage === 1) {
    px(c, 208, 34, 12, 10, "#4ce8d8");
    c.strokeStyle = "#ff4fa3";
    c.lineWidth = 2;
    c.setLineDash([4, 3]);
    c.beginPath();
    c.arc(214, 100, 14, 0, Math.PI * 1.6);
    c.stroke();
    c.setLineDash([]);
  } else if (stage === 2) {
    px(c, 208, 34, 12, 10, "#4ce8d8");
    px(c, 198, 60, 30, 30, "#fff3d6");
    px(c, 208, 68, 12, 20, "#1a1311");
  }
}
