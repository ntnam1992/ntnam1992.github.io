$(document).ready(function(){
  $(".js-check").click(function(){
    clickCheck();
  });
  $( ".js-select" ).change(function() {
    var valueOption = $(this).val();
    var ipOption = $(this).parent().find(".js-option");
    ipOption.text(valueOption);
  });
  function clickCheck(){
    if($("#check-accept").is(":checked")){
		console.log($("#check-accept").is(":checked"));
      $(".js-check-on,.js-check-off").removeClass("active")
      $(".js-check-on").addClass("active")
    }else{
      $(".js-check-on,.js-check-off").removeClass("active")
      $(".js-check-off").addClass("active")
    }
  }
});

    