var userCity = document.getElementById('userCity')
var lat = 0
var lon = 0
var forecastDays = 5
var dailyForecastDiv = document.getElementById('dailyForecast')
var weatherDayDiv = document.getElementsByClassName('weatherDay')
var weatherDateLi = document.getElementsByClassName('date')
var weatherTempLi = document.getElementsByClassName('temp')
var weatherWindSpeedLi = document.getElementsByClassName('windSpeed')
var weatherHumidityLi = document.getElementsByClassName('humidity')
var searchBtn = document.getElementById('searchBtn')
var currentDayHeader = document.getElementById('currentDayHeder')


function getUserCity(){
    var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + userCity.value + '&limit=1&appid=b3a3fccb2b2f17b88a35bd51a8ab9db5'
    fetch(geoURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            lat = data[0].lat
            lon = data[0].lon
            var cityName = data[0].name
            cityData()
        })
}

searchBtn.addEventListener('click', getUserCity)


function cityData() {
    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&cnt=5&appid=b3a3fccb2b2f17b88a35bd51a8ab9db5&units=metric'

    if(!userCity){
        weatherDateLi.innerText = ''
        weatherWindSpeedLi.innerText = ''
        weatherHumidityLi.innerText = ''
    }
    fetch(queryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            for (i = 0; i < forecastDays; i++) {
                weatherDateLi[i].innerText = 'Date: ' + getDate(i)
                weatherWindSpeedLi[i].innerText = 'Wind Speed: ' + data.list[i].wind.speed
                weatherHumidityLi[i].innerText = 'Humidity: ' + data.list[i].main.humidity + '%'
                weatherTempLi[i].innerText = 'Temp: ' + data.list[i].main.temp + 'C'
                function getDate() {
                    var dt = new Date();
                    dt.setDate(dt.getDate() + i);
                    var stringDt = JSON.stringify(dt)
                    var day = stringDt.slice(9, 11)
                    var month = stringDt.slice(6, 8)
                    var year = stringDt.slice(1, 5)
                    return day + '-' + month + '-' + year
                };

            }
            currentDayHeader.innerText = userCity.value
        })
}




