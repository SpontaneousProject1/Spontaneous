console.log("test")

//var weather = $("#addWeather")

//var zip = ""

$("#go").on("click", function(event) {
    var zipInput = $("#zip_code").val();
    if (zipInput) {
        weatherRequest(zipInput);
        ticketMaster(zipInput);
        $("#eventdump").html("")


    }


    return false


});

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





var ticketMaster = function(zip) {

    var queryURL2 = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=iOAdW7eCNCtfdlNHjxNyGQmSZ82vDYjL&radius=50&units=miles&postalCode=" + zip;
    $.ajax({
        url: queryURL2,
        method: 'GET'
    }).done(function(response) {
        console.log(response);
        response._embedded.events.forEach(function(event) {
            createHtml(event)



        });

        console.log(response);
    });
};


 weatherRequest(44106);


var createHtml = function(currEvent) {
    console.log(currEvent)
    var eventDump = $("#eventdump")
    var eventName = $("<p>").text(currEvent.name)
    var eventUrl =$("<p>").html("<a target=\"_blank\" href="+currEvent.url+">CLICK ME!</a>")
    var eventDate =$("<p>").text(currEvent.dates.start.localDate)

    eventDump.append("<div>" + eventName.html() + " " + eventDate.html() + " " + eventUrl.html() + "</div>")

};




//var queryURL3 = "THIS WILL BE FANDANGO API"

//$.ajax({
//url: queryURL3,
// method: 'GET'
////  }).done(function(response) {

//  console.log(response);
// });