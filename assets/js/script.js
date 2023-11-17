var userCity = 'paris'
var lat = 0
var lon = -0
// var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=b3a3fccb2b2f17b88a35bd51a8ab9db5'
var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + userCity + '&limit=1&appid=b3a3fccb2b2f17b88a35bd51a8ab9db5'


    fetch(geoURL)
        .then(function(response){
        return response.json()
        }) 
        .then(function(data){
            // console.log(data)
            lat = data[0].lat
            lon = data[0].lon
            var cityName = data[0].name
            console.log(lat)
            console.log(lon)
            console.log(cityName)
            cityData()
        })
        
  function cityData(){
    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=b3a3fccb2b2f17b88a35bd51a8ab9db5&units=metric'

      fetch(queryURL)
        .then(function(response){
        return response.json()
        }) 
        .then(function(data){
            console.log(data)
        })
  }


