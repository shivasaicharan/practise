var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("assign").innerHTML=a;
}
function even(){
    var n=document.getElementById("num1").value;
    var c=0;
    if(a.indexOf(n)>=0){
        for(i=0;a[i]!=n;i++){
            if(a[i]%2==0){
            c++;
        }
    }
    document.getElementById("result").innerHTML=c+" are even numbers";
    }
    else{
        document.getElementById("result").innerHTML="Enter a valid number";
    }
}