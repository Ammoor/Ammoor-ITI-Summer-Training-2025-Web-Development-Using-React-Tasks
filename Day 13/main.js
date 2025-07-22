const heading = document.getElementById("main-heading");
const paragraph = document.getElementById("description");
const itemList = document.getElementById("item-list");

document
  .getElementById("change-text-btn")
  .addEventListener("click", function () {
    heading.textContent = "Heading Changed with JavaScript!";
  });

document
  .getElementById("change-color-btn")
  .addEventListener("click", function () {
    paragraph.style.color =
      paragraph.style.color === "green" ? "black" : "green";
  });

document.getElementById("add-item-btn").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item added via JS";
  itemList.appendChild(newItem);
});
