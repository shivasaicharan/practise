var n=1;
var a=[];
function assign(){
        n++;
        a.push(document.getElementById("num").value);
        document.getElementById("result1").innerHTML=a;
        document.getElementById("num").value="";
        document.getElementById("name").innerHTML=n;
        console.log("a is",a);
}
function reverse(){
    if(a.length<=3){
    a.reverse();
    document.getElementById("result").innerHTML=a;
    }
    else{
        document.getElementById("result").innerHTML="Array length is more than 3";
    }
}