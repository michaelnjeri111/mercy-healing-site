const messageBox = document.getElementById("messageBox");

/* Messages */
function showMessage(type) {
  const messages = {
    strength: "Stay strong. Love continues through you.",
    lonely: "You are never truly alone. He is always remembered.",
    memory: "Every memory is a piece of love that never fades.",
    hope: "Healing takes time, but light will return.",
    support: "You are not alone. I will always be here for you anytime you need someone to talk to."
  };

  messageBox.innerText = messages[type];
}

/* MEMORY SYSTEM */
let memories = JSON.parse(localStorage.getItem("memories")) || [];

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

renderMemories();

/* DARK MODE TOGGLE */
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
  s.style.background = "white";
  s.style.borderRadius = "50%";
  s.style.left = Math.random() * 100 + "%";
  s.style.top = Math.random() * 100 + "%";
  s.style.opacity = Math.random();
  stars.appendChild(s);
}
