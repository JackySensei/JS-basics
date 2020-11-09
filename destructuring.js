const movies = [["Helge Schneider", "???"],["Asterix and Obelix", "Horton hears a hu"], ["Harry Potter", "Lord of the Rings"]];

let fantasy = movies[2];
let comic = movies[1];

console.log("Fantasy ",fantasy);
console.log("Comic ",comic);

// array destructuring
[misc, comic, fantasy] = movies;

console.log("Comic films", comic);

const person = {
    name: "Hans",
    hairColor: "brown",
    hobbies: ["play soccer", "listen to music"]
}

//let hobbies = person.hobbies;
//let name = person.name;

//console.log(`${name} has hobbies ${hobbies}`);

// object destructuring

const {hobbies, name} = person;

console.log(`${name} has hobbies ${hobbies}`);

let helloWorld = "Hello World";

[firstLetter, secondLetter, ...otherLetters] = helloWorld;

console.log("First letter ",firstLetter);
console.log("Everything else ",otherLetters);
console.log("Second letter ",secondLetter);