var text = "Hi Steve Hi Hi hi \ Steve Yes blah";
var myName = "Steve";
var hits = [];

for (var i = 0; i < text.length; ++i) {
  // console.log(count);
  if (text[i] === "S") {
    for (var letterOfName = i; letterOfName < (myName.length + i); ++letterOfName) {
        hits.push(text[letterOfName]);
      }
    }
  }
  
  if (letterOfName===0) {
      console.log("Your name wasn't found");
      }
      else {
          console.log(hits);
          }