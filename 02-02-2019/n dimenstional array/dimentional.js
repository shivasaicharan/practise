const a=[];
var assign = () => {
  a.push(Number(document.getElementById("num").value));
  document.getElementById("num").value="";
  document.getElementById("display").innerHTML=a;
}
// var dimentional = () =>{
//   console.log(a);
//   var val=a[0],i=0;
//   a.length == 0
//   ? val
//   : document.getElementById("result").innerHTML=Array.from({ length: a[i=i+1]}).map(() => val+=a.slice(a[0]));
//   console.log(Array.from({ length: a[0] }).map(() => dimentional(val, a.slice(a[0]))));
// }
// const initializeNDArray = (val, ...args) =>
//   args.length === 0
//     ? val
//     : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));
// console.log(initializeNDArray(1, 4));
// console.log(initializeNDArray(1, 4, 4));
var  dimentional = ()=>{
  var b=[];
  for(i=0;i<a.length-1;i++){
  b.push(Array.from({length: a[i+1]}).map(()=> value=a[0]+a.slice(a[0])));
  console.log(b);
  }
  document.getElementById("result").innerHTML=Array.from(new Map(b));
}