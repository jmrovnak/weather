


var APIKey = "3a1ea0eab5865c5368524eab91408d4f";
var queryURL =  "https://api.openweathermap.org/data/2.5/weather?q=sartell&appid=" + APIKey

var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?" + "q=sartell&cnt=5&appid=" + APIKey


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
    
    let tempF = Math.trunc(result.main.temp - 273.15) * 1.80 + 32;
    console.log(tempF);

    $(".display-4").html("<h3>" + city + " Details</h3>");
    $("#temp").html("<h4>" + tempF + " &#xb0 F</h4>");
    $("#humidity").html("<h4>" + result.main.humidity + "%</h4>"); 
    $("#wind").html("<h4>" + result.wind.speed + "MPH</h4>");
    

    localStorage.setItem("City", city);

    var history = localStorage.getItem("City");

    $("#searchOne").append(history);

   })
});

$("#searchButton").on("click", function () {
    console.log("test 2");

    $.ajax ({
        url: forecastURL,
        method:"GET"
    })

    .then(function(response) {
            console.log(forecastURL);
            console.log(response);

            let tempF = Math.trunc(response.list.temp - 273.15) * 1.80 + 32;
            console.log(tempF);

            console.log(response.list[0].main.temp);

            $("#dayOne").html("<h6>" + response.list[0].main.temp + " Degrees Celsius</h6>");
            $("#dayTwo").html("<h6>" + response.list[1].main.temp + " Degrees Celsius</h6>");
            $("#dayThree").html("<h6>" + response.list[2].main.temp + " Degrees Celsius</h6>");
            $("#dayFour").html("<h6>" + response.list[3].main.temp + " Degrees Celsius</h6>");
            $("#dayFive").html("<h6>" + response.list[4].main.temp + " Degrees Celsius</h6>");
            
            
    })
})

$(window).on("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#searchButton").click();
    }
})