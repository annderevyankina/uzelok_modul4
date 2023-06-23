$(document).ready(function(){
  $(".bubble_4").css("top", "38vw");
  $(document).ready(function(){
    $(".bubble_1, .bubble_5, .bubble_6").addClass("none");
    $(".bubble_2, .bubble_3, .bubble_4").css("backgroundColor", "#66A3FF");
  });
  $('.n1').click(function () {
     if ($(".service_1").hasClass("none")) {
       $(".service_1").removeClass("none");
       $(".service_1").css("animation-play-state", "running");
       $('h3').addClass("blur");}
    else
    {$(".service_1").toggleClass("none");
     $('h3').toggleClass("blur")};
   });
   $('.n2').click(function () {
      if ($(".service_2").hasClass("none")) {
        $(".service_2").removeClass("none");
        $(".service_2").css("animation-play-state", "running");
        $('h3').addClass("blur");}
     else
     {$(".service_2").toggleClass("none");
      $('h3').toggleClass("blur")};
    });
    $('.n3').click(function () {
       if ($(".service_3").hasClass("none")) {
         $(".service_3").removeClass("none");
         $(".service_3").css("animation-play-state", "running");
         $('h3').addClass("blur");}
      else
      {$(".service_3").toggleClass("none");
       $('h3').toggleClass("blur")};
     });
  $('.n4').click(function () {
     if ($(".service_4").hasClass("none")) {
       $(".service_4").removeClass("none");
       $(".service_4").css("animation-play-state", "running");
       $('h3').addClass("blur");}
    else
    {$(".service_4").toggleClass("none");
     $('h3').toggleClass("blur")};
   });
  $('.n5').click(function () {
     if ($(".service_5").hasClass("none")) {
       $(".service_5").removeClass("none");
       $(".service_5").css("animation-play-state", "running");
       $('h3').addClass("blur");}
    else
    {$(".service_5").toggleClass("none");
     $('h3').toggleClass("blur")};
   });
   $('.n6').click(function () {
      if ($(".service_6").hasClass("none")) {
        $(".service_6").removeClass("none");
        $(".service_6").css("animation-play-state", "running");
        $('h3').addClass("blur");}
     else
     {$(".service_6").toggleClass("none");
      $('h3').toggleClass("blur")};
    });

});
