console.log("test")

var weather = $("#weather")

var zip ="44077"

var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=acaa23f8d409ee273187d2b9b0388e23&zip="+zip;

$.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
    	$("#city").text(response.name);
    	$("#temp").text(response.main.temp);
    	$("#humidity").text(response.main.humidity);
    	//$("#forcast").text(response.name);
    	//$("#city").text(response.name);
    	
    	//$("#weather").empty();
    	//var lean = response.data.length
    	//var i=0
    	//for (i; i <lean; i++) {
    	
    		//var image = $("<img src='"+response.data[i].images.original.url+"'>");
    		//$("#gif-view").append(image);
    	//}
      console.log(response);
    });