
//这是title 中央四个快捷方块的js部分

  //这是阻止鼠标滚轮事件
//$(window).bind("wheel",function(ev){
//	var e=ev||window.event;
//  e.preventDefault();
//  return false;
//});


function Scroll(){
	$(window).scroll(function(){
		var Top = document.documentElement.scrollTop+document.body.scrollTop;
		var Height=$("body").height();
	//	$('#title').css("filter","blur("+Top/150+"px)").css("-webkit-filter","blur("+Top/150+"px)");
		/*fixtitle的固定定位设置(固定导航栏)*/
		if(Top>=(Height*0.5)){
			$('#fixtitle').fadeIn();
		}else{
			$('#fixtitle').fadeOut();
		}
		if(Top>=(Height*0.25)){
			$('.tlebox').eq(0).css({"-webkit-transform":"translateX("+(Height*0.5)+"px) translateY("+(Height*0.5)+"px) rotate("+(-90)+"deg) rotateY("+(90)+"deg)"});
			$('.tlebox').eq(1).css({"-webkit-transform":"translateX("+(-Height*0.5)+"px) translateY("+(Height*0.5)+"px) rotate("+(-90)+"deg) rotateY("+(-90)+"deg)"});
			$('.tlebox').eq(2).css({"-webkit-transform":"translateX("+(Height*0.5)+"px) translateY("+(-Height*0.5)+"px) rotate("+90+"deg) rotateX("+(-90)+"deg)"});
			$('.tlebox').eq(3).css({"-webkit-transform":"translateX("+(-Height*0.5)+"px) translateY("+(-Height*0.5)+"px) rotate("+90+"deg) rotateY("+(90)+"deg)"});
			
		}else{
			$('.tlebox').eq(0).css({"-webkit-transform":"translateX("+0+"px) translateY("+0+"px)"});
			$('.tlebox').eq(1).css({"-webkit-transform":"translateX("+0+"px) translateY("+0+"px)"});
			$('.tlebox').eq(2).css({"-webkit-transform":"translateX("+0+"px) translateY("+0+"px)"});
			$('.tlebox').eq(3).css({"-webkit-transform":"translateX("+0+"px) translateY("+0+"px)"});
		}
	});
};


	
	