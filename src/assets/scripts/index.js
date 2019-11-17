var i = 0;
var i=0;
var txt = 'Hola, bienvenido a enciclopedia font-end';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("ml3").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



