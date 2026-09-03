const CHAPTERS = [
  {
    chapter: 1,
    location: "중앙지구 - 카페 '픽셀 빔'",
    title: "카페 픽셀 빔의 널(Null) 소동",
    client: "의뢰인 : 정보상 바리스타 루크",
    memoryText:
      "해커 그룹 '고스트'의 흔적이 담긴 데이터 스틱을 확보했는데, 데이터가 null로 덮어씌워졌어요. " +
      "dataStatus를 'VALID'로, targetLocation을 'EAST_MARKET'으로 바꿔야 비밀 암시장 좌표를 얻을 수 있습니다!",
    buggyCode:
`let dataStatus = null;
let targetLocation = null;

console.log(
  "데이터 상태: " + dataStatus + " / 목표 지점: " + targetLocation
);`,
    expectedValue:
`let dataStatus = "VALID";
let targetLocation = "EAST_MARKET";

console.log(
  "데이터 상태: " + dataStatus + " / 목표 지점: " + targetLocation
);`,
    hints: [
      "[1단계: 위치 스캔]\n1~2번 줄의 dataStatus와 targetLocation 변수에 null이 할당된 부분을 확인하세요.",
      "[2단계: 원인 분석]\nnull은 '비어있음'을 의미합니다. 데이터 상태가 'VALID'이고, 목표 지점이 'EAST_MARKET'이어야 비밀 좌표가 복원됩니다.",
      "[3단계: 정답 복원]\n1~2번 줄을 다음과 같이 고치세요:\nlet dataStatus = \"VALID\";\nlet targetLocation = \"EAST_MARKET\";"
    ],
    transitionText:
      "복원된 좌표를 따라 도착한 곳은 동부 상업지구의 음침한 비밀 창고. " +
      "창고 문 앞 경계 시스템이 붉은빛을 뿜으며 거세게 작동하고 있다.",
    sceneType: "cafe",
    frames: [
      "사건 전 — 고요한 카페 '픽셀 빔'",
      "사건 발생 — 데이터 스틱 훼손",
      "사건 직후 — 암시장 좌표 획득"
    ]
  },
  {
    chapter: 2,
    location: "동부 상업지구 - 비밀 창고",
    title: "동부 암시장의 뒤집힌 보안",
    client: "의뢰인 : 암시장 중개인 비트",
    memoryText:
      "고스트 해커들이 경보 연산자를 반대로 뒤집어 놓았습니다! " +
      "탐정(isDetective)이 접근하면 경보가 울리고(!isDetective), 해커는 무사 통과하게 되어 있어요. 정상 보안 로직으로 바꿔주세요!",
    buggyCode:
`let isDetective = true;
let alarmTriggered = false;

if (!isDetective) {
  alarmTriggered = true;
  console.log("경보 발동: 탐정 침입 감지!");
} else {
  console.log("통과 허용: 고스트 해커 접근");
}`,
    expectedValue:
`let isDetective = true;
let alarmTriggered = false;

if (isDetective) {
  alarmTriggered = true;
  console.log("경보 발동: 탐정 침입 감지!");
} else {
  console.log("통과 허용: 고스트 해커 접근");
}`,
    hints: [
      "[1단계: 위치 스캔]\n4번 줄 if문의 조건식 (!isDetective) 부분을 확인해 보세요.",
      "[2단계: 원인 분석]\n'!'는 NOT 연산자입니다. !isDetective는 '탐정이 아닐 때'를 의미하여 조건이 반대로 작동하고 있습니다.",
      "[3단계: 정답 복원]\n4번 줄의 느낌표(!)를 제거하여 다음과 같이 수정하세요:\nif (isDetective) {"
    ],
    transitionText:
      "보안을 해제하고 들어선 비밀 창고 단말기에서 '데이터 타워 중앙 서버 마비 공작' 문서가 발견되었다! " +
      "탐정은 고스트의 최종 목적지인 북부 데이터 밸리로 긴급 출동한다.",
    sceneType: "market",
    frames: [
      "사건 전 — 비밀 창고 보안 장치",
      "사건 발생 — 뒤집힌 경보 시스템",
      "사건 직후 — 고스트 공작 문서 입수"
    ]
  },
  {
    chapter: 3,
    location: "북부 데이터 밸리 - 중앙 데이터 센터",
    title: "데이터 타워의 무한 방어 루프",
    client: "의뢰인 : 데이터 센터 수석 엔지니어 픽셀",
    memoryText:
      "고스트 프로그램이 백업 서버에 무한 루프 바이러스를 주입했습니다! " +
      "currentCount가 maxCount(10)에 도달할 때까지 1씩 증가시키는 카운터 코드가 누락되어 루프가 종료되지 않습니다.",
    buggyCode:
`let currentCount = 0;
let maxCount = 10;

while (currentCount < maxCount) {
  console.log("데이터 복구 진행 중... " + currentCount);
}`,
    expectedValue:
`let currentCount = 0;
let maxCount = 10;

while (currentCount < maxCount) {
  console.log("데이터 복구 진행 중... " + currentCount);
  currentCount++;
}`,
    hints: [
      "[1단계: 위치 스캔]\nwhile문 내부(4~6번 줄)를 확인해 보세요.",
      "[2단계: 원인 분석]\ncurrentCount가 계속 0에 머물러 있어 조건(0 < 10)이 무한히 참이 됩니다. 반복할 때마다 currentCount를 1씩 올려야 합니다.",
      "[3단계: 정답 복원]\nconsole.log 아래 줄에 카운터 증가 코드를 추가하세요:\ncurrentCount++;"
    ],
    transitionText:
      "10단계 복구가 모두 완료되며 무한 루프가 깨졌다! 지워졌던 네오 사이버시티의 백업 데이터가 완전히 복원되고, " +
      "고스트 해커 프로그램은 시스템에서 영구 격리되었다. 사건 종결!",
    sceneType: "tower",
    frames: [
      "사건 전 — 정상 가동 중인 데이터 타워",
      "사건 발생 — 무한 루프 바이러스 주입",
      "사건 직후 — 고스트 격리 및 데이터 복원"
    ]
  }
];

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

