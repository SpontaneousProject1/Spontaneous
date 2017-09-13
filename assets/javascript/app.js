<<<<<<< HEAD
$(document).ready(
    function() {


    });
=======
var config = {
    apiKey: "AIzaSyAjKQY64wTJYgWJCwi9pOc4l5dPyrXWGKE",
    authDomain: "spontaneous-f0965.firebaseapp.com",
    databaseURL: "https://spontaneous-f0965.firebaseio.com",
    projectId: "spontaneous-f0965",
    storageBucket: "spontaneous-f0965.appspot.com",
    messagingSenderId: "755574837356"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

>>>>>>> 45bd559f534c11b017c00ec927d02d6286313b80
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


var city = firebase.database();

$("#go").on("click", function(event) {
    var zipInput = $("#zip_code").val();
    if (zipInput) {
        weatherRequest(zipInput);
        ticketMaster(zipInput);
        $("#eventdump").html("");
        var cityData = $("#zip_code").val().trim();
        console.log(cityData);
        city.ref().push(cityData);

    }

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
<<<<<<< HEAD
            $("#eventdump").html("<p class=\"noresult\"> NO RESULTS FOUND,PLEASE TRY CLOSEST MAJOR CITY</p>")
        } else {

            response._embedded.events.forEach(function(event) {
                createHtml(event)



=======
            $("#eventdump").html("<p class=\"noresult\"> Your search returned no responses.  Please choose the closest major city.</p>")
        } else {

            response._embedded.events.forEach(function(event) {
                createHtml(event)
>>>>>>> 45bd559f534c11b017c00ec927d02d6286313b80
            });
        }

        console.log(response);
    });
};

weatherRequest(44114);

var createHtml = function(currEvent) {
    console.log(currEvent)
<<<<<<< HEAD
    var eventDump = $("#eventdump");

    var eventName = $("<li>").text(currEvent.name);
    $("li").addClass("important");

    var eventUrl = $("<p>").html("<a target=\"_blank\" href=" + currEvent.url + ">CLICK ME!</a>");

    var eventDate = $("<p>").text(currEvent.dates.start.localDate);
=======
>>>>>>> 45bd559f534c11b017c00ec927d02d6286313b80

    var eventDiv = $("<ul>");
    eventDiv.addClass("card");
    // eventDiv.addClass("clearFix");

    var eventName = $("<li>");
    eventName.text(currEvent.name);
    eventName.addClass("eventName");

    var eventUrl = $("<li>");
    eventUrl.text(currEvent.url);
    eventUrl.addClass("eventUrl");
    eventUrl.html("<a target=\"_blank\" href=" + currEvent.url + ">Click Here for Tickets!</a>");

    var eventDate = $("<li>");
    eventDate.text(currEvent.dates.start.localDate);
    eventDate.addClass("eventDate");

    var eventDump = $("#eventdump");
    eventDiv.append(eventName);
    // eventDiv2.append(eventDate);
    // eventDiv3.append(eventUrl);

    eventName.append(eventDate);
    eventDate.append(eventUrl);

    eventDump.append(eventDiv);

};

$(document).ready(function() {
    var modal = document.getElementById('initialModal');
    var btn = document.getElementById("signUp");
    btn.addEventListener("click", function() {
        var modal = document.getElementById("initialModal");
        modal.style.display = "block";
    });
});

// var eventName = $("<li>").text(currEvent.name);
// $("li").addClass("important");
// var eventUrl = $("<p>").html("<a target=\"_blank\" href=" + currEvent.url + ">CLICK ME!</a>");
// var eventDate = $("<p>").text(currEvent.dates.start.localDate);
// eventDump.append("<div>" + eventName.html() + " " + eventDate.html() + " " + eventUrl.html() + "</div>")