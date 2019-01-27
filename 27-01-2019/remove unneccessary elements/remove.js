var a=[,undefined,2,4,a,"",5,6,a,"h",NaN];
var c=[];
for(i=0;i<a.length;i++){
    var value=a[i];
    if(value){
        c.push(a[i]);
    }
}
document.getElementById("result").innerHTML=c;