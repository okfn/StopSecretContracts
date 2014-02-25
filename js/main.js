//Give classes based on scroll position
$('.dark').waypoint(function(direction) {
  if (direction === 'down') {
    $('body').addClass('darkness');
  }
  else {
    $('body').removeClass('darkness');
  }
});

$('.money.top').waypoint(function(direction) {
  $('body').addClass('scrolled');
});


$('.form').waypoint(function(direction) {
  if (direction === 'down') {
    $('.form').addClass('stuck');
  }
  else {
    $('.form').removeClass('stuck');
  }
}, 
{ 
  offset: 70 
});

jQuery(document).ready(function ($) {
	
	//initialise Stellar.js		
		$(window).stellar({
			horizontalScrolling: false,
			hideDistantElements: false, //to fix problem with cached pages
		});

	
	//Cache some variables
			htmlbody = $('html,body')
	
	//Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
			//easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
			function goToByScroll(dataslide) {
					htmlbody.animate({
							scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
					}, 2000, 'easeInOutQuint');
			}
	
	//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
	$( "a.scrollto" ).click(function (e) {
			e.preventDefault();
			dataslide = $(this).attr('data-slide');
			goToByScroll(dataslide);
	});
	
	//Thanks page
	function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
	
	var redirect = getQueryVariable('petition');
	
	if (redirect === 'signed') {
    $('body').addClass('signed');
  }

  
	
});

// Placeholder pollyfill
Modernizr.load({
    test: Modernizr.input.placeholder,
    nope: 'js/vendor/placeholder/src/simple.js'
});
