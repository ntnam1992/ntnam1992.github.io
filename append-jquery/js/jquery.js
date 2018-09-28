$(document).ready(function(){
	$("button[name=btn-add]").click(function(){

		var productName = $('input[name=product-name]').val();
		if(productName == ""){
			return 0;
		}else{
			$("ol").append("<li>"+productName+"<button>X</button>"+"</li>");
			$("li button").addClass('btn-remove');
			$('input[name=product-name]').val("");
		}
	});
	$("ol").on("click",".btn-remove",function(){
		$(this).parent('li').remove();
	});
	
});