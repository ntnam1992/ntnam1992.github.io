$(document).ready(function(){
	var str = window.location.href;
	// console.log(str);

	// console.log($(".btn-close"));
	$('.status-close').slideUp(0)
	// $('.contentJs').each(function() {
	// 	var thisHeight = $(this)[0].clientHeight;
	// 	$(this).attr({'data-height': thisHeight});
	// });







	if(str.indexOf('#') != -1 ){
		str = str.split("#")[1];	
		var heightActDiv = $('.' + str)[0].clientHeight;
		// $('.'+ str).css({height: 0});
		// $('.'+ str).animate({height: parseInt(heightActDiv)  + 40 + 'px'}, 2000, function() {
		// 	$('.'+ str).addClass('change-active');
		// });

		$('.'+ str).slideDown('slow');
		$('#'+ str).parent().find(".js-sub").find("img").attr('src','images/activity/icon-sub.jpg');
		$('#'+ str).parent().find(".js-sub").removeClass('click-active');
	}

	
	$(".content__avata").click(function(){
		var idName = $(this).find(".avata").attr("id");
		var status = $(this).find(".js-sub").eq(0);
		console.log(status);
		if(status.hasClass('click-active') == true){
			status.removeClass('click-active');
			$(this).find(".js-sub").find("img").attr('src','images/activity/icon-sub.jpg');
			$(this).parent().parent().find('.'+ idName).slideDown('slow');
			timeOut();
		}else{
			status.addClass('click-active');
			$(this).find(".js-sub").find("img").attr('src','images/activity/icon-add.jpg');
			$(this).parent().parent().find('.'+ idName).slideUp('slow');
			timeOut();
		}

	});

	$(".btn-close1").click(function(){
		var idName = $(this).attr('data-name');
		$('#' + idName).parent().find('.js-sub').addClass('click-active');
		$('#' + idName).parent().find('.js-sub').find('img').attr('src','images/activity/icon-add.jpg');
		$('.' + idName).slideUp('slow');

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
