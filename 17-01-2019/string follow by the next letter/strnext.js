function string(){
    var a=document.getElementById("str").value;
    var b="ABCDEFGHTJKLMNOPQRSTUVWXYZAabcdEefghIijklmnOopqrstUuvwxyzA";
    var c;
    var d=[];
    for(i=0;i<a.length;i++){
        c=b.search(a[i]);
        d=d+b[c+1];
    }
    document.getElementById("result").innerHTML=d;
}
function stri(){
    var a=document.getElementById("str").value;
    var b=a.split("");
    var c=b.sort();
    var d=c.join("");
    document.getElementById("result1").innerHTML=d;
}
function strin(){
    var a=document.getElementById("str").value;
    if(a.charAt(0)=="p"||a.charAt(a.length)=="p"){
        b=a.slice(1,length-1);
    }
    document.getElementById("result2").innerHTML=b;
}