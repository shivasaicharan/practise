function convert(){
    var a=document.getElementById("num").value;
    var u=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];
    if(a<1){
        document.getElementById("result").innerHTML=a+" "+u[0];
    }
    var e=Math.min(Math.floor(Math.log10(a)/3),u.length-1);
    document.getElementById("result").innerHTML=(a/1000**e).toPrecision(4)+" "+u[e];
}