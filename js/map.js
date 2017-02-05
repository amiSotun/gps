var user_lat, user_lng;
var map;
var markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 24.0183,
      lng: 90.4206
    },
    zoom: 11
  });

}
setInterval(function()
  { 
    $.ajax({
        type: 'GET',
        contentType: 'application/json',
         url: 'http://demo.traccar.org/api/devices',
         headers: {
             "Authorization": "Basic " + btoa("kabir.duetcse@gmail.com:nokia asus")
         },
        success: function (deviceData) {
            $.ajax({
                type: 'GET',
                contentType: 'application/json',
                 url: 'http://demo.traccar.org/api/positions',
                 headers: {
                     "Authorization": "Basic " + btoa("kabir.duetcse@gmail.com:nokia asus")
                 },
                success: function (positionData) {
                  setMapOnAll(null);
                  markers = [];

                    for(var i=0; i<deviceData.length; i++){
                        var dataCollection = Object.assign(deviceData[i],positionData[i]);
                        //consol.log(dataCollection.latitude);
                        var marker = new google.maps.Marker({
                          position: {
                            lat: dataCollection.latitude,
                            lng: dataCollection.longitude,
                          },
                          map: map,
                          title:dataCollection.name+' ['+dataCollection.uniqueId+']'+' \nStatus: '+dataCollection.status+'\nSpeed: '+(dataCollection.speed).toFixed(2)+' km'
                        });
                        markers.push(marker);
                    } 
                }
            });
        }
     });
  }, 5000);

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
