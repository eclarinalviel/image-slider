	$(function() {

		var ul = $(".carousel ul");
		var slide_count = ul.children().length; //count the child ng ul (<li>)
		var slide_width_pc = 100.0 / slide_count; //percentage width per slide
		var slide_index = 0; // which is the visible slide
		

		ul.find("li").each(function(indx) {
			var left_percent = (slide_width_pc * indx) + "%";
			$(this).css({"left":left_percent});
			$(this).css({width:(100 / slide_count) + "%"});
		});

		// For Navigation
		$(".slider-nav a").click(function() {
		    $("a").removeClass("a-active");
		    $(this).addClass("a-active");
		});

		// for previous button
		$(".carousel .prev").click(function() {
			console.log("prev button clicked");
			slide(slide_index - 1);
			//find the active anchor then remove its active class
			var active = $(".slider-nav").find("a.a-active");
			active.removeClass('a-active');
		    if(active.prev().length > 0){
				active.prev().addClass('a-active');  
			 }else{
			 	$("a").removeClass("a-active");
				active.addClass("a-active");
			}
		});

		// for next button
		$(".carousel .next").click(function() {
			var active = $(".slider-nav").find("a.a-active");

			console.log("next button clicked");
			slide(slide_index + 1);	

			active.removeClass("a-active");
		    if(active.next().length > 0){
				active.next().addClass('a-active');  
			 }
			 else{
				// $('.slider-nav').find("a:last").addClass("a-active")
				$("a").removeClass("a-active");
				active.addClass("a-active");
			}		
		});

		function slide(new_slide_index) {

		if(new_slide_index < 0 || new_slide_index >= slide_count) return;  //if the slider reached the last slide then stop
			var margin_left_pc = (new_slide_index * (-100)) + "%"; 
			ul.animate({
			  	"margin-left": margin_left_pc
			  }, 600, "linear", function() {
			   	slide_index = new_slide_index
		  });

		}

		});