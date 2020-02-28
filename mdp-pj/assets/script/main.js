$(document).ready(function(){
  // script slider slick
      $('.js-slider').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '175px',
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 950,
            settings: {
              centerPadding: '140px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 850,
            settings: {
              // arrows:false,
              // centerPadding: '90px',
              slidesToShow: 1,
              centerMode: true,
              variableWidth: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              // arrows:false,
              centerPadding: '40px',
              slidesToShow: 1,
              centerMode: true,
              variableWidth: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              // arrows:false,
              centerPadding: '40px',
              slidesToShow: 1,
              centerMode: true,
              variableWidth: true
            }
          }
        ]
      });

  // script change tab calender
  $("#tab2").fadeOut();
  $('.js-tab').click(function(){
    $(".js-tab").removeClass("active");
    $(this).addClass("active");
    var tabId =  $(this).attr("data-tab");
    if(tabId == "tab2"){
      $('#tab2').fadeIn();
      $('#tab1').fadeOut();
      $(".js-dot").removeClass("active");
      $(".js-dot-two").addClass("active");
    }else{
      $('#tab2').fadeOut();
      $('#tab1').fadeIn(1000);
      $(".js-dot").removeClass("active");
      $(".js-dot-one").addClass("active");
    }
  });
    // Add smooth scrolling to all links
  $(".js-scroll-title").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = $(this).attr("href");

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //open modal 
  $("#modal-open-1,#modal-open-2,#modal-open-3,#modal-open-4").fadeOut();
  $('.js-modal').click(function(){
    var data = $(this).attr("data-modal");
    $("#body").addClass("overflow-hidden");
    $(".modal__back").css("display","block");
    $("#" + data).fadeIn();
    var modalID = $(this).attr("id");
    var myItems;
    $.getJSON('assets/json/data.json',function(data){
      myItems = data.modal1.titleDate;
     
      console.log(myItems,modalID);
    });
  });
  $('.js-close').click(function(){
    $("#body").removeClass("overflow-hidden");
    $(".modal__back").css("display","none");
    $('.js-hide').fadeOut(1000);
  });
  //scroll to top
  $(function() {

      var top = $(".js-top-position").offset().top;
      var topBtn = $('.js-scroll-top');   
      topBtn.hide();
      $(window).scroll(function () {
          if ($(this).scrollTop() > top) {
              topBtn.fadeIn();
          } else {
              topBtn.fadeOut();
          }
      });
      topBtn.click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 500);
          return false;
      });
    })
    
   $(".js-header").click(function(){
     if($(".js-hd-close").hasClass("active") == true){
      $(".js-hd-close").slideDown();
      $(".js-hd-close").removeClass("active");
     }else{
      $(".js-hd-close").slideUp();
      $(".js-hd-close").addClass("active");
     }
    });
   
    
});
