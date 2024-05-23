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
      switch (day.text) {
        case "Partly Cloudy":
          weatherEl += `
      <div class="day">
        <h3>${day.day}</h3>
        <i class="fas fa-cloud" style="color: #ffffff;"></i>
        <p>${day.text}</p>
        <p>${day.high}°C / ${day.low}°C</p>
      </div>`;
          weather.innerHTML = weatherEl;
          break;
        case "Mostly Cloudy":
          weatherEl += `
      <div class="day">
        <h3>${day.day}</h3>
        <i class="fas fa-cloud" style="color: #ffffff;"></i>
        <p>${day.text}</p>
        <p>${day.high}°C / ${day.low}°C</p>
      </div>`;
          weather.innerHTML = weatherEl;
          break;
        case "Cloudy":
          weatherEl += `
      <div class="day">
        <h3>${day.day}</h3>
        <i class="fas fa-cloud" style="color: #ffffff;"></i>
        <p>${day.text}</p>
        <p>${day.high}°C / ${day.low}°C</p>
      </div>`;
          weather.innerHTML = weatherEl;
          break;
        case "Mostly Sunny":
          weatherEl += `
      <div class="day">
        <h3>${day.day}</h3>
        <i class="fas fa-sun" style="color: #ffae00;"></i>
        <p>${day.text}</p>
        <p>${day.high}°C / ${day.low}°C</p>
      </div>`;
          weather.innerHTML = weatherEl;
          break;
        case "Sunny":
          weatherEl += `
      <div class="day">
        <h3>${day.day}</h3>
        <i class="fas fa-sun" style="color: #ffae00;"></i>
        <p>${day.text}</p>
        <p>${day.high}°C / ${day.low}°C</p>
      </div>`;
          weather.innerHTML = weatherEl;
          break;
        case "Clear":
          weatherEl += `
      <div class="day">
        <h3>${day.day}</h3>
        <i class="fas fa-sun" style="color: #ffae00;"></i>
        <p>${day.text}</p>
        <p>${day.high}°C / ${day.low}°C</p>
      </div>`;
          weather.innerHTML = weatherEl;
          break;
        case "Rain":
          weatherEl += `
      <div class="day">
        <h3>${day.day}</h3>
        <i class="fa-solid fa-cloud-rain" style="color: #c7c7c7;"></i>
        <p>${day.text}</p>
        <p>${day.high}°C / ${day.low}°C</p>
      </div>`;
          weather.innerHTML = weatherEl;
          break;
      }
    }
  } catch (error) {
    console.error(error);
  }
}
