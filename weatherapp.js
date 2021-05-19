var city = "chicago"
var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=c636611a9c0c943c25393d1c2fdcf4bc"
var citySearch = document.getElementById("city-search")

function populateCityWeather(e) {
    e.preventDefault();
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=c636611a9c0c943c25393d1c2fdcf4bc"
    console.log("did it work?", citySearch)
    fetch(queryUrl)
        .then(function (response) { return response.json() })
        .then(function (data) {
            console.log(data)
        })
}

document.getElementById("searchBtn").addEventListener("click", populateCityWeather)