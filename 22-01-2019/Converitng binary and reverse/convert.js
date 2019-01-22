function reverse(){
    var a=Number(document.getElementById("num").value);
    var b=a.toString(2).split("").reverse().join("");
    var c=parseInt(b,2);
    document.getElementById("real").innerHTML=a.toString(2)+" is the binary value of "+a;
    document.getElementById("reverse").innerHTML=b+" is the reverse of the original binary value";
    document.getElementById("result").innerHTML=c+" is the reverse of the binary value in decimals";
    console.log(c);
}