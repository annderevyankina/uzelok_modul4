$(document).ready(function(){
	$('.n1').click(function () {
		 if ($(".event_1").hasClass("none")) {
			 $(".event_1").removeClass("none");
			 $(".event_1").css("animation-play-state", "running");
			 $('h3').addClass("blur");}
			 else
			{$(".event_1").toggleClass("none");
			 $('h3').toggleClass("blur")};
		 });
	$('.n2').click(function () {
 		 if ($(".event_2").hasClass("none")) {
 			 $(".event_2").removeClass("none");
 			 $(".event_2").css("animation-play-state", "running");
 			 $('h3').addClass("blur");}
 			 else
 			{$(".event_2").toggleClass("none");
 			 $('h3').toggleClass("blur")};
 		 });
	 $('.n3').click(function () {
			 if ($(".event_3").hasClass("none")) {
				 $(".event_3").removeClass("none");
				 $(".event_3").css("animation-play-state", "running");
				 $('h3').addClass("blur");}
				 else
				{$(".event_3").toggleClass("none");
				 $('h3').toggleClass("blur")};
			 });
	 $('.n4').click(function () {
			 if ($(".event_4").hasClass("none")) {
				 $(".event_4").removeClass("none");
				 $(".event_4").css("animation-play-state", "running");
				 $('h3').addClass("blur");}
				 else
				{$(".event_4").toggleClass("none");
				 $('h3').toggleClass("blur")};
			 });
	 $('.n5').click(function () {
			if ($(".event_5").hasClass("none")) {
				$(".event_5").removeClass("none");
				$(".event_5").css("animation-play-state", "running");
				$('h3').addClass("blur");}
				else
			 {$(".event_5").toggleClass("none");
				$('h3').toggleClass("blur")};
			});
	$('.n6').click(function () {
		 if ($(".event_6").hasClass("none")) {
			 $(".event_6").removeClass("none");
			 $(".event_6").css("animation-play-state", "running");
			 $('h3').addClass("blur");}
			 else
			{$(".event_6").toggleClass("none");
			 $('h3').toggleClass("blur")};
		 });
 	$('.n7').click(function () {
		if ($(".event_7").hasClass("none")) {
			$(".event_7").removeClass("none");
			$(".event_7").css("animation-play-state", "running");
			$('h3').addClass("blur");}
			else
		 {$(".event_7").toggleClass("none");
			$('h3').toggleClass("blur")};
		});
});
