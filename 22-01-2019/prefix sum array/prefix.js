var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("assign").innerHTML=a;
}
function result(){
    var b=[];
    b[0]=Number(a[0]);
    for(i=0;i<a.length-1;i++){
        b[i+1]=b[i]+Number(a[i+1]);
    }
    document.getElementById("result").innerHTML=b;
}