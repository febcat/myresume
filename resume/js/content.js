//content1部分的js
function content1(){
	 var Height=($(window).height())-60;
 	 $('#content1').css({height:Height});
 	 
 	 $('#c1cut').css({height:Height});
 	 $('#c1backs').css({height:Height*6});
 	 $('.back').css({height:Height});
 	 
 	 $(window).resize(function(){
	    var cHeight=($(window).height())-60;
 		$('#c1cut').css({height:cHeight});
 	 	$('#c1backs').css({height:cHeight*6});
 	 	$('.back').css({height:cHeight});
 	 	Height =cHeight;
 	 	var heIght =(-Height)*c1num;
 	 	
		$('#c1backs').css({ y: heIght+ 'px'});  
	});
 	 
	 $('.c1btn').click(function(){
		c1num++;
		if(c1num==3){
			c1num=4;
		}
		var heIght =(-Height)*c1num;
		$('#c1backs').transition({ y: heIght+ 'px'}, 800, 'linear');  
	});
	$('.c1btnUp').click(function(){
		c1num--;
		if(c1num==3){
			c1num=2;
		}
		var heIght =(-Height)*c1num;
		$('#c1backs').transition({ y: heIght+ 'px'}, 800, 'linear');  
	});
	
	
		//这是对content1 最后一章轮播的麻绳进行设置

	
	$('#c1top').click(function(){
		$('#c1top img').transition({ y: 0+ 'px'}, 250, 'linear');
		$('#c1top img').transition({ y: -5+ '%'}, 250, 'linear',function(){
			$('#c1backs').transition({ y: 0+ 'px'}, 1000, 'linear');
			c1num=0;
		});
	});
	(function(){
		$('.c1btn').addClass('btnrun');
		var btnrunbol=true;
		if(btnrunbol){
			timer1 =setInterval(function(){
				$('.c1btn').removeClass("btnrun");
			},1000)
			timer2 =setInterval(function(){
				$('.c1btn').addClass('btnrun');
			},2000)
		}else{
			
			clearInterval(timer1);
			clearInterval(timer2);
		}
		$('.c1btn').hover(function(){
			$(this).css({opacity:1,"transform":"scale("+0.9+")"});
			btnrunbol=false;
			clearInterval(timer1);
			clearInterval(timer2);
			
		},function(){
			$(this).css({opacity:0.8,"transform":"scale("+0.8+")"});
			btnrunbol=true;
			timer1 =setInterval(function(){		
				$('.c1btn').removeClass("btnrun");
			},1000)
			timer2 =setInterval(function(){
				$('.c1btn').addClass('btnrun');
			},2000)	
		});
	})();
}





//******************************邪恶的分界线*******************************************


//context2部分的js

