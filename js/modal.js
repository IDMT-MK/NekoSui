$(document).ready(function(){
    if (sessionStorage.getItem('visit')) {
        $(".bg_onetime_popup").css('display', 'block');
    }else {
        sessionStorage.setItem('visit', 'second'); 
        $(".bg_onetime_popup").css('display', 'none');
    }

    $(".bg_onetime_popup").click(function () {
        $(".bg_onetime_popup").css('display', 'none');
        $(".bg_onetime_popup").fadeOut( 2000 );
    });
});