const search = () => {

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        .then(data => getData(data.meals));

};

const getData = (data) => {
    const allItem = document.getElementById('allItem');
    for (const item of data) {
        // console.log(item.strMeal);
        // console.log(item.strMealThumb);
        const div = document.createElement('div');
        div.innerHTML = `<div class='text-center my-4 bg-warning'>
       <h3 class='py-3'> Name: ${item.strMeal}<br/><h3/>
        <img src='${item.strMealThumb}'/ class='rounded img-fluid'><br/>
        <button data-bs-toggle="modal" data-bs-target="#phone-details" class="bg-primary my-3 text-white border-0 p-3 rounded fw-bold" onclick="getModal(${item.idMeal})">Details</button>
        <div/>
        `;

        allItem.appendChild(div);
    }
};

const getModal = (id) => {

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => showData(data.meals[0]));


};

const showData = (data) => {
    const modalContent = document.getElementById('modal-content');
    modalContent.setAttribute('id', 'modal-content');

    const div = document.createElement('div');
    div.className = "";
    div.innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title" id="phone-details">${data.strMeal}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src='${data.strMealThumb}' class='img-fluid' />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
    
    `;
    modalContent.innerHTML = '';
    modalContent.appendChild(div);

}