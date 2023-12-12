"use strict";
function obtenerChiste() {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    fetch('https://icanhazdadjoke.com', options)
        .then((res) => res.json())
        .then(response => console.log(response.joke));
}
obtenerChiste();
function otroChiste() {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    fetch('https://icanhazdadjoke.com', options)
        .then((res) => res.json())
        .then(response => {
        let chisteElement = document.getElementById('acudit');
        chisteElement.innerHTML = `<h1>${response.joke}</h1>`;
    });
}
