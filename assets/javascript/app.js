console.log("test")

//var weather = $("#addWeather")

//var zip = ""



var weatherRequest = function(zip) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=acaa23f8d409ee273187d2b9b0388e23&zip=" + zip;



    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {
        $("#city").text(response.name);
        $("#temp").text(response.main.temp);
        $("#humidity").text(response.main.humidity);
        $("#forcast").text(response.weather[0].main);

        console.log(response);
    });
};





var ticketMaster = function(event, zip) {
    
    var queryURL2 = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=iOAdW7eCNCtfdlNHjxNyGQmSZ82vDYjL&zip=" + zip;
    $.ajax({
        url: queryURL2,
        method: 'GET'
    }).done(function(response) {

            console.log(response);
        });
};


    weatherRequest(44077);


//var queryURL3 = "THIS WILL BE FANDANGO API"

//$.ajax({
//url: queryURL3,
// method: 'GET'
////  }).done(function(response) {

//  console.log(response);
// });




//$("#go").on("click", function(event)