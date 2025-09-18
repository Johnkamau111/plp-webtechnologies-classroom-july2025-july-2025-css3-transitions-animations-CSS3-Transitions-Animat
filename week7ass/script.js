// =====================================================
// Part 2: Functions — Scope, Parameters & Return Values
// =====================================================

// Function that calculates square
function square(num) {
  return num * num; // returns a value
}
function showSquare(num) {
  const result = square(num); // local scope
  document.getElementById("functionResult").textContent =
    `The square of ${num} is ${result}`;
}

// Function to add numbers
function add(a, b) {
  return a + b;
}
function showSum(a, b) {
  const result = add(a, b);
  document.getElementById("functionResult").textContent =
    `${a} + ${b} = ${result}`;
}

// =====================================================
// Part 3: Combining CSS Animations with JavaScript
// =====================================================

// Trigger animation on the yellow box
const box = document.getElementById("animatedBox");
const animateBtn = document.getElementById("triggerAnimation");
animateBtn.addEventListener("click", () => {
  box.classList.add("animate");
  setTimeout(() => {
    box.classList.remove("animate"); // reset after 1s
  }, 1000);
});

// Modal logic
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("toggleModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
