$(function(){

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
                  $("#devices").html('');
                    for(var i=0; i<deviceData.length; i++){
                        var dataCollection = Object.assign(deviceData[i],positionData[i]);
                        $("#devices").append(
                          '<div class="s-12 m-6 1-6 device">'+
                    '<table>'+
                               '<tr>'+
                                  '<td colspan="2" align="center" height=20px></td>'+
                                '</tr>'+
                      '<tr>'+
                        '<td colspan="2" align="center">'+
                          '<a href="device.php?uId='+dataCollection.uniqueId+'">'+'<span style="color:blue">'+dataCollection.name+' ['+dataCollection.status+']'+'</span>'+'</a>'+
                        '</td>'+
                      '</tr>'+
                                '<tr>'+
                                  '<td>Phone</td>'+
                                  '<td>'+dataCollection.phone+'</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td>DeviceID</td>'+
                                  '<td>'+dataCollection.uniqueId+'</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td>Last Update</td>'+
                                  '<td>'+dataCollection.lastUpdate+'</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td>Speed</td>'+
                                  '<td>'+(dataCollection.speed).toFixed(2)+' km</td>'+  
                                '</tr>'+
                                '<tr>'+
                                  '<td>Distance</td>'+
                                  '<td>'+dataCollection.attributes.distance+'</td>'+  
                                '</tr>'+
                                '<tr>'+
                                  '<td>IP Address</td>'+
                                  '<td>'+dataCollection.attributes.ip+'</td>'+  
                                '</tr>'+
                                '<tr>'+
                                  '<td>Total Distance</td>'+
                                  '<td>'+dataCollection.attributes.totalDistance+'</td>'+  
                                '</tr>'+
                                '<tr>'+
                                  '<td>Altitude</td>'+
                                  '<td>'+(dataCollection.altitude).toFixed(4)+'</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td>Latitude</td>'+
                                  '<td>'+(dataCollection.latitude).toFixed(4)+'</td>'+
                                '</tr>'+
                      '<tr>'+
                        '<td>Longitude</td>'+
                        '<td>'+(dataCollection.longitude).toFixed(4)+'</td>'+ 
                      '</tr>'+
                                '<tr>'+
                                  '<td colspan="2" align="center" height=20px></td>'+
                                '</tr>'+
                    '</table>'+
                  '</div>'
                        );
                    }
                        
                // setTimeout(function(){location.reload();},10000);
                }
            });
        }
     });
  }, 5000);
});