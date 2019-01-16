function area(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var c=document.getElementById("num3").value;
    var s=(Number(a)+Number(b)+Number(c))/2;
    var area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    document.getElementById("result").innerHTML=area;
}