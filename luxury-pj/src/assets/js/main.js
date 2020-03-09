$(document).ready(function(){
    $(".js-check").click(function(){

      $('#check_accept').change(function () {
        if($(this).is(':checked')) {
          $(".js-check-on,.js-check-off").removeClass("active");
          $(".js-check-off").addClass("active");
            return;
        }
        $(".js-check-on,.js-check-off").removeClass("active");
        $(".js-check-on").addClass("active");
  
      });

    });
    
    $( ".js-select" ).change(function() {
      var valueOption = $(this).val();
      var ipOption = $(this).parent().find(".js-option");
      ipOption.text(valueOption);
    });

  });

    