const addItem = () => {
    const item = document.getElementById('item');
    const itemValue = item.value;

    // add to local storage 
    addProductToCart(itemValue)
    item.value = "";

}

// display data in UI----------------------------------------------------------
const display = () => {
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    const cartValue = localStorage.getItem('cart');
    const cartValueParse = JSON.parse(cartValue);
    console.log(cartValueParse);
    li.innerText = cartValueParse.iphone;
    ul.appendChild(li);
}


// add to in local storage -----------------------------------------------
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = (itemValue) => {
    const cart = getCart();
    cart[itemValue] = 1;
    // console.log(cart);
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
};