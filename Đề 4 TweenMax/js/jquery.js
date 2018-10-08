$(document).ready(function(){
	var list = [
		'.js-leaf1','.js-leaf2','.js-leaf3','.js-leaf4','.js-leaf5','.js-leaf6','.js-leaf7','.js-leaf8','.js-leaf9','.js-leaf10','.js-leaf11','.js-leaf12',
		'.js-leaf13','.js-leaf14','.js-leaf15','.js-leaf16','.js-leaf17','.js-leaf18','.js-leaf19','.js-leaf20',
	];
	// var objTmp = {
	// 	top: 100,
	// 	left: 200,
	// 	width: 300,
	// };
	// objTmp['top']
	// objTmp.top = 400;
	
		
	var number = Math.floor(Math.random() * 12);
	// var tl = new TimelineLite({onComplete:leafAnimate});
	// tl.set('.leaf1',{y:-100});
	//TweenMax.staggerTo(".leaf1", 3, {rotation:360, ease:Linear.easeNone, repeat:-1}, 0.5);
	function leafAnimate(){
		
		for(var i = 0; i < 21 ; i++ ){
			var thisLeaf = $(list[i]);
			var valObject = ramdomValue();
			thisLeaf.css({left:valObject.startLeft});
			TweenMax.staggerTo(thisLeaf, valObject.run, {rotation:valObject.rotation, y:800 , x:valObject.x,delay:valObject.timedelay,transformOrigin:"left top",rotationX:valObject.rotationX, onComplete:nextAnimate, onCompleteParams:[thisLeaf]},0.5	);	
		
		}
		
		
		//$('.leaf1').css('top','-100px');

	}
	function nextAnimate(obj) {
		TweenMax.set(obj, { y:-100});
		var valObject = ramdomValue();
		TweenMax.staggerTo(obj, valObject.run, {rotation:valObject.rotation, y:800 , x:valObject.x,transformOrigin:"left top",rotationX:valObject.rotationX, onComplete:nextAnimate, onCompleteParams:[obj]});
		
	}
	function ramdomValue(){
		var screenWidth = $(window).width();
		var objTmp = {
			rotation: Math.floor(Math.random() * 360),
			rotationX: Math.floor(Math.random() * 360),
			x: Math.floor(Math.random() * 250),
			timedelay: Math.random() * 10,
			//run:Math.floor(Math.random() * 8),
			run:5,
			startLeft:Math.floor(Math.random() * screenWidth),
			
		};
		// var time = parseFloat(objTmp.timedelay).toFixed(1);
		return objTmp;
	}
	leafAnimate();
	// function auto(){
	// 	setInterval(function(){leafAnimate()},5000);
	// }
});