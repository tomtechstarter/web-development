
const user1 = {
    name: "Max Mustermann",
    age: 30
}

const user2 = {
    age: 30
}

function returnNameFromUser(userObject) {
    try {
        if(userObject['name'] === undefined){
            throw new Error('Name ist nicht hinterlegt')
        }
        return userObject['name']
    } catch (e) {
        console.error(e.message)
        return 'Name not defined'
    }

}

console.log(`Name von Nutzer 1: ${returnNameFromUser(user1)}`)
console.log(`Name von Nutzer 2: ${returnNameFromUser(user2)}`)