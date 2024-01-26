function genNumber(){
    let randomNumber = Math.random() * 10;
    randomNumber = 3;
    let randomInt = Math.floor(randomNumber);
    return randomInt;
}

function add(a, b){
    return a + b;
}

let sum = add(genNumber(), genNumber())
console.log(sum)