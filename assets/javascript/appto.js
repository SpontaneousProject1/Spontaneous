mapboxgl.accessToken = 'pk.eyJ1IjoidHlsZXJrYWRvdyIsImEiOiJjajZ6b3U0a2YyZWFnMndtbmJwOGUzd2dsIn0.65oWMGvI17DtNNdeKQQ6kg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-79.4512, 43.6568],
    zoom: 13
});

map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'top-left');