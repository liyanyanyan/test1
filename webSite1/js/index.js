$(function(){
	function time(){
		var date = new Date();
		var y = date.getFullYear();
		var m = date.getMonth()+1;
		var str;
		if(m<10){
			m="0"+m;
		}
		var d = date.getDate();
		if(d<10){
			d="0"+d;
		}
	    str=y+"-"+m+"-"+d;
		return str;
	}
	$('.time').html(time());

	$('.del').click(function(){
		$(this).parent().parent().remove();
	})
		
	$('.choice').click(function(){
		var x = $(this).val();
			if(x==0){
				x=1;
			}
		console.log(x)
	})



})


