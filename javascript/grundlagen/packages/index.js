const { faker } = require('@faker-js/faker');

// Erzeuge einen zufälligen Benutzer
const randomUser = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  country: faker.location.country()
};

// Gib die generierten Informationen aus
console.log('Zufälliger Benutzer:');
console.log('Name:', randomUser.name);
console.log('E-Mail:', randomUser.email);
console.log('Adresse:', randomUser.address);
console.log('Stadt:', randomUser.city);
console.log('Land:', randomUser.country);