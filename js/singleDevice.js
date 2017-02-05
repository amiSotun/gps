var map;
var markers = [];
var uId;

function initMap() {

  var urlParams = new URLSearchParams(window.location.search);
  if(urlParams.has('uId')){
    uId = urlParams.get('uId');
  }

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

                        if(dataCollection.uniqueId === uId){
                          console.log(dataCollection.latitude);
                          console.log(dataCollection.longitude);
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
