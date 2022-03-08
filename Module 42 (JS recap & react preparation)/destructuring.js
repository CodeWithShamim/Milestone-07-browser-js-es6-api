// 1.Array & object destructuring-------------------
const product = {
    name: 'apple13',
    seriel: [10, 20, 30, 40, 60, 70],
    quantify: 100
}

const { name, quantify, seriel } = product;
console.log(quantify);
console.log(name);
console.log(seriel);