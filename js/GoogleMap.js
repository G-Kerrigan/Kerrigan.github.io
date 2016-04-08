$(document).ready(function(){

var locations = [
    ['თბილისი', 41.7151377, 44.827096, 1],
    ['რუსთავი',41.5225612, 45.0430369, 2],
    ['ბათუმი',41.6167547, 41.6367455, 3],
    ['ზუგდიდი',42.2701283, 42.0456708, 4],
    ['სოხუმი',43.0015252, 41.0234153, 5],
 ];

 var map, map2;

 map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(-39.92, 151.25),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    //draggable: false,
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2569e3"},{"visibility":"on"}]}]
  });

  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  var markers = new Array();
  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });
    markers.push(marker);
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  function AutoCenter() {
    //  Create a new viewpoint bound
    var bounds = new google.maps.LatLngBounds();
    //  Go through each...
    $.each(markers, function (index, marker) {
      bounds.extend(marker.position);
    });
    //  Fit these bounds to the map
    map.fitBounds(bounds);
  }
  AutoCenter();



  var myLatLng = {lat: 41.7151377, lng: 44.827096};// map 2 coordinates

  map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 10,
    center: myLatLng,//Tbilisi
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    //draggable: false,
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2569e3"},{"visibility":"on"}]}]
  });  

  var infowindow2 = new google.maps.InfoWindow({
    content: 'თბილისი MAP2'
  });

  var marker2 = new google.maps.Marker({
    position: myLatLng,
    map: map2
  });

  marker2.addListener('click', function() {
    infowindow2.open(map2, marker2);
  });


});//ready