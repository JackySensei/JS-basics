// ES2015 
const sayHelloEmca5 = function sayHello(name){
    console.log("Hello ",name);
}

sayHelloEmca5("Walter");

// ECMA6 
const sayHelloECMA6 = (name) => {
    console.log("Hello ",name);
    // Template String
    console.log(`Hello ${name}, how are u?`);
}

sayHelloECMA6("Anna");

const sayHelloAndGoodbye = (name, goodbyeFunction) => {
    console.log("Hello ",name);
    goodbyeFunction();
}

const goodbye = () => {
    console.log("Bye Bye");
}

sayHelloAndGoodbye("Willi", goodbye);

// function as param
sayHelloAndGoodbye("Emma", ()=> {console.log("Good night")});

// ... rest operator
const printAll = (...arguments) => {
    console.log(arguments);
}

printAll(1,2,3);
printAll(1,2);
printAll(1,2,3,4,5,6);