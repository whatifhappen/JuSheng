$(document).ready(function() {
	//navigation
	var currentId = $('body').attr('id');
	var currentNav = $('nav .'+ currentId +' a');
	currentNav.addClass('selected');

	//tabs content
	//default show
	$('.tabContent').hide();
	 $('.market').show();
	 $('a.market').addClass('selected')
				 .closest('li').addClass('hover');
	//when click
	$('.content ul li a').click(function(e){ 
		var thisClass = this.className;
		$('.tabContent').hide();
		$('.' + thisClass).show();
		$('.tabHeadings li a').removeClass('selected')
							.parent('li')
							.removeClass('hover');
		$(this).addClass('selected')
				.parent('li')
					.addClass('hover');

		//prevent linked to another pages
		e.preventDefault();
	});
});