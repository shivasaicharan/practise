function leap(){
    var a=document.getElementById("year").value;
    console.log(a);
    if(a%100==0||a%4==0){
        document.getElementById("result").innerHTML=a+" is a leap year";
    }
    else{
        document.getElementById("result").innerHTML=a+" is not a leap year";
    }
}