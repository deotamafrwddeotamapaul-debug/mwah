// Typing Animation
const text = "Hi Puchku… I made something for you.";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}

window.onload = typeWriter;

// Open Letter
function openLetter() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("letter").classList.remove("hidden");
}

// Send Kiss Animation
function sendKiss() {
  const container = document.getElementById("kiss-container");

  for (let i = 0; i < 5; i++) {
    let kiss = document.createElement("div");
    kiss.className = "kiss";
    kiss.innerHTML = "💋";
    kiss.style.left = Math.random() * 90 + "%";
    container.appendChild(kiss);

    setTimeout(() => {
      kiss.remove();
    }, 2000);
  }
}

// Love Reasons
const reasons = [
  "Because you calm me down.",
  "Because your listen to me patiently.",
  "Because you love me unconditionally.",
  "Because you make me feel safe.",
  "Because you are gentle without even trying.",
  "Because I can be completely myself with you."
];

function showReason() {
  const random = reasons[Math.floor(Math.random() * reasons.length)];
  document.getElementById("reason-text").innerText = random;
}
