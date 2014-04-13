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

  var energyCalculation = function(mass, velocity){
    var velocityMpS = velocity / 3.6;
    energy = 0.5 * mass * Math.pow(velocityMpS, 2);
    return energy;
  };

  var joulesToGallonOfGas = function(energy) {
    blah = (energy / 1.3 * Math.pow(10, 8));
    return blah = roundTo(blah,4);
  };

  var joulesToAABattery = function(energy) {
    return energy / 1000;
  };

  var joulesToCandyBar = function(energy) {
    return energy / 1000000;
  };

  var joulesToKgOfCoal = function(energy) {
    return energy / 7.3 * Math.pow(10,6);
  };

  var joulesToKgOfUranium = function(energy) {
    return energy / 1.7 * Math.pow(10,13);
  };

  var joulesToFoodCalories = function(energy) {
    return energy / 4184;
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
    return energy / Math.pow(10,6);
  };

  var joulesToHoppingFlee = function(energy) {
    return energy / Math.pow(10,-7);
  };

  // Come back and add latitude
  // 
  var earthRotating = energyCalculation(mass, 1600 * latitudeAdjuster);

  var earthOrbitingSun = energyCalculation(mass, 107000);

  var sunOrbitingGalaxy = energyCalculation(mass, 792000);
  

  $('#earthRotating').find('p').text(earthRotating + " joules");
      joulesToGallonOfGasEarthRotating = joulesToGallonOfGas(earthRotating);
      $('#joulesToGallonOfGasEarthRotating').find('p').text(joulesToGallonOfGasEarthRotating + " Gallons of Gas");
      joulesAABatteryEarthRoating = joulesToAABattery(earthRotating);
      $('#joulesToAABatteryEarthRotating').find('p').text(joulesAABatteryEarthRoating + " AA Batteries");
      joulesCandyBarEarthRoating = joulesToCandyBar(earthRotating);
      $('#joulesToCandyBarEarthRotating').find('p').text(joulesCandyBarEarthRoating + " Candy Bars");
      joulesKgOfCoalEarthRoating = joulesToKgOfCoal(earthRotating);
      $('#joulesToKgOfCoalEarthRotating').find('p').text(joulesKgOfCoalEarthRoating + "kg of Coal");
       joulesKgOfUraniumEarthRoating = joulesToKgOfUranium(earthRotating);
      $('#joulesToKgOfUraniumEarthRotating').find('p').text(joulesKgOfUraniumEarthRoating + "kg of Uranium");
      joulesFoodCaloriesEarthRoating = joulesToFoodCalories(earthRotating);
      $('#joulesToFoodCaloriesEarthRotating').find('p').text(joulesFoodCaloriesEarthRoating + " Food Calories");
      joulesToHiroshimaEarthRoating = joulesToHiroshima(earthRotating);
      $('#joulesToHiroshimaEarthRoating').find('p').text(joulesToHiroshimaEarthRoating + " Hiroshima Atom Bombs");
      joulesToLighteningBoltEarthRotating = joulesToLighteningBolt(earthRotating);
      $('#joulesToLighteningBoltEarthRotating').find('p').text(joulesToLighteningBoltEarthRotating + " Lightening Bolts");
      joulesToSaturnVEarthRotating = joulesToSaturnV(earthRotating);
      $('#joulesToSturnVEarthRotating').find('p').text(joulesToSaturnVEarthRotating + " Saturn V rockets");
      joulesToKgOfTNTEarthRotating = joulesToKgOfTNT(earthRotating);
      $('#joulesToKgOfTNTEarthRotating').find('p').text(joulesToKgOfTNTEarthRotating + "kg of TNT");
      joulesToHoppingFleeEarthRotating = joulesToHoppingFlee(earthRotating);
      $('#joulesToHoppingFleeEarthRotating').find('p').text(joulesToHoppingFleeEarthRotating + " Hopping Flees");

  $('#earthOrbitingSun').find('p').text(earthOrbitingSun + " joules");
      joulesToGallonOfGasEarthOrbiting = joulesToGallonOfGas(earthOrbitingSun);
      $('#joulesToGallonOfGasEarthOrbiting').find('p').text(joulesToGallonOfGasEarthOrbiting + " Gallons of Gas");
      joulesAABatteryEarthOrbiting = joulesToAABattery(earthOrbitingSun);
      $('#joulesToAABatteryEarthOrbiting').find('p').text(joulesAABatteryEarthOrbiting + " AA Batteries");
      joulesCandyBarEarthOrbiting = joulesToCandyBar(earthOrbitingSun);
      $('#joulesToCandyBarEarthOrbiting').find('p').text(joulesCandyBarEarthOrbiting + " Candy Bars");
      joulesKgOfCoalEarthOrbiting = joulesToKgOfCoal(earthOrbitingSun);
      $('#joulesToKgOfCoalEarthOrbiting').find('p').text(joulesKgOfCoalEarthOrbiting + "kg of Coal");
       joulesKgOfUraniumEarthOrbiting = joulesToKgOfUranium(earthOrbitingSun);
      $('#joulesToKgOfUraniumEarthOrbiting').find('p').text(joulesKgOfUraniumEarthOrbiting + "kg of Uranium");
      joulesFoodCaloriesEarthOrbiting = joulesToFoodCalories(earthOrbitingSun);
      $('#joulesToFoodCaloriesEarthOrbiting').find('p').text(joulesFoodCaloriesEarthOrbiting + " Food Calories");
      joulesToHiroshimaEarthOrbiting = joulesToHiroshima(earthOrbitingSun);
      $('#joulesToHiroshimaEarthOrbiting').find('p').text(joulesToHiroshimaEarthOrbiting + " Hiroshima Atom Bombs");
      joulesToLighteningBoltEarthOrbiting = joulesToLighteningBolt(earthOrbitingSun);
      $('#joulesToLighteningBoltEarthOrbiting').find('p').text(joulesToLighteningBoltEarthOrbiting + " Lightening Bolts");
      joulesToSaturnVEarthOrbiting = joulesToSaturnV(earthOrbitingSun);
      $('#joulesToSturnVEarthOrbiting').find('p').text(joulesToSaturnVEarthOrbiting + " Saturn V rockets");
      joulesToKgOfTNTEarthOrbiting = joulesToKgOfTNT(earthOrbitingSun);
      $('#joulesToKgOfTNTEarthOrbiting').find('p').text(joulesToKgOfTNTEarthOrbiting + "kg of TNT");
      joulesToHoppingFleeEarthOrbiting = joulesToHoppingFlee(earthOrbitingSun);
      $('#joulesToHoppingFleeEarthOrbiting').find('p').text(joulesToHoppingFleeEarthOrbiting + " Hopping Flees");
 
  $('#sunOrbitingGalaxy').find('p').text(sunOrbitingGalaxy + " joules");
      joulesToGallonOfGasSunOrbiting = joulesToGallonOfGas(sunOrbitingGalaxy);
      $('#joulesToGallonOfGasSunOrbiting').find('p').text(joulesToGallonOfGasSunOrbiting + " Gallons of Gas");
      joulesAABatterySunOrbiting = joulesToAABattery(sunOrbitingGalaxy);
      $('#joulesToAABatterySunOrbiting').find('p').text(joulesAABatteryEarthRoating + " AA Batteries");
      joulesCandyBarSunOrbiting = joulesToCandyBar(sunOrbitingGalaxy);
      $('#joulesToCandyBarSunOrbiting').find('p').text(joulesCandyBarSunOrbiting + " Candy Bars");
      joulesKgOfCoalSunOrbiting = joulesToKgOfCoal(sunOrbitingGalaxy);
      $('#joulesToKgOfCoalSunOrbiting').find('p').text(joulesKgOfCoalSunOrbiting + "kg of Coal");
       joulesKgOfUraniumSunOrbiting = joulesToKgOfUranium(sunOrbitingGalaxy);
      $('#joulesToKgOfUraniumSunOrbiting').find('p').text(joulesKgOfUraniumEarthRoating + "kg of Uranium");
      joulesFoodCaloriesSunOrbiting = joulesToFoodCalories(sunOrbitingGalaxy);
      $('#joulesToFoodCaloriesSunOrbiting').find('p').text(joulesFoodCaloriesSunOrbiting + " Food Calories");
      joulesToHiroshimaSunOrbiting = joulesToHiroshima(sunOrbitingGalaxy);
      $('#joulesToHiroshimaSunOrbiting').find('p').text(joulesToHiroshimaSunOrbiting + " Hiroshima Atom Bombs");
      joulesToLighteningBoltSunOrbiting = joulesToLighteningBolt(sunOrbitingGalaxy);
      $('#joulesToLighteningBoltSunOrbiting').find('p').text(joulesToLighteningBoltSunOrbiting + " Lightening Bolts");
      joulesToSaturnVSunOrbiting = joulesToSaturnV(sunOrbitingGalaxy);
      $('#joulesToSturnVSunOrbiting').find('p').text(joulesToSaturnVSunOrbiting + " Saturn V rockets");
      joulesToKgOfTNTSunOrbiting = joulesToKgOfTNT(sunOrbitingGalaxy);
      $('#joulesToKgOfTNTSunOrbiting').find('p').text(joulesToKgOfTNTSunOrbiting + "kg of TNT");
      joulesToHoppingFleeSunOrbiting = joulesToHoppingFlee(sunOrbitingGalaxy);
      $('#joulesToHoppingFleeSunOrbiting').find('p').text(joulesToHoppingFleeSunOrbiting + " Hopping Flees");
  // answers are in Joules
});