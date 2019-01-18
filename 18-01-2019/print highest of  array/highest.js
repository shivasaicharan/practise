var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("result").innerHTML=a;
}
function large(){
    console.log(a[a.length-1]);
    if(a[0]>a[a.length-1]){
        document.getElementById("result1").innerHTML=a.map(function(){return a[0]});
    }
    else{
        document.getElementById("result1").innerHTML=a.map(function(){return a[a.length-1]});
    }
}