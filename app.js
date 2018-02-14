/*var weather = new XMLHttpRequest();

var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiLinkDS = 'https://api.darksky.net/forecast/bcfb332dbff54b0b470a2c8cbad6e360/-12.145598,%20-77.022311?lang=es';

var r = apiLinkDS.response;
console.log(r);

var weather = 'Current location: ' + r.current_observation.display_location.full + '<br/>';
var temp = r.current_observation.temperature_string + '<br/>';
var wind = r.current_observation.wind_string + '<br/>';

document.getElementById('weather').innerHTML = weather;
document.getElementById('temp').innerHTML = temp;
document.getElementById('wind').innerHTML = wind;*/

$(document).ready(function() {

  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiLinkDS = "https://api.darksky.net/forecast/bcfb332dbff54b0b470a2c8cbad6e360/-12.145598,%20-77.022311?lang=es";

  $.ajax({
    url: proxy + apiLinkDS,
    success:function(data) { console.log(data);}
  });

});