document.querySelectorAll(".window-close").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("shake");
    setTimeout(() => btn.classList.remove("shake"), 300);
  });
});

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
  hintOutput.innerHTML = '<p class="hint-placeholder">도움말 단계를 클릭하면 탐정 보조 AI가 코드 단서를 분석합니다.</p>';

  document.querySelectorAll(".tool-btn").forEach((btn) => btn.classList.remove("active-hint"));

  document.querySelectorAll(".polaroid").forEach((el) => {
    const stage = parseInt(el.dataset.stage, 10);
    el.querySelector(".frame-caption").textContent = data.frames[stage];
    drawFrame(el.querySelector(".frame-canvas"), data.sceneType, stage);
  });

  if (state.difficulty === "beginner") {
    revealHint(0);
  }
}

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
  const regex = /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(===|!==|==|!=)|(=|!|\+|-)|\b(let|const|var|if|else|while|for|function|return|true|false|null|console|log)\b|(\b\d+\b)/g;
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

function normalize(str) {
  return str.replace(/\s+/g, "").trim();
}

$("btn-restore").addEventListener("click", () => {
  const data = CHAPTERS[state.chapterIndex];
  const userCode = normalize(editor.value);
  const answer = normalize(data.expectedValue);
  const resultMsg = $("result-msg");

  if (userCode === answer) {
    resultMsg.textContent = "▶ 고스트 프로그래밍 파편 복원 성공!";
    resultMsg.className = "result-msg ok";
    $("transition-text").textContent = data.transitionText;
    $("story-transition").classList.remove("hidden");
  } else {
    resultMsg.textContent = "▶ 데이터가 여전히 불완전합니다... 코드를 다시 검토하세요.";
    resultMsg.className = "result-msg fail";
    revealHint(0);
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

document.querySelectorAll(".tool-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tier = parseInt(btn.dataset.tier, 10);
    revealHint(tier);
  });
});

