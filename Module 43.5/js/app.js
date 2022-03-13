const copy = () => {
    // alert('hello');
    const text = document.createElement('p');
    text.innerText = "Welcome";
    navigator.clipboard.writeText(text.innerText);
    console.log(text);
    alert(`successfully copy this  "${text.innerText}"  text`)
}