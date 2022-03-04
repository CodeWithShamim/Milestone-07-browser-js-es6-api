const alertButton = () => {
    alert("Hey! I am alert button.");
};
const confirmButton = () => {
    const confirmResult = confirm("Hey! I am confirm button.");
    alert(confirmResult);
    if (confirmResult === true) {
        alert("It's ok!")
    }
};
const promptButton = () => {
    const promptResult = prompt("Hey! I am prompt button.");
    alert(promptResult);
};