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
