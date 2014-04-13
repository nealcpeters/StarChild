// This compares the amount of elements in the human body with relative amounts in other locations

elementalCompositionHumanBody = {
  H : 0.1 ,
  C : 0.18,
  N : 0.3,
  O : 0.65,
  Na : 0.001,
  K : 0.002,
  P : 0.012,
  Mg : 0.0005,
  S : 0.002,
  Cl : 0.002,
  Ca : 0.015,
  Fe : 0.0005
};

elementalCompositionMilkyWay = {
  H : 0.74 ,
  He : 0.24,
  C : 0.004,
  Ne : 0.001,
  O : 0.01,
  Fe : 0.001,
  N : 0.001,
  Si : 0.0006,
  Mg : 0.0006,
  S : 0.0004
};

elementalCompositionEarth = {
  Fe : 0.32,
  O : 0.30,
  Si : 0.15,
  Mg : 0.14,
  S : 0.03,
  Ni : 0.018,
  Ca : 0.015,
  Al : 0.014
};

var elementalCompositionSolarSystem = {
  H : 0.70 ,
  He : 0.275,
  O : 0.006,
  C : 0.003,
  N : 0.001,
  Ne : 0.001
};

$(document).ready(function(){

  var viewSetter = function(element, location, type) {
    upCased = element.charAt(0).toUpperCase() + element.charAt(1);
    store = elementalCompositionHumanBody[upCased] / window["elementalComposition" + location][upCased] * 100;
    if (type === "Percent"){end = "%";}
      else{end = " Times More";}
    $('#' + element + type + location).find('p').text(store + end);
  };

  viewSetter("mg", "Earth", "Percent")
  viewSetter("s", "Earth", "Percent")
  viewSetter("ca", "Earth", "Percent")
  viewSetter("fe", "Earth", "Percent")
  viewSetter("h", "SolarSystem", "Percent")
  viewSetter("h", "MilkyWay", "Percent")
  viewSetter("fe", "MilkyWay", "Percent")
  
  viewSetter("o", "Earth", "Times")
  viewSetter("c", "SolarSystem", "Times")
  viewSetter("n", "SolarSystem", "Times")
  viewSetter("o", "SolarSystem", "Times")
  viewSetter("c", "MilkyWay", "Times")
  viewSetter("n", "MilkyWay", "Times")
  viewSetter("o", "MilkyWay", "Times")
})