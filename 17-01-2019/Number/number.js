function num(){
    var a=Number(document.getElementById("num1").value);
    var b=Number(document.getElementById("num2").value);
    if(a==b){
        document.getElementById("result").innerHTML="Both numbers are same";
    }
    else if(Math.abs(a-100)<Math.abs(b-100)){
        document.getElementById("result").innerHTML=a+" is nearest to 100";
    }
    else if(Math.abs(a-100)>Math.abs(b-100)){
        document.getElementById("result").innerHTML=b+" is nearest to 100";
    }
    else{
        document.getElementById("result").innerHTML="Both are equal diatance to the 100";
    }
}
function numb(){
    var a=document.getElementById("num3").value;
    var b=document.getElementById("num4").value;
    var c=document.getElementById("num5").value;
    if(a==b && b==c){
        document.getElementById("result1").innerHTML="30";
    }
    else if(a==b || b==c || c==a){
        document.getElementById("result1").innerHTML="20";
    }
    else{
        document.getElementById("result1").innerHTML="40";
    }
}
function numbe(){
    var a=document.getElementById("num3").value;
    var b=document.getElementById("num4").value;
    var c=document.getElementById("num5").value;
    if((a>=20 && (a<b||a<c))||(b>=20 && (b<c))){
        document.getElementById("result2").innerHTML="True";
    }
    else{
        document.getElementById("result2").innerHTML="False";
    }
}