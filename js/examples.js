$(document).ready(function() {
	$('#example1').click(function(e){
		e.preventDefault();
		$.jnotifica('Hello, world!');
	});
	$('#example2').click(function(e){
		e.preventDefault();
		$.jnotifica('Hello, world!',5000);
	});
	$('#example3').click(function(e){
		e.preventDefault();
		$.jnotifica('Hello, world!',{
			closeButton : false
		},5000);
	});
	$('#example4').click(function(e){
		e.preventDefault();
		$.jnotifica('Hello, world!',{
			effect : 'fadeIn',
			closeEffect : 'fadeOut'
		});
	});
	$('#example5').click(function(e){
		e.preventDefault();
		$.jnotifica('Hello, world!',{
			effect : 'fadeIn',
			closeEffect : 'fadeOut',
			css: {
				background : '#fff',
				color : '#000',
				borderBottom : '2px solid #444'
			}
		});
	});
});