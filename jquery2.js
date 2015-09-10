
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