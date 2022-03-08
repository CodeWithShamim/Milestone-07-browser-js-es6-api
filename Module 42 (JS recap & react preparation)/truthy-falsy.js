const number = -555;
if (number) {
    console.log('true');
} else {
    console.log('false');
}

// ternary operator 
// const money = 1300;
// const food = money > 120 ? 'rice' : 'biscuit';
// console.log(food);

// multiple ternary operator 
const money = -1300;
const food = money > 120 ? 'rice' : money < 0 ? 'error' : 'biscuit';
console.log(food);

// shortcut number to sting=======================
// const n = 10;
// console.log(typeof n);
// const i = n + '';
// console.log(typeof i);

// shortcut sting to number=============
const n = '10';
console.log(typeof n);
const i = +n;
console.log(typeof i);

// toggle boolean 
let myB = true;
console.log(myB);
myB = !myB;
console.log(myB);