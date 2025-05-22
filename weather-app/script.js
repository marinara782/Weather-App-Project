/*
* Writing the fetchWeather() function so that when you click
* it should fetch the weather
*/

function fetchWeather() {
    let searchInput = document.getElementById("search").value;
    const weatherDataSection = document.getElementById("weather-data");
    weatherDataSection.style.display = "block";
    const apiKey = ""; /* replaced with empty string to avoid inappropriate use. */

    /*
    * if statement that displays a custom message for empty input.
    */
    if (searchInput = "") {
    weatherDataSection.innerHTML = '
    <div>
        <h2>Empty Input!</h2>
        <p>Please try again with a valid <u> city name</u>.</p>
    </div>
    ';
    return;

    /*
    * uses the OpenWeather's API to return longitude and latitude data based on search input.
    */
    async function getLonAndLat() {
        const countryCode = 1;
        const geoCodeURL = 'https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.replace(" ", "%20")},${countryCode}&limit=1&appid=${apiKey}';
    }

    async function getWeatherData(lon, lat) {

    }
    }
}