// script.js

// Define the players array and person object
const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Attach the variables to the global window object
window.players = players;
window.person = person;

// Define additional variables as needed
const team = "Sample Team";
const team1 = "Another Team";
const cap1 = "Captain";

// Attach the additional variables to the global window object
window.team = team;
window.team1 = team1;
window.cap1 = cap1;

// You can access these variables globally in other scripts or functions
