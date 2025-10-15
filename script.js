const magnifier = document.getElementById("magnifier");
const instructions = document.getElementById("instructions");
const insectStage = document.getElementById("insect-stage");
const waitlist = document.getElementById("waitlist");
const releaseReveals = document.querySelectorAll(".release-reveal");

const insects = [
  {
    key: "dragonfly",
    label: "잠자리",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dragonfly-body" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#2ed573" />
            <stop offset="100%" stop-color="#1e90ff" />
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="62" rx="8" ry="32" fill="url(#dragonfly-body)" />
        <ellipse cx="60" cy="40" rx="36" ry="12" fill="rgba(189, 236, 182, 0.65)" />
        <ellipse cx="60" cy="84" rx="34" ry="11" fill="rgba(189, 236, 182, 0.5)" />
        <circle cx="60" cy="27" r="11" fill="#1e90ff" />
        <circle cx="54" cy="26" r="4" fill="#fefefe" opacity="0.9" />
        <circle cx="66" cy="26" r="4" fill="#fefefe" opacity="0.9" />
      </svg>
    `,
    animation: "glide",
  },
  {
    key: "butterfly",
    label: "나비",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="butterfly-wing" cx="0.5" cy="0.5" r="0.6">
            <stop offset="0%" stop-color="#ffb8b8" />
            <stop offset="70%" stop-color="#ff6b81" />
            <stop offset="100%" stop-color="#c44569" />
          </radialGradient>
        </defs>
        <ellipse cx="40" cy="60" rx="32" ry="42" fill="url(#butterfly-wing)" opacity="0.88" />
        <ellipse cx="80" cy="60" rx="32" ry="42" fill="url(#butterfly-wing)" opacity="0.9" />
        <rect x="54" y="30" width="12" height="52" rx="6" fill="#2f3542" />
        <circle cx="60" cy="26" r="8" fill="#2f3542" />
        <path d="M56 18 Q52 10 44 12" stroke="#2f3542" stroke-width="3" fill="none" stroke-linecap="round" />
        <path d="M64 18 Q68 10 76 12" stroke="#2f3542" stroke-width="3" fill="none" stroke-linecap="round" />
      </svg>
    `,
    animation: "flutter",
  },
  {
    key: "spider",
    label: "거미",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="50" r="22" fill="#2f3542" />
        <circle cx="60" cy="80" r="18" fill="#1e272e" />
        <circle cx="52" cy="46" r="4" fill="#fefefe" />
        <circle cx="68" cy="46" r="4" fill="#fefefe" />
        <g stroke="#1e272e" stroke-width="5" stroke-linecap="round">
          <line x1="30" y1="60" x2="12" y2="40" />
          <line x1="28" y1="72" x2="14" y2="70" />
          <line x1="32" y1="84" x2="16" y2="96" />
          <line x1="90" y1="60" x2="108" y2="40" />
          <line x1="92" y1="72" x2="106" y2="70" />
          <line x1="88" y1="84" x2="104" y2="96" />
        </g>
      </svg>
    `,
    animation: "float",
  },
  {
    key: "mantis",
    label: "사마귀",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mantis-body" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#7bed9f" />
            <stop offset="100%" stop-color="#2ed573" />
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="68" rx="12" ry="40" fill="url(#mantis-body)" />
        <ellipse cx="60" cy="36" rx="18" ry="20" fill="#2ed573" />
        <path d="M38 54 Q28 46 24 24" stroke="#1e8449" stroke-width="6" stroke-linecap="round" />
        <path d="M82 54 Q92 46 96 24" stroke="#1e8449" stroke-width="6" stroke-linecap="round" />
        <line x1="50" y1="22" x2="36" y2="10" stroke="#145a32" stroke-width="3" stroke-linecap="round" />
        <line x1="70" y1="22" x2="84" y2="10" stroke="#145a32" stroke-width="3" stroke-linecap="round" />
        <circle cx="52" cy="34" r="4" fill="#10301f" />
        <circle cx="68" cy="34" r="4" fill="#10301f" />
      </svg>
    `,
    animation: "glide",
  },
  {
    key: "stag-beetle",
    label: "사슴벌레",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="stag-shell" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#2f3542" />
            <stop offset="100%" stop-color="#1b262c" />
          </linearGradient>
        </defs>
        <path d="M48 24 Q60 4 72 24" stroke="#1b262c" stroke-width="8" stroke-linecap="round" fill="none" />
        <ellipse cx="60" cy="48" rx="18" ry="24" fill="url(#stag-shell)" />
        <ellipse cx="60" cy="80" rx="20" ry="26" fill="url(#stag-shell)" />
        <g stroke="#1b262c" stroke-width="6" stroke-linecap="round">
          <line x1="48" y1="62" x2="30" y2="52" />
          <line x1="48" y1="80" x2="28" y2="86" />
          <line x1="72" y1="62" x2="90" y2="52" />
          <line x1="72" y1="80" x2="92" y2="86" />
        </g>
        <circle cx="52" cy="40" r="4" fill="#fefefe" opacity="0.9" />
        <circle cx="68" cy="40" r="4" fill="#fefefe" opacity="0.9" />
      </svg>
    `,
    animation: "float",
  },
  {
    key: "ant",
    label: "개미",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="40" rx="8" ry="12" fill="#2c3e50" />
        <ellipse cx="60" cy="60" rx="10" ry="14" fill="#34495e" />
        <ellipse cx="60" cy="85" rx="8" ry="12" fill="#2c3e50" />
        <circle cx="55" cy="35" r="2" fill="#ecf0f1" />
        <circle cx="65" cy="35" r="2" fill="#ecf0f1" />
        <path d="M40 45 Q25 35 15 40" stroke="#2c3e50" stroke-width="4" stroke-linecap="round" />
        <path d="M80 45 Q95 35 105 40" stroke="#2c3e50" stroke-width="4" stroke-linecap="round" />
        <path d="M45 75 Q35 85 25 90" stroke="#2c3e50" stroke-width="4" stroke-linecap="round" />
        <path d="M75 75 Q85 85 95 90" stroke="#2c3e50" stroke-width="4" stroke-linecap="round" />
      </svg>
    `,
    animation: "crawl",
  },
  {
    key: "bee",
    label: "벌",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bee-stripe" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#f1c40f" />
            <stop offset="50%" stop-color="#f39c12" />
            <stop offset="100%" stop-color="#e67e22" />
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="60" rx="20" ry="35" fill="url(#bee-stripe)" />
        <path d="M40 45 Q20 35 15 50" stroke="#2c3e50" stroke-width="6" stroke-linecap="round" />
        <path d="M80 45 Q100 35 105 50" stroke="#2c3e50" stroke-width="6" stroke-linecap="round" />
        <circle cx="55" cy="50" r="3" fill="#2c3e50" />
        <circle cx="65" cy="50" r="3" fill="#2c3e50" />
        <ellipse cx="60" cy="25" rx="8" ry="12" fill="#f1c40f" />
        <ellipse cx="60" cy="85" rx="6" ry="10" fill="#f1c40f" />
      </svg>
    `,
    animation: "buzz",
  },
  {
    key: "ladybug",
    label: "무당벌레",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="60" rx="25" ry="35" fill="#e74c3c" />
        <ellipse cx="50" cy="45" rx="4" ry="6" fill="#2c3e50" />
        <ellipse cx="70" cy="45" rx="4" ry="6" fill="#2c3e50" />
        <ellipse cx="45" cy="65" rx="3" ry="4" fill="#2c3e50" />
        <ellipse cx="55" cy="70" rx="3" ry="4" fill="#2c3e50" />
        <ellipse cx="65" cy="70" rx="3" ry="4" fill="#2c3e50" />
        <ellipse cx="75" cy="65" rx="3" ry="4" fill="#2c3e50" />
        <line x1="60" y1="25" x2="60" y2="15" stroke="#2c3e50" stroke-width="3" stroke-linecap="round" />
      </svg>
    `,
    animation: "crawl",
  },
  {
    key: "grasshopper",
    label: "메뚜기",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="60" rx="18" ry="30" fill="#27ae60" />
        <ellipse cx="60" cy="35" rx="12" ry="18" fill="#2ecc71" />
        <path d="M30 45 Q15 35 5 45" stroke="#27ae60" stroke-width="6" stroke-linecap="round" />
        <path d="M90 45 Q105 35 115 45" stroke="#27ae60" stroke-width="6" stroke-linecap="round" />
        <path d="M40 75 Q25 85 15 90" stroke="#27ae60" stroke-width="6" stroke-linecap="round" />
        <path d="M80 75 Q95 85 105 90" stroke="#27ae60" stroke-width="6" stroke-linecap="round" />
        <circle cx="55" cy="30" r="3" fill="#2c3e50" />
        <circle cx="65" cy="30" r="3" fill="#2c3e50" />
      </svg>
    `,
    animation: "hop",
  },
  {
    key: "firefly",
    label: "반딧불이",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="70" rx="12" ry="25" fill="#34495e" />
        <ellipse cx="60" cy="50" rx="8" ry="15" fill="#2c3e50" />
        <ellipse cx="60" cy="35" rx="6" ry="12" fill="#f39c12" />
        <circle cx="55" cy="32" r="2" fill="#f1c40f" />
        <circle cx="65" cy="32" r="2" fill="#f1c40f" />
        <path d="M45 60 Q35 50 25 55" stroke="#34495e" stroke-width="4" stroke-linecap="round" />
        <path d="M75 60 Q85 50 95 55" stroke="#34495e" stroke-width="4" stroke-linecap="round" />
        <circle cx="60" cy="35" r="8" fill="#f1c40f" opacity="0.3" />
      </svg>
    `,
    animation: "glow",
  },
  {
    key: "caterpillar",
    label: "애벌레",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="60" r="12" fill="#7bed9f" />
        <circle cx="48" cy="60" r="12" fill="#7bed9f" />
        <circle cx="66" cy="60" r="12" fill="#7bed9f" />
        <circle cx="84" cy="60" r="12" fill="#7bed9f" />
        <circle cx="30" cy="60" r="10" fill="#2ed573" />
        <circle cx="28" cy="55" r="3" fill="#2c3e50" />
        <circle cx="32" cy="55" r="3" fill="#2c3e50" />
        <path d="M25 52 Q20 45 15 48" stroke="#2c3e50" stroke-width="3" stroke-linecap="round" />
        <path d="M35 52 Q40 45 45 48" stroke="#2c3e50" stroke-width="3" stroke-linecap="round" />
      </svg>
    `,
    animation: "crawl",
  },
  {
    key: "snail",
    label: "달팽이",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="55" r="25" fill="#d35400" />
        <circle cx="70" cy="55" r="18" fill="#e67e22" />
        <ellipse cx="40" cy="75" rx="20" ry="12" fill="#95a5a6" />
        <ellipse cx="30" cy="70" rx="8" ry="10" fill="#7f8c8d" />
        <circle cx="28" cy="65" r="3" fill="#2c3e50" />
        <circle cx="32" cy="65" r="3" fill="#2c3e50" />
        <path d="M25 62 Q20 55 15 58" stroke="#7f8c8d" stroke-width="3" stroke-linecap="round" />
        <path d="M35 62 Q40 55 45 58" stroke="#7f8c8d" stroke-width="3" stroke-linecap="round" />
      </svg>
    `,
    animation: "crawl",
  },
  {
    key: "cricket",
    label: "귀뚜라미",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="60" rx="15" ry="25" fill="#2c3e50" />
        <ellipse cx="60" cy="35" rx="10" ry="15" fill="#34495e" />
        <path d="M35 55 Q20 50 15 60" stroke="#2c3e50" stroke-width="5" stroke-linecap="round" />
        <path d="M85 55 Q100 50 105 60" stroke="#2c3e50" stroke-width="5" stroke-linecap="round" />
        <path d="M45 75 Q30 85 20 90" stroke="#2c3e50" stroke-width="5" stroke-linecap="round" />
        <path d="M75 75 Q90 85 100 90" stroke="#2c3e50" stroke-width="5" stroke-linecap="round" />
        <circle cx="55" cy="30" r="2" fill="#ecf0f1" />
        <circle cx="65" cy="30" r="2" fill="#ecf0f1" />
        <path d="M52 25 Q48 15 40 18" stroke="#2c3e50" stroke-width="3" stroke-linecap="round" />
        <path d="M68 25 Q72 15 80 18" stroke="#2c3e50" stroke-width="3" stroke-linecap="round" />
      </svg>
    `,
    animation: "hop",
  },
  {
    key: "moth",
    label: "나방",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="60" rx="28" ry="35" fill="#bdc3c7" opacity="0.9" />
        <ellipse cx="80" cy="60" rx="28" ry="35" fill="#bdc3c7" opacity="0.9" />
        <rect x="54" y="40" width="12" height="40" rx="6" fill="#7f8c8d" />
        <circle cx="60" cy="35" r="8" fill="#95a5a6" />
        <path d="M56 28 Q52 18 44 20" stroke="#7f8c8d" stroke-width="3" fill="none" stroke-linecap="round" />
        <path d="M64 28 Q68 18 76 20" stroke="#7f8c8d" stroke-width="3" fill="none" stroke-linecap="round" />
        <circle cx="35" cy="55" r="8" fill="#34495e" opacity="0.6" />
        <circle cx="85" cy="55" r="8" fill="#34495e" opacity="0.6" />
      </svg>
    `,
    animation: "flutter",
  },
];

