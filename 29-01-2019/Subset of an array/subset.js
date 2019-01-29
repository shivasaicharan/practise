var a=[];
function assign(){
    a.push(document.getElementById("num1").value);
    document.getElementById("num1").value="";
    document.getElementById("display").innerHTML=a;
}
function subset(){
    var b=Number(document.getElementById("num2").value);
    var c=[];
    for(i=0;i<Math.pow(2,a.length);i++){
        var d=[];
        for(j=a.length-1;j>=0;j--){
            if((i&(1<<j))!==0){
                d.push(a[j]);
            }
        }
        if(d.length==b){
            c.push("["+d.reverse()+"]");
        }
    }
    console.log(c);
    document.getElementById("result").innerHTML=c;
}