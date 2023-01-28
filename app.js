const city = document.querySelector('#city')
const temperature = document.querySelector('#temperature')
const wind = document.querySelector('#wind')
const form = document.querySelector('form')
const loc = document.querySelector('#location')
const hum = document.querySelector('#humidity')
const desc = document.querySelector('#description')
const symbol = document.querySelector('#symbol')

const weather = {
    getWeather: function (loc) {
        // replace **yourAPIKey** with your openweathermap API key
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&APPID=**yourAPIKey**`)
            .then((res) => res.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data;
        const { temp, humidity } = data.main
        const { speed } = data.wind
        const { icon, description } = data.weather[0]
        city.textContent = name
        temperature.textContent = temp
        wind.textContent = speed
        desc.textContent = description
        hum.textContent = humidity
        symbol.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        loc.value = ''

    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    weather.getWeather(loc.value)
})