const flowers = [
  {
    key: "tulip",
    label: "튤립",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 100 L50 80 L40 70 Q60 50 80 70 L70 80 Z" fill="#e74c3c" />
        <path d="M60 100 L50 80 L40 70 Q60 55 80 70 L70 80 Z" fill="#c0392b" />
        <rect x="58" y="100" width="4" height="20" fill="#27ae60" />
        <ellipse cx="60" cy="65" rx="8" ry="12" fill="#f39c12" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "rose",
    label: "장미",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 80 Q50 70 55 60 Q60 50 65 60 Q70 70 60 80" fill="#e91e63" />
        <path d="M60 80 Q45 75 50 65 Q60 55 70 65 Q75 75 60 80" fill="#ad1457" />
        <path d="M60 80 Q55 70 60 60 Q65 70 60 80" fill="#f8bbd9" />
        <rect x="58" y="80" width="4" height="20" fill="#4caf50" />
        <ellipse cx="60" cy="65" rx="3" ry="5" fill="#8bc34a" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "sunflower",
    label: "해바라기",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="25" fill="#ffc107" />
        <circle cx="60" cy="60" r="15" fill="#8d6e63" />
        <rect x="58" y="85" width="4" height="20" fill="#4caf50" />
        <ellipse cx="45" cy="45" rx="8" ry="15" fill="#ff9800" />
        <ellipse cx="75" cy="45" rx="8" ry="15" fill="#ff9800" />
        <ellipse cx="45" cy="75" rx="8" ry="15" fill="#ff9800" />
        <ellipse cx="75" cy="75" rx="8" ry="15" fill="#ff9800" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "daisy",
    label: "데이지",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="12" fill="#ffeb3b" />
        <ellipse cx="60" cy="45" rx="8" ry="15" fill="#ffffff" />
        <ellipse cx="60" cy="75" rx="8" ry="15" fill="#ffffff" />
        <ellipse cx="45" cy="60" rx="8" ry="15" fill="#ffffff" />
        <ellipse cx="75" cy="60" rx="8" ry="15" fill="#ffffff" />
        <rect x="58" y="72" width="4" height="20" fill="#4caf50" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "bluebell",
    label: "블루벨",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 100 L55 80 L50 70 Q60 50 70 70 L65 80 Z" fill="#2196f3" />
        <path d="M60 100 L55 80 L50 70 Q60 55 70 70 L65 80 Z" fill="#1976d2" />
        <rect x="58" y="100" width="4" height="20" fill="#4caf50" />
        <ellipse cx="60" cy="65" rx="6" ry="10" fill="#64b5f6" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "lavender",
    label: "라벤더",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="58" y="100" width="4" height="20" fill="#4caf50" />
        <circle cx="60" cy="80" r="8" fill="#9c27b0" />
        <circle cx="55" cy="70" r="6" fill="#ba68c8" />
        <circle cx="65" cy="70" r="6" fill="#ba68c8" />
        <circle cx="60" cy="60" r="5" fill="#ce93d8" />
        <circle cx="52" cy="65" r="4" fill="#ce93d8" />
        <circle cx="68" cy="65" r="4" fill="#ce93d8" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "lily",
    label: "백합",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="60" rx="15" ry="25" fill="#ffffff" />
        <ellipse cx="60" cy="60" rx="12" ry="20" fill="#f8bbd9" />
        <rect x="58" y="85" width="4" height="20" fill="#4caf50" />
        <circle cx="60" cy="50" r="3" fill="#ffeb3b" />
        <path d="M60 50 L55 45" stroke="#ffeb3b" stroke-width="2" />
        <path d="M60 50 L65 45" stroke="#ffeb3b" stroke-width="2" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "poppy",
    label: "양귀비",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="20" fill="#f44336" />
        <circle cx="60" cy="60" r="15" fill="#d32f2f" />
        <circle cx="60" cy="60" r="8" fill="#000000" />
        <rect x="58" y="80" width="4" height="20" fill="#4caf50" />
        <ellipse cx="60" cy="50" rx="3" ry="6" fill="#ffeb3b" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "iris",
    label: "붓꽃",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="60" rx="18" ry="25" fill="#673ab7" />
        <ellipse cx="60" cy="60" rx="12" ry="20" fill="#9c27b0" />
        <rect x="58" y="85" width="4" height="20" fill="#4caf50" />
        <ellipse cx="60" cy="50" rx="8" ry="12" fill="#e1bee7" />
        <circle cx="60" cy="45" r="3" fill="#ffeb3b" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "marigold",
    label: "금잔화",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="20" fill="#ff9800" />
        <circle cx="60" cy="60" r="15" fill="#ffc107" />
        <circle cx="60" cy="60" r="10" fill="#ffeb3b" />
        <rect x="58" y="80" width="4" height="20" fill="#4caf50" />
        <ellipse cx="60" cy="50" rx="5" ry="8" fill="#ff5722" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "violet",
    label: "제비꽃",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="55" rx="12" ry="15" fill="#7b1fa2" />
        <ellipse cx="48" cy="62" rx="10" ry="12" fill="#9c27b0" />
        <ellipse cx="72" cy="62" rx="10" ry="12" fill="#9c27b0" />
        <ellipse cx="54" cy="72" rx="8" ry="10" fill="#ba68c8" />
        <ellipse cx="66" cy="72" rx="8" ry="10" fill="#ba68c8" />
        <rect x="58" y="80" width="4" height="20" fill="#4caf50" />
        <circle cx="60" cy="60" r="4" fill="#ffeb3b" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "carnation",
    label: "카네이션",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="18" fill="#e91e63" />
        <path d="M50 50 Q45 55 48 60 Q50 58 52 60 Q55 55 50 50" fill="#f06292" />
        <path d="M70 50 Q75 55 72 60 Q70 58 68 60 Q65 55 70 50" fill="#f06292" />
        <path d="M60 70 Q55 75 58 80 Q60 78 62 80 Q65 75 60 70" fill="#f06292" />
        <rect x="58" y="78" width="4" height="20" fill="#4caf50" />
        <circle cx="60" cy="60" r="6" fill="#c2185b" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "cosmos",
    label: "코스모스",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="10" fill="#ffeb3b" />
        <ellipse cx="60" cy="45" rx="6" ry="12" fill="#ec407a" />
        <ellipse cx="60" cy="75" rx="6" ry="12" fill="#ec407a" />
        <ellipse cx="45" cy="60" rx="6" ry="12" fill="#ec407a" transform="rotate(90 45 60)" />
        <ellipse cx="75" cy="60" rx="6" ry="12" fill="#ec407a" transform="rotate(90 75 60)" />
        <ellipse cx="48" cy="48" rx="5" ry="10" fill="#ec407a" transform="rotate(45 48 48)" />
        <ellipse cx="72" cy="48" rx="5" ry="10" fill="#ec407a" transform="rotate(-45 72 48)" />
        <ellipse cx="48" cy="72" rx="5" ry="10" fill="#ec407a" transform="rotate(-45 48 72)" />
        <ellipse cx="72" cy="72" rx="5" ry="10" fill="#ec407a" transform="rotate(45 72 72)" />
        <rect x="58" y="75" width="4" height="20" fill="#4caf50" />
      </svg>
    `,
    animation: "sway",
  },
];

const trees = [
  {
    key: "pine",
    label: "소나무",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="80" width="10" height="40" fill="#8d6e63" />
        <path d="M60 20 L40 60 L80 60 Z" fill="#2e7d32" />
        <path d="M60 35 L45 70 L75 70 Z" fill="#388e3c" />
        <path d="M60 50 L50 80 L70 80 Z" fill="#43a047" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "cherry",
    label: "벚나무",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="85" width="10" height="35" fill="#8d6e63" />
        <circle cx="60" cy="60" r="25" fill="#ffcdd2" />
        <circle cx="45" cy="45" r="8" fill="#f8bbd9" />
        <circle cx="75" cy="45" r="8" fill="#f8bbd9" />
        <circle cx="60" cy="30" r="6" fill="#f8bbd9" />
        <circle cx="40" cy="65" r="6" fill="#f8bbd9" />
        <circle cx="80" cy="65" r="6" fill="#f8bbd9" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "maple",
    label: "단풍나무",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="85" width="10" height="35" fill="#8d6e63" />
        <path d="M60 30 L45 60 L60 50 L75 60 Z" fill="#d32f2f" />
        <path d="M60 40 L35 70 L60 60 L85 70 Z" fill="#f44336" />
        <path d="M60 50 L30 80 L60 70 L90 80 Z" fill="#e53935" />
        <circle cx="60" cy="75" r="15" fill="#ff5722" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "oak",
    label: "참나무",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="80" width="10" height="40" fill="#8d6e63" />
        <circle cx="60" cy="50" r="30" fill="#4caf50" />
        <circle cx="45" cy="40" r="15" fill="#66bb6a" />
        <circle cx="75" cy="40" r="15" fill="#66bb6a" />
        <circle cx="60" cy="25" r="12" fill="#66bb6a" />
        <circle cx="35" cy="55" r="10" fill="#66bb6a" />
        <circle cx="85" cy="55" r="10" fill="#66bb6a" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "willow",
    label: "버드나무",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="70" width="10" height="50" fill="#8d6e63" />
        <path d="M60 30 Q40 50 30 80" stroke="#4caf50" stroke-width="8" fill="none" stroke-linecap="round" />
        <path d="M60 30 Q80 50 90 80" stroke="#4caf50" stroke-width="8" fill="none" stroke-linecap="round" />
        <path d="M60 40 Q35 60 25 90" stroke="#66bb6a" stroke-width="6" fill="none" stroke-linecap="round" />
        <path d="M60 40 Q85 60 95 90" stroke="#66bb6a" stroke-width="6" fill="none" stroke-linecap="round" />
        <circle cx="60" cy="25" r="8" fill="#4caf50" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "ginkgo",
    label: "은행나무",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="80" width="10" height="40" fill="#8d6e63" />
        <circle cx="60" cy="50" r="25" fill="#ffeb3b" />
        <path d="M45 35 Q50 30 55 35" stroke="#ffc107" stroke-width="3" fill="none" />
        <path d="M65 35 Q70 30 75 35" stroke="#ffc107" stroke-width="3" fill="none" />
        <path d="M50 45 Q55 40 60 45" stroke="#ffc107" stroke-width="3" fill="none" />
        <path d="M60 45 Q65 40 70 45" stroke="#ffc107" stroke-width="3" fill="none" />
        <circle cx="60" cy="25" r="6" fill="#ffc107" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "birch",
    label: "자작나무",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="80" width="8" height="40" fill="#d7ccc8" />
        <rect x="57" y="85" width="2" height="30" fill="#8d6e63" />
        <rect x="59" y="90" width="2" height="20" fill="#8d6e63" />
        <circle cx="60" cy="50" r="20" fill="#e8f5e8" />
        <circle cx="50" cy="40" r="8" fill="#c8e6c9" />
        <circle cx="70" cy="40" r="8" fill="#c8e6c9" />
        <circle cx="60" cy="25" r="6" fill="#c8e6c9" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "spruce",
    label: "가문비나무",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="85" width="10" height="35" fill="#6d4c41" />
        <path d="M60 15 L35 45 L85 45 Z" fill="#1b5e20" />
        <path d="M60 30 L40 55 L80 55 Z" fill="#2e7d32" />
        <path d="M60 45 L45 70 L75 70 Z" fill="#388e3c" />
        <path d="M60 60 L50 85 L70 85 Z" fill="#43a047" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "elm",
    label: "느릅나무",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="75" width="10" height="45" fill="#795548" />
        <ellipse cx="60" cy="45" rx="35" ry="30" fill="#7cb342" />
        <ellipse cx="45" cy="35" rx="18" ry="15" fill="#8bc34a" />
        <ellipse cx="75" cy="35" rx="18" ry="15" fill="#8bc34a" />
        <ellipse cx="60" cy="20" rx="12" ry="10" fill="#8bc34a" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "cypress",
    label: "측백나무",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="56" y="85" width="8" height="35" fill="#8d6e63" />
        <ellipse cx="60" cy="55" rx="15" ry="40" fill="#558b2f" />
        <ellipse cx="60" cy="50" rx="12" ry="35" fill="#689f38" />
        <path d="M60 15 L50 30 L70 30 Z" fill="#33691e" />
      </svg>
    `,
    animation: "sway",
  },
];

