const function1 = () => {
        console.log('Function 1 running');
    }
    // ---------------------------------------------

setTimeout(() => {
    console.log('Function 2 running');
}, 2000);
// -------------------------------------------------
const function3 = () => {
        console.log('Function 3 running');
    }
    // ---------------------------------------------
const function4 = () => {
        console.log('Function 4 running');
    }
    // ---------------------------------------------
const function5 = () => {
    console.log('Function 5 running');
}

// call 
function1();
function3();
function4();
function5();