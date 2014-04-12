$(document).ready(function(){

	$("form").on("submit", function(event){
	  event.preventDefault();
	  var height = $("input[name='height']").val();
	  var weight = $("input[name='weight']").val();
	  var age = $("input[name='age']").val();
	  var gender = $("input[name='gender']").val();
	  var location = $("input[name='location']").val();
	  $.ajax({
      type: 'post',
      url: '/stats/create',
      data: $("form").serialize(),
      success: function(response) {
      	$("#contents").html(response);
      	$("#base_results").toggle();
      }
    });
	});

	enquire.register("screen and (max-width:45em)", {

    match : function() {
    	console.log("mobile!")
    	// $(".navbutton").toggle();  this will make our desktop nav buttons disappear
    	$(window).on("swipeleft", function(event){
    		// go to the previous slide
    		console.log("swiping left!");
    	});
    	$(window).on("swiperight", function(event){
    		// go to the next slide
    		console.log("swiping right!");
    	});
    },
                                
    unmatch : function() {
    	console.log("desktop!");
    	$(".navbutton").toggle();
    	$(window).unbind("swipeleft");
    	$(window).unbind("swiperight");
    }       
	});




});