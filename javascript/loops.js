const userObject = {
    name: "Max Mustermann"
}

Object.keys(userObject).forEach((key) => {
    console.log(`Key: ${key}, Value: ${userObject[key]}`)
})

const fruits = ["Banane", "Kiwi"]

// Klassischer For-Loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

const anzahlMA = 10

for (let i = 1; i <= anzahlMA; i++) {
   console.log('Schreibe Email an MA ' + i)
}


for (const myFruit of fruits) {
    console.log(myFruit)
}

fruits.forEach(function (myFruit, index) {
    console.log(`My Fruit from forEach: ${myFruit}`)
})

for (const key in userObject){
    console.log(`My key ${key}`)
}

function mapFunction(item,index){
    return `My ${index}. favorite fruit is ${item}`
}
const myNewResult = fruits.map(mapFunction)

console.log(`My new Result: ${myNewResult}`)


