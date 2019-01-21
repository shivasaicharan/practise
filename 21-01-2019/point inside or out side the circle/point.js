var a=[];
var b=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("result").innerHTML=a;
}
function assign1(){
    b.push(document.getElementById("num2").value);
    document.getElementById("num2").value="";
    document.getElementById("result2").innerHTML=b;
}
function result(){
    var r=document.getElementById("num1").value;
    var result=Math.sqrt(a[0]-b[0])+Math.sqrt(a[1]-b[1]);
    if(result<=r*r){
        document.getElementById("result3").innerHTML="Point lies in the center";
    }
    else{
        document.getElementById("result3").innerHTML="Point does not lies in the center";
    }
}