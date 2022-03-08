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
        <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="bg-primary my-3 text-white border-0 p-3 rounded fw-bold" onclick="getModal()">Details</button>
        <div/>
        `;

        allItem.appendChild(div);
    }
};

const getModal = () => {


    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        .then(data => showData(data.meals[0]));


};

const showData = (data) => {
    const allItem = document.getElementById('allItem');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="w-50 mx-auto">
                            <h5 class="modal-title" id="staticBackdropLabel">Details</h5>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ">
                        <h6>${data.strMeal}<h6/>
                        <img src="./images/favicon.png " alt=" ">
                        <img src="./images/favicon.png " alt=" ">
                        <img src="./images/favicon.png " alt=" ">
                        <img src="./images/favicon.png " alt=" ">
                    </div>
                    <div class="modal-footer ">
                        <button type="button " class="btn btn-secondary " data-bs-dismiss="modal ">Close</button>
                        <button type="button " class="btn btn-primary ">ok</button>
                    </div>
                </div>
            </div>
    </div>
    
    `;

    allItem.appendChild(div);
}