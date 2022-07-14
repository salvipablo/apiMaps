// Location where the map will be centered.
const ubicacionUsuario = {
  lat: -34.163252642536435, 
  lng: -58.95922940103571
};

// Initialize and add the map.
function initMap() {
  let mapa = new google.maps.Map(document.getElementById('map'), {
    center: ubicacionUsuario,
    zoom: 14,
    mapId: "70aac846ed30a32f",
  });

  let infoWindow = new google.maps.InfoWindow();

  data.map(lugar => {
    let html = `
      <img src="./images/Casa_1.png" alt="Casa">
      <h2>${lugar.name}</h2>
      <h3><a href="#">${lugar.realEstate}</a></h3>
      <p>${lugar.address}</p>
      <p>${lugar.phone}</p>
    `;

    const marker = new google.maps.Marker({
      position: lugar.coordinates,
      title: lugar.name,
      icon: './images/home.svg',
      map: mapa,
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.setContent(html);
      infoWindow.open(map, marker);
    });
  });
}

window.initMap = initMap;
