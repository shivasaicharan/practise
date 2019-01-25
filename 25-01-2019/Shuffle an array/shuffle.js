var a=[];
function assign(){
    a.push(document.getElementById("num").value);
    document.getElementById("num").value="";
    document.getElementById("display").innerHTML=a;
}
function shuffle(){
    var c=0;
    var temp;
    for(i=a.length-1;i>0;i--){
        c=Math.floor(Math.random()*i);
        temp=a[i];
        a[i]=a[c];
        a[c]=temp;
        console.log(Math.floor(Math.random()*i));
    }
    document.getElementById("result").innerHTML=a;
}