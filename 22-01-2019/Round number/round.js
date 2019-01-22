var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("assign").innerHTML=a;
}
function position(){
    var b=[];
    for(i=0;i<a.length;i++){
        if(a[i]%10==0){
            b.push(a.indexOf(a[i])+1);
        }
    }
    if(b==0){
        document.getElementById("result").innerHTML=0;
    }
    else{
        document.getElementById("result").innerHTML=b+" position";
    }
}