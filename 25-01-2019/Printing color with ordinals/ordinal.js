var n=1;
var c="";
function ordinal(){
    var a=document.getElementById("color").value;
    document.getElementById("color").value="";
    var o=["th","st","nd","rd"];
    var x=n%100;
    x=x+(o[(x-20)%10]||o[x]||o[0]);
    n=n+1;
    c=c+x+" selected color is "+a+"<br><br>";
    document.getElementById("result").innerHTML=c;
}