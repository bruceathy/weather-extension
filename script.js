const weather = document.getElementById("weather");

getWeather();

async function getWeather() {
  const url =
    "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=fu5asOocMfxPFktgYPq5GmqBcnuvEDX2";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    let weatherEl = "";
    for (let day of result.daily.data) {
      weatherEl += `
      <h3>${day.location.lat}</h3>`;
      console.log(day);
    }
    weather.innerHTML = weatherEl;
  } catch (error) {
    console.error(error);
  }
}
