// JavaScript Document
var thiscanvas = function(){
	var can = document.getElementById("mycanvas");
	var ctx = can.getContext("2d");
	
	/**draw char with Ox and Oy*/
	function drawchar(){
		
		for ( var i = 0 ; i < maxlevel+1;i++){
			ctx.save();
			ctx.font = font;
			ctx.fillText(level[i],xcenter - 20,ycenter-(50*i) + 5);
			ctx.beginPath()			
			ctx.moveTo(xcenter,ycenter-(50*(maxlevel+1)));
			ctx.lineTo(xcenter,ycenter);
			ctx.lineTo(xcenter+(50*maxvalue)+100,ycenter)
			ctx.stroke();
		}
		
	}
	/**draw tittle in char*/
	function drawtittle(){
		ctx.save();
		ctx.font = font;
		ctx.beginPath();
		ctx.fillText(tittleTop,xcenter+ 100,ycenter-(50*(maxlevel+1))-50);
		ctx.fillText(tittleBottom,xcenter+ 100,ycenter+50);
		ctx.translate(25, 350);
   		ctx.rotate(- Math.PI/2);
    	ctx.fillText(tittleLeft,25,25 );
		ctx.restore();
		
	}
	/** draw line in char*/
	function drawline(){
		ctx.strokeStyle = linecolor;
		ctx.lineWidth = 5;
		for( var i = 0;i<maxvalue;i++){
			midvalue = (value[i] + value[i+1])/2;
			ystart = ycenter - (50*value[i]);
			ctx.beginPath();
			 
			if(value[i]< midvalue){
				ctx.moveTo(xstart,ystart);	
				xend = xstart +25;
				yend = (ystart + (ycenter-(50* value[i+1])))/2;
				xcontrol = xend-10;
				ycontrol = ystart;
				ctx.quadraticCurveTo(xcontrol,ycontrol,xend,yend);
				ctx.stroke();
				xstart = xend;
				ystart = yend;
				
				if(midvalue < value[i+1]){
					ctx.moveTo(xstart,ystart);
					xend = xstart +25;
					yend =  (ycenter-(50* value[i+1]));
					xcontrol = xstart+10;
					ycontrol = yend;
					ctx.quadraticCurveTo(xcontrol,ycontrol,xend,yend);
					ctx.stroke();
					xstart = xend;
					ystart = yend;
				}
			}else{
				
				if(value[i]> midvalue){
					ctx.moveTo(xstart,ystart);
					xend = xstart +25;
					yend = (ystart + (ycenter-(50* value[i+1])))/2;
					xcontrol = xend - 10;
					ycontrol = ystart;
					ctx.quadraticCurveTo(xcontrol,ycontrol,xend,yend);
					ctx.stroke();
					xstart = xend;
					ystart = yend;
				}
				
				if(midvalue > value[i+1]){
					ctx.moveTo(xstart,ystart);	
					xend = xstart +25;
					yend =  (ycenter-(50* value[i+1]));
					xcontrol = xstart+10;
					ycontrol = yend;
					ctx.quadraticCurveTo(xcontrol,ycontrol,xend,yend);
					ctx.stroke();
					xstart = xend;
					ystart = yend;
				}else if(value[i] == midvalue){
						ctx.moveTo(xstart,ystart);//ycenter - (50*value[0]));	
						xend = xstart +25;
						yend =  (ycenter-(50* value[i+1]));
						ctx.lineTo(xend+1,yend);
						ctx.stroke();
						xstart = xend;
						ystart = yend;
					}
			
			}
		}
		
	}
	/**Test value of input,value don't more than maxlevel*/
	function testvalue(){
		for ( var i = 0 ; i < maxvalue -1;i++)
			var Mvalue=Math.max(value[i],value[i+1])
			if(Mvalue > maxlevel){
				alert("value more than level");
			}else{
				drawchar();
				drawtittle();
				drawline();
			}
			
	}
	return{
		drawchar:drawchar,
		drawtittle:drawtittle,
		drawline:drawline,
		testvalue:testvalue
		
	}
}();
thiscanvas.testvalue();