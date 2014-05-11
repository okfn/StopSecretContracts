jQuery(document).ready(function ($) {
	
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
	var modal = getQueryVariable('page');
	
	if (redirect === 'signed') {
    $('#thanksModal').modal({
      show: true
    })
  }

  //get Involved
	if (modal === 'get-involved') {
    $('html').addClass('involved');
  }
	$( ".get-involved .modal-content .getin" ).load( "get-involved.html #getinvolved" );
	
	$(".get-involved-link").click(function( event ) {
		event.preventDefault();
		window.location = '?page=get-involved';
	});
	
});
