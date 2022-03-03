console.log('first');
let number = 0;
const timeIntervalId = setInterval(() => {
    // number++
    // console.log(number++);
    console.log(++number);
    console.log(number);
    if (number == 3) {
        clearInterval(timeIntervalId);
    }


}, 1000);
console.log('second');