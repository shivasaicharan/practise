function happy(){
    var a=document.getElementById("num").value;
    var m, n ;
    var c = [];
    while(a != 1 && c[a]!=a) 
    {
        c[a]=a;
        m = 0 ;
        while (a > 0) {
            n = a % 10 ;
            m += n * n ;
            a = Math.floor(a/ 10) ;
            console.log("inner",a);
        }
        a = m ;
    }
    if(a==1)
        document.getElementById("result").innerHTML="Given number is a happy number";
    else
        document.getElementById("result").innerHTML="Given number is not a happy number";
}