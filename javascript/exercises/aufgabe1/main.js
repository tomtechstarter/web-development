function aufgabe1(text){
    let backwardsText = [];
    // Strings sind intern Arrays von einzelnen Charaktern 
    // => Wir können die einzelnen Felder von hinten nach vorne dem backwardsText hinzufügen
    for (var i = text.length - 1; i >= 0; i--) {
        backwardsText += text[i];
    }
    return backwardsText;
}

console.log(aufgabe1("Hallo"));
console.log(aufgabe1("Lorem ipsum dolor sit amet, consectetur adipisici elit"));