// Die nötigen existierenden Elemente herausziehen
const submitButton = document.getElementById("submit");
const radiusInput = document.getElementById("radius");
const circleSpan = document.getElementById("circle");

// Funktionen definieren
function durchmesser(radius){
    return radius * 2;
}

function kreisSkalieren(){
    let radius = radiusInput.value;
    let d = durchmesser(radius);
    d = `${d}cm`;
    circleSpan.style.height = d;
    circleSpan.style.width = d;
}

// Funktion an Button hängen
submitButton.onclick = kreisSkalieren;