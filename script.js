const messageBox = document.getElementById("messageBox");

/* TWO MESSAGES PER CLICK */
const messages = {
  strength: [
    "Even on your hardest days, you are still standing — and that is strength itself.",
    "Your brother’s love did not end; it became part of your courage, walking with you every step."
  ],

  lonely: [
    "In your quietest moments, you are never truly alone — love surrounds you silently.",
    "Even when the world feels empty, memories are holding your heart together."
  ],

  memory: [
    "Every memory you carry is a living piece of love that refuses to fade.",
    "Missing him simply means your bond was real, deep, and forever meaningful."
  ],

  hope: [
    "Healing is slow, but even broken hearts learn how to shine again.",
    "There is still light waiting for you — even if today feels dark."
  ],

  support: [
    "You don’t have to carry everything alone. I’m here, always ready to listen.",
    "Whenever life feels heavy, remember you can always come back here and speak — you matter deeply."
  ]
};

/* CLICK WITH FADE TRANSITION */
function showMessage(type) {
  const box = document.getElementById("messageBox");

  box.style.opacity = 0;
  box.style.transform = "translateY(10px)";

  setTimeout(() => {
    const msgs = messages[type];
    const randomIndex = Math.floor(Math.random() * msgs.length);

    box.innerText = msgs[randomIndex];

    box.style.opacity = 1;
    box.style.transform = "translateY(0)";
  }, 300);
}

/* MEMORY SYSTEM */
let memories = JSON.parse(localStorage.getItem("memories")) || [];

function addMemory() {
  const file = document.getElementById("photoInput").files[0];
  const text = document.getElementById("memoryText").value;

  if (!file || text.trim() === "") {
    alert("Please upload image and write memory");
    return;
  }

  const reader = new FileReader();

  reader.onload = function(e) {
    memories.push({
      image: e.target.result,
      text: text
    });

    localStorage.setItem("memories", JSON.stringify(memories));
    renderMemories();
  };

  reader.readAsDataURL(file);

  document.getElementById("photoInput").value = "";
  document.getElementById("memoryText").value = "";
}

function renderMemories() {
  const gallery = document.getElementById("memoryGallery");
  gallery.innerHTML = "";

  memories.forEach(mem => {
    const div = document.createElement("div");
    div.classList.add("memory-card");

    div.innerHTML = `
      <img src="${mem.image}">
      <p>${mem.text}</p>
    `;

    gallery.appendChild(div);
  });
}

renderMemories();

/* DARK MODE */
function toggleMode() {
  document.body.classList.toggle("dark");
}

/* FLOATING STARS */
const stars = document.getElementById("stars");

for (let i = 0; i < 60; i++) {
  const s = document.createElement("div");
  s.style.position = "absolute";
  s.style.width = "3px";
  s.style.height = "3px";
  s.style.height = "3px";
  s.style.background = "white";
  s.style.borderRadius = "50%";
  s.style.left = Math.random() * 100 + "%";
  s.style.top = Math.random() * 100 + "%";
  s.style.opacity = Math.random();
  stars.appendChild(s);
}
