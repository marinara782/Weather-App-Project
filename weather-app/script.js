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
        const response = await fetch(geoCodeURL);
        if (!response.ok) {
            console.log("Bad response! ", response.status);
            return;
        }

        const data = await response.json();

        if (data.length == 0) {
        console.log("Something went wrong here.");
        weatherDataSection.innerHTML = '
        <div>
            <h2>Invalid Input: "${searchInput}"</h2>
            <p>Please try again with a valid <u>city name</u>.</p>
        </div>
        ';
        return;
        } else {
            return data[0];
        }
    }

    async function getWeatherData(lon, lat) {
        const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}';

        /*
        * Define a response variable and assign it to the object returned by the fetch() function.
        */
        const response = await fetch(weatherURL);
        if(!response.ok) {
        console.log("Bad Response! ", response.status);
        return;
        }

        const data = await response.json();

        /*
        * The above statement should print an error message and return nothing if there is a problem.
        */
    }
    }
}