/*
 * jQuery jNotifica plugin
 * Version 1.0 (3-OUT-2009)
 *
 * Copyright (c) 2009 Lenon Marcel <contato@techlive.org>
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Read more: http://techlive.org/source/jnotifica-plugin-de-notificacoes-pra-jquery/
 * 
 */
;(function($){
	var
	  timer, // Timeout var
	  main, // Main container
	  content, // Message container
	  close; // Close button container
	
	// Init function
	$.jnotifica = $.N = function(msg,options,timeout){
		if(typeof options == 'number'){
			timeout = options;
			options = null;
		}
		// Clear timeout (d'oh)
		clearTimeout(timer);
		// Unbind 'click' event and remove the main container (if exists)
		$('#jnotifica').unbind('click').remove();
		// Create containers
		main = $('<div id="jnotifica"/>').hide();
		content = $('<div class="jnotifica-message"/>');
		close = $('<a href="#" class="jnotifica-close"/>');
		
		// Make the notification
		show(msg,options,timeout);
	};
	// Close function
	$.jnotifica.close = $.N.close = function(){
		clearTimeout(timer);
		if(main){
		main
			[main.opts.closeEffect](main.opts.speed,function(){
				$(main).remove();
			});
		}
	};
	
	$.jnotifica.mainCss = {left:0,width:'100%',zIndex:'10000',padding:0,margin:0}; // Main container CSS
	
	// Default options
	$.jnotifica.defaults = {
		effect : 'slideDown', // Effect
		speed : 800, // Effect speed
		closeEffect : 'slideUp', // Close effect
		closeOnClick : true, // Close on click?
		closeButton : true, // Show the close button?
		closeText : 'close', // Text of close button
		css : { // Message CSS
			color : '#fff',
			opacity : 0.8,
			cursor : 'pointer',
			background : '#000',
			padding : 25,
			fontSize : '15px',
			fontFamily : 'Arial, sans-serif',
			textAlign : 'left'
		},
		closeCss : { // Close button CSS
			float:'right',
			fontSize:'12px',
			color:'#fff',
			textDecoration:'none'
		}
	};
	// Show the notification
	show = function(msg,opts,timeout){
		var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent); // It's IE6?
		
		main.opts = opts = $.extend({},$.jnotifica.defaults,opts || {});
		opts.css = $.extend({},$.jnotifica.defaults.css,opts.css || {});
		opts.closeCss = $.extend({},$.jnotifica.defaults.closeCss,opts.closeCss || {});
		
		if(ie6){ main.css('position','absolute') }
		else{ main.css({position:'fixed',top:0}) }
		
		main.css($.jnotifica.mainCss);
		content.css(opts.css).html(msg || '').appendTo(main); // Apply the CSS and append the message container to the main container
		
		if(opts.closeOnClick){ // Click event
			main.click(function(event){
				event.preventDefault();
				$.jnotifica.close();
			});
		}
		if(opts.closeButton){ // Show the close button
			close
			  .text(opts.closeText)
			  .css(opts.closeCss)
			  .prependTo(content)
			  .click(function(event){
			  	event.preventDefault();
			  	$.jnotifica.close();
			  });
		}
		
		// Show the notification
		main
		  .prependTo('BODY')
		  [opts.effect](opts.speed);
		
		clearTimeout(timer);
		
		// Timeout
		if(timeout) timer = setTimeout(function(){$.jnotifica.close()},timeout);
	}
})(jQuery);