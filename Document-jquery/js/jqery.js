$(document).ready(function(){
    var blueOffset=$('.blue').offset().top;
	var redOffset=$('.red').offset().top;
	var greenOffset=$('.green').offset().top;
	var orgOffset=$('.orange').offset().top;
	var pinkOffset=$('.pink').offset().top;
    $(window).scroll(function(){
    	var wdOffset=$(window).scrollTop();
    	if(wdOffset >= blueOffset){
    		changeColor($('.blue'), 0);
    	}
    	if(wdOffset >= greenOffset){
    		changeColor($('.green'), 1);
    	}
    	if(wdOffset >= pinkOffset){    		
    		changeColor($('.pink'), 2);
    	}
    	if(wdOffset >= redOffset){    		
    		changeColor($('.red'), 3);
    	}
    	if(wdOffset >= orgOffset){
    		// $('.menu li').css('color','#000000');
    		// var color = $('.orange').css('background-color');
    		// $('.menu li').eq(4).css('color',color);
    		changeColor($('.orange'), 4);
    	}
	});

});
function changeColor(element, index) {
	$('.menu li').css('color','#000000');
	var color = element.css('background-color');
	$('.menu li').eq(index).css('color',color);
}