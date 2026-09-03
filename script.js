// script.js - "지워진 고스트 프로그램" 연계 스토리 반영 버전

const CHAPTERS = [
  {
    chapter: 1,
    location: "중앙지구 — 카페 '픽셀 빔'",
    title: "Chapter 1: 카페 픽셀 빔의 널(Null) 소동 (변수 디버깅)",
    client: "의뢰인: 정보상 바리스타 루크",
    storyBrief: "정보상이 전달한 데이터 스틱의 핵심 변수들이 null로 지워졌습니다. 변수를 올바르게 복원하여 다음 목적지인 암시장 좌표를 확보하세요.",
    memoryText:
      "루크: '고스트 녀석들이 스틱에 바이러스를 심었습니다! dataStatus가 null로 변해 데이터가 손상되었고, targetLocation이 null이라 어디로 가야할지 모릅니다. dataStatus를 \"VALID\"로, targetLocation을 \"EAST_MARKET\"으로 복구해야 암시장 좌표가 열립니다!'",
    buggyCode:
`// [CAFE PIXEL BEAM - DATA RECOVERY]
let dataStatus = null;
let targetLocation = null;

console.log("상태: " + dataStatus + " | 좌표: " + targetLocation);`,
    expectedValue:
`let dataStatus = "VALID";
let targetLocation = "EAST_MARKET";

console.log("상태: " + dataStatus + " | 좌표: " + targetLocation);`,
    hints: [
      "[1단계: 위치 스캔] 2~3번 줄의 dataStatus와 targetLocation 변수에 null이 대입되어 있습니다.",
      "[2단계: 원인 분석] null 대신 dataStatus에는 문자열 \"VALID\"를, targetLocation에는 문자열 \"EAST_MARKET\"을 할당해야 암시장 좌표가 복구됩니다.",
      "[3단계: 정답 복원] 2~3번 줄을 다음과 같이 수정하세요:\nlet dataStatus = \"VALID\";\nlet targetLocation = \"EAST_MARKET\";"
    ],
    transitionText:
      "데이터 스틱이 복원되며 동부 상업지구 비밀 창고의 암호 좌표(EAST_MARKET)가 추출되었습니다! 탐정은 곧바로 동부 암시장으로 이동합니다.",
    sceneType: "cafe",
    frames: [
      "카페 '픽셀 빔' 현장",
      "null로 덮어씌워진 데이터 스틱",
      "추출된 동부 암시장 좌표"
    ]
  },
  {
    chapter: 2,
    location: "동부 상업지구 — 비밀 창고",
    title: "Chapter 2: 동부 암시장의 뒤집힌 보안 (조건문 디버깅)",
    client: "의뢰인: 암시장 중개인 비트",
    storyBrief: "비밀 창고의 보안 시스템 연산자가 반대로 조작되어 탐정의 접근을 차단하고 있습니다. logic을 바로잡아 메인 타워 공작 계획을 파악하세요.",
    memoryText:
      "비트: '고스트 해커들이 경보 시스템의 조건문을 뒤집어 놓았습니다! 탐정(isDetective)이 오면 경보가 울려야 하는데, 지금은 !isDetective 조건 때문에 탐정이 오면 그냥 문이 열리고 해커만 차단되고 있습니다. if 조건문의 반전 연산자(!)를 제거하여 정상 보안 로직으로 바로잡으세요!'",
    buggyCode:
`// [EAST MARKET WAREHOUSE - SECURITY LOGIC]
let isDetective = true;
let alarmTriggered = false;

// 보안 시스템 연산자 오류
if (!isDetective) {
  alarmTriggered = true;
  console.log("경보 발동: 탐정 침입 감지!");
} else {
  console.log("통과 허용: 해커 접근");
}`,
    expectedValue:
`let isDetective = true;
let alarmTriggered = false;

if (isDetective) {
  alarmTriggered = true;
  console.log("경보 발동: 탐정 침입 감지!");
} else {
  console.log("통과 허용: 해커 접근");
}`,
    hints: [
      "[1단계: 위치 스캔] 6번 줄의 if (!isDetective) 조건식을 확인하세요.",
      "[2단계: 원인 분석] 느낌표(!)는 NOT 연산자입니다. !isDetective는 '탐정이 아닐 때'를 의미하므로, 탐정이 접근했을 때 경보가 울리도록 느낌표를 제거해야 합니다.",
      "[3단계: 정답 복원] 6번 줄을 if (isDetective) { 로 수정하세요."
    ],
    transitionText:
      "보안 로직을 바로잡고 비밀 창고 내부 단말기에 침투했습니다! 해커들의 메인 타워 공작 계획서('데이터 타워 백업 서버 마비 시도')를 입수했습니다. 마지막 결전지인 북부 데이터 밸리로 향합니다.",
    sceneType: "market",
    frames: [
      "동부 암시장 비밀 창고",
      "반대로 작동하는 보안 차단기",
      "입수된 메인 타워 공작 문서"
    ]
  },
  {
    chapter: 3,
    location: "북부 데이터 밸리 — 중앙 데이터 센터",
    title: "Chapter 3: 데이터 타워의 무한 방어 루프 (반복문 디버깅)",
    client: "의뢰인: 데이터 센터 수석 엔지니어 픽셀",
    storyBrief: "도시 백업 서버에 주입된 무한 while 루프 바이러스를 탈출시키기 위해 카운터를 삽입하고 서버를 복구하세요.",
    memoryText:
      "픽셀: '고스트 해커 그룹이 중앙 백업 서버에 무한 루프 바이러스를 실행했습니다! while 조건문 내부에서 currentCount가 증가하지 않아 복구 작업이 0에 갇혀 무한히 반복되고 있습니다. 반복문 내부 하단에 currentCount++; 구문을 추가하여 루프를 탈출시키고 도시 전체의 기억을 복구하세요!'",
    buggyCode:
`// [DATA TOWER - BACKUP RECOVERY LOOP]
let currentCount = 0;
let maxCount = 10;

while (currentCount < maxCount) {
  console.log("기억 데이터 복구 중... " + currentCount);
  // 무한 루프 발생: 카운터 증가 로직 누락
}`,
    expectedValue:
`let currentCount = 0;
let maxCount = 10;

while (currentCount < maxCount) {
  console.log("기억 데이터 복구 중... " + currentCount);
  currentCount++;
}`,
    hints: [
      "[1단계: 위치 스캔] while 반복문 내부(5~7번 줄)를 확인하세요.",
      "[2단계: 원인 분석] currentCount 변수가 증가하지 않아 (0 < 10) 조건이 영원히 참이 됩니다. 반복이 실행될 때마다 currentCount를 1씩 증가시켜야 합니다.",
      "[3단계: 정답 복원] console.log 밑줄에 currentCount++; 코드를 작성하세요."
    ],
    transitionText:
      "카운터가 10에 도달하며 무한 루프 바이러스가 파괴되었습니다! 네오 사이버시티 전체의 기억 백업 서버가 정상 작동하고, '지워진 고스트 프로그램' 해커 조직의 음모가 완전히 무산되었습니다.",
    sceneType: "tower",
    frames: [
      "북부 데이터 밸리 중앙 센터",
      "무한 루프에 갇힌 서버 모니터",
      "복구 완료된 네오 사이버시티 데이터"
    ]
  }
];

