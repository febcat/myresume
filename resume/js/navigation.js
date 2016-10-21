// 这是导航条js部分

function fixtitle(){
  $('#btns li').mouseover(function(){
    $(this).find('p').css({"-webkit-transform":"translateY("+(-120)+"px) scale("+1.2+")",
  color:"#FA8072"});
  });
  $('#btns li').mouseout(function(){
   $('#btns li p').css({"-webkit-transform":"translateY("+0+"px) scale("+1+")",color:"white"});
  });
  //这是导航条scroll事件

  var Height=$("body").height();
$(window).resize(function(){
    var newHeight=$("body").height();
    $('#content1').css({height:newHeight-60});
    $('#content2').css({height:newHeight});
    $('#content3').css({height:newHeight});
    Height=newHeight;
    $("body,html").animate({'scrollTop':(Height*num)-60},0);
});

	var bolone=true;
  	var num =0;//这是整体content1,2,3的控制scrolltop值得变量
    $('#btns li').eq(3).click(function(){
    		if(!bolone){
			return
		}
    		bolone = false;
    		num =0;
  		$("body,html").animate({'scrollTop':0},'slow',function(){
  			bolone = true;
  			$("#wrap").children("li").remove();
  			C2reduction();
  			C3reduction();
  			$('#c1backs').css({"-webkit-transform":"translateY("+0+"px)"});
  		 	$('#c1backs').css({"transform":"translateY("+0+"px)"});
  		 	c1num=0;
  		});
  	})
    $('#btns li').eq(2).click(function(){
    		if(!bolone){
			return
		}
    		bolone = false;
        num =1;
  		$("body,html").animate({'scrollTop':(Height*num)-60},'slow',function(){
  			bolone=true;
  			$("#wrap").children("li").remove();
  			C1reduction();
  			C2reduction();
  			C3reduction();
  		});
  	})
    $('#btns li').eq(1).click(function(){
    		if(!bolone){
			return
		}
    		bolone = false;
        num=2
  		$("body,html").animate({'scrollTop':(Height*num)-60},'slow',function(){
  			bolone=true;
  			$("#wrap").children("li").remove();
  			$('#c1backs').css({"-webkit-transform":"translateY("+0+"px)"});
  		 	$('#c1backs').css({"transform":"translateY("+0+"px)"});
  		 	C3reduction();
  		 	c1num=0;
  		});
  	})
    $('#btns li').eq(0).click(function(){
    		if(!bolone){
			return
		}
    		bolone = false;
        num=3
  		$("body,html").animate({'scrollTop':(Height*num)-60},'slow',function(){
  			bolone=true;
  			C2reduction();
  			$('#c1backs').css({"-webkit-transform":"translateY("+0+"px)"});
  		 	$('#c1backs').css({"transform":"translateY("+0+"px)"});
  		 	c1num=0;
  		});
  	})
      //这是title四方块的点击事件
    $('.tlebox div').eq(0).click(function(){
      num=1;	
  		$("body,html").animate({'scrollTop':(Height*1)-60},'slow');
  		$("#wrap").children("li").remove();
  		C2reduction();
  		C3reduction();
  	})
    $('.tlebox div').eq(1).click(function(){
        num=2;  	
  		 $("body,html").animate({'scrollTop':(Height*2)-60},'slow');
  		 $("#wrap").children("li").remove();
  		 $('#c1backs').css({"-webkit-transform":"translateY("+0+"px)"});
  		 $('#c1backs').css({"transform":"translateY("+0+"px)"});
  		 C3reduction();
  		 c1num=0;
  	})
    $('.tlebox div').eq(2).click(function(){
        num=3;  	
  		 $("body,html").animate({'scrollTop':(Height*3)-60},'slow',function(){
			C2reduction();
			$('#c1backs').css({"-webkit-transform":"translateY("+0+"px)"});
  			$('#c1backs').css({"transform":"translateY("+0+"px)"});
  			c1num=0;
  		 });
  		 
  	})
    function C1reduction(){
    	
    }
    function C2reduction(){
    		$('#menu').css({"-webkit-transform":"translateY("+250+"px)",opacity:0});
		$('#leftshow').css({"left":(-50)+"%",opacity:0});
		$('#rightshow').css({"left":100+"%",opacity:0});
		$('#Controllerbox').css({"left":15+"%"});
		$('#lfetone').css({"transform":"rotateY("+0+")deg"});
		$('#lfettwo').css({"transform":"rotateY("+90+")deg"});
		$('#lfetone').css({"-webkit-transform":"rotateY("+0+")deg"});
		$('#lfettwo').css({"-webkit-transform":"rotateY("+90+")deg"});
		playPause();
		$('.padopen').fadeIn();
		video.pause();
		video.load();
    }
  	 function C3reduction(){
  	 	$('#c3hidden').css({opacity:1,"transform":"scale("+1+")","z-index":2});
  	 	$('#c3hidden').css({opacity:1,"-webkit-transform":"scale("+1+")","z-index":2});
  	 	$('#c3show').css({opacity:0,"transform":"scale("+0.7+")","z-index":1});
  	 	$('#c3show').css({opacity:0,"-webkit-transform":"scale("+0.7+")","z-index":1});
  	 }
}
// $('#btns li').eq(0).css({background:'rgba('+114+','+238+','+114+','+0.5+')'});
// $('#btns li').eq(1).css({background:'rgba('+171+','+130+','+255+','+0.5+')'});
// $('#btns li').eq(2).css({background:'rgba('+244+','+164+','+96+','+0.5+')'});
// $('#btns li').eq(3).css({background:'rgba('+250+','+128+','+114+','+0.5+')'});