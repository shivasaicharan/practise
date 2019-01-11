function print(){
var a=document.getElementById("s1").value;
var i,j;
var c="";
for(i=1;i<=a;i++){
    for(j=1;j<=i;j++)
       c=c+" *";
    c=c+"<br>";
}
document.getElementById("s2").innerHTML=c;
}