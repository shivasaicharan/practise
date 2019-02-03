var result = (start=Number(document.getElementById("start").value),end=Number(document.getElementById("end").value),boundary=Number(document.getElementById("boundary").value)) => 
    document.getElementById("result").innerHTML=Array.from({ length: Math.ceil((end + 1 - start) / boundary) }).map(
    (v, i, arr) => (arr.length - i - 1) * boundary + start
  );