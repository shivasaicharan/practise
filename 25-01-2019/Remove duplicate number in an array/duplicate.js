var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("result").innerHTML=a;
}
function display(){
    b={};
    c=[];
    for(i=0;i<a.length;i++){
        b[a[i]]=0;
    }
    for(var key in b){
        c.push(key);
    }
    document.getElementById("result1").innerHTML=c;
}