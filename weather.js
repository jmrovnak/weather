



var APIKey = "3a1ea0eab5865c5368524eab91408d4f";
var queryURL =  "https://api.openweathermap.org/data/2.5/weather?" +
"q=Sartell&appid=" + APIKey;

var input = document.querySelector("#searchInput");
var search = document.querySelector("#searchButton");


$("#searchButton").on("click", function () {
    var city = $("#searchInput").val();
    console.log("test");
    console.log(city);


$.ajax ({
    url: queryURL,
    method: "GET"
})

.then(function(result) {
    console.log(queryURL);
    console.log(result);
    console.log(result.main.temp);
    console.log(result.main.humidity);
    console.log(result.wind.speed);
    
    var tempF = (result.main.temp - 273.15) * 1.80 + 32;
    console.log(tempF);

    $(".display-4").html("<h3>" + city + " Details</h3>");
    $("#temp").html("<h4>" + result.main.temp + " Degrees Celsius</h4>");
    $("#humidity").html("<h4>" + result.main.humidity + "%</h4>"); 
    $("#wind").html("<h4>" + result.wind.speed + "MPH</h4>");
    

    localStorage.setItem("City", city);

    var history = localStorage.getItem("City");

    $("#searchOne").append(history);



    
  
})
});

