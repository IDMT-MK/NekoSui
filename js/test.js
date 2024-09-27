$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#spg-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#spg-nav").removeClass('panelactive');
});


