$(document).ready(function(){
	$(".js-check").click(function(){
		var test = $(this).find("img").hasClass("active");
		if(test == false){
			$(this).find("img").addClass("active");
			$(this).parent().find("input").removeClass("active");
		}else{
			$(this).find("img").removeClass("active");
			$(this).parent().find("input").addClass("active");
		}
	});
});