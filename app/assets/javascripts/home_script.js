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
      url: '/',
      data: $("form").serialize(),
      success: function(response) {
      	console.log("makin' it happen!");
      }
    });
	});




});