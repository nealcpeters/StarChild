$(document).ready(function(){

  $(".nav_button").toggle();

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
      	$("#contents").children().toggle();
        $("#contents .main_div:nth-child(2)").addClass("active");
        $(".active").toggle();
        showNavIfDesktop();
      }
    });
	});

	enquire.register("screen and (max-width:45em)", {

    match : function() {
    	$(window).on("swipeleft", function(event){
        nextDiv();
    	});
    	$(window).on("swiperight", function(event){
        previousDiv();
    	});
    },
                                
    unmatch : function() {
    	if($(".active").first().attr("id")){
        $(".nav_button").toggle();
      };
    	$(window).unbind("swipeleft");
    	$(window).unbind("swiperight");
    }       
	});

  enquire.register("screen and (min-width:45em)", {

    match : function() {
      desktop = "true";
      $("#left_button").on("click", function(event){
        previousDiv();
      });
      $("#right_button").on("click", function(event){
        nextDiv();
      });

    },
                                
    unmatch : function() {
      desktop = undefined;
      $(".nav_button").css("display", "none");
    }       
  });

  function showNavIfDesktop(){
    if(desktop){
      $(".nav_button").toggle()
    };
  };

  function nextDiv(){
    if($(".active").first().attr("id") != $("#contents .main_div:nth-child(2)").attr("id")){
      $(".active").toggle();
      $(".active").removeClass("active").prev().addClass("active");
      $(".active").toggle();
    };
  };

  function previousDiv(){
    if($(".active").first().attr("id") != $("#contents").find(".main_div").last().attr("id")){
      $(".active").toggle();
      $(".active").removeClass("active").next().addClass("active");
      $(".active").toggle();
    };
  };



});