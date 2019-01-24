var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("result").innerHTML=a;
}
function display(){
    var c=0;
    var d=1;
    var b=[];
    for(i=0;i<a.length;i++){
        for(j=i;j<a.length;j++){
            if(a[i]==a[j]){
                c++;
            }
            if(c>d){
                d=c;
                b.push(a[i]);
            }
        }
        c=0;
    }
    document.getElementById("result1").innerHTML=b+" is repeated "+d+" times";
}