$(document).ready(function(){
  var age = $('#age').text();

  var mercuryAge = (age / .241).toFixed(2)
  $('#mercuryAge').find('p').text(mercuryAge);  
  var venusAge = (age / .615).toFixed(2)
  $('#venusAge').find('p').text(venusAge);
  var marsAge = (age / 1.88).toFixed(2)
  $('#marsAge').find('p').text(venusAge);
  var jupiterAge = (age / 11.86).toFixed(2)
  $('#jupiterAge').find('p').text(jupiterAge);
  var saturnAge = (age / 29.46).toFixed(2)
  $('#saturnAge').find('p').text(saturnAge);
  var uranusAge = (age / 84.01).toFixed(2)
  $('#uranusAge').find('p').text(uranusAge);
  var neptuneAge = (age / 164.8).toFixed(2)
  $('#neptuneAge').find('p').text(neptuneAge);
  var plutoAge = (age / 248.1).toFixed(2)
  $('#plutoAge').find('p').text(plutoAge);
})