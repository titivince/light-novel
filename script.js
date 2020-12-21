window.onload = function() {
var outName = document.getElementById("name");
var outTxt = document.getElementById("txt");
var suivant = document.getElementById("suivant");
var speed = 40; /* speed of the effetc in ms */
var i = 0;
var currentText = 0; /* counting var */
var newText = 1;    /* counting var */
var mc = {
  name: "Vous",
  txt: "Salut ! Je vien d'arriver dans cette nouvelle ville , et bien sur une nouvelle école et de nouveaux amis.",
};
/* create function */
function forward() {
  i = 0;
  currentText++;
  outName.innerHTML = ''; /* clear the name */
  outTxt.innerHTML = ''; /* clear the text */
  fastWriter();
}
function fastWriter() { /* create typing effect */
  if(mc.name.length > mc.txt.length){
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
function stop() {
  console.log(newText,currentText);
  if (newText == currentText) {
    /* pause js or wait a click */
    newText++;
  }
  setTimeout(stop, 1000);
}
/* start code */
suivant.addEventListener("click", forward);

fastWriter();
stop();

mc.name = "Vous";
mc.txt = "J'ai changé de ville car mon père a été promus dans l'entreprise.";

mc.txt = "J'ai changé d'école aussi alors je suis seul dans cette nouvelle ville et perdue en plus";

}