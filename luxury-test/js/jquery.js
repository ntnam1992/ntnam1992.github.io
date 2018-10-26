$(document).ready(function(){
	$(".js-check").click(function(){
		var test = $(this).hasClass("active");
		if(test == false){
			$(".js-check").removeClass('active');
			$(this).addClass('active');
		}
	});
});