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
        $("#contents").css("display", "inline-block");
        $("#contents").children().toggle();
        $("#contents .main_div:nth-child(2)").addClass("active");
        $(".active").toggle();
        showNavIfDesktop();
      }
    });
  });

  enquire.register("screen and (max-width:45em)", {

    match : function() {
      desktop = undefined;
      $(window).on("swiperight", function(event){
        nextDivMobile();
      });
      $(window).on("swipeleft", function(event){
        previousDivMobile();
      });
    },
                                
    unmatch : function() {
      if($(".active").first().attr("id")){
        $(".nav_button").toggle();
        $("#left_button > img").css("display", "none");
      }
      $(window).unbind("swipeleft");
      $(window).unbind("swiperight");
    }
  });

  enquire.register("screen and (min-width:45em)", {

    match : function() {
      desktop = "true";
      $(document).keydown(function(e){
        if (e.keyCode == 37) {
          if($(".active").first().attr("id") != $("#contents .main_div:nth-child(2)").attr("id"))
          {
            previousDivDesktop();
          }
        } else if (e.keyCode == 39) {
          if($(".active").first().attr("id") != $("#contents").find(".main_div").last().attr("id"))
          {
            nextDivDesktop();
          }
        }
      });

      $("#left_button > img").on("click", function(event){
        previousDivDesktop();
      });
      $("#right_button > img").on("click", function(event){
        nextDivDesktop();
      });

    },
                                
    unmatch : function() {
      desktop = undefined;
      $(".nav_button").css("display", "none");
    }
  });

  function showNavIfDesktop(){
    if(desktop){
      $(".nav_button").toggle();
      $("#left_button > img").css("display", "none");
    }
  }

  function previousDivDesktop(){
    if($(".active").first().attr("id") != $("#contents .main_div:nth-child(2)").attr("id")){
      $(".nav_button > img").css("display", "inline-block");
      $(".active").toggle();
      $(".active").removeClass("active").prev().addClass("active");
      $(".active").toggle();
    }
    if($(".active").first().attr("id") == $("#contents .main_div:nth-child(2)").attr("id")){
      $("#left_button > img").css("display", "none");
    }
  }

  function nextDivDesktop(){
    if($(".active").first().next().attr("id") != $("#contents").last().attr("id")){
      $(".nav_button > img").css("display", "inline-block"),
      $(".active").toggle();
      $(".active").removeClass("active").next().addClass("active");
      $(".active").toggle();
    }
    if($(".active").first().attr("id") == $("#contents").find(".main_div").last().attr("id")){
      $("#right_button > img").css("display", "none");
    }
  }

  function previousDivMobile(){
    if($(".active").first().attr("id") != $("#contents .main_div:nth-child(2)").attr("id")){
      $(".active").toggle();
      $(".active").removeClass("active").prev().addClass("active");
      $(".active").toggle();
    }
  }

  function nextDivMobile(){
    if($(".active").first().attr("id") != $("#contents").children().last().attr("id")){
      $(".active").toggle();
      $(".active").removeClass("active").next().addClass("active");
      $(".active").toggle();
    }
  }
});