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
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=acaa23f8d409ee273187d2b9b0388e23&q="+$("#zip_code").val()+",US";
    console.log(queryURL);



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

    var queryURL2 = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=iOAdW7eCNCtfdlNHjxNyGQmSZ82vDYjL&city="+$("#zip_code").val();
    $.ajax({
        url: queryURL2,
        method: 'GET'
    }).done(function(response) {
        console.log(response);
        if(!response.page.totalElements){
            $("#eventdump").html("<p class=\"noresult\"> NO RESULTS FOUND.  PLEASE TRY CLOSEST MAJOR CITY.</p>")
        }
        else{

        response._embedded.events.forEach(function(event) {
            createHtml(event)



        });
    }

        console.log(response);
    });
};


weatherRequest(44114);


var createHtml = function(currEvent) {
    console.log(currEvent)
    
    var eventDiv = $("<div>");

    var eventName = $("<span>");
        eventName.text(currEvent.name);
        eventName.addClass("eventName");

    var eventUrl = $("<a>");
        eventUrl.text(currEvent.url);
        eventUrl.addClass("eventUrl");

    var eventDate = $("<span>");
        eventDate.text(currEvent.dates.start.localDate);
        eventDate.addClass("eventDate");

    var eventDump = $("#eventdump");
        eventDiv.append(eventName);
        eventDiv.append("<br>");
        eventName.append(eventUrl);
        eventUrl.append(eventDate);

    eventDump.append(eventDiv);
    
};

$(document).ready(function () {
var modal = document.getElementById('initialModal');
var btn = document.getElementById("signUp");
btn.addEventListener("click", function() {
    var modal = document.getElementById("initialModal");
    modal.style.display = "block";
});
});