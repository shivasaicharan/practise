var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("assign").innerHTML=a;
}
function repeat(){
    a.sort(function(a,b){return a-b});
    console.log("out",a);
    var c=[];
    var b=[];
    for(i=0;i<a.length;){
        for(j=i+1;j<a.length;j++){
            if(a[i]==a[j]){
                b[a[i]]=a[j];
             }
            } 
            c.push(b.indexOf(a[i]));
            i++;
        console.log('inner',c);
    }
    document.getElementById("result").innerHTML=b.filter(function(e){return e}+"repeated in an array");
    console.log(c);
}