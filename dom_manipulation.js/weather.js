document.querySelector('.load').addEventListener('click', loadweather)

async function loadweather() {
    const details = document.querySelector('.details')
    details.textContent = "loading..."
    
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=24.8607&longitude=67.0011&current_weather=true")
    const data = await response.json()

    const {temperature, windspeed} = data.current_weather

    document.querySelector(".temp").textContent = "Temperature " + temperature + "%"
    document.querySelector(".wind").textContent= "windspeed " + windspeed 

    details.textContent = ""
}
