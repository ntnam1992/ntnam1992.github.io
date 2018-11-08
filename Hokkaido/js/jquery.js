$(document).ready(function(){
	var str = window.location.href;
	console.log(str);


	$('.contentJs').each(function() {
		var thisHeight = $(this)[0].clientHeight;
		$(this).attr({'data-height': thisHeight});
	});







	if(str.indexOf('#') != -1 ){
		str = str.split("#")[1];	
		var heightActDiv = $('.' + str)[0].clientHeight;
		$('.'+ str).css({height: 0});
		$('.'+ str).animate({height: heightActDiv + 40 + 'px'}, 2000, function() {
			$('.'+ str).addClass('change-active');
		});
	}

	


	$(".js-sub").click(function(){
		$(this).parent().find(".js-sub").removeClass("click-hide");
		$(this).addClass("click-hide");
		var status = $(this).hasClass("js-add");
		console.log($(this).parent().parent().parent().find('.change-active'));
		if(status == true){
			var idName=$(this).parent().find('.avata').attr('id');
			var thisHeight = $(this).parent().parent().parent().find('.'+ idName).attr('data-height');
			$(this).parent().parent().parent().find('.'+ idName).animate({height : thisHeight + 40 + 'px'},2000,
			function(){
				$(this).parent().parent().parent().find('.'+ idName).addClass('change-active');
			});
			timeOut();
			
			console.log($(this).parent().parent().parent().find('.'+ idName));
		}else{
			var idName=$(this).parent().find('.avata').attr('id');
			var thisHeight = $(this).parent().parent().parent().find('.'+ idName).attr('data-height');
			console.log($(this).parent().parent().parent().find('.'+ idName))	;
			$(this).parent().parent().parent().find('.change-active').removeClass('change-active');
			$(this).parent().parent().parent().find('.'+ idName).animate({height : 0},1500);
			timeOut();
			// $(this).parent().parent().parent().find('.'+ idName).animate({'height':0},2000)
		}
	});
	// function animate($(this)){
		
	// }
		function timeOut() {
    	$(".js-event").css({pointerEvents:'none'});
    	setTimeout(function(){
	     $(".js-event").css({pointerEvents:'auto'})
	 	},2000 );
	}
});
