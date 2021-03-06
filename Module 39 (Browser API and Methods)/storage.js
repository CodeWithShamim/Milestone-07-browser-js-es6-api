const addItem = () => {
    const item = document.getElementById('item');
    const itemValue = item.value;
    // console.log(itemValue);
    if (!itemValue) {
        return;
    }
    // add cart to local storage
    addCartToLocal(itemValue)
    item.value = '';
}

// place order 
const placeOrder = () => {
    ul.textContent = "";
    localStorage.removeItem('cart');
}

// display data from local storage 
const display = () => {
    const ul = document.getElementById('ul');
    const displayValues = getCart();
    for (const displayValue in displayValues) {
        const li = document.createElement('li');
        // console.log(displayValue);
        li.innerText = displayValue;
        ul.appendChild(li);
    };


};


// get value from local storage 
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
};

// add cart to local storage
const addCartToLocal = (itemValue) => {
    const cart = getCart();
    // set property and value in object 
    if (cart[itemValue]) {
        cart[itemValue] = cart[itemValue] + 1;

    } else {
        cart[itemValue] = 1;
    }
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
};

// display data from local storage 
display();