const heading = document.getElementById("main-heading");
const paragraph = document.getElementById("description");
const itemList = document.getElementById("item-list");
const changeTextBtn = document.getElementById("change-text-btn");
const changeColorBtn = document.getElementById("change-color-btn");
const addItemBtn = document.getElementById("add-item-btn");

changeTextBtn.addEventListener("click", function () {
  heading.textContent = "Heading Changed with JavaScript!";
});

changeColorBtn.addEventListener("click", function () {
  paragraph.style.color = paragraph.style.color === "green" ? "black" : "green";
});

addItemBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item added via JS";
  itemList.appendChild(newItem);
});

heading.addEventListener("click", () => {
  heading.classList.toggle("highlight");
});

paragraph.addEventListener("dblclick", () => {
  alert("You double-clicked the paragraph!");
});

const removeItemBtn = document.createElement("button");
removeItemBtn.textContent = "Remove Last Item";
removeItemBtn.style.margin = "5px";
document.body.appendChild(removeItemBtn);

removeItemBtn.addEventListener("click", () => {
  const items = itemList.querySelectorAll("li");
  if (items.length > 0) {
    itemList.removeChild(items[items.length - 1]);
  }
});

itemList.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.backgroundColor = "#f0f0f0";
  }
});

itemList.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.backgroundColor = "";
  }
});

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Type something...";
input.style.margin = "5px";
document.body.appendChild(input);

input.addEventListener("input", () => {
  console.log("User typed:", input.value);
});

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.style.margin = "5px";
document.body.appendChild(resetBtn);

resetBtn.addEventListener("click", () => {
  heading.textContent = "Welcome to DOM Manipulation";
  heading.classList.remove("highlight");
  paragraph.textContent =
    "Click the buttons below to see DOM changes in action.";
  paragraph.style.color = "black";
  itemList.innerHTML = "<li>First item</li><li>Second item</li>";
  input.value = "";
});