const gameState = {
  difficulty: "novice",
  chapterIndex: 0,
  storyLog: []
};

const $ = (id) => document.getElementById(id);

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(screenId).classList.add("active");
}

window.addEventListener("DOMContentLoaded", () => {
  $("btn-start").addEventListener("click", () => showScreen("screen-difficulty"));
  $("btn-back-title").addEventListener("click", () => showScreen("screen-title"));

  document.querySelectorAll(".diff-card").forEach((card) => {
    card.addEventListener("click", () => {
      gameState.difficulty = card.dataset.level;
      $("diff-badge").textContent = gameState.difficulty === "beginner" ? "완전 초보자" : "입문자";
      gameState.chapterIndex = 0;
      gameState.storyLog = [];
      showScreen("screen-game");
      loadChapter(0);
    });
  });

  $("btn-reset-code").addEventListener("click", resetCode);
  $("btn-restore").addEventListener("click", validateCode);
  $("btn-next-chapter").addEventListener("click", nextChapter);
  $("btn-restart").addEventListener("click", () => showScreen("screen-title"));

  const editor = $("code-editor");
  editor.addEventListener("input", () => {
    updateLineNumbers();
    updateHighlight();
  });
});

function loadChapter(index) {
  const chapter = CHAPTERS[index];
  
  $("case-location").textContent = chapter.location;
  $("case-title").textContent = chapter.title;
  $("case-client").textContent = chapter.client;
  $("case-memory").textContent = chapter.memoryText;
  
  const editor = $("code-editor");
  editor.value = chapter.buggyCode;
  updateLineNumbers();
  updateHighlight();

  $("result-msg").textContent = "";
  $("result-msg").className = "result-msg";
  $("story-transition").classList.add("hidden");

  $("hint-output").innerHTML = `<p class="hint-placeholder">[추적 일지] ${chapter.storyBrief}</p>`;

  document.querySelectorAll(".tool-btn").forEach((btn, idx) => {
    btn.onclick = () => showHint(idx);
  });

  if (gameState.difficulty === "beginner") {
    showHint(0);
  }
}

