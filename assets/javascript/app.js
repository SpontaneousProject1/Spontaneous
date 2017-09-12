$(document).ready(
    function() {


    });
console.log("test")

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDiXtIOye3J5wuY1rBxqb-dPWJLpn7AL10",
    authDomain: "spontaneous-73a1d.firebaseapp.com",
    databaseURL: "https://spontaneous-73a1d.firebaseio.com",
    projectId: "spontaneous-73a1d",
    //storageBucket: "",
    messagingSenderId: "1095990185424"
};
firebase.initializeApp(config);

var cities= []

var city = firebase.database();

 var dataLogToPage = function(){
    for (var i = 0; i <cities.length; i++) {
       cities[i]

      var buttons = $("<button>").text(cities[i])
      $("#recentCities").


    }


}


city.on("value",function(event){
    $("#recentCities").reset();
    for (var i = 0; i <cities.length; i++) {
       cities[i]

      var buttons = $("<button>").text(cities[i])
      $("#recentCities").append(buttons);

}
});

$("#go").on("click", function(event) {
    var zipInput = $("#zip_code").val();
    if (zipInput) {
        weatherRequest(zipInput);
        ticketMaster(zipInput);
        $("#eventdump").html("");
        var cityData = $("#zip_code").val().trim();
        console.log(cityData);
        cities.push(cityData);


    }

     city.ref().set(cities)


    return false


});

var weatherRequest = function(zip) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=acaa23f8d409ee273187d2b9b0388e23&q=" + $("#zip_code").val() + ",US";
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

    var queryURL2 = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=iOAdW7eCNCtfdlNHjxNyGQmSZ82vDYjL&city=" + $("#zip_code").val();
    $.ajax({
        url: queryURL2,
        method: 'GET'
    }).done(function(response) {
        console.log(response);
        if (!response.page.totalElements) {
            $("#eventdump").html("<p class=\"noresult\"> NO RESULTS FOUND,PLEASE TRY CLOSEST MAJOR CITY</p>")
        } else {

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
    var eventDump = $("#eventdump");

    var eventName = $("<li>").text(currEvent.name);
    $("li").addClass("important");

    var eventUrl = $("<p>").html("<a target=\"_blank\" href=" + currEvent.url + ">CLICK ME!</a>");

    var eventDate = $("<p>").text(currEvent.dates.start.localDate);

    eventDump.append("<div>" + eventName.html() + " " + eventDate.html() + " " + eventUrl.html() + "</div>")

};



// var queryURL3 = FANDANGO API

// $.ajax({
//     url: queryURL3,
//     method: 'GET'
// }).done(function(response) {

//     console.log(response);
// });