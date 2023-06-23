$(document).ready(function(){
  // function moveDiv(1) {
  //     var $b1 = $(".bubble_1");
  //
  //     $b1.fadeOut(900, function(1) {
  //         var maxLeft = $(window).width() - $b1.width();
  //         var maxTop = $(window).height() - $b1.height();
  //         var leftPos = Math.floor(Math.random() * (maxLeft + 1))
  //         var topPos = Math.floor(Math.random() * (maxTop + 1))
  //
  //         $b1.css({ left: leftPos, top: topPos }).fadeIn(900);
  //     });
  // };
  // moveDiv(1);setInterval(moveDiv, 20);
  function AnimateIt() {
    var theDiv = $(".bubble_1"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop);

    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }

    theDiv.animate({
        "left": leftPos,
        "top": topPos
    }, 10000, AnimateIt);
}
AnimateIt();
function AnimateIt() {
  var theDiv2 = $(".bubble_2"),
      theContainer2 = $(".container"),
      maxLeft = theContainer2.width() - theDiv2.width(),
      maxTop = theContainer2.height() - theDiv2.height(),
      leftPos = Math.floor(Math.random() * maxLeft),
      topPos = Math.floor(Math.random() * maxTop);

  if (theDiv2.position().left < leftPos) {
      theDiv2.removeClass("left").addClass("right");
  } else {
      theDiv2.removeClass("right").addClass("left");
  }

  theDiv2.animate({
      "left": leftPos,
      "top": topPos
  }, 10000, AnimateIt);
}
AnimateIt();
});
