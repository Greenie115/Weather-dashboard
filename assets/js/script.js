var userCity = 'Oslo'
var lat = 0
var lon = -0
var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=b3a3fccb2b2f17b88a35bd51a8ab9db5'
var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + userCity + '&limit=1&appid=b3a3fccb2b2f17b88a35bd51a8ab9db5'


    fetch(geoURL)
        .then(function(response){
        return response.json()
        }) 
        .then(function(data){
            console.log(data)
            var lat = data[0].lat
            var lon = data[0].lon
            console.log(lat)
            console.log(lon)
        })



    fetch(queryURL)
    .then(function(response){
    return response.json()
    }) 
    .then(function(data){
        console.log(data)
    })