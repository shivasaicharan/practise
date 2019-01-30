function factor(){
    var x=document.getElementById("num1").value;
    var y=document.getElementById("num2").value;
    var i=(x-y)+1, r=1;
    if(x<0){
        document.getElementById("result").innerHTML="Enter the valid number";
    }
    else if(Number(y)>Number(x)){
        console.log(Number(y)>Number(x));
        document.getElementById("result").innerHTML=y+" > "+x+" is not valid";
    }
    else{
        while(i<=x){
            r*=i++;
        }
        document.getElementById("result").innerHTML=r;
    }
}
function background(){
    var a=Math.floor(Math.random()*238);
    var b=Math.floor(Math.random()*238);
    var c=Math.floor(Math.random()*238);
    document.body.style.background="rgb("+a+","+b+","+c+")";
}