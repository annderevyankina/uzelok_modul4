$(document).ready(function(){
	$('.n1').click(function(){
    $(".event_1").removeClass("none");
    $(".event_1").css("animation-play-state", "running");
	});
	$('.bubbles').click(function(){
    $(".event_1").addClass("none");
	});
});
