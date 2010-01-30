jQuery(document).ready(function(){
  $('#example_1').click(function(){
    $.jnotifica('Hello from Brazil!');
  });
  $('#example_2').click(function(){
    $.jnotifica('Hello from Brazil!',{
      timeout : 10000
    });
  });
  $('#example_3').click(function(){
    $.jnotifica('Hello from Brazil!',{
      background: 'red'
    });
  });
  $('#example_4').click(function(){
    $.jnotifica('Hello from Brazil!',{
      background: 'red',
      opacity   : 1
    });
  });
  $('#example_5').click(function(){
    $.jnotifica('Hello from Brazil!',{
      background: 'green',
      effect: 'fade'
    });
  });
  $('#example_6').click(function(){
    $.jnotifica('Hello from Brazil!',{
      background: 'purple',
      margin: 10
    });
  });
  $('#example_7').click(function(){
    $.jnotifica('Hello from Brazil!',{
      margin: 10,
      width: 400,
      effect: 'fade',
      padding: 10,
      msgCss:{
        textAlign: 'center'
      }
    });
  });
  $('#example_8').click(function(){
    $.jnotifica('Hello from Brazil!',{
      close: false
    });
  });
  $('#example_9').click(function(){
    $.jnotifica('Hello from Brazil!',{
      cursor:'default',
      clickClose: false
    });
  });
  $('#example_10').click(function(){
    $.jnotifica('Aguarde o timeout ;-)',{
      cursor:'default',
      clickClose: false,
      close: false
    });
  });
  $('#example_11').click(function(){
    $.jnotifica('Clique para fechar',{
      timeout: 0
    });
  });
  $('#example_12').click(function(){
    $.jnotifica('Clique para fechar',{
      width: 300,
      align: 'left'
    });
  });
  $('#example_13').click(function(){
    $.jnotifica('Clique para fechar',{
      position: 'bottom'
    });
  });
  $('#example_14').click(function(){
    $.jnotifica('Clique para fechar',{
      width: 400,
      align: 'right',
      margin: 10,
      position: 'bottom'
    });
  });
});