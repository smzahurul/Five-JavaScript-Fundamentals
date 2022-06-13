const numbers = [31, 35, 62, 99];
const person1 = ['Rabbil', 'Hasan'];
const products = [
    { id: 1, name: 'laptop', price: 1000 },
    { id: 2, name: 'Tablet', price: 600 },
    { id: 3, name: 'Smart Watch', price: 200 },
    { id: 4, name: 'Phone', price: 700 }
];

//Map
const names = products.map(product => product.name);
// console.log(names);
const prices = products.map(price => price.price);
console.log(prices);

const prices2 = products.map(price => {
    //do some work
    return price.price;
});


//filter

const cheaper = products.filter(price => price.price < 1000);
console.log(cheaper);
//remove an item

const remaining = products.filter(product => product.id != 3);
console.log(remaining);
const remaining1 = products.filter(product => product.name === 'Phone');
console.log(remaining1);