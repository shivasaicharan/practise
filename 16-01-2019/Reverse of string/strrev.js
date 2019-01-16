function reverse(){
    var a=document.getElementById("str").value;
    var b=a.split("");
    var c=b.reverse();
    var d=c.join("");
    document.getElementById("result").innerHTML=d;
}