const mushrooms = [
  {
    key: "red-mushroom",
    label: "빨간 버섯",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="90" rx="15" ry="25" fill="#f5f5f5" />
        <ellipse cx="60" cy="65" rx="25" ry="20" fill="#e53935" />
        <circle cx="50" cy="60" r="5" fill="#ffffff" />
        <circle cx="70" cy="60" r="5" fill="#ffffff" />
        <circle cx="55" cy="70" r="4" fill="#ffffff" />
        <circle cx="65" cy="70" r="4" fill="#ffffff" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "brown-mushroom",
    label: "갈색 버섯",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="85" rx="12" ry="20" fill="#d7ccc8" />
        <ellipse cx="60" cy="60" rx="20" ry="15" fill="#8d6e63" />
        <ellipse cx="60" cy="58" rx="18" ry="12" fill="#a1887f" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "blue-mushroom",
    label: "파란 버섯",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="88" rx="14" ry="22" fill="#e8eaf6" />
        <ellipse cx="60" cy="65" rx="22" ry="18" fill="#5c6bc0" />
        <circle cx="52" cy="62" r="4" fill="#ffffff" opacity="0.8" />
        <circle cx="68" cy="62" r="4" fill="#ffffff" opacity="0.8" />
      </svg>
    `,
    animation: "sway",
  },
];

const rocks = [
  {
    key: "gray-rock",
    label: "회색 돌",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="90" rx="30" ry="20" fill="#90a4ae" />
        <ellipse cx="60" cy="80" rx="28" ry="18" fill="#78909c" />
        <ellipse cx="60" cy="70" rx="20" ry="15" fill="#607d8b" />
      </svg>
    `,
    animation: "none",
  },
  {
    key: "moss-rock",
    label: "이끼 낀 돌",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="85" rx="35" ry="25" fill="#546e7a" />
        <ellipse cx="60" cy="75" rx="30" ry="20" fill="#607d8b" />
        <ellipse cx="55" cy="70" rx="15" ry="10" fill="#689f38" />
        <ellipse cx="68" cy="72" rx="12" ry="8" fill="#7cb342" />
      </svg>
    `,
    animation: "none",
  },
];

const structures = [
  {
    key: "cabin",
    label: "오두막",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cabin-wall" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#8d6e63" />
            <stop offset="100%" stop-color="#6d4c41" />
          </linearGradient>
          <linearGradient id="cabin-roof" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#5d4037" />
            <stop offset="100%" stop-color="#3e2723" />
          </linearGradient>
        </defs>
        <!-- 벽 -->
        <rect x="25" y="55" width="70" height="50" fill="url(#cabin-wall)" />
        <!-- 지붕 -->
        <path d="M20 55 L60 25 L100 55 Z" fill="url(#cabin-roof)" />
        <!-- 문 -->
        <rect x="48" y="75" width="24" height="30" fill="#4e342e" rx="2" />
        <circle cx="68" cy="90" r="2" fill="#ffeb3b" />
        <!-- 창문 -->
        <rect x="30" y="65" width="12" height="12" fill="#81d4fa" />
        <line x1="36" y1="65" x2="36" y2="77" stroke="#6d4c41" stroke-width="2" />
        <line x1="30" y1="71" x2="42" y2="71" stroke="#6d4c41" stroke-width="2" />
        <rect x="78" y="65" width="12" height="12" fill="#81d4fa" />
        <line x1="84" y1="65" x2="84" y2="77" stroke="#6d4c41" stroke-width="2" />
        <line x1="78" y1="71" x2="90" y2="71" stroke="#6d4c41" stroke-width="2" />
        <!-- 굴뚝 -->
        <rect x="70" y="35" width="8" height="20" fill="#795548" />
        <!-- 연기 -->
        <ellipse cx="74" cy="30" rx="6" ry="4" fill="#90a4ae" opacity="0.6" />
        <ellipse cx="76" cy="24" rx="5" ry="3" fill="#b0bec5" opacity="0.5" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "tent",
    label: "텐트",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tent-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#e53935" />
            <stop offset="50%" stop-color="#c62828" />
            <stop offset="100%" stop-color="#b71c1c" />
          </linearGradient>
        </defs>
        <!-- 텐트 본체 -->
        <path d="M60 30 L30 90 L90 90 Z" fill="url(#tent-gradient)" />
        <!-- 텐트 줄무늬 -->
        <path d="M60 30 L40 90" stroke="#ffffff" stroke-width="2" opacity="0.3" />
        <path d="M60 30 L50 90" stroke="#ffffff" stroke-width="2" opacity="0.3" />
        <path d="M60 30 L70 90" stroke="#ffffff" stroke-width="2" opacity="0.3" />
        <path d="M60 30 L80 90" stroke="#ffffff" stroke-width="2" opacity="0.3" />
        <!-- 텐트 입구 -->
        <path d="M50 90 L50 70 Q60 60 70 70 L70 90" fill="#8d6e63" />
        <!-- 텐트 꼭대기 -->
        <circle cx="60" cy="30" r="3" fill="#ffeb3b" />
        <!-- 텐트 밧줄 -->
        <line x1="60" y1="30" x2="45" y2="95" stroke="#795548" stroke-width="2" />
        <line x1="60" y1="30" x2="75" y2="95" stroke="#795548" stroke-width="2" />
        <!-- 밧줄 고정점 -->
        <circle cx="45" cy="95" r="2" fill="#5d4037" />
        <circle cx="75" cy="95" r="2" fill="#5d4037" />
      </svg>
    `,
    animation: "sway",
  },
  {
    key: "campfire",
    label: "캠프파이어",
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fire-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#ffeb3b" />
            <stop offset="50%" stop-color="#ff9800" />
            <stop offset="100%" stop-color="#f44336" />
          </linearGradient>
        </defs>
        <!-- 돌 받침 -->
        <ellipse cx="60" cy="85" rx="35" ry="8" fill="#78909c" />
        <ellipse cx="45" cy="82" rx="10" ry="8" fill="#90a4ae" />
        <ellipse cx="75" cy="82" rx="10" ry="8" fill="#90a4ae" />
        <ellipse cx="52" cy="75" rx="8" ry="7" fill="#90a4ae" />
        <ellipse cx="68" cy="75" rx="8" ry="7" fill="#90a4ae" />
        <!-- 나무 -->
        <rect x="48" y="65" width="6" height="20" fill="#6d4c41" transform="rotate(-15 51 75)" />
        <rect x="66" y="65" width="6" height="20" fill="#6d4c41" transform="rotate(15 69 75)" />
        <rect x="56" y="70" width="8" height="15" fill="#8d6e63" />
        <!-- 불꽃 -->
        <path d="M60 50 Q55 60 60 70 Q65 60 60 50" fill="url(#fire-gradient)" opacity="0.9" />
        <path d="M60 45 Q57 55 60 65 Q63 55 60 45" fill="#ffeb3b" opacity="0.8" />
        <ellipse cx="60" cy="55" rx="8" ry="12" fill="#ff9800" opacity="0.6" />
      </svg>
    `,
    animation: "glow",
  },
];

let clickCount = 0;
let released = false;
let threshold = 3; // 고정 3번 클릭
let resetTimeout;
const insectElements = [];
const flowerElements = [];
const treeElements = [];
const tipiElement = null;

function revealHiddenContent() {
  releaseReveals.forEach((element) => {
    if (element.classList.contains("is-hidden")) {
      element.classList.remove("is-hidden");
      requestAnimationFrame(() => {
        element.classList.add("revealed");
      });
    } else {
      requestAnimationFrame(() => {
        element.classList.add("revealed");
      });
    }
  });
}

function updateInstructions() {
  if (released) return;
  const remaining = threshold - clickCount;
  if (remaining > 0) {
    instructions.textContent = `반짝! 더 ${remaining}번 두드려 보세요.`;
  } else {
    instructions.textContent = "숲이 나타날 거예요!";
  }
}

function positionInsects() {
  insectElements.forEach((wrapper, index) => {
    // 화면 전체에 랜덤하게 배치
    const randomX = Math.random() * 80 + 10; // 10% ~ 90%
    const randomY = Math.random() * 70 + 15; // 15% ~ 85%
    
    wrapper.style.left = `${randomX}%`;
    wrapper.style.top = `${randomY}%`;
    
    // 각 곤충마다 다른 방향으로 움직이도록 설정
    const direction = Math.random() * 360; // 0-360도
    const speed = 0.5 + Math.random() * 1.5; // 0.5-2초 사이의 속도
    
    wrapper.style.setProperty('--direction', `${direction}deg`);
    wrapper.style.setProperty('--speed', `${speed}s`);
  });
}

function positionFlowers() {
  flowerElements.forEach((wrapper, index) => {
    const angle = (index / flowerElements.length) * Math.PI * 2 + Math.PI / 6;
    const radius = window.innerWidth > 1024 ? 200 : window.innerWidth > 768 ? 160 : 120;
    const offsetX = 50 + Math.cos(angle) * (radius / window.innerWidth * 100 * 0.6);
    const offsetY = 60 + Math.sin(angle) * (radius / window.innerHeight * 100 * 0.4);

    wrapper.style.left = `${offsetX}%`;
    wrapper.style.top = `${offsetY}%`;
  });
}

function positionTrees() {
  treeElements.forEach((wrapper, index) => {
    const angle = (index / treeElements.length) * Math.PI * 2 + Math.PI / 3;
    const radius = window.innerWidth > 1024 ? 320 : window.innerWidth > 768 ? 280 : 240;
    const offsetX = 50 + Math.cos(angle) * (radius / window.innerWidth * 100 * 0.7);
    const offsetY = 70 + Math.sin(angle) * (radius / window.innerHeight * 100 * 0.5);

    wrapper.style.left = `${offsetX}%`;
    wrapper.style.top = `${offsetY}%`;
  });
}

function positionMushrooms() {
  const mushroomWrappers = document.querySelectorAll('.mushroom');
  mushroomWrappers.forEach((wrapper, index) => {
    // 버섯은 땅 가까이 랜덤하게 배치
    const randomX = 15 + Math.random() * 70; // 15% ~ 85%
    const randomY = 65 + Math.random() * 25; // 65% ~ 90%
    
    wrapper.style.left = `${randomX}%`;
    wrapper.style.top = `${randomY}%`;
  });
}

function positionRocks() {
  const rockWrappers = document.querySelectorAll('.rock');
  rockWrappers.forEach((wrapper, index) => {
    // 돌도 땅 가까이 랜덤하게 배치
    const randomX = 10 + Math.random() * 80; // 10% ~ 90%
    const randomY = 70 + Math.random() * 20; // 70% ~ 90%
    
    wrapper.style.left = `${randomX}%`;
    wrapper.style.top = `${randomY}%`;
  });
}

function positionStructures() {
  const structureWrappers = document.querySelectorAll('.structure');
  const positions = [
    { x: 20, y: 45 }, // 왼쪽 중간
    { x: 75, y: 50 }, // 오른쪽 중간
    { x: 45, y: 65 }, // 중앙 하단
  ];
  
  structureWrappers.forEach((wrapper, index) => {
    if (positions[index]) {
      wrapper.style.left = `${positions[index].x}%`;
      wrapper.style.top = `${positions[index].y}%`;
    }
  });
}

function releaseInsects() {
  released = true;
  document.body.classList.add("forest");
  magnifier.classList.add("opened");
  instructions.textContent = "";
  revealHiddenContent();
  insectStage.setAttribute("aria-hidden", "false");

  // 곤충들 생성
  insects.forEach((insect, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = `insect insect--${insect.key}`;
    wrapper.dataset.label = insect.label;
    wrapper.innerHTML = insect.svg;
    
    // 화면 전체를 기어다니는 애니메이션으로 변경
    const animations = ['wander', 'roam', 'crawl'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    const duration = 8 + Math.random() * 4; // 8-12초
    
    wrapper.style.animation = `${randomAnimation} ${duration}s ease-in-out infinite`;
    wrapper.style.animationDelay = `${index * 0.5}s`;

    requestAnimationFrame(() => {
      wrapper.classList.add("visible");
    });

    insectStage.appendChild(wrapper);
    insectElements.push(wrapper);
  });

  // 꽃들 생성
  flowers.forEach((flower, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = `flower flower--${flower.key}`;
    wrapper.dataset.label = flower.label;
    wrapper.innerHTML = flower.svg;
    wrapper.style.animation = `${flower.animation} ${4 + index * 0.4}s ease-in-out infinite`;
    wrapper.style.animationDelay = `${index * 0.5}s`;

    requestAnimationFrame(() => {
      wrapper.classList.add("visible");
    });

    insectStage.appendChild(wrapper);
    flowerElements.push(wrapper);
  });

  // 나무들 생성
  trees.forEach((tree, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = `tree tree--${tree.key}`;
    wrapper.dataset.label = tree.label;
    wrapper.innerHTML = tree.svg;
    wrapper.style.animation = `${tree.animation} ${8 + index * 0.8}s ease-in-out infinite`;
    wrapper.style.animationDelay = `${index * 1.2}s`;

    requestAnimationFrame(() => {
      wrapper.classList.add("visible");
    });

    insectStage.appendChild(wrapper);
    treeElements.push(wrapper);
  });

  // 버섯들 생성
  mushrooms.forEach((mushroom, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = `mushroom mushroom--${mushroom.key}`;
    wrapper.dataset.label = mushroom.label;
    wrapper.innerHTML = mushroom.svg;
    if (mushroom.animation !== "none") {
      wrapper.style.animation = `${mushroom.animation} ${5 + index * 0.6}s ease-in-out infinite`;
    }
    wrapper.style.animationDelay = `${index * 0.8}s`;

    requestAnimationFrame(() => {
      wrapper.classList.add("visible");
    });

    insectStage.appendChild(wrapper);
  });

  // 돌들 생성
  rocks.forEach((rock, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = `rock rock--${rock.key}`;
    wrapper.dataset.label = rock.label;
    wrapper.innerHTML = rock.svg;

    requestAnimationFrame(() => {
      wrapper.classList.add("visible");
    });

    insectStage.appendChild(wrapper);
  });

  // 건축물들 생성 (오두막, 텐트, 캠프파이어)
  structures.forEach((structure, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = `structure structure--${structure.key}`;
    wrapper.dataset.label = structure.label;
    wrapper.innerHTML = structure.svg;
    if (structure.animation !== "none") {
      wrapper.style.animation = `${structure.animation} ${6 + index * 0.5}s ease-in-out infinite`;
    }
    wrapper.style.animationDelay = `${index * 1}s`;

    requestAnimationFrame(() => {
      wrapper.classList.add("visible");
    });

    insectStage.appendChild(wrapper);
  });

  positionInsects();
  positionFlowers();
  positionTrees();
  positionMushrooms();
  positionRocks();
  positionStructures();

  // clearTimeout(resetTimeout);
  // resetTimeout = setTimeout(() => {
  //   instructions.textContent = "이메일을 남기고 더 많은 모험을 기다려요.";
  // }, 6000);
}

magnifier.addEventListener("click", () => {
  if (released) {
    magnifier.classList.remove("opened");
    setTimeout(() => magnifier.classList.add("opened"), 0);
    return;
  }

  clickCount += 1;
  magnifier.classList.add("clicked");
  setTimeout(() => magnifier.classList.remove("clicked"), 320);
  updateInstructions();

  if (clickCount >= threshold) {
    releaseInsects();
  }
});

magnifier.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    magnifier.click();
  }
});

waitlist.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const emailInput = event.target.elements.email;
  const submitButton = event.target.querySelector('button[type="submit"]');
  const email = emailInput.value;

  // 버튼 비활성화
  submitButton.disabled = true;
  submitButton.textContent = '전송 중...';

  try {
    const response = await fetch('https://eujrvwcdabtopxipqfwy.supabase.co/functions/v1/submit-email-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        app: '곤충박사'
      })
    });

    if (response.ok) {
      // 성공 시 팝업 표시
      showSuccessPopup();
      event.target.reset();
    } else {
      throw new Error('서버 오류가 발생했습니다.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('오류가 발생했어요. 다시 시도해주세요!');
  } finally {
    // 버튼 복원
    submitButton.disabled = false;
    submitButton.textContent = 'Join Waitlist';
  }
});

// 성공 팝업 함수
function showSuccessPopup() {
  const popup = document.createElement('div');
  popup.className = 'success-popup';
  popup.innerHTML = `
    <div class="popup-content">
      <div class="popup-header">
        <span class="popup-emoji">🎉</span>
      </div>
      <h3>와! 신청 완료!</h3>
      <p>곤충박사와 함께하는<br>신나는 모험이 곧 시작돼요!</p>
      <p class="popup-subtext">이메일로 초대장을 보내드릴게요 📧</p>
      <button class="popup-close">확인</button>
    </div>
  `;
  document.body.appendChild(popup);

  // 확인 버튼 클릭 이벤트
  const closeButton = popup.querySelector('.popup-close');
  closeButton.addEventListener('click', () => {
    popup.classList.remove('show');
    setTimeout(() => {
      popup.remove();
      // 페이지 새로고침 및 최상단 스크롤
      window.scrollTo({ top: 0, behavior: 'instant' });
      location.reload();
    }, 300);
  });

  // 애니메이션을 위해 약간의 딜레이 후 클래스 추가
  setTimeout(() => {
    popup.classList.add('show');
  }, 10);

  // 5초 후 자동으로 닫기 후 새로고침
  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => {
      popup.remove();
      window.scrollTo({ top: 0, behavior: 'instant' });
      location.reload();
    }, 300);
  }, 5000);
}

window.addEventListener("resize", () => {
  if (!released) return;
  positionInsects();
  positionFlowers();
  positionTrees();
  positionMushrooms();
  positionRocks();
  positionStructures();
});

// 스크롤에 따라 숲속 요소들 페이드아웃/인
window.addEventListener("scroll", () => {
  if (!released) return;
  
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollThreshold = windowHeight * 0.1; // 화면의 10% 스크롤 시작
  
  // 스크롤 양에 따라 opacity 계산 (0 ~ 1)
  let opacity = 1;
  if (scrollY > scrollThreshold) {
    opacity = Math.max(0, 1 - (scrollY - scrollThreshold) / (windowHeight * 0.3));
  }
  
  // 모든 숲속 요소들에 opacity 적용
  const forestElements = document.querySelectorAll('.insect, .flower, .tree, .mushroom, .rock, .structure');
  forestElements.forEach(element => {
    element.style.opacity = opacity;
  });
});
