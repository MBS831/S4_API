let meteos: HTMLElement | null = document.getElementById("meteo");
let reportAcudits: { joke: string; score: number; date: string }[] = [];

//Weather
async function loadWeather() {
  const responseW = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1"
  );
  const dataW = await responseW.json();
  console.log(dataW.current.temperature_2m);
  if (meteos) {
    meteos.innerHTML = `${dataW.current.temperature_2m} °C`;
  }
}
loadWeather();

function obtenerChiste(score: number) {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  };

  fetch('https://icanhazdadjoke.com', options)
    .then((res) => res.json())
    .then((response: { joke: string }) => {
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
      } else {
        console.log('Puntuación no válida. Por favor, introduce una puntuación entre 1 y 3.');
      }
    });
}

function otroChiste() {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  };

  fetch('https://icanhazdadjoke.com', options)
    .then((res) => res.json())
    .then((response: { joke: string }) => {
      // Actualizar la interfaz con el nuevo chiste
      let chisteElement = document.getElementById('acudit');
      if (chisteElement) {
        chisteElement.innerHTML = `<h1>${response.joke}</h1>`;
      } else {
        console.log('Element with ID "acudit" not found.');
      }
    });
}


// Botones con valores de puntuación
document.getElementById('btnScore1')?.addEventListener('click', () => obtenerChiste(1));
document.getElementById('btnScore2')?.addEventListener('click', () => obtenerChiste(2));
document.getElementById('btnScore3')?.addEventListener('click', () => obtenerChiste(3));

// Botón para obtener un nuevo chiste
document.getElementById('btnOtroChiste')?.addEventListener('click', otroChiste);