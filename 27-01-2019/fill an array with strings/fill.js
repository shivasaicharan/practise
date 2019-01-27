function fill(){
    var a=document.getElementById("start").value;
    var b=document.getElementById("end").value;
    var c=document.getElementById("boundary").value;
    var d=[];
    if(a.charCodeAt(0)>b.charCodeAt(0)){
        c=-c;
        for(i=a.charCodeAt(0);i>b.charCodeAt(0);){
            d.push(String.fromCharCode(i));
            i=i+Number(c);
        }
    }
    else{
        for(i=a.charCodeAt(0);i<b.charCodeAt(0);){
            d.push(String.fromCharCode(i));
            i=i+Number(c);
        }
    }
    document.getElementById("result").innerHTML=d;
}