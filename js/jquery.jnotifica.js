/*!
 * jQuery jNotifica Plugin v3 Alpha
 * http://jnotifica.lenonmarcel.com.br/
 *
 * Copyright 2009, 2010 Lenon Marcel
 * Dual licensed under the MIT and GPL licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Date: 2010-01-30 (Sat, 30 January 2010)
 */
(function($){
  var
    IE6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent),
    Timer;
    
  $.jnotifica_defaults = {
    margin    : 0,
    position  : 'top', // 'top' or 'bottom'
    width     : 'all', // 'all' for 100% or width in pixels
    align     : 'center',// 'center', 'left' or 'right' - only used with width != all
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
    clickNClose: true,
    close      : { // Close button properties, or FALSE for no close button
      text : '[CLOSE]',
      css  : {
        color   : '#fff',
        fontSize: '10px',
        position: 'absolute',
        top     : 5,
        right   : 10,
        cursor  : 'pointer'
      }
    }
  }

  function close(obj){
    var
      Obj = $(obj),
      call = function(){
        remove(Obj);
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
    $(obj).find('div').unbind('click');
    $(obj).stop().remove();
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
          .click(function(){ close(Main) })
      )
    }

    $('body').prepend(
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

    if(opt.clickNClose)
      Cont.click(function(){ close(Main) });

    Main.data({
      effect: opt.effect,
      speed : opt.speed
    });
  }

  $.jnotifica = function(msg, opt){
    msg  = msg? msg : 'Hello';
    opt  = opt? opt : {};

    var opts = $.extend(true, {}, $.jnotifica_defaults, opt);

    clearTimeout(Timer);
    remove($('#jnotifica_main'));

    show(msg, opts);
  }

  $.jnotifica.close = function(){
    close($('#jnotifica_main'));
  }
  
  $.jNotificaVersion = 'v3 Alpha';
})(jQuery);
