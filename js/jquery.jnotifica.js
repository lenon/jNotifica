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
    
    params = typeof params == undefined ? {} : params;
    
    // Merge options
    var options = $.extend(true, {}, $.jn.defaults, params),
        spacing = options.spacing;
    
    var
      // Main element
      main = $('<div class="jnotifica_main" />').css({
        position : 'fixed',
        left     : spacing,
        right    : spacing,
        overflow : 'hidden',
        zIndex   : options.zIndex,
        width    : options.width != 'all' ? options.width : null
      }),
      // Spacer element
      spacer = $('<div class="jnotifica_spacer" />').css({
        padding: options.padding
      }),
      message = $('<div class="jnotifica_message" />').html(text);
      
    // Appends the message in the spacer, and the spacer in main element
    main.append(spacer.append(message));
    
    // Check position, defined in the options
    options.position == 'top' ? main.css('top', spacing) : main.css('bottom', spacing);
    
    // Align
    if(options.width != 'all'){
      switch(options.align){
        case 'center':
          main.css({
            left: '50%',
            right: 'auto',
            marginLeft: - parseInt(parseInt(options.width) / 2)
          });
        break;
        case 'left':
          main.css('right', 'auto');
        case 'right':
          main.css('left', 'auto');
      }
    }
    
    main.css('background','black');
    
    // Inserts the element in the document
    $('body').prepend(main);
  }
  
  $.jn.defaults = {
    spacing   : 0,
    padding   : 25,
    width     : 'all', // width in pixes or 'all' for 100%
    position  : 'top', // top or bottom
    align     : 'center', // center, left or right (only used when width != all)
    zIndex    : 100
  }
  
  $.jNotifica = $.jN = $.jn;
  
})(jQuery)
/*
(function($){
  var
    IE6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent),
    Timer, IE6FIX;
    
  $.jnotifica_defaults = {
    margin    : 0,
    position  : 'top', // 'top' or 'bottom'
    width     : 'all', // width in pixels, or 'all' for 100%
    align     : 'center',// 'center', 'left' or 'right' (only used with width != all)
    padding   : 25,
    background: '#000',
    zIndex    : 100,
    color     : '#fff',
    opacity   : 0.8,
    cursor    : 'pointer',
    msgCss    : {
      fontSize  : '15px',
      fontFamily: 'Arial, sans-serif',
      textAlign : 'left'
    },
    effect     : 'slide', // 'slide', 'fade' or 'none'
    speed      : 500,
    timeout    : 5000,
    clickClose : true, // Click to close?
    close      : { // close button properties, or FALSE for no close button
      text : '[CLOSE]',
      css  : {
        color   : '#fff',
        fontSize: '10px',
        position: 'absolute',
        top     : 5,
        right   : 10,
        cursor  : 'pointer'
      }
    },
    onShow  : function(main){},
    onClose : function(){},
    classes : '' // extra classes for the main div
  }

  function close(obj){
    var
      Obj    = $(obj),
      onClose= Obj.data('onClose'),
      call   = function(){
        remove(Obj);
        if($.isFunction(onClose))
          onClose();
      },
      spd = Obj.data('speed');

    switch(Obj.data('effect')){
      case 'none':
        Obj.hide('', call);
      case 'fade':
        Obj.fadeOut(spd, call);
      default:
        Obj.slideUp(spd, call);
    }
  }

  function remove(obj){
    clearInterval(IE6FIX);
    clearTimeout(Timer);
    $(obj).find('div').unbind('click');
    $(obj).stop().remove();
  }

  // ugly support for an ugly browser
  function ie6TopFix(){
    var element = document.getElementById('jnotifica_main');
    if(element){
      element.style.top = parseInt(document.documentElement.scrollTop) + 'px';
    }
  }

  function ie6BottomFix(){
    var element = document.getElementById('jnotifica_main');
    if(element){
      element.style.top = parseInt(document.documentElement.scrollTop + document.documentElement.clientHeight - element.offsetHeight) + 'px';
    }
  }

  function show(msg, opt){
    var
      Main = $('<div id="jnotifica_main" class="jnotifica_main"/>')
        .css({
          position: IE6 ? 'absolute' : 'fixed',
          overflow: 'hidden',
          zIndex  : opt.zIndex,
          width   : '100%',
          left    : 0
        })
        .addClass(opt.classes)
        .hide(),

      Spc = $('<div class="jnotifica_spc"/>')
        .css('padding',opt.margin),

      Cont = $('<div class="jnotifica_cont"/>')
        .css({
          position:'relative',
          cursor  : opt.cursor
        }),

      Bg = $('<div class="jnotifica_bg"/>')
        .css({
          position  : 'absolute',
          height    : '100%',
          top       : 0,
          left      : 0,
          width     : '100%',
          background: opt.background,
          zIndex    : opt.zIndex + 1,
          opacity   : opt.opacity
        })

      Msg = $('<div class="jnotifica_msg"/>')
        .css({
          position: 'relative',
          zIndex  : opt.zIndex + 2,
          color   : opt.color,
          padding : opt.padding
        })
        .css(opt.msgCss)
        .html(msg);

    if(opt.position == 'bottom')
      Main.css('bottom',0)
    else
      Main.css('top',0);

    if(IE6){
      Bg.css('height','1000px');
      if(opt.position == 'bottom'){
        Main.css('bottom','auto');
        IE6FIX = setInterval(function(){ie6BottomFix()},50);
      }else{
        IE6FIX = setInterval(function(){ie6TopFix()},50);
      }
    }

    if(opt.width != 'all'){
      Spc.css('width',parseInt(opt.width));
      if(opt.align == 'left')
        Spc.css('float','left')
      else if(opt.align == 'right')
        Spc.css('float','right')
      else
        Spc.css({
          marginLeft : 'auto',
          marginRight: 'auto'
        })
    }

    if(opt.close !== false){
      Cont.append(
        $('<div class="jnotifica_close"/>')
          .css(opt.close.css)
          .css('zIndex', opt.zIndex + 4)
          .html(opt.close.text)
          .click(function(){close(Main)})
      )
    }

    $('body').append(
      Main.append(
        Spc.append(
          Cont.append(Bg).append(Msg)
        )
      )
    );

    var start = function(){
      if(opt.timeout > 0)
        Timer = setTimeout(function(){
          close(Main);
        }, opt.timeout);
    }

    switch(opt.effect){
      case 'none':
        Main.show('', start);
      case 'fade':
        Main.fadeIn(opt.speed, start);
      default:
        Main.slideDown(opt.speed, start);
    }

    if(opt.clickClose)
      Cont.click(function(){close(Main)});

    Main.data({
      effect : opt.effect,
      speed  : opt.speed,
      onClose: opt.onClose
    });

    if($.isFunction(opt.onShow))
      opt.onShow(Main);
  }

  $.jnotifica = $.jN = function(msg, opt){
    msg  = msg? msg : 'Hello';
    opt  = opt? opt : {};

    var opts = $.extend(true, {}, $.jnotifica_defaults, opt);

    remove($('#jnotifica_main'));

    show(msg, opts);
  }

  $.fn.jnotifica = $.fn.jN = function(options){
    return $.jN($(this).html(), options);
  }

  $.jnotifica.close = function(){
    close($('#jnotifica_main'));
  }
  
  $.jnotifica.version = 'v3';
})(jQuery);
*/