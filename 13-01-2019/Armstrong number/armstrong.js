function arms(){
    var a=document.getElementById("number").value;
    var x=a;
    var b=0;
    var c=0;
    var d=a.length;
    while(a > 0){
        c = a % 10;
        a = Math.floor(a / 10);
        b = b + Math.pow(c,d);
    }
    if(b==x)
      document.getElementById("num").innerHTML=x+" is a Armstrong number";
    else
      document.getElementById("num").innerHTML=x+" is not a Armstrong number";
}