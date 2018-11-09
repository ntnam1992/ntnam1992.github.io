$(document).ready(function(){
	var str = window.location.href;
	// console.log(str);

	// console.log($(".btn-close"));
	$('.contentJs').each(function() {
		var thisHeight = $(this)[0].clientHeight;
		$(this).attr({'data-height': thisHeight});
	});







	if(str.indexOf('#') != -1 ){
		str = str.split("#")[1];	
		var heightActDiv = $('.' + str)[0].clientHeight;
		$('.'+ str).css({height: 0});
		$('.'+ str).animate({height: parseInt(heightActDiv)  + 40 + 'px'}, 2000, function() {
			$('.'+ str).addClass('change-active');
		});
	}

	
	$(".content__avata").click(function(){
		var idName = $(this).find(".avata").attr("id");
		var status = $(this).find(".js-sub").eq(0);
		console.log(status);
		if(status.hasClass('click-hide') == false && status.hasClass('js-add') == false){
			status.addClass('click-hide');
			$(this).find(".js-add").removeClass('click-hide');
			$(this).parent().parent().find('.'+ idName).removeClass('change-active');
			$(this).parent().parent().find('.'+ idName).animate({height : 0},1500);
			timeOut();
			for( var i = 0 ; i < 12 ; i++ ){
				$(this).parent().parent().parent().parent().find('.btn-close');
				if($(this).parent().parent().parent().parent().find('.btn-close').eq(i).attr('data-name') == idName){
					$(this).parent().parent().parent().parent().find('.btn-close').eq(i).fadeOut(1500);
				}
			}
		}else{
			status.removeClass('click-hide');
			$(this).find(".js-add").addClass('click-hide');
			var thisHeight = $(this).parent().parent().find('.'+ idName).attr('data-height');
			 $(this).parent().parent().find('.'+ idName).animate({height : parseInt(thisHeight)  + 40 + 'px'},2000,
			 function(){
				$(this).parent().parent().parent().find('.'+ idName).addClass('change-active');
			});
			timeOut();
			for( var i = 0 ; i < 12 ; i++ ){
				$(this).parent().parent().parent().parent().find('.btn-close');
				if($(this).parent().parent().parent().parent().find('.btn-close').eq(i).attr('data-name') == idName){
					$(this).parent().parent().parent().parent().find('.btn-close').eq(i).fadeIn(2000);
				}
			}	
		}

	});

	$(".btn-close").click(function(){
		var idName = $(this).attr('data-name');
		console.log( $('#' + idName));
		$('#' + idName).parent().find('.js-sub').addClass('click-hide');
		$('#' + idName).parent().find('.js-add').removeClass('click-hide');
		$('.' + idName).removeClass('change-active');
		$('.' + idName).animate({height : 0},1500);
		$(this).fadeOut(1500);
	});
	// }
		function timeOut() {
    	$(".js-event").css({pointerEvents:'none'});
    	setTimeout(function(){
	     $(".js-event").css({pointerEvents:'auto'})
	 	},2000 );
	}


	function menuSP(parent, act, down, up) {
		var child = $(parent + ' > span').children();
		$(parent + ' > span').html($(parent + ' ul').find(act).html()).append(child);
		$(parent + ' > span').click(function() {
			$(parent + ' ul').slideToggle(600, function() {
				if($(this).is(':hidden')) {
					$(this).prev('span').children('i').css('background-image',down);
				}
				else {
					$(this).prev('span').children('i').css('background-image',up);
				}
			});
		});
	};
	menuSP('.js-province', '.active .title-sp > span', 'url(images/destination_arrow_down.png)', 'url(images/destination_arrow_up.png)');

});
