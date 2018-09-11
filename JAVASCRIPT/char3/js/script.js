// JavaScript Document
var thiscanvas = function(){
	var can = document.getElementById("mycanvas");
	var ctx = can.getContext("2d");
	
	
	/**draw char */
	function drawcircle(){
		var tmp = 0;
		var sum = 0;
		for(var i = 0;i <5;i++){
			ctx.save();
			ctx.fillStyle=colors[i];
			
			//ctx.fillStyle = "#ff0000";
			//ctx.strokeStyle = 'green';
			ctx.beginPath();
			ctx.arc(xcenter, ycenter, radius,tmp,2*Math.PI*(rate[i] + sum)/100);
			
			tmp = 2*Math.PI*(rate[i] + sum)/100;
			sum = sum + rate[i];
			ctx.lineTo(xcenter, ycenter); 
			ctx.fill();
			ctx.restore();
			
		}
				
	}
	/**draw white circle  inside char */
	function drawsmallcircle(){
		ctx.save();	   
	    ctx.beginPath();
		ctx.fillStyle=colors[4];
		ctx.arc(xcenter, ycenter, sradius,0,2*Math.PI);
		ctx.fill();
		ctx.restore();
	}
	
	/** draw note */
	function drawnote(){
		var range = 30;
		
		for (var i = 0 ; i < 4 ; i++){
			ctx.save();
			ctx.font = font;
			ctx.fillStyle = colors[i];
			if( i == 0){
				
				ctx.fillRect( xcenter +300 , ycenter - 100  , 20 ,20);
				ctx.fillText(note[i],xcenter +350, ycenter - 82  );
				
			}else{
				ctx.fillRect( xcenter +300 , ycenter - 100 + range , 20 ,20);
				ctx.fillText(note[i],xcenter +350, ycenter - 82 + range );
				range = range + 30;
				
			}
			ctx.restore();
		}
		
	}
	
	/** test rate if over more than 100% alert fail*/
	function testrate(){
		var sum = rate[0]+rate[1]+rate[2]+rate[3];
		if(sum > 100){
			alert("rate over more than 100%");
		}else{
			if(sum <100){
				alert("rate low than 100%");
			}else{
				drawcircle();
				drawsmallcircle();
				drawnote();
				fillvalue();
			}
		}
	}
	
	/** draw percent in char*/
	function fillvalue(){
		var sum = 0;
		var xstart = 550;
		var ystart = 300;
		
		for(var i = 0; i <4 ; i++){	
			ctx.font = font;			
			var anpha = 2*Math.PI*(rate[i]+sum)/100;
			
			var xend = xcenter + ((radius)* Math.cos(anpha));
			var yend = ycenter+  ((radius)* Math.sin(anpha));
			var xposition = ((xstart + xend)/2);
			var yposition = ((ystart + yend)/2);
			
			
			var long = Math.sqrt((xposition - xcenter)*(xposition - xcenter) + (yposition - ycenter)*(yposition - ycenter));
			
			if(rate[i] >= 50&& i == 0){
				xposition = 400;
				yposition = 420;
				ctx.fillText(rate[0] + "%",xposition ,yposition);
				
			}else{
				if(rate[i] >= 50 && i == 1){
					xposition = 320;
					yposition = 420;
					ctx.fillText(rate[i] + "%",xposition ,yposition);
					
				}else{
					if(rate[i] >= 50 && i == 3){
						xposition = 400;
						yposition = 180;
						ctx.fillText(rate[i] + "%",xposition ,yposition);
						
					}else{
						if(rate[i] >= 50 && i == 2){
							xposition = 280;
							yposition = 300;
							ctx.fillText(rate[i] + "%",xposition ,yposition);
							
						}
					}
							
				}
			}
			if(rate[i]<50){
				
						if(xposition > xcenter && xposition > xcenter +sradius){
							ctx.fillText(rate[i] + "%",xposition-35 ,yposition);
							
						}else{
							
							if(yposition < ycenter  && yposition < ycenter - sradius && xposition > xcenter){
								ctx.fillText(rate[i] + "%",xposition ,yposition +40 );
								
						}else{
							
							if(yposition > ycenter  && yposition > ycenter + sradius && xposition >= xcenter){
								ctx.fillText(rate[i] + "%",xposition ,yposition+15);
								
							}else{
								
								if(yposition > ycenter  && yposition < ycenter + sradius && xposition < xcenter){
									ctx.fillText(rate[i] + "%",xposition ,yposition+25);
									
								}else{
									ctx.fillText(rate[i] + "%",xposition ,yposition);
									
								}		
							}
						}
					}

			}
			xstart = xend;
			ystart = yend;
			sum = sum + rate[i];
		}	
		
	}
	return{
		drawcircle:drawcircle,
		drawsmallcircle: drawsmallcircle,
		drawnote:drawnote,
		testrate:testrate,
		fillvalue:fillvalue,
	}
}();
thiscanvas.testrate();
