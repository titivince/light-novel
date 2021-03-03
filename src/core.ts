window.onload = function () {
  var start = document.getElementById("start"),
      startScreen = document.getElementById("startScreen"),
      outName = document.getElementById("name"),
      outText = document.getElementById("text"),
      next = document.getElementById("next"),
      i = 0;
  /* Start function */
  function closeStart() {
    startScreen.style.display = "none";
    next.addEventListener("click" ,forward);
    control();
    fastWriter();
  }
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
  start.addEventListener("click" ,closeStart);
  
  //newText = parseInt(newText); /* try to convert the input in int */
  //if (newText > 0){ /* check if user want to fast travel */
  //  currentText = newText - 1; /* make the fast travel */
  //  newText == -1;
  //}
}