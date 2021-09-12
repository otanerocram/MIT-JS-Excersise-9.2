function createMapMarker() {
    // TODO: add your own access token
    // Registrarse para obtener tu API KEY
    mapboxgl.accessToken = 'YOUR_MAPBOX_API_KEY';
  
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.091542, 42.358862],
      zoom: 12,
    });
  
    // TODO: add a marker to the map
    const marker1 = new mapboxgl.Marker().setLngLat([-71.091542,42.358862]).addTo(map);
  }
  
  // Do not edit the code below
  window.onload = () => {
    createMapMarker();
  };
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { createMapMarker };
  }
  