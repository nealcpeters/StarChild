$(document).ready(function(){
  var age = $('#age').text();

  var setAge = function(planet, timeChange, age) {
    $('#' + planet + 'Age').find('p').text((age / timeChange).toFixed(2) + " Years Old");
  };

  setAge("mercury", 0.241, age);
  setAge("venus", 0.615, age);
  setAge("mars", 1.88, age);
  setAge("jupiter", 11.86, age);
  setAge("saturn", 29.46, age);
  setAge("uranus", 84.01, age);
  setAge("neptune", 164.8, age);
  setAge("pluto", 248.1, age);
});