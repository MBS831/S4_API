"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d;
let meteos = document.getElementById("meteo");
let reportAcudits = [];
//Weather
function loadWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const responseW = yield fetch("https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1");
        const dataW = yield responseW.json();
        console.log(dataW.current.temperature_2m);
        if (meteos) {
            meteos.innerHTML = `${dataW.current.temperature_2m} °C`;
        }
    });
}
loadWeather();
function obtenerChiste(score) {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    fetch('https://icanhazdadjoke.com', options)
        .then((res) => res.json())
        .then((response) => {
        // Verificar la puntuación
        if (score >= 1 && score <= 3) {
            // Añadir el chiste al reportAcudits con la información necesaria
            reportAcudits.push({
                joke: response.joke,
                score: score,
                date: new Date().toISOString()
            });
            // Mostrar por consola el contenido actualizado del array
            console.log(reportAcudits);
        }
        else {
            console.log('Puntuación no válida. Por favor, introduce una puntuación entre 1 y 3.');
        }
    });
}
function otroChiste() {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    fetch('https://icanhazdadjoke.com', options)
        .then((res) => res.json())
        .then((response) => {
        // Actualizar la interfaz con el nuevo chiste
        let chisteElement = document.getElementById('acudit');
        if (chisteElement) {
            chisteElement.innerHTML = `<h1>${response.joke}</h1>`;
        }
        else {
            console.log('Element with ID "acudit" not found.');
        }
    });
}
// Botones con valores de puntuación
(_a = document.getElementById('btnScore1')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => obtenerChiste(1));
(_b = document.getElementById('btnScore2')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => obtenerChiste(2));
(_c = document.getElementById('btnScore3')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => obtenerChiste(3));
// Botón para obtener un nuevo chiste
(_d = document.getElementById('btnOtroChiste')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', otroChiste);
