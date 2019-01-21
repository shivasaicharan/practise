function result(){
    var a=document.getElementById("str").value;
    var c=[];
    for(i=0;i<10;i++){
        var b=a.replace("#",i);
        if(Number(b)%3==0){
            c.push(b);
        }
    }
    document.getElementById("result").innerHTML=c;
}