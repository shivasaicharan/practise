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
}
function display(){
    var c="";
    for(i=0;i<a.length;i++){
        c=c+"Pen "+(i+1)+" details<br><br>"+"Color: "+a[i].color+"<br>Brand: "+a[i].brand+"<br>Price: "+a[i].price+"<br><br>";
    }
    document.getElementById("result").innerHTML=c;
}
