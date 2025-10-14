const box = document.getElementById("mystery-box");
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
];

let clickCount = 0;
let released = false;
let threshold = randomThreshold();
let resetTimeout;
const insectElements = [];

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

function randomThreshold() {
  return Math.floor(Math.random() * 3) + 3; // between 3 and 5
}

function updateInstructions() {
  if (released) return;
  const remaining = threshold - clickCount;
  if (remaining > 0) {
    instructions.textContent = `꿈틀! 더 ${remaining}번 두드려 보세요.`;
  } else {
    instructions.textContent = "곧 열릴 거예요!";
  }
}

function positionInsects() {
  insectElements.forEach((wrapper, index) => {
    const angle = (index / insectElements.length) * Math.PI * 2;
    const radius = window.innerWidth > 1024 ? 260 : window.innerWidth > 768 ? 220 : 180;
    const offsetX = 50 + Math.cos(angle) * (radius / window.innerWidth * 100 * 0.8);
    const offsetY = 40 + Math.sin(angle) * (radius / window.innerHeight * 100 * 0.6);

    wrapper.style.left = `${offsetX}%`;
    wrapper.style.top = `${offsetY + 10}%`;
  });
}

function releaseInsects() {
  released = true;
  document.body.classList.add("forest");
  box.classList.add("opened");
  instructions.textContent = "숲 속 친구들이 나타났어요!";
  revealHiddenContent();
  insectStage.setAttribute("aria-hidden", "false");

  insects.forEach((insect, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = `insect insect--${insect.key}`;
    wrapper.dataset.label = insect.label;
    wrapper.innerHTML = insect.svg;
    wrapper.style.animation = `${insect.animation} ${6 + index * 0.6}s ease-in-out infinite`;
    wrapper.style.animationDelay = `${index * 0.7}s`;

    requestAnimationFrame(() => {
      wrapper.classList.add("visible");
    });

    insectStage.appendChild(wrapper);
    insectElements.push(wrapper);
  });

  positionInsects();

  clearTimeout(resetTimeout);
  resetTimeout = setTimeout(() => {
    instructions.textContent = "이메일을 남기고 더 많은 모험을 기다려요.";
  }, 6000);
}

box.addEventListener("click", () => {
  if (released) {
    box.classList.remove("opened");
    setTimeout(() => box.classList.add("opened"), 0);
    return;
  }

  clickCount += 1;
  box.classList.add("clicked");
  setTimeout(() => box.classList.remove("clicked"), 320);
  updateInstructions();

  if (clickCount >= threshold) {
    releaseInsects();
    waitlist.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

box.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    box.click();
  }
});

waitlist.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = event.target.elements.email;
  const previousText = instructions.textContent;
  instructions.textContent = `${emailInput.value} 감사합니다! 곧 만나요.`;
  event.target.reset();
  setTimeout(() => {
    if (released) {
      instructions.textContent = previousText;
    }
  }, 4000);
});

window.addEventListener("resize", () => {
  if (!released) return;
  positionInsects();
});
