const apiKey = 'b980f450518df4a1c30aac6c148e98a6';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
let locationInput = document.querySelector('input');
let searchButton = document.querySelector('#searchButton');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const locationElement = document.getElementById('location');
searchButton.addEventListener("click",()=>{
    const location=locationInput.value;
    console.log(location);
    if(location){
        fetchWeather(location);
    }
});
function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                locationElement.textContent= data.name;
                temperatureElement.textContent= `${Math.round(data.main.temp)}°C`;
                descriptionElement.textContent = data.weather[0].description;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
        }
    