function calculate(){
    var r=Number(document.getElementById("radius").value);
    var v=(4/3)*Math.PI*Math.pow(r,3);
    document.getElementById("volume").value=v.toFixed(2);
}