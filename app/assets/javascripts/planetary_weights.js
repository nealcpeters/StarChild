relativeWeights = {
  Mercury : 0.38,
  Venus : 0.90,
  Mars : 0.38,
  Jupiter : 2.87,
  Saturn : 1.32,
  Uranus : 0.93,
  Neptune : 1.23,
  Pluto : 0.07
  };

var weight = $('#weight').text();

for (var key in relativeWeights) {
  var replacement = (weight * relativeWeights[key]).toFixed(1);
  $('#' + key.toLowerCase() + 'Weight').text(key + " " + replacement +"lbs");
}