function content2(){
		var Height=$("body").height();
		$('#content2').css({height:Height});
		var backnum=0;
		 backautoplay();
		function backautoplay(){
			setInterval(function(){
				backnum++;
				if(backnum>=5){
					backnum=0;
				}
				$('.backboxs').eq(backnum).css({opacity:1});
				$('.backboxs').eq(backnum).siblings('.backboxs').css({opacity:0});
			},3500)
		}
		
		//控制器的点击事件
		var bol=true;
		//用来判断 lfetone lfettwo
		var lfetbol=1;
		$('.lis').hover(function(){
			$(this).css({background:"#FFC000"});
		},function(){
			$('.lis').css({background:"black"});
		});
		
		$('.menudivs').hover(function(){
			$(this).css({background:"#FFC000"});
		},function(){
			$('.menudivs').css({background:"black"});
		});
		var ulsum=174;
		var ulnum=0;
		$('.menudivs').eq(0).click(function(){
			ulnum++;
			
			if(ulnum>3){
				ulnum=1;
				$('#ulbox ul').css({"top":-174});
			}
			$('#ulbox ul').stop().animate({"top":(ulnum*-58)-ulsum},300);
		});
		$('.menudivs').eq(1).click(function(){
			ulnum--;
			if(ulnum<-3){
				ulnum=-1;
				$('#ulbox ul').css({"top":-174});
			}
			$('#ulbox ul').stop().animate({"top":(ulnum*-58)-ulsum},300);
		});

		
		$('.menudivs').eq(2).click(function(){
			if(!bol){
				return
			}
			bol = false;
			$('#menu').css({"-webkit-transform":"translateY("+250+"px)",opacity:0});
			$('#leftshow').delay(500).css({opacity:0}).animate({"left":(-50)+"%"},500);
			$('#rightshow').delay(500).css({opacity:0}).animate({"left":100+"%"},500);
			$('#leftone').css({"transform":"rotateY("+0+"deg)"});
			$('#lefttwo').css({"transform":"rotateY("+90+"deg)"});
      playPause();
      $('.padopen').fadeIn();
      video.pause();
      video.load();
			$('#Controllerbox').delay(1000).animate({"left":15+"%"},500,function(){
				bol = true;
			});
		});
		
		$('#Controller').click(function(){
			$('#menu').css({opacity:1,"-webkit-transform":"translateY("+0+")"});
		});

		//这是控制器第一个按钮的js (leftshow)
		
		$('.Os').click(function(){
			if(!bol){
				return
			}
			if($('#leftshow').css('opacity')==1){
				if(lfetbol==2){
						bol = false;
						$('#lefttwo').css({"-webkit-transform":"rotateY("+90+"deg)"});
						$('#lefttwo').css({"transform":"rotateY("+90+"deg)"});
						setTimeout(function(){
							$('#leftone').css({"transform":"rotateY("+0+"deg)"});
							$('#leftone').css({"-webkit-transform":"rotateY("+0+"deg)"});
							lfetbol=1;
						},500);
						setTimeout(function(){
							bol = true;
						},1000);
						return;
				}else{
					return
				}
			}
			bol = false;
			$('#rightshow').animate({"left":100+"%",opacity:0},500,function(){
				$('#Controllerbox').animate({"left":70+"%"},500,function(){
					$('#leftshow').css({opacity:1}).animate({"left":10+"%"},"slow",function(){
						$('#lefttwo').css({"-webkit-transform":"rotateY("+90+"deg)"});
						$('#lefttwo').css({"transform":"rotateY("+90+"deg)"});
						playPause();
            $('.padopen').fadeIn();
            video.pause();
            video.load();
						setTimeout(function(){
							$('#leftone').css({"transform":"rotateY("+0+"deg)"});
							$('#leftone').css({"-webkit-transform":"rotateY("+0+"deg)"});
							lfetbol=1;
						},500);
						bol = true;
					});
				});
			});
		})
	
		// 这是控制器第二个按钮的js  (rightshow)
		$('.As').click(function(){
			if(!bol){
				return
			}
			if($('#rightshow').css('opacity')==1){
				return
			}
			bol = false;
			$('#leftshow').animate({"left":(-50)+"%",opacity:0},500,function(){
				$('#Controllerbox').animate({"left":20+"%"},500,function(){
					$('#rightshow').css({opacity:1}).animate({"left":45+"%"},"slow",function(){
						bol = true;
					});
				});
			});
		})
		// 这是控制器第三个按钮的js
		$('.Cs').click(function(){
			if(!bol){
				return
			}
			if($('#leftshow').css('opacity')==1){
				if(lfetbol==1){
					bol = false;
					$('#leftone').css({"-webkit-transform":"rotateY("+90+"deg)"});	
						$('#leftone').css({"transform":"rotateY("+90+"deg)"});
						setTimeout(function(){
							$('#lefttwo').css({"transform":"rotateY("+0+"deg)"});
							$('#lefttwo').css({"-webkit-transform":"rotateY("+0+"deg)"});
							lfetbol=2;
						},500);
						setTimeout(function(){
							bol = true;
						},1000);
						return;
				}else{
					return;
				}
			}
			bol = false;
			$('#rightshow').animate({"left":100+"%",opacity:0},500,function(){
				$('#Controllerbox').animate({"left":70+"%"},500,function(){
					$('#leftshow').css({opacity:1}).animate({"left":10+"%"},"slow",function(){
						$('#leftone').css({"-webkit-transform":"rotateY("+90+"deg)"});	
						$('#leftone').css({"transform":"rotateY("+90+"deg)"});
						playPause();
            $('.padopen').fadeIn();
            video.pause();
            video.load();
						setTimeout(function(){
							$('#lefttwo').css({"transform":"rotateY("+0+"deg)"});
							$('#lefttwo').css({"-webkit-transform":"rotateY("+0+"deg)"});
							lfetbol=2;
						},500);
						bol = true;
					});
				});
			});
		})

	//rightshow部分的canvas视频部分
	$('.padopen').click(function(){
		$('.padopen').fadeOut(500,function(){
			$('#img1').css({"display":"block"});
			$('#img2').css({"display":"none"});
			myVideo.pause();
			video.play();
		})
	});
	$('.padbox canvas').click(function(){
		if(myVideo.paused) {
			playPause();
			$('.padopen').fadeIn();
			video.pause();
		} else if(myVideo.played) {
			$('#img1').css({"display":"block"});
			$('#img2').css({"display":"none"});
			$('.padopen').fadeOut();
			myVideo.pause();
			video.play();
		}
	});
	
}	
//******************************邪恶的分界线*******************************************


