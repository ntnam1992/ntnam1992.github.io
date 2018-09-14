/** create module */
var slider = function(){
	var count = 0;
	var list,play,pause;
	
	
	/** envent onclick button next*/
	function next(){
		count++;
		stopImg();
		if(count >4){
			count = 0;
			list = document.getElementsByClassName("img-slider");
			list[4].classList.remove("act");
			list[count].classList.add("act")
		}else{
			list = document.getElementsByClassName("img-slider");
			list[count-1].classList.remove("act");
			list[count].classList.add("act")
		}
		
		document.getElementsByClassName("small-act")[0].classList.remove("small-act"); //remove class small-act
		document.getElementsByClassName("small-slider")[0].getElementsByTagName("li")[count].classList.add("small-act"); //add class small-acc
	auto();
	}
	
	/** envent onclick button pre*/
	function pre(){
		count--;
		stopImg();
		if(count <0){
			count = 4;
			list = document.getElementsByClassName("img-slider");
			list[0].classList.remove("act");
			list[count].classList.add("act")
		}else{
			list = document.getElementsByClassName("img-slider");
			list[count+1].classList.remove("act");
			list[count].classList.add("act")
		}
		
		document.getElementsByClassName("small-act")[0].classList.remove("small-act");
		document.getElementsByClassName("small-slider")[0].getElementsByTagName("li")[count].classList.add("small-act");
		auto();
		
	}
	
	function auto(){
		 play = setInterval(function(){next()},2000);
	}
	function stopImg(){
		clearInterval(play);
	}
	/**Update Img slider when click inbox image*/
	function clickImg(i){
		count = i;
	var item;
	stopImg();
	var ListSmall = document.getElementsByClassName("small-slider")[0].getElementsByTagName("li")[i];
	item=document.getElementsByClassName("small-act")[0];
	item.classList.remove("small-act");
	ListSmall.classList.add("small-act");
	
	List= document.getElementsByClassName("act")[0];
	List.classList.remove("act");
	List= document.getElementsByClassName("img-slider")[i];
	List.classList.add("act");
	auto();
	}
	return{
		btnnext : next,
		btnpre : pre,
		autoplay : auto ,
		clickimg : clickImg,
		stopImg : stopImg
	};
}();
slider.autoplay();
document.getElementsByClassName("next-btn")[0].addEventListener("click", function(){
		slider.stopImg();
    	slider.btnnext();
		slider.play();
});
document.getElementsByClassName("pre-btn")[0].addEventListener("click", function(){
    	slider.stopImg();
		slider.btnpre();
		slider.play();
});
