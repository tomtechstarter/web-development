// Variablen und Datentypen
const myName = "John";
let age = 25;

// Konstanten
const isStudent = true;
// Bedingungen
if (age >= 18) {
  console.log(myName + " ist volljährig.");
}  else {
  console.log(myName + " ist volljährig.");
}

// Schleifen
for (let i = 0; i < 3; i++) {
  console.log("Schleife: " + i);
}


// Funktionen
function greet(person) {
  const greetingText =  "Hallo, " + person + "!" + " und das Alter ist " + age;
  return greetingText 
}


console.log(greet(myName));
