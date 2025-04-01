// Get the display input element
const display = document.getElementById("display");

// Store the current input and result
let currentInput = "";
let result = null;

// Add event listeners to each button
document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("equals").addEventListener("click", calculateResult);
document
  .getElementById("add")
  .addEventListener("click", () => appendToDisplay("+"));
document
  .getElementById("subtract")
  .addEventListener("click", () => appendToDisplay("-"));
document
  .getElementById("multiply")
  .addEventListener("click", () => appendToDisplay("*"));
document
  .getElementById("divide")
  .addEventListener("click", () => appendToDisplay("/"));
document
  .getElementById("decimal")
  .addEventListener("click", () => appendToDisplay("."));
document
  .getElementById("zero")
  .addEventListener("click", () => appendToDisplay("0"));
document
  .getElementById("one")
  .addEventListener("click", () => appendToDisplay("1"));
document
  .getElementById("two")
  .addEventListener("click", () => appendToDisplay("2"));
document
  .getElementById("three")
  .addEventListener("click", () => appendToDisplay("3"));
document
  .getElementById("four")
  .addEventListener("click", () => appendToDisplay("4"));
document
  .getElementById("five")
  .addEventListener("click", () => appendToDisplay("5"));
document
  .getElementById("six")
  .addEventListener("click", () => appendToDisplay("6"));
document
  .getElementById("seven")
  .addEventListener("click", () => appendToDisplay("7"));
document
  .getElementById("eight")
  .addEventListener("click", () => appendToDisplay("8"));
document
  .getElementById("nine")
  .addEventListener("click", () => appendToDisplay("9"));

// Function to clear the display
function clearDisplay() {
  currentInput = "";
  display.value = "";
}

// Function to append a character (number or operator) to the display
function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

// Function to calculate the result
function calculateResult() {
  try {
    result = eval(currentInput); // Use eval to calculate the result
    display.value = result;
    currentInput = result; // Store the result for further operations
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}
