// Meine Lösungsidee:
// Die Buttons und Divs sind nummeriert.
// Der nötige Code unterscheidet sich nur durch die Nummer,
// also gebe ich diese dynamisch mit.
function showImage(number){
    const div = document.getElementById(`imgs-div${number}`)
    const img = document.createElement("img");
    img.src = "./cat0.jfif";

    div.appendChild(img);
}

for(let i = 1; i <= 3; i++){
    let btn = document.getElementById(`btn${i}`);
    btn.onclick = () => {showImage(i);};
}