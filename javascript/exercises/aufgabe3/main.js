function passwordGen(length) {
    // Das Passwort sollte eine Kombination aus Buchstaben, Zahlen und Sonderzeichen enthalten
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%^&*()_+-=[]{};:,.";

    let password = ""; //Passwort initialisieren, erstmal leer

    // "length"-mal ein zufälliges Zeichen wählen und dem Passwort beifügen
    for (let i = 0; i < length; i++) {
        //Zufälligen Index ermitteln zwischen 0 und Anzahl der gültigen Zeichen
        let randomNumber = Math.random() * chars.length; //ergibt Dezimalzahl
        let randomInt = Math.floor(randomNumber); //abrunden
        password += chars[randomInt]; //zufälliges Zeichen anhängen
    }

    return password;
}

// Passwort mit 8 Zeichen ausgeben
console.log(passwordGen(8));
