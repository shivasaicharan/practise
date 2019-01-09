function ctof(){
    var c=document.getElementById("temp").value;
    var f=(c/5)*9+32;
    document.getElementById("t").innerHTML=c+'\xB0C is ' + f + '\xB0F.';
    ;
}
function ftoc(){
    var f=document.getElementById("temp").value;
    var c=5*(f-32)/9;
    document.getElementById("t").innerHTML=f+'\xB0F is ' + c + '\xB0C.';
}