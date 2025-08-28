// --- Part 1: Variable Declarations and Conditionals ---
let greeting;
let hour = new Date().getHours(); // Get current hour

if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

document.getElementById("variableOutput").innerText = `Greeting based on time: ${greeting}`;

// --- Part 2: Custom Functions ---

// Function 1: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function 2: Check if number is even
function isEven(num) {
  return num % 2 === 0;
}

let sumResult = addNumbers(5, 7);
let evenCheck = isEven(sumResult);

document.getElementById("functionOutput").innerText = 
  `Sum of 5 and 7 is ${sumResult}. Is sum even? ${evenCheck}`;

// --- Part 3: Loop Examples ---

// Example 1: Numbering from 3 to 9
let loop1Output = '';
for (let k = 3; k <= 9; k++) {
  loop1Output += `Number: ${k}\n`;
}

// Example 2: Loop through an array of fruits
const fruits = ["orange", "mango", "banana", "pawpaw"];
let loop2Output = '';
for (let fruit of fruits) {
  loop2Output += `I love ${fruit}\n`;
}

document.getElementById("loopOutput").innerText = loop1Output + '\n' + loop2Output;

// --- Part 4: DOM Interactions ---

// 1. Change text content of a div when button clicked
document.getElementById("btnChangeText").addEventListener("click", function() {
  document.getElementById("domOutput").innerText = "Text changed by button click!";
});

// 2. Add new item to list when button clicked
document.getElementById("btnAddListItem").addEventListener("click", function() {
  const ul = document.getElementById("itemList");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${ul.children.length + 1}`;
  ul.appendChild(newItem);
});

// 3. Change the background color of domOutput div
document.getElementById("domOutput").style.backgroundColor = "lightgreen";
