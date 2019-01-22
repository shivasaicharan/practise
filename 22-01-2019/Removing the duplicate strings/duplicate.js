function remove(){
    var a=document.getElementById("string").value;
    var b=[];
    for(i=0;i<a.length;i++){
        if(a.indexOf(a[i])===a.lastIndexOf(a[i])){
            b.push(a[i]);
        }
    }
    document.getElementById("result").innerHTML=b;
}