var speed = 30, // this is the speed of the typing effect
    n:number,
    currentText = 1,
    //newText = prompt("You can fast travel if you write a number.\nYou can track the story if you right click, inspect the element and select the console"),
    mc = { // this is the dialogue box
      name:'',
      text:''
    };
function nextText() { // here is where the magic happens
  n = 1;
  if ( currentText == n++ ) { // the var n incremented
    mc.text = "This is the first text";
  }
  if ( currentText == n++ ) {
    mc.name = 'The first character'; // the name will stay if you don't change it
    mc.text = 'Hello i\'m the second text';
    character1.classList.add('char_move_in'); // add the animation to the character1
  }
  if ( currentText == n++ ) {
    mc.text = "This is the third text";
    character1.classList.remove('char_move_in'); // remove the class of the character1
    // or you can remove all class of the character1
    character1.className = "";
  }
  // for new dialogue add this: if (currentText == n++) {mc.name = "/*someone*/";mc.text = "/*say something*/";}
}
/* Here I add some style to the console */
console.log("%cYou made it!", "color: #bada55; padding: 3px;","\nHere you can see were you are in the story");
nextText(); // the function have to run once to be use everywere