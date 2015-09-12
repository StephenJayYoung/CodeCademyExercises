//dybamically add a string to an html element
var $h1 = $("<h1>hello</h1>");

//append a paraggraph to the body of an html element
$(document).ready(function () {
    $("body").append('<p>I am a paragraph!</p>');
});

//add a <p> tag .after() the <div> with the ID #one
$(document).ready(function () {
  $('#one').after('<p>Some text</p>');
});

//remove a p tage from an html document
$(document).ready(function(){
var $target = $('<p>Some text</p>');
$('#one').after($target);
$('#two').after($target);
$('p').remove();
});