//content3部分
 function content3(){
 		var Height=$("body").height();
		$('#content3').css({height:Height});
	
		//这是对contact按钮的动画设置
		
		$('#contact').click(function(){
			$('#c3hidden').css({"transform":"scale("+0.75+")",opacity:0,"z-index":1});
			$('#c3hidden').css({"-webkit-transform":"scale("+0.75+")",opacity:0,"z-index":1});
			$('#c3show').css({"transform":"scale("+1+")",opacity:1,"z-index":2});
			$('#c3show').css({"-webkit-transform":"scale("+1+")",opacity:1,"z-index":2});
		});
    
    $('#c3left p').hover(function(){
        $('b').css('color','red');
    },function(){
        $('b').css('color','black');
    })
			//这是留言板部分的设置
		var Storage =
        {
            saveData:function()//保存数据
            {
                var data = document.querySelector("#post textarea");
                if(data.value != "")
                {
                    var str = data.value + "|" + this.getDateTime()//将毫秒数存入Key值中，可以降低Key值重复率
                    data.value = "";
                    // console.log(str);
                    var that = this;
                    $.ajax("save.php",{
                      type:"get",
                      data:"Data=" + str,
                      // dataType:"json",
                      dataType:"text",
                      success:function(data){
                        // console.log(data);
                        if(data != "fail"){
                            that.writeData(data);
                        }
                      }
                    });

                }
                else
                {
                    alert("请填写您的留言！");
                }
            },
            writeData:function(data)//输出数据
            {
                // var dataHtml = "";
                data = data.split("|");
                dataHtml += "<p><span class=\"msg\">" + data[0] + "</span><span class=\"datetime\">" + data[1] + "</span></p>";

                document.getElementById("comment").innerHTML = dataHtml;
            },
            clearData:function()//清空数据
            {
                document.getElementById("comment").innerHTML = "";
            },
            getDateTime:function()//获取日期时间，例如 2012-03-08 12:58:58
            {
                var isZero = function(num)//自动补零
                {
                    if(num < 10)
                    {
                        num = "0" + num;
                    }
                    return num;
                }

                var d = new Date();
                return d.getFullYear() + "-" + isZero(d.getMonth() + 1) + "-" + isZero(d.getDate()) + " " + isZero(d.getHours()) + ":" + isZero(d.getMinutes()) + ":" + isZero(d.getSeconds());
            }
        }

    // Storage.writeData();//当打开页面的时候，先将localStorage中的数据输出一边，如果没有数据，则输出空
    function initFn(){
        var Arr = null;
        $.ajax("request.php",{
          type:"get",
          dataType:"text",
          success:function(data){
            if(data != "fail"){
                Arr = data.split("**");
                for(var i = 0;i < Arr.length-1;i++){
                  Storage.writeData(Arr[i]);
                }
            }
          }
        });
    }
    var dataHtml = "";
    initFn();
    document.getElementById("postBt").onclick = function(){Storage.saveData();}//发表评论按钮添加点击事件，作用是将localStorage中的数据输出
    document.getElementById("clearBt").onclick = function(){Storage.clearData();}//清空所有已保存的数据
 }


 