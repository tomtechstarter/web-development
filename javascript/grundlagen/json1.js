const jason = {
    key : {
        subKey : "subValue",
        subKey2 : 2,
        subKey3 : [-4, 2 ,5],
        subKey4 : {
            subsubKey : "subsubValue"
        }
    },
    key2 : "value"
}

const arr = [4,5,6];
const z = arr[0]; //4

const a = jason.key.subKey4.subsubKey; // a = "subsubValue"
const b = jason.key.subKey2;           // b = 2
const c = jason.key.subKey3;           // c = -4,2,5
const d = jason.key.subKey3[0];        // d = -4

// console.log(`a = ${a}`);
// console.log(`b = ${b}`);
// console.log(`c = ${c}`);
// console.log(`d = ${d}`);

const data = {
    obst : [
        {
            sorte : "Apfel",
            farbe : "rot",
            vegan : true,
            anzahl_stiele : 1,
            schachtel : {
                wahrheit : true
            }
        },
        {
            sorte : "Banane",
            farbe : "gelb",
            vegan : true,
            anzahl_stiele : undefined
        },
        {
            sorte : "Salami",
            farbe : "rot",
            vegan : false,
            anzahl_stiele : undefined
        },
        {
            name : "TekkLosleger",
            haarfarbe : "#050505",
            vermögen : true
        }
    ]
};

// console.log(data.obst[0].farbe); //rot
// console.log(data.obst[1]);
// console.log(data.obst[0].schachtel.wahrheit);

// console.log(data[0].sorte);

// function anonym(element){
//     console.log(element.sorte);
// }

// data.obst.forEach((element) => {
//     console.log(element.sorte);
// });



// gibt quadrat der Zahl aus
function quadroAusgabe(zahl){
    console.log(zahl * zahl);
}

// simple_arr.forEach(quadroAusgabe);
// simple_arr.forEach((zahl) => {
    //     console.log(zahl * zahl);
    // })
    
let simple_arr = [7, 4, 99];
simple_arr = simple_arr.map((zahl) => {return zahl * 3;});
console.log(simple_arr);


// console.log(data.obst.find((ele) => ele.farbe == "rot"));
// console.log(data.obst.filter((ele) => ele.farbe == "rot"));