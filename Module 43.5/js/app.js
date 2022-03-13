const copy = () => {
    // alert('hello');
    const text = document.createElement('p');
    text.innerText = "Welcome to this esssssssssssnvironment";
    navigator.clipboard.writeText(text.innerText);
}