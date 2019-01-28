function assign(){
    var n=document.getElementById("name").value;
    var a=document.getElementById("age").value;
    var q=document.getElementById("qualification").value;
    var x=document.getElementById("table").rows[0].cells;
    x[1].innerHTML=n;
    var y=document.getElementById("table").rows[1].cells;
    y[1].innerHTML=a;
    var z=document.getElementById("table").rows[2].cells;
    console.log(z);
    console.log(z[1]);
    z[1].innerHTML=q;
}