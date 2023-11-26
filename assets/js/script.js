var userCity = 'york'
var lat = 0
var lon = 0
var forecastDays = 5 //for creating a an array of days to display on the page
var dailyForecastDiv = document.getElementById('dailyForecast')
var weatherDayDiv = document.getElementsByClassName('weatherDay')
var weatherDateLi = document.getElementsByClassName('date')
var weather

var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + userCity + '&limit=1&appid=b3a3fccb2b2f17b88a35bd51a8ab9db5'


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

function cityData() {
    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=b3a3fccb2b2f17b88a35bd51a8ab9db5&units=metric'

    fetch(queryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            var temp = data.list[0].main.temp
            var wind = data.list[0].wind.speed
            var icon = data.list[0].weather[0].icon
            var humidity = data.list[0].main.humidity
            for(i = 0; i < forecastDays; i++){
                weatherDateLi[i].innerText = getDate(i)
                function getDate() {
                    var dt = new Date();
                    dt.setDate(dt.getDate() + i);
                    var stringDt = JSON.stringify(dt)
                    var day = stringDt.slice(9, 11)
                    var month = stringDt.slice(6 ,8)
                    var year = stringDt.slice(1, 5)
                    // console.log(stringDt.slice(1, 11));
                   return day + '-' + month + '-' + year
                };
            }
        })
    }
    



