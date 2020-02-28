$(document).ready(function(){
    
    var currentActive =  $(".tab_index").find(".active").attr("data-hover");
    var currentUrl =  $(".tab_index").find(".active").attr("data-url");
    var currentLocation = $(".js-content.active").attr("id");
    // createScrollRating();
    $(".maps_region").find("g.hokkaido").css({"fill":"#56cce5"});
    $(".tab_index li").mouseover(function(){
        // $(".tab_index li").removeClass("active");
        $(this).addClass("active1");
        var url = $(this).attr("data-url");
        $(".banner").css('background','url(' + url + ')');
        var index = $(this).attr("data-hover");
        $(".index-banber span").removeClass("active");
        $("#banner-" + index).addClass("active")
    })
    $(".tab_index li").mouseleave(function(){

        if($(this).hasClass("active") == false){
            $(".tab_index li").removeClass("active1");
            $(".index-banber span").removeClass("active");
            $("#banner-" + currentActive).addClass("active");
            $(".banner").css('background','url(' + currentUrl + ')');
            // $(".tab_index li").removeClass("active");
            // $(this).addClass("active");

        }else{
            $(".tab_index li").removeClass("active1");
        }
      


    });
    $('.variable-width').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        // variableWidth: true
        centerPadding : '25%',
        responsive: [
            {
                breakpoint: 1054,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    centerPadding : '80px',
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding : '15%',
                    // variableWidth: true,
                    // focusOnSelect: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding : '15%',
                    // variableWidth: true,
                    // focusOnSelect: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding : '15%',
                    // variableWidth: true,
                    // focusOnSelect: true
                }
            }
        ]
      });
      $('.variable-width1').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        // variableWidth: true
        centerPadding : '25%',
        responsive: [
            {
                breakpoint: 1054,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    centerPadding : '80px',
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding : '15%',
                    // variableWidth: true,
                    // focusOnSelect: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding : '15%',
                    // variableWidth: true,
                    // focusOnSelect: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding : '15%',
                    // variableWidth: true,
                    // focusOnSelect: true
                }
            }
        ]
      });
    //   $('.slider_map').slick({
    //       dots:false,
    //       infinite: true,
    //       focusOnSelect: false
    //   });
    $('.intro_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
    //   variableWidth: true,
      focusOnSelect: true,
        
    });
    // var slidetourPadding = ($("body").outerWidth() - $(".container").width())/2;
    // $('.intro_slider').owlCarousel({
	//     loop: true,
	//     margin: 10,
	//     nav: false,
    //     dots: false,
    //     items: 1,
	//     // autoplay: true,
	//     // autoplayTimeout: 1000,
	//     autoplayHoverPause: true,
    //     responsiveClass: true,
       
	//     responsive:{
	//         0:{
	//             items: 1,
	//         },
	//         480:{
	//             items: 1,
	//             stagePadding: 30,
	//         },
	//         768:{
	//             items: 1,
	//             stagePadding: 30,
	//         },
	//         1024:{
	//             items: 1,
	//             stagePadding: slidetourPadding,
	//         }
	//     }
    // });
      $(".tab_index li").click(function(){
        $(".tab_index li").removeClass("active");
        $(".tab_index li").removeClass("active1");
        $(".tab_index li").attr("data-active","0");
        $(this).addClass("active");
        $(".banner").css('background','url(' + url + ')');
        currentActive =  $(".tab_index").find(".active").attr("data-hover");
        // var index = $(this).attr("data-hover");
        // $(".index-banber span").removeClass("active");
        // $("#banner-" + index).addClass("active");
      });
     
        $('.slider_content1').slick({
            dots: false,
            infinite: true,
            asNavFor: '.slider-for',
            slidesToShow: 4,
            slidesToScroll: 1,
            // centerMode: true,
            // variableWidth: true,
            // focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1054,
                    settings: {
                        centerPadding:"80px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        infinite: true,
                        dots: false,
                        centerMode: true,
                        
                        // variableWidth: true,
                        // focusOnSelect: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding:"40px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        // asNavFor: '.slider-for',
                        infinite: true,
                        dots: false,
                        centerMode: true,
                        
                        // variableWidth: true,
                        // focusOnSelect: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerPadding:"40px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        infinite: true,
                        dots: false,
                        centerMode: true,
                        
                        // variableWidth: true,
                        // focusOnSelect: true
                    }
                }
            ]
        });
        $('.slider_content3').slick({
            dots: false,
            infinite: true,
            asNavFor: '.slider-for',
            slidesToShow: 4,
            slidesToScroll: 1,
            // centerMode: true,
            // variableWidth: true,
            // focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1054,
                    settings: {
                        centerPadding:"80px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        infinite: true,
                        dots: false,
                        centerMode: true,
                        
                        // variableWidth: true,
                        // focusOnSelect: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding:"40px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        infinite: true,
                        dots: false,
                        centerMode: true,
                        
                        // variableWidth: true,
                        // focusOnSelect: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerPadding:"40px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        infinite: true,
                        dots: false,
                        centerMode: true,
                        
                        // variableWidth: true,
                        // focusOnSelect: true
                    }
                }
            ]
        });
        $('.slider_content2').slick({
            dots: false,
            infinite: true,
            asNavFor: '.slider-for',
            slidesToShow: 4,
            slidesToScroll: 1,
            // centerMode: true,
            // variableWidth: true,
            // focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1054,
                    settings: {
                        centerPadding:"80px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        infinite: true,
                        dots: false,
                        centerMode: true,
                       
                        // variableWidth: true,
                        // focusOnSelect: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding:"40px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        // asNavFor: '.slider-for',
                        infinite: true,
                        dots: false,
                        centerMode: true,
                        
                        // variableWidth: true,
                        // focusOnSelect: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerPadding:"40px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        infinite: true,
                        dots: false,
                        centerMode: true,
                        
                        // variableWidth: true,
                        // focusOnSelect: true
                    }
                }
            ]
        });
        
      $(".slick-prev,.slick-next").html("");
      if($(window).width() <= 1054){
        // if($(".maps_info1").hasClass("slick-initialized") == false){
            $('.maps_info1').slick({
                // dots:false,
                // infinite: true,
                // centerMode: true,
                // centerPadding: '10px',
                // slidesToShow: 1,
                // slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1054,
                        settings: {
                            centerPadding: '80px',
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            asNavFor: '.slider-for',
                            infinite: true,
                            dots: false,
                            centerMode: true,
                            // variableWidth: true,
                            // focusOnSelect: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            asNavFor: '.slider-for',
                            infinite: true,
                            dots: false,
                            centerMode: true,
                            // variableWidth: true,
                            // focusOnSelect: true
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            asNavFor: '.slider-for',
                            infinite: true,
                            dots: false,
                            centerMode: true,
                            // variableWidth: true,
                            // focusOnSelect: true
                        }
                    }
                ]
            });
        // }
    }
    // var widthContent = $(window).width() - 50  ;

      $(window).resize(function(){
        $(".slick-prev,.slick-next").html("");
        if($(window).width() <= 768){
            $(".switch").each(function(){
                $(this).attr("src",  $(this).attr("src").replace("-pc.png","-sp.png"));
            })
            
        }
        if($(window).width() <= 1054){
            if($(".maps_info1").hasClass("slick-initialized") == false){
                $('.maps_info1').slick({
                    // dots:false,
                    // infinite: true,
                    // centerMode: true,
                    // centerPadding: '10px',
                    // slidesToShow: 1,
                    // slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 1054,
                            settings: {
                                centerPadding: '30px',
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                asNavFor: '.slider-for',
                                infinite: true,
                                dots: false,
                                centerMode: true,
                                // variableWidth: true,
                                // focusOnSelect: true
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                centerPadding: '50px',
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                asNavFor: '.slider-for',
                                infinite: true,
                                dots: false,
                                centerMode: true,
                                // variableWidth: true,
                                // focusOnSelect: true
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                centerPadding: '50px',
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                asNavFor: '.slider-for',
                                infinite: true,
                                dots: false,
                                centerMode: true,
                                // variableWidth: true,
                                // focusOnSelect: true
                            }
                        }
                    ]
                });
            }
        }
        // var widthContent = $(window).width() - 50  ;
      });
    
        
        // var widthContent = $(window).width() - 50  ;
        // console.log(widthContent);
        // $('.maps_info1').find(".slick-slide").css({"min-width": widthContent});

    
      $(".js-area").mouseover(function(){
        var location = $(this).attr("maps-view");
        // $(".js-content").each(function(){
            // if($(".js-content").hasClass("d_none") == false){
                $(".js-content").removeClass("active");
            // }
        // });
        $("#" + location).addClass("active");
      });
      $(".js-area").mouseleave(function(){
        // var location = $(this).attr("maps-view");
        // console.log(location);
        // // $(".js-content").each(function(){
        //     // if($(".js-content").hasClass("d_none") == false){
        //         $(".js-content").removeClass("active");
        //     // }
        // // });
        $(".js-content").removeClass("active");
        $("#" + currentLocation).addClass("active");
      });
        var getId;
      $(".btn-prev").click(function(){
         
        var currentpre = $(".js-content.active").attr("data-index");
        // console.log(getId);
        if(currentpre == 0 ){
            currentpre = 6;
        }
        currentpre = parseInt(currentpre);
        $(".js-content.active").removeClass("active");
        $(".slider_map").find(".js-content").eq(currentpre - 1).addClass("active");
        getId = $(".js-content.active").attr("id");
        console.log(getId);
        $(".js-area.active").removeClass("active");
        $(".maps_region").find(".js-area").css({"fill":"#ffffff"});
        $(".maps_region").find("g." + getId).css({"fill":"#56cce5"});
        console.log($(".maps_region").find("." + getId));
        currentLocation = getId;
      });
      $('.maps_info1').on('swipe', function(event, slick, direction){
       
        var indexSit = $('.maps_info1').find(".slick-current").find(".js-content").attr('id');
        $(".js-area.active").removeClass("active");
        $(".maps_region").find(".js-area").css({"fill":"#ffffff"});
        $(".maps_region").find("g." + indexSit).css({"fill":"#56cce5"});
        console.log(indexSit);
      });
      $(".btn-next").click(function(){
        
        var currentnext = $(".js-content.active").attr("data-index");
        if(currentnext == 5 ){
            currentnext = -1;
        }
        currentnext = parseInt(currentnext);
        $(".js-content.active").removeClass("active");
        $(".slider_map").find(".js-content").eq(currentnext + 1).addClass("active");
        getId = $(".js-content.active").attr("id");
        $(".maps_region").find(".js-area").css({"fill":"#ffffff"});
        $(".maps_region").find("g." + getId).css({"fill":"#56cce5"});
        $(".js-area").removeClass("active");
        $("." + getId).addClass("active");
        currentLocation = getId;
      });
      
});
