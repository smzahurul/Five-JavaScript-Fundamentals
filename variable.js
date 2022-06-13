// variable:let,const

let money = 22;
money = 20;
const name = " Rohim ";

let isValid = true;

const person = {
    name: 'korim',
    age: 24,
    city: 'Dhaka'
}

const statement = `This Person${name}With Age${person.age}`;

//Condition
if (money > 16 && age >= 20) {
    console.log('Condition is true');
} else {
    console.log('Condition is false');
}

//array
const numbers = [31, 35, 62, 99];
const person1 = ['Rabbil', 'Hasan'];
const product = [{ name: 'laptop', price: 1000 }, { name: 'Tablet', price: 600 }];

//loop:for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
};

//function:regular ,arrow function
function add(num1, num2) {
    return num1 + num2;
}
const result = add(45, 54);

//arrow function
const fiveTimes = num => num * 5;

const add2 = (num1, num2) => num1 + num2;

const doMath = (x, y) => {
    const sum = x + y;
    return sum * 7
}