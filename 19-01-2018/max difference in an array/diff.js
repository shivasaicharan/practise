var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("print").innerHTML=a;
}
function result(){
    b=[];
    for(i=0;i<a.length-1;i++){
        b.push(Math.abs(Number(a[i])-Number(a[i+1])));
    }
    b.sort(function(a,b){return a-b});
    document.getElementById("result").innerHTML=b[b.length-1];
}