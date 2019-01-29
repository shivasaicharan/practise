var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("display").innerHTML=a;
}
function lcm(){
    var l=a.length;
    for(i=0;i<l;i++){
        var g1=0,g2=0;
        if(a[i]<a[i+1]){
            g1=a[i+1]%a[i];
            if(g1==0){
                a[i+1]=Math.floor((a[i]*a[i+1])/a[i]);
            }
            else{
                g2=a[i]%g1;
                if(g2==0){
                    a[i+1]=Math.floor((a[i]*a[i+1])/g1);
                }
                else{
                    a[i+1]=Math.floor((a[i]*a[i+1])/g2);
                }
            }
        }
        else{
            g1=a[i]%a[i+1];
            if(g1==0){
                a[i+1]=Math.floor((a[i]*a[i+1])/a[i]);
            }
            else{
                g2=a[i]%g1;
                if(g2==0){
                    a[i+1]=Math.floor((a[i]*a[i+1])/g1);
                }
                else{
                    a[i+1]=Math.floor((a[i]*a[i+1])/g2);
                }
            }
        }
    }
    document.getElementById("result").innerHTML=a[i-1];
}