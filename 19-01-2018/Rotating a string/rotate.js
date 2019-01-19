function rotate(){
    a=document.getElementById("text").value;
    setInterval(function(){
    a=a[a.length-1]+a.slice(0,a.length-1);
    document.getElementById("result").innerHTML=a+" ";
},300);
}