let btnSearch =
 document.getElementById("btn-search");
let weatherInfo = document.getElementById("weather-info");
let input = document.getElementById("input");

async function fetchWeather(country) {
    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=eae3b612980b7423e2c96a3bd7345618`
    );

    let data = await response.json();
    console.log(data);

    weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <h1>${data.main.temp} C</h1>
        <p class="clear-sky">${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} km/h</p>
    `;
}

btnSearch.addEventListener("click", function () {
    fetchWeather(input.value);
});