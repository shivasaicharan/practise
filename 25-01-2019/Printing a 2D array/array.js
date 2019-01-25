var a=[[1,2,3,4],[1,2,3,4],[1,2,3,4]];
console.log(a[1][3]);
var c="";
for(var i in a){
    c=c+"Row "+i+"<br><br>";
    for(var j in a[i]){
        c=c+a[i][j]+"<br><br>";
    }
}
document.getElementById("result").innerHTML=c;
var b=[];
function assign(){
    b.push(Number(document.getElementById("num").value));
    document.getElementById("num").value="";
    document.getElementById("display").innerHTML=b;
}
function sum(){
    var s=0;
    for(i=0;i<b.length;i++){
        s=s+b[i];
    }
    document.getElementById("result1").innerHTML="Sum of array = "+s;
}
function multiply(){
    var m=1;
    for(i=0;i<b.length;i++){
        m=m*b[i];
    }
    document.getElementById("result2").innerHTML="Product of array = "+m;
}