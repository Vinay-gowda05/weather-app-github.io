
function getWeatherData() {

    let locationName = document.getElementById("locationInput").value
    console.log("getting weather for city : " + location);
    const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=f56fbd4abb5f4e6c2fc69ce569afdebf`);
    data.then(res => res.json()).then(data => {
        document.getElementById("humid").innerHTML = "humidity " + data.main.humidity + "%";
        document.getElementById("desc").innerHTML = data.weather[0].description
        document.getElementById("temp").innerHTML = data.main.temp + "<span>&#8451;</span>"
        document.getElementById("wind").innerHTML = data.wind.speed + "m/s"
        document.getElementById("deg").innerHTML = data.wind.deg + "&deg"
        let icon = data.weather[0].icon;
        let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
        document.getElementById("icon").innerHTML = `<img src="${iconUrl}" alt="Icon">`;
    }).catch(
        console.log("cannot fetch weather")
    );

}