$(document).ready(function(){

	$('.n1').click(function(){
    if ($(".event_1").hasClass("none")) {
        $(".event_1").removeClass("none");
        $(".event_1").css("animation-play-state", "running");
      } else {
        $(".event_1").toggleClass("none");
      }


	});

});
