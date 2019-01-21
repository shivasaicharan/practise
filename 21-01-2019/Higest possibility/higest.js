function higest(){
    var a=document.getElementById("num").value;
    var r=[];
    var b=[];
    while(a>0){
        b.push(a%10);
        a=Math.floor(a/10);
        for(i=0;i<b.length;i++){
            var n=0;
            for(j=b.length-1;j>=0;j--){
                if(j!==i){
                    n=n*10+b[j];
                    r.push(n);
                    console.log(n);
                }
            }
        }
    }
    document.getElementById("result").innerHTML=Math.max.apply(null,r);
}