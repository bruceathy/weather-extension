const weather = document.getElementById("weather");
const city = document.getElementById("city");
const country = document.getElementById("country");

getWeather();
async function getWeather() {
  const url =
    "https://yahoo-weather5.p.rapidapi.com/weather?lat=37.372&long=-122.038&format=json&u=f";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    city.textContent = `${result.location.city}, ${result.location.region}`;
    country.textContent = `${result.location.country}`;

    let weatherEl = "";
    for (let day of result.forecasts) {
      weatherEl += `
      <div class="day">
        <h3>${day.day}</h3>
        <p>${day.text}</p>
        <p>${day.high}°C / ${day.low}°C</p>
      </div>`;

      weather.innerHTML = weatherEl;
    }
  } catch (error) {
    console.error(error);
  }
}
