jQuery jNotifica Plugin
======================
*  Version: DEVELOPMENT (3.1)
*  Homepage: [jnotifica.lenonmarcel.com.br](http://jnotifica.lenonmarcel.com.br/)
*  Author: [Lenon Marcel](http://lenonmarcel.com.br/)

What is it?
===========
jNotifica is a jQuery plugin that provides a beautiful and simple notifications system. It's usefull for substitute JavaScript alerts.

It works in which browsers?
===========================
jNotifica is compatible with the most of modern browsers:

*  Firefox
*  Opera
*  Google Chrome
*  Internet Explorer 7
*  Internet Explorer 8

#### And also Microsoft Internet Explorer 6, but...

...there is a poor support, because IE6 don't support CSS position: fixed.
I had to use a "gambiarra" (something like "quick fix" in English), and
this solution not provides a good "user experience". But works.

Some examples
=============
1. Top message:

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

2. Right/bottom message:

        $.jnotifica('Hey! You here? ;-D',{
            margin    : 10,
            position  : 'bottom',
            align     : 'right',
            background: 'purple',
            width     : 400
        });

3. Big bottom message:

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

4. Message with HTML

        $('span.example_4').jnotifica({
            position  : 'bottom',
            background: 'green',
            clickClose: false,
            timeout   : 0,
            cursor    : 'default'
        });

5. Rounded corners

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

Basic usage:
============
Show notification:
------------------
`$.jnotifica(MESSAGE[, OPTIONS]);` ...or:
`$.jN(MESSAGE[, OPTIONS]);`

Close notification:
-------------------
`$.jnotifica.close();` ...or:
`$.jN.close();`

Notification from element:
--------------------------
`$(ELEMENT).jnotifica([OPTIONS]);` ...or:
`$(ELEMENT).jN([OPTIONS]);`

All options:
============
Please visit [jnotifica.lenonmarcel.com.br](http://jnotifica.lenonmarcel.com.br/).

License
=======
Dual licensed under the MIT and GPL licenses.

*  [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
*  [http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)

Copyright 2009, 2010 Lenon Marcel