$(document).ready(function(){

	$("a").click(function(event){
		event.preventDefault();
	});

	$(".readmore a").click(expand);
	$(":hidden").click(shrink);

	function expand(){
		$("#show-this-on-click").slideDown();
		$(":hidden").show();
		$(".readmore a").hide();
		$("#learnmoretext").hide();		
	}

	function shrink(){
		$("#show-this-on-click").slideUp();
		$(".readmore a").show();
		$(".readless a").hide();
		
	}

	$(".learnmore").click(expandLearn);

	function expandLearn(){
		$("#learnmoretext").slideDown();
		$(".learnmore").hide();
	}

});