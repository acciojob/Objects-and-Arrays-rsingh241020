// Define the players array and person object
const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the players array using the variable team
const team = players;

// Create a copy of the players array using the variable team1
const team1 = [...players];

// Create a copy of the person object using the variable cap1
const cap1 = { ...person };

// Attach the variables to the global window object
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
