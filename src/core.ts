window.onload = function () {
  var outName = document.getElementById("name"),
      outText = document.getElementById("text"),
      next = document.getElementById("next"),
      i = 0;

  /* Create the typing effect */
  function fastWriter() {
    if (mc.name.length > mc.text.length) {
      if (i < mc.name.length) {
        outName.innerHTML += mc.name.charAt(i);
        outText.innerHTML += mc.text.charAt(i);
        setTimeout( fastWriter, speed);
      }
    } else {
      if (i < mc.text.length) {
        outName.innerHTML += mc.name.charAt(i);
        outText.innerHTML += mc.text.charAt(i);
        setTimeout( fastWriter, speed);
      }
    }
    i++;
  }
  /* Tracking function */
  function control() {
    console.log("current text :" ,currentText);
  }
  function forward() {
    i = 0;
    currentText++;
    control();
    nextText();
    outName.innerHTML = "";
    outText.innerHTML = "";
    fastWriter();
  }
  /* start code */
  next.addEventListener("click" ,forward);
  /* Here I add some style to the console */
  console.log("%cYou made it!", "color: #bada55; padding: 4px; border: 1px solid #bada55;","\nHere you can see were you are in the story");
  control();
  fastWriter();
  //newText = parseInt(newText); /* try to convert the input in int */
  //if (newText > 0){ /* check if user want to fast travel */
  //  currentText = newText - 1; /* make the fast travel */
  //  newText == -1;
  //}
}