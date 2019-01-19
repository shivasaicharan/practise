var a=[];
function assign(){
    a.push(document.getElementById("str").value);
    document.getElementById("result").innerHTML=a;
    document.getElementById("str").value="";
    console.log(a[0].length);
}
function result(){
    for(i=0;i<a.length-1;i++){
        console.log("in",a[i].length);
        b=[];
        if(a[i].length > a[i+1].length){
            b=a[i];
            a[i]=a[i+1];
            a[i+1]=b;
        }
    }
    document.getElementById("result1").innerHTML=a[a.length-1]+" is the largest string";
}