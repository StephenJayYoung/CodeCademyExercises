
//hide a div
$(document).ready(function() {
    .hide(div) 
});)

//make a div dissappear on click
$(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('fast');
    });
});

// make an ol dissappear
$(document).ready(function() {
    var $target = $('ol li:nth-child(4)');
    $target.fadeOut('fast');
});

//Create a jquery object
var $div = $('div');

//make a div fade in slowly
$(document).ready(function() {
    $('div').FadeIn('slow');
});

//make all four divs of class '.vanish' fadeOut() 'slow'ly when the button is .click()ed
$(document).ready(function() {
    $().click(function$('button') {
        $('.vanish').FadeIn('slow');
    });
});

//only fade out the div with the id blue
$(document).ready(function() {
    $('button').click(function() {
        $('#blue').fadeOut('slow');
    });
});

//apply a fadeTo() to both the p and li selectors like this:
$('p, li').fadeTo('slow', 0);

//apply a fadeout using "this", for a specific div that ypu are clicking on
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});

// using this html, create a sliding toggle navbar
//<!DOCTYPE html>
<html>
    <head>
        <title>Slide Panel</title>
        <script type="text/javascript" src="script.js"></script>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"></link>
    </head>
    <body>
        <div class="panel">
        <br />
        <br />
        <p>Now you see me!</p>
        </div>
        <p class="slide"><div class="pull-me">Slide Up/Down</div></p>
    </body>
</html>

$(document).ready(function() {
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');
    });
});




