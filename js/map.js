// Initialize and add the map
function initMap() {

  // The location coordinates
  const location = { lat: 36.135411125136955,lng: -5.364205117805089};

  // The map, centered at the location
  const map = new google.maps.Map(document.getElementById("map"), {
    minZoom: 4,
    maxZoom: 15,
    zoom: 13,
    center: location,
    

    //map styling
    styles:[
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#cdd5df"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
    ]
    
  });


  //Boat Marker
  const boatMarker = {
    path:
        "M11,13.5V2L3,13.5H11z M21,13.5C21,6.5,14.5,1,12.5,1c0,0,1,3,1,6.5s-1,6-1,6H21z M22,15H2c0.3,1.5,1.2,2.8,2.3,3.7C5,18.5,5.6,18,6,17.5C6.7,18.3,7.8,19,9,19s2.3-0.7,3-1.5c0.7,0.8,1.8,1.5,3,1.5s2.3-0.7,3-1.5c0.5,0.5,1,1,1.7,1.2C20.8,17.8,21.7,16.5,22,15z M22,23v-2h-1c-1,0-2.1-0.4-3-1c-1.8,1.3-4.2,1.3-6,0c-1.8,1.3-4.2,1.3-6,0c-0.9,0.6-2,1-3,1H2v2h1c1,0,2.1-0.2,3-0.8c1.9,1,4.1,1,6,0c1.9,1,4.1,1,6,0l0,0c1,0.5,2,0.8,3,0.8H22z",
    fillColor: "#0FB8AE",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(4,25),
  };


  // The marker, positioned at the location
  const marker = new google.maps.Marker({
    position: location,
    icon: boatMarker,
    map: map,
  });

  

}

