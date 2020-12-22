window.onload = function() {
var outName = document.getElementById("name");
var outTxt = document.getElementById("txt");
var suivant = document.getElementById("suivant");
var speed = 40; /* speed of the effetc in ms */
var i = 0;
var n = 1;
var currentText = 0; /* counting var */
var newText = 1;    /* counting var */
var mc = {
  name: "Vous",
  txt: "Salut ! Je vien d'arriver dans cette nouvelle ville , et bien sur une nouvelle école et de nouveaux amis.",
};
/* create function */
function fastWriter() { /* create typing effect */
  if(mc.name.length > mc.txt.length){ /* test whos longer length */
    if (i < mc.name.length) {
      outName.innerHTML += mc.name.charAt(i);
      outTxt.innerHTML += mc.txt.charAt(i);
      i++;
      setTimeout( fastWriter, speed);
    }
  }else{
    if (i < mc.txt.length) {
      outName.innerHTML += mc.name.charAt(i);
      outTxt.innerHTML += mc.txt.charAt(i);
      i++;
      setTimeout( fastWriter, speed);
    }
  }
}
function control() {
  console.log("current text :", currentText); /* Keep track in the story */
  if (newText == currentText) {
    newText++;
  }
}
function nextText() {
  n = 1;
  if ( currentText == n ) {
    mc.txt = "J'ai changé de ville car mon père a été promus dans l'entreprise.";
  }
  n++;
  if (currentText == n ) {
    mc.txt = "J'ai changé d'école aussi alors je suis seul dans cette nouvelle ville et perdue en plus";
  }
}
function forward() {
  i = 0;
  control();
  nextText();
  currentText++;
  outName.innerHTML = ''; /* clear the name in the HTML */
  outTxt.innerHTML = ''; /* clear the text in the HTML */
  fastWriter();
}
/* start code */
suivant.addEventListener("click", forward);

fastWriter();

}