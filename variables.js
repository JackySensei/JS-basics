let hobbies = ["play music", "meet friends"];

console.log("My Hobbies ",hobbies);

// Add Elements to array via push
hobbies.push("watch GOT");

console.log("My new Hobbies ", hobbies);

let additionalHobbies = ["sport", "car driving"];

// Add additionalHobbies to hobbies with spread operator
hobbies = [...hobbies, ...additionalHobbies];

console.log("All my hobbies ",hobbies);

// Redeclaration works because it is not a const variable
hobbies = [1,2,3];

console.log("Nonsence ", hobbies);
