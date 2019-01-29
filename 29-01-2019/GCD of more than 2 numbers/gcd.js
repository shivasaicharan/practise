var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("display").innerHTML=a;
}
function gcd(){
    for(i=0;i<a.length-1;i++){
        console.log(a[i+1]);
        var temp=0,x=0;
        if(a[i]<a[i+1]){
            while(a[i+1]%a[i]!=0){
                if(a[i]%a[i+1]!=0){                
                    temp=a[i];
                    a[i]=a[i+1]%a[i];
                    a[i+1]=temp;
                }
            }
        }
        else{
            while(a[i]%a[i+1]!=0){
                if(a[i]%a[i+1]!=0){
                    console.log("inner",a[i]%a[i+1]);                
                    temp=a[i];
                    a[i]=a[i]%a[i+1];
                    a[i+1]=temp;
                }
            }
        }
        x=a[i];
        a[i+1]=x;
        console.log(x);
    }
    document.getElementById("result").innerHTML=a[i-1];
}