function fill(){
    var a=document.getElementById("start").value;
    var b=document.getElementById("end").value;
    var c=document.getElementById("boundary").value;
    var d=[];
    if(Number(a)>Number(b)){
        c=-c;
        for(i=Number(a);i>Number(b);){
            d.push(i);
            i=i+Number(c);
        }
    }
    else{
        for(i=Number(a);i<Number(b);){
            d.push(i);
            i=i+Number(c);
        }
    }
    document.getElementById("result").innerHTML=d;
}