  var energyCalculation = function(mass, velocity){
    var velocityMpS = velocity / 3.6;
    energy = 0.5 * mass * Math.pow(velocityMpS, 2);
    return energy;
  };

  var joulesToGallonOfGas = function(energy) {
    return round(energy / 1.3 * Math.pow(10, 8));
  };

  var joulesToAABattery = function(energy) {
    return (energy / 1000).toFixed(2);
  };

  var joulesToCandyBar = function(energy) {
    return (energy / 1000000).toFixed(2);
  };

  var joulesToKgOfCoal = function(energy) {
    return (energy / 7.3 * Math.pow(10,6)).toFixed(2);
  };

  var joulesToKgOfUranium = function(energy) {
    return (energy / 1.7 * Math.pow(10,13)).toFixed(2);
  };

  var joulesToFoodCalories = function(energy) {
    return (energy / 4184).toFixed(2);
  };

  var joulesToHiroshima = function(energy) {
    return energy / Math.pow(10,14);
  };

  var joulesToLighteningBolt = function(energy) {
    return energy / Math.pow(10,10);
  };

  var joulesToSaturnV = function(energy) {
    return energy / Math.pow(10,11);
  };

  var joulesToKgOfTNT = function(energy) {
    return (energy / Math.pow(10,6)).toFixed(2);
  };

  var joulesToHoppingFlea = function(energy) {
    return (energy / Math.pow(10,-7)).toFixed(2);
  };
// Energy of a person

$(document).ready(function(){

  var weight = $('#weight').text();
  var mass = weight / 2.2;
  var latitude = $('#location').text().match(/\d*\.\d*/);
  if(latitude === null) {
    var latitudeAdjuster = Math.cos(latitude * 0.01745);
    }
  else {
    var latitudeAdjuster = 1;
  }


  // Come back and add latitude
  // 
  var earthRotating = energyCalculation(mass, 1600 * latitudeAdjuster);

  var earthOrbitingSun = energyCalculation(mass, 107000);

  var sunOrbitingGalaxy = energyCalculation(mass, 792000);

  self = this

  var displaySet = function(functionName, endDescription, energySource, name){
    store = window[functionName](energySource);
    $('#' + functionName + name).find('p').text(store + " " + endDescription);
  }


  var threeSet = function(functionName, endDescription){
    displaySet(functionName, endDescription, earthRotating, "EarthRotating")
    displaySet(functionName, endDescription, earthOrbitingSun, "EarthOrbiting")
    displaySet(functionName, endDescription, sunOrbitingGalaxy, "SunOrbiting")  
  }

  var aABatterySet = function(energySource, name) {
    store = joulesToAABattery(energySource);
    $('' + name).find('p').text(store + " AA Batteries");
  }
  
  threeSet("joulesToGallonOfGas", "Gallons of Gas")
  threeSet("joulesToAABattery", "AA Batteries")
  threeSet("joulesToCandyBar", "Candy Bars")
  threeSet("joulesToKgOfCoal", "Kilograms of Coal") 
  threeSet("joulesToKgOfUranium", "Kilograms of Uranium") 
  threeSet("joulesToFoodCalories", "Food Calories")     
  threeSet("joulesToHiroshima", "Hiroshima Atom Bombs")  
  threeSet("joulesToLighteningBolt", "Bolts of Lightening")     
  threeSet("joulesToSaturnV", "Saturn V Rockets")          
  threeSet("joulesToKgOfTNT", "Kilograms of TNT")          
  threeSet("joulesToHoppingFlea", "Hopping Fleas")          
 });