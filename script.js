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
  } catch (error) {
    console.error(error);
  }
}
