var a= [];
function add(){
    var pen={
    color:document.getElementById("str1").value,
    brand:document.getElementById("str2").value,
    price:document.getElementById("num").value,
    };
    a.push(pen);
    document.getElementById("str1").value="";
    document.getElementById("str2").value="";
    document.getElementById("num").value="";
    console.log(pen);
}
function display(){
    var c="";
    for(i=0;i<a.length-1;i++){
        c=c+JSON.stringify(a,null,a.length);
    }
    document.getElementById("result").innerHTML=c;
}
