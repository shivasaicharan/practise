var a;
var i;
var c=0;
for(i=2019;i<2050;i++){
    a= new Date(i,0,1);
    if(a.getDay()==0){
        c=c+i+"<br>";
    }
    document.getElementById("result").innerHTML=c;
}