var a=[];
var b=[];
function assign(){
    a.push(document.getElementById("num1").value);
    document.getElementById("num1").value="";
}
function assign1(){
    b.push(document.getElementById("num2").value);
    document.getElementById("num2").value="";
}
function result(){
    var c=[];
    c.push(a[Math.ceil((a.length-1)/2)],b[Math.ceil((a.length-1)/2)]);
    document.getElementById("result").innerHTML=c;
}