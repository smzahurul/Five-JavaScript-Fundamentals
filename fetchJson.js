//JSON
const person = {
    name: 'Rahim',
    age: 25,
    salary: 1000000
};
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
console.log(dataParsed.name);

// localStorage.setItem("userId", 144);
const userId = localStorage.getItem("userId");
console.log(userId);

localStorage.setItem("person", JSON.stringify(person));
const storedPerson = localStorage.getItem("person");
console.log(storedPerson);
const persedPerson = JSON.parse(storedPerson);
console.log(persedPerson.name);

const keys = Object.keys(persedPerson);
console.log(keys);
const values = Object.values(persedPerson);
console.log(values);

//API
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));