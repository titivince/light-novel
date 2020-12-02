window.onload = function() {
var outName = document.getElementById("name");
var outTxt = document.getElementById("txt");
var forward = document.getElementById("suivant");
var speed = 40; /* La vitesse de l'effet en ms */
var i = 0;
var mc = {
  name: "",
  txt: "Salut ! Je vien d'arriver dans cette nouvelle ville , et bien sur une nouvelle école et de nouveaux amis.",
};

function clear() {
  i = 0;
  outName.innerHTML = '';
  outTxt.innerHTML = '';
}

function fastWriter() {
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

/*Fin initialisation */
forward.addEventListener("click" , clear);

fastWriter();
/*while (forward == true)*/
mc.name = "Vous";
mc.txt = "J'ai changé de ville car mon père a été promus dans l'entreprise.";
/*fastWriter();*/
mc.txt = "J'ai changé d'école aussi alors je suis seul dans cette nouvelle ville et perdue en plus";
/*fastWriter();*/

} /*<-- pas troucher a ca */