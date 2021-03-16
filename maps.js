
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 26.8467, lng: 80.9462 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  const locations = [
    { lat: 26.86717, lng: 80.86232 },
    { lat: 26.86829, lng: 80.86685 },
    { lat: 26.75191, lng: 80.86013 },
    { lat: 26.84402, lng: 80.88876 },
    { lat: 26.84875, lng: 80.89406 },
    { lat: 26.83046, lng: 80.91420},
    { lat: 26.84812, lng: 80.91597 },
    { lat: 26.87208, lng: 80.93717 },
    { lat: 26.85222, lng: 80.99265 },
    { lat: 26.85852, lng: 80.98841 },
    { lat: 26.86577, lng: 81.01386 },
    { lat: 26.91179, lng: 80.99089 },
    { lat: 26.89396, lng: 80.94604 },
    { lat: 26.89690, lng: 80.94830 },
    { lat: 26.88479, lng: 80.94830 },
    { lat: 26.87397, lng: 80.95570 },
    { lat: 26.87361, lng: 80.96331 },
    { lat: 26.88479, lng: 80.97030 },
    { lat: 26.88168, lng: 80.97359 },
    { lat: 26.87892, lng: 80.98367 },
    { lat: 26.86046, lng: 80.94805 },
    { lat: 26.82841, lng: 80.91380},
    
  ];