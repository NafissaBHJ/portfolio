var i = 0;
var j=0;
var txt = 'Salam, I\'m Nafissa from Algiers,Algeria. I\'m a softwere engineer. Although I\'m interested in Mobile apps developement with Flutter,I find myself building simple desktop apps in my free time.'
var txt2 ='By now you have probably assumed that I\'m a Flutter enthusiast :).' 
var speed = 8; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if(i == txt.length){
    typeWriter2();
  }
 
}
function typeWriter2() {

  if (j < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, 20);
  }
 
}
window.onload = function() {

    typeWriter();
   
  };