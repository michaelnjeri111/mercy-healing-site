const messageBox = document.getElementById("messageBox");

const messages = {
  lonely: `
    Even in your quietest moments,
    your brother's love still surrounds you.
    You are never truly alone.
  `,

  strength: `
    Your brother's story lives through your courage.
    Every day you keep moving,
    you honor him.
  `,

  memory: `
    Missing him means the bond was real.
    Love this deep never disappears.
    It simply changes form.
  `,

  hope: `
    The pain may feel heavy today,
    but healing comes one day at a time.
    Your future still holds light.
  `
};

function showMessage(type) {
  messageBox.classList.remove("show");

  setTimeout(() => {
    messageBox.innerHTML = messages[type];
    messageBox.classList.add("show");
  }, 300);
}

/* Strength counter */
let days = 0;

document.getElementById("dayBtn").addEventListener("click", () => {
  days++;
  document.getElementById(
    "counterText"
  ).innerText = `Strong Days: ${days}`;
});

/* Create floating stars */
const starsContainer = document.getElementById("stars");

for(let i = 0; i < 60; i++) {
  const star = document.createElement("div");

  star.classList.add("star");

  star.style.left = Math.random() * 100 + "%";

  star.style.animationDuration =
    Math.random() * 5 + 4 + "s";

  star.style.animationDelay =
    Math.random() * 5 + "s";

  starsContainer.appendChild(star);
}
function addMemory() {
  const fileInput = document.getElementById("photoInput");
  const textInput = document.getElementById("memoryText");
  const gallery = document.getElementById("memoryGallery");

  const file = fileInput.files[0];

  if (!file || textInput.value.trim() === "") {
    alert("Please upload a photo and write a memory.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function(e) {
    const card = document.createElement("div");
    card.classList.add("memory-card");

    card.innerHTML = `
      <img src="${e.target.result}">
      <p>${textInput.value}</p>
    `;

    gallery.prepend(card);

    fileInput.value = "";
    textInput.value = "";
  };

  reader.readAsDataURL(file);
}
