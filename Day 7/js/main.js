let greetingElement = document.querySelector(".hero h1");
let currentHour = new Date().getHours();

if (currentHour < 12) {
  greetingElement.textContent = "صباح الخير! 👋";
} else if (currentHour < 18) {
  greetingElement.textContent = "مساء الخير! ☀️";
} else {
  greetingElement.textContent = "مساء الخير! 🌙";
}

let links = document.querySelectorAll(".about a");
console.log("روابط خارجية:");
for (let i = 0; i < links.length; i++) {
  console.log(links[i].href);
}

let contactForm = document.querySelector("form");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("🎉 تم إرسال رسالتك بنجاح!");
});

let backgroundSection = document.querySelector(".background-section");
backgroundSection.addEventListener("click", function () {
  let colors = ["#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd"];
  let randomIndex = Math.floor(Math.random() * colors.length);
  backgroundSection.style.backgroundColor = colors[randomIndex];
});

let serviceBoxes = document.querySelectorAll(".service-box");
let count = 0;
for (let box of serviceBoxes) {
  count++;
}
console.log("عدد الخدمات المقدمة: " + count);
