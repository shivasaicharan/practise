var a=[1,2,[3,4]];
document.getElementById("result").innerHTML=a.slice(0);
var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("result1").innerHTML=a;
}
function display(){
    var c=[];
    var n=document.getElementById("num1").value;
    for(i=0;i<n;i++){
        c.push(a[i]);
    }
    document.getElementById("result2").innerHTML=c;
}
function displays(){
    var c=[];
    var n=document.getElementById("num1").value;
    for(i=a.length-1;n>0;i--){
        c.push(a[i]);
        n--;
    }
    document.getElementById("result3").innerHTML=c.splice(0).reverse();
}