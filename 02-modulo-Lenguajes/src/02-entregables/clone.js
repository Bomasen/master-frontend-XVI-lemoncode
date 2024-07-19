const person = { name: "Maria", surname: "Ibáñez", country: "SPA" };

const clone = (source) => {
  const copy = { ...source };
  return copy;
};

console.log("This is clone exercise:\n", clone(person));
