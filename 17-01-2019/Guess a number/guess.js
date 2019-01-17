function num(){
    var b=document.getElementById("num1").value;
    var a=Math.floor(Math.random()*10);
    if(b==a){
      document.getElementById("result").innerHTML="Good Work";
    }
    else{
        document.getElementById("result").innerHTML="Not Matched";
    }
}