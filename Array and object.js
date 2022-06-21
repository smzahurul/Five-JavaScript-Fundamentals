//array destructuring

const numbers = [31, 35, 52, 99, 100];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = [31, 35]
const [x, y] = numbers;
// console.log(x, y);

function boxify(num1) {
    return [num1, num1 + 8]
}
const boxed = boxify(7);
console.log(boxed);

//object destructuring
const { name, age } = { id: 1, name: 'Rahim', money: 300, age: 21 };
const { money } = { id: 1, name: 'Rahim', money: 300, age: 21 };
console.log(name, age);