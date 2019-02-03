const a=[];
var assign = () => {
  a.push(Number(document.getElementById("num").value));
  document.getElementById("num").value="";
  document.getElementById("display").innerHTML=a;
}
var dimentional = () =>{
  console.log(a);
  var val=a[0];
  a.length == 0
  ? val
  : Array.from({ length: a[1] }).map(() => dimentional(val, ...a.slice(1)));
  console.log(Array.from({ length: a[0] }).map(() => dimentional(val, ...a.slice(1))));
  document.getElementById("result").innerHTML=a;
}
// const initializeNDArray = (val, ...args) =>
//   args.length === 0
//     ? val
//     : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));
// console.log(initializeNDArray(1, 4));
// console.log(initializeNDArray(5, 2, 3, 2, 2));