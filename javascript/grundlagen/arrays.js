// Ein Array von Früchten
const myFruit = "Banane"

const fruits = ["Apfel", myFruit, "Orange"];

let age = 25

// Hinzufügen eines Elements am Ende des Arrays
fruits.push("Erdbeere");

fruits.


// Hinzufügen eines Elements am Anfang des Arrays
fruits.unshift("Kiwi");

// Ausgabe des aktualisierten Arrays
console.log("Nach dem Hinzufügen:", fruits);

// Entfernen des letzten Elements
fruits.pop();

// Entfernen des ersten Elements
fruits.shift();

// Ausgabe des endgültigen Arrays
console.log("Nach dem Entfernen:", fruits);

// Ein einfaches Array von Zahlen
const numbers = [1, 2, 3, 4, 5];

// Iteration durch das Array und Ausgabe der Elemente
for (let i = 0; i < numbers.length; i++) {
  console.log("Element " + i + ": " + numbers[i]);
}

// Ein Array von Tieren
const animals = ["Hund", "Katze", "Pferd", "Vogel"];

// Iteration durch das Array mit for...of
for (const animal of animals) {
  console.log("Tier: " + animal);
}

