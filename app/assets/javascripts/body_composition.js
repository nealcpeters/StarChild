$(document).ready(function(){

  var elementalCompositionHumanBody = {
    H : 0.1 ,
    C : 0.18,
    N : 0.3,
    O : 0.65,
    Na : 0.001, //need traces 
    K : 0.002, //need traces 
    P : 0.012, //need traces 
    Mg : 0.0005,
    S : 0.002,
    Cl : 0.002,
    Ca : 0.015,
    Fe : 0.0005
  };

  var elementalCompositionMilkyWay = {
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

  var elementalCompositionEarth = {
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




  var mgPercentageEarth = elementalCompositionHumanBody.Mg / elementalCompositionEarth.Mg * 100 //Percentage
    $('#mgPercentageEarth').find('p').text(mgPercentageEarth + "%");  

  var sPercentageEarth = elementalCompositionHumanBody.S / elementalCompositionEarth.S * 100 //Percentage
      $('#sPercentageEarth').find('p').text(sPercentageEarth + "%");  
  
  var caPercentageEarth = elementalCompositionHumanBody.Ca / elementalCompositionEarth.Ca * 100 //Percentage
      $('#caPercentageEarth').find('p').text(caPercentageEarth + "%");  

  var fePercentageEarth = elementalCompositionHumanBody.Fe / elementalCompositionEarth.Fe  * 100 // Percentage
    $('#fePercentageEarth').find('p').text(fePercentageEarth + "%");  

  var hPercentageSolarSystem = elementalCompositionHumanBody.H / elementalCompositionSolarSystem.H * 100 //Percentage
   $('#hPercentageSolarSystem').find('p').text(hPercentageSolarSystem + "%");

  var hPercentageMilkyWay = elementalCompositionHumanBody.H / elementalCompositionMilkyWay.H * 100 //Percentage
   $('#hPercentageMilkyWay').find('p').text(hPercentageMilkyWay + "%");

  var fePercentageMilkyWay = elementalCompositionHumanBody.Fe / elementalCompositionMilkyWay.Fe  * 100 // Percentage
    $('#fePercentageMilkyWay').find('p').text(fePercentageMilkyWay + "%");  

  var earthPercents = ["mg", "s", "ca", "fe"]
  var solarSystemPercents = ["h"]
  var milkyWayPercents = ["h", "fe"]
  
  var earthTimes = ["o"]
  
  var oTimesEarth = elementalCompositionHumanBody.O / elementalCompositionEarth.O  //Times
    $('#oTimesEarth').find('p').text(oTimesEarth + " times more");  
   
  var cTimesSolarSystem = elementalCompositionHumanBody.C / elementalCompositionSolarSystem.C  //Times
    $('#cTimesSolarSystem').find('p').text(cTimesSolarSystem + " times more");  

  var nTimesSolarSystem = elementalCompositionHumanBody.N / elementalCompositionSolarSystem.N //Times
    $('#nTimesSolarSystem').find('p').text(nTimesSolarSystem + " times more");  

  var oTimesSolarSystem = elementalCompositionHumanBody.O / elementalCompositionSolarSystem.O  //Times
    $('#oTimesSolarSystem').find('p').text(oTimesSolarSystem + " times more");  

  var cTimesMilkyWay = elementalCompositionHumanBody.C / elementalCompositionMilkyWay.C  //Times
    $('#cTimesMilkyWay').find('p').text(cTimesMilkyWay + " times more");  
  
  var nTimesMilkyWay = elementalCompositionHumanBody.N / elementalCompositionMilkyWay.N  //Times
    $('#nTimesMilkyWay').find('p').text(nTimesMilkyWay + " times more");  

  var oTimesMilkyWay = elementalCompositionHumanBody.O / elementalCompositionMilkyWay.O  //Times
    $('#oTimesMilkyWay').find('p').text(oTimesMilkyWay + " times more");  
})