var a=[];
var assign = () => {a.push(document.getElementById("num").value);
document.getElementById("num").value="";
document.getElementById("display").innerHTML=a;}
var dimentional = (val,...a) =>{
var b="";
a.length == 0
  ? val
  : b=Array.from({ length: a[0] }).map(() => dimentional(val, ...a.slice(1)));
  console.log(b);
  document.getElementById("result").innerHTML=b;
}