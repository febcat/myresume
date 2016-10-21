		var onloads = document.querySelector('#onload');
		var myVideo=document.querySelector("audio");
		var imgPath = ["img/首页img/title.jpg", "img/首页img/cat.jpg", "img/首页img/mail.jpg", "img/首页img/facebook.jpg", "img/首页img/youtube.jpg", "img/首页img/linkedln.jpg", 
		"img/首页img/twitter.jpg", "img/首页img/mail_h.jpg", "img/首页img/facebook_h.jpg", "img/首页img/youtube_h.jpg", "img/首页img/linkedln_h.jpg", "img/首页img/twitter_h.jpg",
		"img/content2/1.jpg","img/content2/2.jpg","img/content2/3.jpg","img/content2/4.jpg","img/content2/5.jpg","img/content2/flower.gif",
		"img/content2/pixel.jpg","img/content2/rightshow.jpg","img/content2/women2.jpg","img/content2/women3.jpg","img/content1/c1back0.gif",
		"img/content1/c1back1.jpg","img/content1/c1back3.gif","img/content1/c1back4.jpg","img/content1/dog.png","img/content1/top.gif","img/content2/lolgirl.jpg"
		,"img/content2/pad2.jpg"];
		$(function(){
			$("div:not(#onload)").css({display: 'none'});
			loadImg();
		});
		

		function loadImg() {
			for(var i = 0; i < imgPath.length; i++) {
				var aImg = new Image();
				aImg.src = imgPath[i];
				var arrImg = [];
				aImg.onload = function() {
					var sliderWidth = document.documentElement.clientWidth + document.body.clientWidth;
					arrImg.push(this);
					var onload = Math.round((arrImg.length / imgPath.length) * 100);
					onloads.innerHTML = onload + '%';
					if(arrImg.length == imgPath.length) {
						$("#onload").fadeOut(1000, function() {
							$("div:not(#onload,#fixtitle,#audio)").css({
								display: 'block'
							});
							myVideo.play();
						});

					}
				}
			}
		}