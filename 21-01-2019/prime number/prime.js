function prime(){
    var a=document.getElementById("num").value;
    var c=0;
    var d=[];
    for(i=1;c<a;i++){
        for(j=2;j<=i;j++){
            if(i!==j||i==2){
            if(i%j!==0||i==2){
                d.push(i);
                c=c+1;
                break;
            }
            else{
                break;
            }
        }
        }
    }
    document.getElementById("result").innerHTML=d;
}