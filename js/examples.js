jQuery(document).ready(function(){
  $('#example_1').click(function(){
    $.jnotifica('Hello from Brazil!',{
      margin : 10,
      width  : 400,
      effect : 'fade',
      padding: 25,
      msgCss : {
        textAlign : 'center',
        fontSize  : '138.5%',
        fontWeight: 'bold'
      }
    });
  });
  $('#example_2').click(function(){
    $.jnotifica('Hey! You here? ;-D',{
      margin    : 10,
      position  : 'bottom',
      align     : 'right',
      background: 'purple',
      width     : 400
    });
  });
  $('#example_3').click(function(){
    var timer, color;
    $.jnotifica('BUY ME! BUY ME!',{
      position  : 'bottom',
      background: 'navy',
      onShow    : function(Main){
        timer = setInterval(function(){
          Main.find('.jnotifica_bg').css('backgroundColor',color?'red':'navy');
          color = color ? false : true;
        },200);
      },
      onClose   : function(Main){
        clearInterval(timer);
      }
    });
  });
  $('#example_4').click(function(){
    $('span.example_4').jnotifica({
      position  : 'bottom',
      background: 'green',
      clickClose: false,
      timeout   : 0,
      cursor    : 'default'
    });
  });
  $('#example_5').click(function(){
    $.jnotifica('Beautiful! *-*',{
      position  : 'bottom',
      width     : 300,
      msgCss    : {
        textAlign: 'center'
      },
      background: 'blue',
      opacity   : 0.5,
      margin    : 30,
      classes   : 'rounded_corners'
    });
  });
  sh_highlightDocument();
});