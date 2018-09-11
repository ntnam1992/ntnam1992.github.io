
var count =0;
var auto;
var List;
var btnPause;
var ListSmall;
/** event onclick button next*/
function next() {	
	count++;
	if (count>4){
		count = 0;
		List= document.getElementsByClassName("img-slide");// lay ra list cac li
		List[4].classList.remove("act");
		List[count].classList.add("act")
	}
	else{
		List= document.getElementsByClassName("img-slide");
		List[count-1].classList.remove("act");
		List[count].classList.add("act");
	}
	document.getElementsByClassName("small-act")[0].classList.remove("small-act");
	document.getElementsByClassName("small-img")[0].getElementsByTagName("li")[count].classList.add("small-act");
}
/** event onclick button pre*/
function pre() {
	count--;
	if (count<0){
		count = 4;
		List= document.getElementsByClassName("img-slide");
		List[0].classList.remove("act");
		List[count].classList.add("act")
	}
	else{
		List= document.getElementsByClassName("img-slide");
		List[count+1].classList.remove("act");
		List[count].classList.add("act");
	}
	document.getElementsByClassName("small-act")[0].classList.remove("small-act");
	document.getElementsByClassName("small-img")[0].getElementsByTagName("li")[count].classList.add("small-act");
}
function play() {
	auto = setInterval(function(){next()},2000);
}
play();
/**Update Img slider when click inbox image*/
function clickImg(i){
	count = i;
	var item;
	var ListSmall = document.getElementsByClassName("small-img")[0].getElementsByTagName("li")[i];
	item=document.getElementsByClassName("small-act")[0];
	item.classList.remove("small-act");
	ListSmall.classList.add("small-act");
	
	List= document.getElementsByClassName("act")[0];
	List.classList.remove("act");
	List= document.getElementsByClassName("img-slide")[i];
	List.classList.add("act");
}
