$(document).ready(function(){
	$("button[name=btn-add]").click(function(){

		var productName = $('input[name=product-name]').val();
		console.log(productName.length);
		if(productName == ""){
			alert('Product Name not empty');
			return 0;
		}
		if(productName.length >30){
			alert('Lenght of Name < 30 character');
			return 0;
		}
			$("ol").append("<li>"+productName+"<button>X</button></li>");
			$("li button").addClass('btn-remove');
			$('input[name=product-name]').val("");
		
	});
	$("ol").on("click",".btn-remove",function(){
		$(this).parent('li').remove();
	});
	
});