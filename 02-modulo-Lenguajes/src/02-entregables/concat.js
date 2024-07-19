const numbers = [1, 2, 3, 4, 5, 6];
const letters = ["a", "b", "c", "d", "e", "f"];

const concat = (a, b) => [...a, ...b];

console.log("This is concat exercise:\n",concat(numbers, letters));
