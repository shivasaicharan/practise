function happy(){
    var a=document.getElementById("num").value;
    var m, n ;
    var c = "" ;
    while(a != 1 && c.search(a)!=a) 
    {
        console.log("s",c[a]);
        c=c+a;
        m = 0 ;
        while (a > 0) {
            n = a % 10 ;
            m += n * n ;
            a = Math.round(a / 10) ;
            console.log("inner",a);
        }
        a = m ;

    }
    console.log("result",a);
    if(a==1)
        document.getElementById("result").innerHTML="Given number is a happy number";
    else
        document.getElementById("result").innerHTML="Given number is not a happy number";
}