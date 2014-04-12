// Energy of a person

var weight = 150;
var mass = weight / 2.2;

// You on planet but planet is moving

var = ;

var energyCalculation = function(mass, velocity){
  var velocityMpS = velocity / 3.6;
  energy = mass * Math.pow(velocityMpS, 2);
  return energy;
};

var joulesToGallonOfGas = function(energy) {
  return energy / 1.3 * Math.pow(10, 8);
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

var joulesSaturnV = function(energy) {
  return energy / Math.pow(10,11);
};

var joulesKgOfTNT = function(energy) {
  return energy / Math.pow(10,6);
};

var joulesHoppingFlee = function(energy) {
  return energy / Math.pow(10,-7);
};

// Come back and add latitude
// 
var earthRotating = energyCalculation(mass, 1600);

var earthOrbitingSun = energyCalculation(mass, 107000);

var sunOrbitingGalaxy = energyCalculation(mass, 792000);

// answers are in Joules