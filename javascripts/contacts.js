$(document).ready(function(){
  $('.n6').click(function () {
       $(".contacts").removeClass("none");
       $(".contacts").css("animation-play-state", "running");
  });
  $('.contacts').click(function () {
       $(".contacts").addClass("none");
  });
});
