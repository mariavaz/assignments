$(document).ready(function(){

	$(".dropbtn").click(myFunction);

/* When the user clicks on the button,toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

	$("#banner a").click(function() {
  //get the ID of the dropdown option
  		var countryID = $(this).attr("id");
  		console.log(countryID); //-> india
  //use that ID to set the class
  	$("#banner").attr("class", countryID);
  	console.log($("#banner").attr("class"));
});

//WORK SLIDESHOW----------------------------------------------------------


//MEDIA MENU----------------------------------------------------------------------

function toggleMenu(){
		var displayValue = $("nav").css("display");
		if(displayValue === "none"){
			$("nav").slideDown();
		}	else {
			$("nav").slideUp();
		}
}

$(".hamburger").click(toggleMenu);


//BACK TO TOP ARROW----------------------------------------------------------
	
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 00,
	 scrolled = 00,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		scroll_down_duration = 20,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');
		$top_to_down = $('.ex-top');
		
	//hide or show the "back to top" link
	$top_to_down.addClass('ex-is-visible');
	$(window).scroll(function(){
		
		if( $(this).scrollTop() > offset )
		{
			$back_to_top.addClass('cd-is-visible');
			
		}
		else
		{
			$back_to_top.removeClass('cd-is-visible cd-fade-out');
			
		}
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});	

$top_to_down.on('click', function(event){
		event.preventDefault();
		$('html,body').animate({ scrollTop: 5000 }, 'slow');
	});

//GO DOWN SLOW----------------------------------------------------------

	function scrollToAnchor(aid){
	    var aTag = $("a[name='"+ aid +"']");
	    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	$("#work").click(function() {
	   scrollToAnchor('codework');
	});

	$("#about").click(function() {
	   scrollToAnchor('codeabout');
	});

	$("#contact").click(function() {
	   scrollToAnchor('codefooter');
	});

});