// script.js

const languageToggle = document.getElementById("language-toggle");
const soundToggle = document.getElementById("sound-toggle");
const ambientSound = document.getElementById("ambient-sound");

let currentLang = "ko";
let soundOn = false;

function updateLanguageToggle() {
  languageToggle.textContent = currentLang === "ko" ? "[EN] [한]" : "[EN] [한]";
  // To make it clearer, we can style or highlight active language, but for now, simple.
}

function toggleLanguage() {
  currentLang = currentLang === "ko" ? "en" : "ko";
  renderMenu(currentLang);
  updateLanguageToggle();
}

function toggleSound() {
  if (soundOn) {
    ambientSound.pause();
    soundToggle.textContent = "[Sound:OFF]";
  } else {
    ambientSound.play();
    soundToggle.textContent = "[Sound:ON]";
  }
  soundOn = !soundOn;
}

languageToggle.addEventListener("click", toggleLanguage);
soundToggle.addEventListener("click", toggleSound);

// Initialize toggle text
updateLanguageToggle();

function updateLanguageToggle() {
    languageToggle.textContent = currentLang === "ko" ? "[EN]" : "[한]";
  }
  
  function toggleLanguage() {
    currentLang = currentLang === "ko" ? "en" : "ko";
    renderMenu(currentLang);
    updateLanguageToggle();
  }
  
  function toggleSound() {
    if (soundOn) {
      ambientSound.pause();
      soundToggle.textContent = "[Sound:ON]";
    } else {
      ambientSound.play();
      soundToggle.textContent = "[Sound:OFF]";
    }
    soundOn = !soundOn;
  }
  