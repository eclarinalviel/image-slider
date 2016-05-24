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

		// for previous button
		$(".carousel .prev").click(function() {
		console.log("prev button clicked");
		slide(slide_index - 1);
		});

		// for next button
		$(".carousel .next").click(function() {
		console.log("next button clicked");
		slide(slide_index + 1);
		});

		function slide(new_slide_index) {

		if(new_slide_index < 0 || new_slide_index >= slide_count) return;  //if the slider reached the last slide

		var margin_left_pc = (new_slide_index * (-100)) + "%";

		ul.animate({"margin-left": margin_left_pc}, 400, function() {

		slide_index = new_slide_index

		});

		}

		});