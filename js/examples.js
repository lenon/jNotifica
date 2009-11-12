jQuery(document).ready(function(){
	$('#ex1').click(function(){
		$.jnotifica();
	});
	$('#ex2').click(function(){
		$.jnotifica('Olha só, funciona! \\o/');
	});
	$('#ex3').click(function(){
		$.jnotifica('Fechando em 4, 3, 2... :P',{},4000);
	});
	$('#ex4').click(function(){
		$.jnotifica('Enquanto você não clicar, a mensagem vai continuar aqui',{},0);
	});
	$('#ex5').click(function(){
		$.jnotifica('Opa',{effect: 'fade' });
	});
	$('#ex6').click(function(){
		$.jnotifica('Prefiro com efeitos =p',{effect: 'none' });
	});
	$('#ex7').click(function(){
		$.jnotifica('Clique para fechar ;-)',{closeButton: false });
	});
	$('#ex8').click(function(){
		$.jnotifica('DANGER! DANGER! DANGER! DANGER! #lol',{css : { background: 'red' } });
	});
	$('#ex9').click(function(){
		$.jnotifica('Salvem as baleias.',{css : { background: 'green', fontSize : '18px', textAlign : 'center' } });
	});
	$('#ex10').click(function(){
		$.jnotifica('Yeahh.',{css : { opacity: 1, textAlign : 'center' } });
	});
	$('#ex11').click(function(){
		$.jnotifica('Aguarde o timeout :)',{closeButton : false, closeClick: false}, 5000);
	});
	$('#ex12').click(function(){
		$.jnotifica('Buuu!',{callback : function(){ alert('Fechou :P')}}, 5000);
	});
});