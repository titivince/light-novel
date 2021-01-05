window.onload = function() {
var outName = document.getElementById("name");
var outTxt = document.getElementById("txt");
var suivant = document.getElementById("suivant");
var speed = 30; /* speed of the typing effect in ms */
var i = 0;
var n;
var currentText = 0; /* counting var */
var mc = {
  name: "Vous",
  txt: "Salut ! Je vien d'arriver dans cette nouvelle ville , et bien sur une nouvelle école et de nouveaux amis. Clicker sur la flèche pour passer au texte suivant.",
};
/* create function */
function fastWriter() { /* create typing effect */
  if(mc.name.length > mc.txt.length){ /* test who is longer */
    if (i < mc.name.length) {
      outName.innerHTML += mc.name.charAt(i); /* place the character at the end */
      outTxt.innerHTML += mc.txt.charAt(i); /* place the character at the end */
      setTimeout( fastWriter, speed);
    }
  }else{
    if (i < mc.txt.length) {
      outName.innerHTML += mc.name.charAt(i); /* place the character at the end */
      outTxt.innerHTML += mc.txt.charAt(i); /* place the character at the end */
      setTimeout( fastWriter, speed);
    }
  }
  i++;
}
function control() {
  console.log("current text :", currentText); /* Keep track in the story */
}
function nextText() { /* create the main function */
  n = 1;
  if ( currentText == n ) {
    mc.txt = "J'ai changé de ville car mon père a été promus dans l'entreprise. Pourquoi je parle de \" clicker \" sur une flèche à moi même ?";
  }
  if ( currentText == n++ ) {
    mc.txt = "J'ai changé d'école aussi alors je suis seul dans cette nouvelle ville. Je vien de me perdre à cause de ce \" clicker sur la flèche pour passer au texte suivant \".";
  }
  if ( currentText == n++ ) {
    mc.txt = "Bref je n'ai cas demander a un passant mon chemin.";
  }
  /* for more text just add if */
}
function forward() {
  i = 0;
  currentText++;
  control();
  nextText();
  outName.innerHTML = ''; /* clear the name in the HTML */
  outTxt.innerHTML = ''; /* clear the text in the HTML */
  fastWriter();
}
/* start code */
suivant.addEventListener("click", forward);
console.log("here you can see were you are in the story");
control();
fastWriter();

}