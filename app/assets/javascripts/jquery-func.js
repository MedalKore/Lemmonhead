$(document).ready(function(){	


	//=================================== Totop  ===================================//
	$().UItoTop({ 		
		scrollSpeed:500,
		easingType:'linear'
	});	

	//=================================== Subtmit Form  =================================//

	var $myform = $('#form');
	$myform.submit(function(event) {  
		  event.preventDefault();  
		  var url = $(this).attr('action');  
		  var datos = $(this).serialize();  
		  $.get(url, datos, function(resultado) {  
		    $('#result').html(resultado);  
		  });  
	});  


	//=================================== Ligbox  ===================================//
	
	$('.fancybox').fancybox({
		'overlayOpacity'	:	0.7,
		'overlayColor'		:	'#000000',
		'easingIn'      	: 'easeOutBack',
		'easingOut'     	: 'easeInBack',
		'speedIn' 			: '700',
		'centerOnScroll'	: true
	});		

	//=================================== Slide  =================================//

	$('.carousel').carousel();

	//=================================== Twtter  =================================//

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	//=================================== Facebook  =================================//
	
	(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

	    
	//===================================Skills =====================================//

	$(function() {
      $(".meter > span").each(function() {
        $(this)
          .data("origWidth", $(this).width())
          .width(0)
          .animate({
            width: $(this).data("origWidth")
          }, 3500);
      });
    });

	//=================================== Nav Responsive ===================================//

	var $nav = $('.nav_responsive');
    $nav.click(function(e){
		event.preventDefault();				
    	var aside = $(".sidebar");
			var mostrandose = aside.css("left");
			if (mostrandose === "0px"){
				aside.css("left", "-140px");
			}else{
				aside.css("left", "0");
			}
		});

});

