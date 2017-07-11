$(function(){
	$('.index_nav_date').children().each(function(){
		$(this).click(function(){
			$('.index_nav_date').children().each(function(){
				$(this).attr('class','');
				$('.data-index').attr('style','display:none;');
			});
			$(this).attr('class','act');
			$('div[data-ind="'+$(this).attr('data-index')+'"]').attr('style','display:block;')
		});
	});
});

