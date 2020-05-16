function getAllProducts() {
    let results = document.getElementById("main");
    let url = '/products';
    let settings = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        }
    };
    fetch(url, settings)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(response.statusText);
        })
        .then(responseJSON => {

        })
}

function init() {
    getAllProducts();
}

init();