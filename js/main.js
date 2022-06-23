const data = [
  {
    name: "Casa 1",
    coordinates: { lat: -34.17332157599266, lng: -58.951970928130855 }
  },
  {
    name: "Casa 2",
    coordinates: { lat: -34.183644979086196, lng: -58.94910336873899 }
  },
  {
    name: "Casa 3",
    coordinates: { lat: -34.162638569090376, lng: -58.97471621364243 }
  },
  {
    name: "Casa 4",
    coordinates: { lat: -34.16657586792696, lng: -58.96815040203507 }
  },
  {
    name: "Casa 5",
    coordinates: { lat: -34.16405208805553, lng: -58.96823887826371 }
  },
  {
    name: "Casa 6",
    coordinates: { lat: -34.164213887665575,lng: -58.96148675501967 }
  },
  {
    name: "Casa 7",
    coordinates: { lat: -34.16725647349148, lng: -58.957630863717256 }
  },
  {
    name: "Casa 8",
    coordinates: { lat: -34.17008297134633, lng: -58.95803822258429 }
  }
];

const ubicacionUsuario = {
  lat: -34.163252642536435, 
  lng: -58.95922940103571
};

// Initialize and add the map
function initMap() {
  let mapa = new google.maps.Map(document.getElementById('map'), {
    center: ubicacionUsuario,
    zoom: 4
  });

  // let marcadorUsuario = new google.maps.Marker({
  //   position: ubicacionUsuario  ,
  //   title: 'Tu ubicacion'
  // });

  //marcadorUsuario.setMap(mapa);

  let marcadores = data.map(lugar => {
    new google.maps.Marker({
      position: lugar.coordinates,
      title: lugar.name,
      map: mapa
    });
  });
}

window.initMap = initMap;
