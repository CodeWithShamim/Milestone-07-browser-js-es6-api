const submit = () => {
    const input = document.getElementById('input');
    const inputValue = input.value;
    getValue(inputValue);
    input.value = '';
}

// check valid & unvalid 
const getValid = (validity, styleItem) => {
    const validityInfo = document.getElementById(validity);
    validityInfo.style.display = styleItem;
}

const getValue = (value) => {
    console.log(value);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        getValid('valid', 'block');
        getValid('unvalid', 'none');

    } else if (!value) {
        alert('please insert a value');
        getValid('valid', 'none');
        getValid('unvalid', 'none');
    } else {
        getValid('unvalid', 'block');
        getValid('valid', 'none');
    }

}