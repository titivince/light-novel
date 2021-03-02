var speed = 30, // this is the speed the
    n:number,
    currentText = 0,
    //newText = prompt("You can fast travel if you write a number.\nYou can track the story if you right click, inspect the element and select the console"),
    mc = { // this is the dialogue box
      name:'',
      text:''
    };
function nextText() { // here is were the magic happen
  n = 0;
  if ( currentText == n++) { // the var n incremented
    mc.text = "this is the first text";
  }
  if (currentText == n++) {
    mc.name = 'The first character'; // the name will stay if you dont change it
    mc.text = 'Hello i\'m the second text';
  }
  if (currentText == n++) {
    mc.text = "This is the third text";
  }
  // for new dialogue add this: if (currentText == n++) {mc.name = "/*someone*/";mc.text = "/*say something*/";}
}
nextText();