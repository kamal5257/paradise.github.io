$(document).ready(function() {
  
  $("h4").on("click", function() {
//     When clicking on faq-question set active class
    $("h4").removeClass("active");
    $(this).addClass("active");
    
//     Set visible content of faq-question by animating it
    $("p").css("display", "none");
    $(this).next("p").animate({
      opacity: 1,
      height: "toggle"
    }, "slow", "linear");
  });

});