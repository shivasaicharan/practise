var a=[];
function assign(){
    a.push(document.getElementById("num1").value);
    document.getElementById("num1").value="";
    document.getElementById("result").innerHTML=a;
}
var b=[];
function assign1(){
    b.push(document.getElementById("num2").value);
    document.getElementById("num2").value="";
    document.getElementById("result1").innerHTML=b;
}
function union(){
    var c=[],e=[];
    var d={};
    c=a.concat(b);
    for(i=0;i<c.length;i++){
        d[c[i]]=0;
    }
    for(var x in d){
        e.push(x);
    }
    document.getElementById("result2").innerHTML=e;
}