const person = {
    name: "Tim",
    hairColor: "brown"
}

console.log("Person ",person);

person.hairColor = "black";

console.log("Person with colored hairs ",person);

// Throws an error, const is readonly
person = {
    name: "Tim",
    hairColor: "brown"
}

console.log("Person with hobby ",person);