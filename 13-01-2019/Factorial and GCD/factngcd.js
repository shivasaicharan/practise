function fact(){
    var a=document.getElementById("num1").value;
    var b=1;
    for(i=1;i<=a;i++){
        b=b*i;
    }
    document.getElementById("result").innerHTML=a+"! is "+b;
}
function gcd(){
    var a=document.getElementById("num2").value;
    var b=document.getElementById("num3").value;
    var c=a;
    var d=b;
    var t=0;
    while(c>1){
        if(c%d==0 && c>d){
             c=d;
             break;
        }
        else if (c>d){
            t=c%d;
            c=d;
            d=t;
        }
        else if(d>c && d%c==0){
            break;
        }
        else{
            t=d%c;
            c=c;
            d=t;
        }
    }
    document.getElementById("result1").innerHTML="GCD of "+a+" & "+b+" is "+c;
}