function swap(){
    var a=document.getElementById("text").value;
    var b=[];
    for(i=0;i<a.length;i++){
        if(/[A-Z]/.test(a[i])==true){
            b.push(a[i].toLowerCase());
            console.log(b);
        }
        else if(/[a-z]/.test(a[i])==true){
            b.push(a[i].toUpperCase());
        }
        else{
            b.push(a[i]);
        }
    }
    document.getElementById("result").innerHTML=b.join("");
}
function even(){
    var a=document.getElementById("num").value;
    var b=[a[0]];
    for(i=0;i<a.length;i++){
        if(a[i]%2==a[i+1]%2){
            b.push("-",a[i+1]);
        }
        else{
            b.push(a[i+1]);
        }
    }
    document.getElementById("result1").innerHTML=b.join("");
}