function timer(){
 var now     = new Date,
     hours   = now.getHours(),
     ampm    = hours<12 ? ' AM' : ' PM',
     minutes = now.getMinutes(),
     seconds = now.getSeconds(),
     t_str   = [hours-12, //otherwise: what's the use of AM/PM?
                (minutes < 10 ? "0" + minutes : minutes),
                (seconds < 10 ? "0" + seconds : seconds)]
                 .join(':') + ampm;
 $('#time_span').html(t_str);
 setTimeout(timer,1000);
}

timer();


mapboxgl.accessToken = 'pk.eyJ1IjoidHlsZXJrYWRvdyIsImEiOiJjajZ6b3ZwZ3EyZmZjMnFuemFqYzVqMG92In0.luydkndZ-1V3mUQ8cgvlsQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});