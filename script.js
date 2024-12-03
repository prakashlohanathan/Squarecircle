// Select elements
const square = document.querySelector(".square");
const circle = document.querySelector(".circle");
const redBtn = document.getElementById("red-btn");
const blueBtn = document.getElementById("blue-btn");
const orangeBtn = document.getElementById("orange-btn");
const resetBtn = document.getElementById("reset-btn");
const customColorInput = document.getElementById("custom-color");

// Add event listeners for buttons
redBtn.addEventListener("click", () => {
    circle.style.backgroundColor = "red";
});

blueBtn.addEventListener("click", () => {
    circle.style.backgroundColor = "blue";
});

orangeBtn.addEventListener("click", () => {
    circle.style.backgroundColor = "orange";
});

resetBtn.addEventListener("click", () => {
    circle.style.backgroundColor = "white"; // Default color
});

// Add event listener for custom color input
customColorInput.addEventListener("change", () => {
    circle.style.backgroundColor = customColorInput.value;
});

