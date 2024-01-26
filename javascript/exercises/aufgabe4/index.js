const btn = document.getElementById("btn");

function changeColorOnPress(){
    //ändert Farbe zu Rot
    btn.style.backgroundColor = "red";
}

//Funktion für Bonusaufgabe
function changeColorBonus(){
    // Alle möglichen Zeichen für eine Farbe
    const bonusChars = "0123456789abcdef";

    // Optional: Geschachelte Funktion, weil nur hier gebraucht
    function randomChar(){
        let rndmNumber = Math.random() * 16; //Math.random() gibt Zahl zwischen 0 und 1 aus.
        let rndmInt = Math.floor(rndmNumber); //Abrunden
        let rndmChar = bonusChars[rndmInt]; //Charakter wählen
        return rndmChar;
    }

    let rndmColor = "#"; //Farbe beginnt mit "#" in Hexadezimal-Schreibweise

    // Farbe muss aus 6 zufälligen Charaktern bestehen, z.B. #789abc
    for(let i = 0; i < 6; i++){
        rndmColor += randomChar();
    }
    
    // Farbe einsetzens
    btn.style.backgroundColor = rndmColor;
}

//btn.onclick = changeColorOnPress;   // Normal
btn.onclick = changeColorBonus;     // Bonusaufgabe