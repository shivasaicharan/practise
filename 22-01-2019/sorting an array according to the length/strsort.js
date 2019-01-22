var a=[];
function assign(){
    a.push(document.getElementById("str").value);
    document.getElementById("str").value="";
    document.getElementById("assign").innerHTML=a;
}
function sort(){
    var b=[];
    b.push(a.sort((c,d)=>c.length-d.length));
    document.getElementById("result").innerHTML=b;
}