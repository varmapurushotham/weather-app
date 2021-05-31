var gridOneElement = document.querySelector('.grid-one')
var weatherIconElement = document.querySelector('.weather-icon')
var weatherTempElement = document.querySelector('.weather-temp p')
var weatherCityElement = document.querySelector('.weather-city')
var button = document.querySelector('#getweather')
var weather = {};

gridOneElement.addEventListener('keyup', function(searchData) {
    console.log(searchData)
    getWeatherData();
})

function getWeatherData() {
    let key = '55050af5ecfe3f8c6fedec77a82bbad3';
    let getWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=` + gridOneElement.value + `&appid=${key}&units=metric`;

    fetch(getWeatherURL)
        .then(response => {
            let data = response.json();
            return data;
        })
        .then(data => {
            weather.temperature = data.main.temp
            weather.description = data.weather[0].description
            weather.iconId = data.weather[0].main
            weather.city = data.name
            weather.country = data.sys.country
            console.log(data)
        })
        .then(function () {
            displayWeather();
        })
}

function displayWeather() {
    weatherIconElement.innerHTML = `<img src="images/${weather.iconId}.jpg"/>`;
    weatherTempElement.innerHTML = `${weather.temperature} <span>C </span>(${weather.description})`;
    weatherCityElement.innerHTML = `<p>${weather.city}, ${weather.country}</p>`;
}
