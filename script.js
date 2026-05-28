var x = document.getElementById("demo");

function getLocation() {
  // Code goes here

}

function showPosition(position) {
  //Code goes here
  
}

var y = document.getElementById("demo2");

//Code goes here


function showPosition(position) {
    y.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    console.log(position.coords.latitude);
}


//
function createMap(){
    //mapboxgl.accessToken = ""

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/standard', // Use the standard style for the map
        projection: 'globe', // display the map as a globe
        zoom: 0, // initial zoom level, 0 is the world view, higher values zoom in
        center: [-73.9, 40.7] // center the map on this longitude and latitude
    });


    map.setCenter([   ]);
}

