function fibo(){
    var  n=document.getElementById("num").value;
    var a=[0,1];
    var i;
    for(i=0;i<n-2;i++){
        a[i+2]=a[i]+a[i+1];
    }
    document.getElementById("fib").innerHTML=a;
}
