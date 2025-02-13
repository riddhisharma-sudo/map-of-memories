function initMap() {
  // Define the locations with their details
  const locations = [
    {
      name: "Where We Met",
      lat: 37.7749,
      lng: -122.4194,
      photo: "assets/where-we-met.jpg",
      description: "This is where we first met. It was a sunny day in San Francisco!"
    },
    {
      name: "First Date",
      lat: 34.0522,
      lng: -118.2437,
      photo: "assets/first-date.jpg",
      description: "Our first date was at a cozy café in Los Angeles."
    },
    {
      name: "Engagement Spot",
      lat: 40.7128,
      lng: -74.0060,
      photo: "assets/engagement.jpg",
      description: "He proposed here in New York City. It was magical!"
    }
  ];

  // Create a map centered at the first location
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: { lat: locations[0].lat, lng: locations[0].lng }
  });

  // Add markers for each location
  locations.forEach(location => {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.name
    });

    // Create an info window for each marker
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div class="info-window">
          <h3>${location.name}</h3>
          <img src="${location.photo}" alt="${location.name}" style="width: 100%; max-width: 200px;">
          <p>${location.description}</p>
        </div>
      `
    });

    // Open the info window when the marker is clicked
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  });
}
