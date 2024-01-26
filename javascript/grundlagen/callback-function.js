// Eine Callback-Function ist typischerweise eine Funktion,
// die als Argument in einen anderen Funktionsaufruf übergeben wird,
// um im Anschluss an diesen Aufruf ausgeführt zu werden.

function halloWelt(){
    console.log("Hallo Welt! Da bin ich wieder!\n\n");
}

console.log("\n\nKurz Weg...!");

//setTimeout verlangt eine CallbackFunction, die ausgeführt wird,
//sobald setTimeout fertig behandelt wurde (also hier: der Timer abläuft)
setTimeout(halloWelt, 3000);

//So nicht! Keinen Aufruf mitgeben.
//setTimeout(halloWelt(), 3000);
