$(document).ready(function(){
	var maxHeight = 0;
	var flag = 0;
    $(window).scroll(function(){
	    if(maxHeight == 0) {
	    	maxHeight = $(document).height();
	    }
	    if(($(window).scrollTop() + $(window).height()) >= maxHeight && flag == 0) {
	    	flag = 1;
	    	$('body').addClass("act");
	    	$('ul li .js-main').each(function(i) {
	    		i += 1;
	    		$(this).attr("src", $(this).attr("src").replace(i + ".jpg", i + "_hornor.jpg"));
	    	});
	    	$("html, body").animate({ scrollTop: 0 }, 5000);
	    	$('.header__info img').attr("src",$('.header__info img').attr("src").replace(".png","-hornor.png"));
	    }
	});
});