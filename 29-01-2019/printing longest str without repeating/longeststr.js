function long(){
    var a=document.getElementById("str").value;
    var c=a.split("");
    var d=[];
    var b={};
    for(i=c.length-1;i>=0;i--){
        b[c[i]]=0;
    }
    for(var x in b){
        d.push(x);
    }
    console.log(d);
    document.getElementById("result").innerHTML=d.reverse().join("");
    document.getElementById("result1").innerHTML=arguments.callee.name;
}