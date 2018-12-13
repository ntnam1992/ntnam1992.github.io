var sliderData = '';
$(function() {
	    var topBtn = $('#page-top');   
	    topBtn.hide();
	    //ƒXƒNƒ[ƒ‹‚ª100‚É’B‚µ‚½‚çƒ{ƒ^ƒ“•\Ž¦
	    $(window).scroll(function () {
	        if ($(this).scrollTop() > 2000) {
	            topBtn.fadeIn();
	        } else {
	            topBtn.fadeOut();
	        }
	    });
	    //ƒXƒNƒ[ƒ‹‚µ‚Äƒgƒbƒv
	    topBtn.click(function () {
	        $('body,html').animate({
	            scrollTop: 0
	        }, 500);
	        return false;
	    });
		
		$(window).resize(function() {
			checkSlider();
		});
		getDataJson();
		$(document).on('click', '.slider-slick-js li', function() {
			var data = $(this).find('img');

			$('.video-iframe-js').attr('src',(data.attr('data-src')));
			$('.chapter-js').html(data.attr('data-title'));
			$('.info-chapter-js').html(data.attr('data-subtitle'));
			$('.slider-slick-js li').removeClass('active');
			$(this).addClass('active');
		})
		// checkSlider();
});
function getDataJson() {
	$.getJSON("assets/json/data.json", function(result){
        	var data = result.data;
        	for(i = 0; i < data.length; i++) {
        		var str = ''
        		if(i == 0) {
        			str = 'class="active"';
        		}
    			var itmLi = '<li ' + str + '><a><i><img data-src="' + data[i].url + '" data-title="' + data[i].title + '" data-subtitle="' + data[i].subtitle + '" src="assets/images/img-link'+ data[i].no + '.jpg"></i> Tập ' + data[i].no + '</a></li>';
   				$('.slider-slick-js').append(itmLi);
        	}
        	checkSlider();
        });
}
function checkSlider() {
	widthWindow = $(window).width();
	if(widthWindow <= 980 && sliderData == '') {
		sliderData = $('.slider-slick-js').slick({
		  arrows: false,
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  centerMode: true,
		  variableWidth: true
		});


	} else if(sliderData != '' && widthWindow > 980) {
		$('.slider-slick-js').slick('unslick');	
		sliderData = '';
	}
}

