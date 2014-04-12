$(document).ready(function(){

	$("form").on("submit", function(event){
	  event.preventDefault();
	  var height = $("input[name='height']").val();
	  var weight = $("input[name='weight']").val();
	  var age = $("input[name='age']").val();
	  var gender = $("input[name='gender']").val();
	  var location = $("input[name='location']").val();
	  console.log(height);
	  console.log(weight);
	  console.log(age);
	  console.log(gender);
	  console.log(location);
	  $.ajax({
      type: 'post',
      url: '/stats/create',
      data: $("form").serialize(),
      success: function(response) {
      	console.log("makin' it happen!");
      	console.log(response);
      	if(response["stats"]["gender"] == 0){
      		var gender = "Male";
      	} else {
      		var gender = "Female";
      	};
      	$("#contents").html('<h1>Your Results</h1><p>height: ' + response["stats"]["height"] + '</p><p>weight: ' + response["stats"]["weight"] + '</p><p> gender: ' + gender +  '</p><p>age: ' + response["stats"]["age"] + '</p><p>location: ' + response["stats"]["location"] + '</p>');
      }
    });
	});




});