function revealHint(tier) {
  const data = CHAPTERS[state.chapterIndex];
  const hintOutput = $("hint-output");
  if (hintOutput.querySelector(".hint-placeholder")) hintOutput.innerHTML = "";

  const btnList = document.querySelectorAll(".tool-btn");
  if (btnList[tier]) btnList[tier].classList.add("active-hint");

  const tags = ["1단계: 위치 스캔", "2단계: 원인 분석", "3단계: 정답 복원"];
  
  const entry = document.createElement("div");
  entry.className = "hint-entry";
  entry.innerHTML = `
    <span class="hint-tag">${tags[tier]}</span>
    <div>${escapeHtml(data.hints[tier]).replace(/\n/g, "<br>")}</div>
  `;
  hintOutput.appendChild(entry);
  hintOutput.scrollTop = hintOutput.scrollHeight;
}

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
  sky.addColorStop(0, "#120e24");
  sky.addColorStop(1, "#221832");
  c.fillStyle = sky;
  c.fillRect(0, 0, 320, 130);
  for (let i = 0; i < 18; i++) {
    px(c, (i * 41) % 320, (i * 53) % 110, 2, 2, i % 5 === 0 ? "#ff4fa3" : "#e8ddc7");
  }
  px(c, 0, 130, 320, 50, "#0d0806");
  px(c, 0, 130, 320, 4, "#4a3728");

  if (type === "cafe") drawCafeFrame(c, stage);
  else if (type === "market") drawMarketFrame(c, stage);
  else if (type === "tower") drawTowerFrame(c, stage);

  c.restore();
}

function drawCafeFrame(c, stage) {
  px(c, 40, 60, 140, 70, "#5a3a2a");
  px(c, 40, 60, 140, 8, "#3a2418");
  px(c, 60, 78, 24, 22, "#ffb454");
  px(c, 150, 78, 24, 22, "#4ce8d8");
  px(c, 90, 45, 12, 15, "#e8ddc7");
  px(c, 92, 40, 8, 5, "#ff4fa3");

  if (stage === 1) {
    px(c, 210, 92, 16, 10, "#ff4fa3");
    px(c, 214, 95, 8, 4, "#000");
  } else if (stage === 2) {
    px(c, 210, 92, 16, 10, "#4ce8d8");
    px(c, 214, 95, 8, 4, "#fff");
  }
}

function drawMarketFrame(c, stage) {
  px(c, 30, 70, 260, 60, "#2c3040");
  px(c, 30, 70, 260, 6, "#181a24");
  for (let i = 0; i < 5; i++) px(c, 50 + i * 50, 76, 16, 54, "#485068");

  px(c, 150, 50, 20, 10, stage === 1 ? "#ff4fa3" : "#4ce8d8");

  if (stage === 1) {
    px(c, 210, 92, 14, 26, "#1a1311");
    px(c, 212, 96, 10, 12, "#ff4fa3");
  } else if (stage === 2) {
    px(c, 200, 120, 18, 10, "#ffb454");
  }
}

function drawTowerFrame(c, stage) {
  px(c, 110, 10, 100, 120, "#182033");
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 4; col++) {
      const lit = stage === 1 ? (row + col) % 2 === 0 : true;
      px(c, 120 + col * 20, 20 + row * 15, 12, 8, lit ? (stage === 1 ? "#ff4fa3" : "#4ce8d8") : "#0d121d");
    }
  }

  if (stage === 1) {
    c.strokeStyle = "#ff4fa3";
    c.lineWidth = 2;
    c.setLineDash([4, 3]);
    c.beginPath();
    c.arc(160, 70, 20, 0, Math.PI * 2);
    c.stroke();
    c.setLineDash([]);
  } else if (stage === 2) {
    px(c, 150, 55, 20, 30, "#4ce8d8");
  }
}
