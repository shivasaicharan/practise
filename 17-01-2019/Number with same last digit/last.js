function num(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var c=document.getElementById("num3").value;
    if(a.charAt(a.length-1)==b.charAt(b.length-1) && b.charAt(b.length-1)==c.charAt(c.length-1)){
        document.getElementById("result").innerHTML="true";
    }
    else{
        document.getElementById("result").innerHTML="false";
    }
}
function marks(){
    var a=document.getElementById("num4").value;
    if(a>=90 && a<=100){
        document.getElementById("result1").innerHTML="Pass";
    }
    else{
        document.getElementById("result1").innerHTML="Fail";
    }
}