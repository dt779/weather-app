function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "8439474f5085e5b7e56e667ca946d1df";
  
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("weatherInfo").innerHTML = "City not found.";
        return;
      }

      const temp = data.main.temp;
      const condition = data.weather[0].description;
      const location = `${data.name}, ${data.sys.country}`;

      document.getElementById("weatherInfo").innerHTML = `
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Temperature:</strong> ${temp} °C</p>
        <p><strong>Condition:</strong> ${condition}</p>
      `;
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("weatherInfo").innerHTML = "Failed to fetch data.";
    });
}
