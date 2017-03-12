$(function(){
	// 页面导航下拉菜单
	// $('.more').css('display','none');
	$('.nav_title').mouseover(function(){
		$(this).find('.more').show();
		$(this).addClass("col").siblings().removeClass("col");
	})
	$('.nav_title').mouseout(function(){
		$(this).find('.more').hide();
		$(this).removeClass("col");
	})
	// 轮播图
	$('.left a').css({
			'font-size':'50px',
			'color':'#fff',
			'line-height':'50px',
			'text-align':'center',
			'font-weight':'inherit',
			'display':'block'
		})
	$('.right a').css({
			'font-size':'50px',
			'color':'#fff',
			'line-height':'50px',
			'text-align':'center',
			'font-weight':'inherit',
			'display':'block'
		})

	var i = 0;
	var timer;
	$(function () {
	    $(".picture").eq(0).show().siblings().hide();
	        timer = setInterval(function () {
	        i++;
	        if (i == 6) {
	            i = 0;
	        }
	    $(".picture").eq(i).fadeIn(300).siblings().fadeOut(300);
	    $(".choice").eq(i).addClass("bg").siblings().removeClass("bg");
	    }, 2000);
	    $(".choice").hover(function () {
	        clearInterval(timer);
	        i = $(this).index();
	    $(".picture").eq(i).fadeIn(300).siblings().fadeOut(300);
	    $(".choice").eq(i).addClass("bg").siblings().removeClass("bg");
	    }, function () {
	        timer = setInterval(function () {
	        i++;
	        if (i == 6) {
	            i = 0;
	        }
	    $(".picture").eq(i).fadeIn(300).siblings().fadeOut(300);
	    $(".choice").eq(i).addClass("bg").siblings().removeClass("bg");
	    }, 2000);
	    });
	    $(".left").click(function () {
	        clearInterval(timer);
	        i--;
	        if (i == -1) {
	            i = 5;
	        }
	    $(".picture").eq(i).fadeIn(300).siblings().fadeOut(300);
	    $(".choice").eq(i).addClass("bg").siblings().removeClass("bg");
	           timer = setInterval(function () {
	        i++;
	        if (i == 6) {
	            i = 0;
	        }
	    $(".picture").eq(i).fadeIn(300).siblings().fadeOut(300);
	    $(".choice").eq(i).addClass("bg").siblings().removeClass("bg");
	    }, 2000);
	    });
	    $(".right").click(function () {
	        clearInterval(timer);
	        i++;
	        if (i == 6) {
	            i = 0;
	        }
	    $(".picture").eq(i).fadeIn(300).siblings().fadeOut(300);
	    $(".choice").eq(i).addClass("bg").siblings().removeClass("bg");
	           timer = setInterval(function () {
	        i++;
	        if (i == 6) {
	            i = 0;
	        }
	    $(".picture").eq(i).fadeIn(300).siblings().fadeOut(300);
	    $(".choice").eq(i).addClass("bg").siblings().removeClass("bg");
	    }, 2000);
	    });
	});
//日历
	//当前时间
	function currentTime(){
	var d = new Date(),
	str = '';
	var h=d.getHours()+':';
	if(h<10){
		h='0'+h;
	}
	var m=d.getMinutes()+':';
	if(m<10){
		m='0'+m;
	}
	var s=d.getSeconds();
	if(s<10){
		s='0'+s;
	}
	str=h+m+s;
	return str;
	}
	setInterval(function(){$('.time').html(currentTime)},1000);
	//当前年月日
	function allTime() {
	var timeh=new Date();
	var str="";
	var Y=timeh.getFullYear();
	str+=Y+"年";
	var M=timeh.getMonth()+1;
	str+=M+"月";
	var D=timeh.getDate();
	str+=D+"日";
	return str;
	 }
	$('.year').html(allTime);
	function time() {
	var timeh=new Date();
	var str;
	var Y=timeh.getFullYear();
	var M=timeh.getMonth()+1;
	var D=timeh.getDate();
	str=Y+"-"+M+"-"+D;
	return str;
	 }
	$('.notice_time').html(time);
	//星期几
   function getNowDate(){
　 var today=new Date();
　 var d=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
　 var nowDate= "";
　 　 nowDate = nowDate+ " "+ d[today.getDay()];// 获取当前星期
　 　 return nowDate;
}
   //新闻头条
function news_years(){
	var news_year=new Date();
	var Y=news_year.getFullYear();
	return Y;
}
$('.the_day_year').html(news_years);
$('.the_day_year').css({'font-family':'cursive'})
function news_days(){
	var news_day=new Date();
	var D=news_day.getMonth()+1;
	var d=news_day.getDate();
	if(d<10){
		d="0"+d;
	}
	var days=D+"."+d;
	return days;
}
$('.the_day_month').html(news_days);
$('.the_day_month').css({'font-size': '15px','font-family':'cursive'})
//团队成果banner图
var j=0;
var times;
$(function(){
	$('.team_pic').eq(0).show().siblings().hide();
	times=setInterval(function(){
		i++;
		if(i==6){
			i=0;
		}
	$('.team_pic').eq(i).fadeIn(300).siblings().fadeOut(300);
	},3000);
	$('.team_sorrow_right').click(function(){
		clearInterval(times);
		i--;
		if(i==-1){
			i=5;
		}
	$('.team_pic').eq(i).fadeIn(300).siblings().fadeOut(300);
	})
	$('.team_sorrow_left').click(function(){
		clearInterval(times);
		i--;
		if(i==-1){
			i=5;
		}
	$('.team_pic').eq(i).fadeIn(300).siblings().fadeOut(300);
	})
})
})
