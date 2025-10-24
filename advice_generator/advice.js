// === DOM Elements ===
const adviceText = document.getElementById("advice-text");
const adviceId = document.getElementById("advice-id");
const diceBtn = document.getElementById("dice-btn");
const loading = document.getElementById("loading");

// === Loading Animation ===
function showLoading() {
  loading.style.display = "flex";
  adviceText.style.opacity = "0.5";
}

function hideLoading() {
  loading.style.display = "none";
  adviceText.style.opacity = "1";
}

// === Fetch Random Advice ===
async function getAdvice() {
  showLoading();
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setTimeout(() => {
      hideLoading();
      adviceText.textContent = `"${data.slip.advice}"`;
      adviceId.textContent = `Advice #${data.slip.id}`;
    }, 1000);
  } catch (error) {
    console.log("Error:", error);
    hideLoading();
    adviceText.textContent = "⚠️ Unable to fetch advice. Try again!";
  }
}

// === Event Listener ===
diceBtn.addEventListener("click", getAdvice);

// === Initial Load ===
getAdvice();
