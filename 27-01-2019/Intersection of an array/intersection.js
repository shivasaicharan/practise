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
function intersection(){
    var c=[];
    c=a.concat(b);
    var e=[];
    for(i=0;i<c.length;i++){
        if(c.indexOf(c[i])==c.lastIndexOf(c[i])){
        e.push(c[i]);
        }
    }
    document.getElementById("result2").innerHTML=e;
}