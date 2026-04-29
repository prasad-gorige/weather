async function getWeather() {
    const city = document.getElementById("city").value;

    const apiKey = "49f6cbb953397d331f9fa4286e7d1f8d"; // put your API key here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"49f6cbb953397d331f9fa4286e7d1f8d"}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

        if (data.cod === 200) {
            document.getElementById("result").innerHTML = `
                <h2>${data.name}</h2>
                <p>🌡 Temp: ${data.main.temp} °C</p>
                <p>🌥 Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById("result").innerHTML = "❌ City not found";
        }

    } catch (error) {
        document.getElementById("result").innerHTML = "⚠ Error";
    }
}