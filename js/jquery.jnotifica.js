/*!
 * jQuery jNotifica Plugin - DEVELOPMENT VERSION
 * http://jnotifica.lenonmarcel.com.br/
 *
 * Copyright 2009, 2010 Lenon Marcel
 * Dual licensed under the MIT and GPL licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Date: UNKNOWN
 */
(function($){
  // Shortcut
  $.jn = function(text, params){
    // Merge options
    var options = $.extend(true, {}, $.jn.defaults, params);
    
    var
      // 'Shortcut var' for spacing
      spacing = options.spacing,
      // Position (top or bottom)
      position = options.position;
    
    var
      // Main element
      main = $('<div/>',{
        'class': 'jnotificaMain',
        css    : {
          position : 'fixed',
          left     : spacing,
          right    : spacing,
          overflow : 'hidden',
          zIndex   : options.zIndex
        }
      }),
      // Alpha element, for opacity
      alpha = $('<div/>',{
        'class': 'jnotificaAlpha',
        css    : {
          background: options.background,
          opacity   : options.opacity,
          position  : 'absolute',
          top       : 0,
          left      : 0,
          width     : '100%',
          height    : '100%',
          zIndex    : options.zIndex + 1
        }
      }),
      // Element that will contain the html (or text) of message
      message = $('<div/>',{
        'class': 'jnotificaMessage',
        html   : text,
        css    : {
          position : 'relative',
          zIndex   : options.zIndex + 2,
          padding  : options.padding,
          color    : options.textColor,
          textAlign: options.textAlign,
          fontSize : options.fontSize
        }
      });
    
    // Check position, defined in the options
    position == 'top' ? main.css('top', spacing) : main.css('bottom', spacing);
    
    // Align
    if(options.width != 'all'){
      main.css('width',options.width);
      if(options.align == 'left'){
        main.css('right', 'auto');
      } else if(options.align == 'right'){
        main.css('left', 'auto');
      } else {
        main.css({
          left: '50%',
          right: 'auto',
          marginLeft: - parseInt(options.width) / 2
        });
      }
    }
    
    // Appends the message in the spacer, and the spacer in main element
    main.append(alpha).append(message).hide()
        .addClass(options.classes);
    
    // Inserts the element in the document
    $('body').prepend(main);
    
    // Shortcut vars
    var effect = options.effect,
        speed  = options.speed;
    
    //
    // Showtime!
    //
    switch(effect){
      case 'slide':
        main.slideDown(speed);
      break;
      case 'fade':
        main.fadeIn(speed);
      break;
      case 'drop':
        var height   = main.outerHeight() + spacing,
            checkPos = (position == 'top') ? 'top' : 'bottom';
        
        var anim = {};
        anim[checkPos] = spacing;
        
        main
          .css(checkPos, - height)
          .show()
          .animate(anim, speed);
      break;
      default:
        main.show();
    }
    
    main.data('jnotificaOptions', options);
    
    if(options.clickClose){
      main.click($.jn.close);
    }
  }
  
  $.jn.close = function(){
    var _this = $(this);
    var options = _this.data('jnotificaOptions');
    
    if(!options)
      return;
    
    console.log(_this);
    
    var effect   = options.effect,
        speed    = options.speed,
        callback = function(){_this.remove()};
    
    switch(effect){
      case 'slide':
        _this.slideUp(speed, callback);
      break;
      case 'fade':
        _this.fadeOut(speed, callback);
      break;
      case 'drop':
        var height   = _this.outerHeight() + options.spacing,
            checkPos = (options.position == 'top') ? 'top' : 'bottom';
        
        var anim = {};
        anim[checkPos] = - height;
        
        _this.animate(anim, speed, callback);
      break;
      default:
        callback();
    }
  }
  
  $.jn.defaults = {
    // Structural options
    spacing   : 0,
    padding   : 25,
    width     : 'all', // width in pixes or 'all' for 100%
    position  : 'top', // top or bottom
    align     : 'center', // center, left or right (only used when width != all)
    zIndex    : 100,
    
    // Events
    clickClose: true,
    
    
    // Appearance options
    background: 'black',
    textColor : 'white',
    textAlign : 'center',
    opacity   : 0.8,
    fontSize  : '15px',
    
    // Animation options
    effect    : 'drop', // drop, slide, fade or none
    speed     : 500,
    timeout   : 5000,
    
    // Other stuffs
    classes   : '' // Extra classes for main div
  }
  
  $.jNotifica = $.jN = $.jn;
})(jQuery)
