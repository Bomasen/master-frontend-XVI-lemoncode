const personA = { name: "Maria", surname: "Ibáñez", country: "SPA" };
const personB = { name: "Luisa", age: 31, married: true };

const merge = (source, target) => ({ ...target, ...source });

console.log("This is merge exercise:\n",merge(personA, personB));
