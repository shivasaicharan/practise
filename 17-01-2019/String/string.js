function str(){
    var a=document.getElementById("str1").value;
    var b=document.getElementById("str2").value;
    var c=a.slice(0,2);
    document.getElementById("result1").innerHTML=a;
    document.getElementById("result2").innerHTML=c+b;
}
function stri(){
    var a=document.getElementById("str3").value;
    var c=document.getElementById("num").value;
    var f=Number(c);
    var d=a.substring(0,f-1);
    var e=a.substring(f,a.length);
    document.getElementById("result3").innerHTML=d+e;
}
function strin(){
    var a=document.getElementById("str4").value;
    if(a.length<=1){
        document.getElementById("result4").innerHTML=a;
    }
    else{
    document.getElementById("result4").innerHTML=a.charAt(a.length-1)+a.substring(1,a.length-1)+a.charAt(0);
    }
}