var i = 0;
var j=0;
var txt = 'Algiers,Algeria. '
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

  // if (j < txt2.length) {
  //   document.getElementById("demo2").innerHTML += txt2.charAt(j);
  //   j++;
  //   setTimeout(typeWriter2, 20);
  // }
 
}
function functionOne(){
 var expDiv = document.getElementById("experience");
 console.log(expDiv);
 if(expDiv.style.display === "none"){
  expDiv.style.display = "block";
 } else{
  expDiv.style.display ="none";
 }
}
function functionTwo(){
  var expDiv = document.getElementById("experiments");
  console.log(expDiv);
  if(expDiv.style.display === "none"){
   expDiv.style.display = "block";
  } else{
   expDiv.style.display ="none";
  }
 }
 function functionThree(){
  var expDiv = document.getElementById("education");
  console.log(expDiv);
  if(expDiv.style.display === "none"){
   expDiv.style.display = "block";
  } else{
   expDiv.style.display ="none";
  }
 }
 function functionNote(){
  var expDiv = document.getElementById("note");
  console.log(expDiv);
  if(expDiv.style.display === "none"){
   expDiv.style.display = "block";
  } else{
   expDiv.style.display ="none";
  }
 }

window.onload = function() {
  document.getElementById("experience").style.display = "none";
  document.getElementById("experiments").style.display = "none";
  document.getElementById("education").style.display = "none";
  document.getElementById("note").style.display = "none";
  
  // typeWriter();

   
  };