var APIKey = "3a1ea0eab5865c5368524eab91408d4f";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Sartell&appid=" + APIKey

var input = document.querySelector("#searchInput");
var search = document.querySelector("#searchButton");
search.addEventListener("click", function () {
    console.log(input.value);
    localStorage.setItem("city", input.value);


$.ajax({url: queryURL,
    method: "GET"

})

.then(function(result) {
    console.log(queryURL);
    console.log(result);
    console.log(result.main.temp)
    console.log(result.main.humidity)
    console.log(result.wind.speed);
    
})
});