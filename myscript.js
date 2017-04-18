 
$("#jump").click(function(){
                $('html,body').animate({scrollTop: $("#targetDiv").offset().top},1300);
});
 
$(".title").click(function(){
                $('html,body').animate({scrollTop: 0},1300);
});

$("#targetDiv").scroll(function(){
				var scrollTop = $(this).scrollTop();
				$('.parallexBg').css('top', -((scrollTop - 1600) * 0.3) + 'px');
});

$(".expand").click(function(){
				if (!$('.sideMenu').width()) {
					$('.sideMenu').css('width', '100%');
					$('.rightClose').css('visibility','visible');
				}else{
					$('.sideMenu').css('width', '0%');
					$('.rightClose').css('visibility','hidden');
				}
});

$(".rightClose").click(function(){
					$('.sideMenu').css('width', '0%');
					$('.rightClose').css('visibility','hidden');
});