function updateLineNumbers() {
  const lines = $("code-editor").value.split("\n").length;
  let lineStr = "";
  for (let i = 1; i <= lines; i++) lineStr += i + "\n";
  $("line-numbers").textContent = lineStr.trim();
}

function updateHighlight() {
  const code = $("code-editor").value;
  $("code-highlight").querySelector("code").innerHTML = highlightSyntax(code);
}

function highlightSyntax(code) {
  return code
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/(\/\/[^\n]*)/g, '<span class="tok-comment">$1</span>')
    .replace(/(".*?"|'.*? me')/g, '<span class="tok-string">$1</span>')
    .replace(/\b(let|const|var|if|else|while|console|log)\b/g, '<span class="tok-keyword">$1</span>')
    .replace(/(!==|===|==|!=|!)/g, '<span class="tok-assign">$1</span>');
}

function resetCode() {
  const chapter = CHAPTERS[gameState.chapterIndex];
  $("code-editor").value = chapter.buggyCode;
  updateLineNumbers();
  updateHighlight();
  $("result-msg").textContent = "코드가 초기 상태로 재설정되었습니다.";
  $("result-msg").className = "result-msg";
}

function normalizeCode(str) {
  return str.replace(/\s+/g, "").trim();
}

function validateCode() {
  const chapter = CHAPTERS[gameState.chapterIndex];
  const userCode = normalizeCode($("code-editor").value);
  const targetCode = normalizeCode(chapter.expectedValue);
  const resultMsg = $("result-msg");

  if (userCode === targetCode) {
    resultMsg.textContent = "▶ [복원 성공] 고스트 프로그램의 시스템 침투 흔적을 제거했습니다!";
    resultMsg.className = "result-msg ok";
    $("transition-text").textContent = chapter.transitionText;
    $("story-transition").classList.remove("hidden");
  } else {
    resultMsg.textContent = "▶ [복원 실패] 로직이 불완전합니다. 스토리를 참고하여 코드를 다시 분석하세요.";
    resultMsg.className = "result-msg fail";
  }
}

function showHint(tier) {
  const chapter = CHAPTERS[gameState.chapterIndex];
  const hintOutput = $("hint-output");
  
  if (hintOutput.querySelector(".hint-placeholder")) {
    hintOutput.innerHTML = "";
  }

  const hintEl = document.createElement("div");
  hintEl.className = "hint-entry";
  hintEl.innerHTML = `<p style="margin: 4px 0; color: #38bdf8;">${chapter.hints[tier]}</p>`;
  hintOutput.appendChild(hintEl);
  hintOutput.scrollTop = hintOutput.scrollHeight;
}

function nextChapter() {
  gameState.chapterIndex++;
  if (gameState.chapterIndex < CHAPTERS.length) {
    loadChapter(gameState.chapterIndex);
  } else {
    $("end-text").textContent = 
      "사건 완료: 중앙지구 카페, 동부 암시장, 북부 데이터 타워를 거친 연쇄 추적극이 종결되었습니다. " +
      "네오 사이버시티의 '지워진 고스트 프로그램' 바이러스는 영구 격리되었으며 탐정 사무소에 평화가 찾아왔습니다.";
    showScreen("screen-end");
  }
}
