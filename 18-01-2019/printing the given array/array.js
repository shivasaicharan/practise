var i=0;
var j=0;
var b=[];
function assign(){
    var n=Number(document.getElementById("num").value);
    var a=[];
    for(i=i;i<n;){
        a.push(document.getElementById("num1").value);
        j++;
        b[j-1]=a[0];
        console.log(b);
        break;
    }
    i++;
}
function result(){
    document.getElementById("result").innerHTML=b;
}