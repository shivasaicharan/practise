var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("result").innerHTML=a;
}
function display(){
    var n = document.getElementById("num1").value;
    document.getElementById("result1").innerHTML=a[n];
}