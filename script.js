const apikey = '72bad87abca2f465807786dced1625ed';
const api = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let search = document.getElementById("search")
let btn = document.getElementById("btn")
let weatherimage = document.querySelector("#weatherimage")
async function weather(city){
        const response = await fetch(api + city + `&appid=${apikey}`);
        let data = await response.json();

        
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%"

        if(data.weather[0].main=="Cloudy"){
            weatherimage.src= "images/cloudy.png"
        }else if(data.weather[0].main=="Clear"){
            weatherimage.src="images/sunny.png"
        }else if(data.weather[0].main=="Rain"){
            weatherimage.src = "images/rain.png"
        }else if(data.weather[0].main=="Drizzle"){
            weatherimage.src = "images/storm.png"
        }

}


btn.addEventListener('click', (event)=>{
    event.preventDefault()
    weather(search.value)
})