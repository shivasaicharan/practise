var a=[];
var assign = () => {
    a.push(Number(document.getElementById("num").value));
    document.getElementById("num").value="";
    document.getElementById("display").innerHTML=a;
}
var fills = () => {
    var value=a[1];
    document.getElementById("result").innerHTML=Array(a[0]).fill(value);
}