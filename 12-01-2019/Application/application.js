function apply(){
var a=document.getElementById("fname").value;
var b=document.getElementById("age").value;
var c=document.getElementById("marks").value;
var d=document.getElementById("marks2").value;
var e=document.getElementById("marks3").value;
    document.getElementById("app").innerHTML="<b>Name: "+a+"<br><b>Age: "+b+"<br><b>10th%: "+c+"<br><b>Inter%: "+d+"<br><b>Degree%: "+e;
}