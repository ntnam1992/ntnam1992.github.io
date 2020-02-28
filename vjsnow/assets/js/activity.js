$(document).ready(function() {
    

    $(".list_location li").click(function(){
        var tabname = $(this).attr("id");
        $(".js-all").fadeOut(0,"linear");
        $(".list_location li").removeClass("active");
        $(this).addClass("active");
        $(".js-" + tabname).fadeIn(2000,"linear");
        $(".list_location").css("pointer-events","none");
        setTimeout(function(){
            $(".list_location").css("pointer-events","auto");
          }, 1000);
    });
});