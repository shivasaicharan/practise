var a=document.getElementById("try");
a.addEventListener("mouseover",move);
a.addEventListener("click",click);
a.addEventListener("mouseout",out);
function move(){
    document.getElementById("text").innerHTML +="Move Over<br>";
}
function click(){
    document.getElementById("text").innerHTML +="Clicked<br>";
}
function out(){
    document.getElementById("text").innerHTML +="Moved out<br>";
}
var b=document.getElementById("block");
b.addEventListener("mouseover",move1);
b.addEventListener("mouseout",out1);
b.addEventListener("click",click1);
function move1(){
    document.getElementById("block").style.backgroundColor="blue";
    document.getElementById("block").innerHTML="<b>Hello world</b>";
}
function out1(){
    document.getElementById("block").style.backgroundColor="red";
    document.getElementById("block").innerHTML="<b>Click me</b>";
}
function click1(){
    document.getElementById("block").style.backgroundColor="green";
    document.getElementById("block").innerHTML="<b>Have a nice day</b>";
}