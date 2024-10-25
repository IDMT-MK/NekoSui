$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#spg-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#spg-nav").removeClass('panelactive');
});


$(document).ready(function() {
    var $magic = $(".magic"),
        magicWHalf = $magic.width() / 2;
    $(document).on("mousemove", function(e) {
      $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
    });
  });
