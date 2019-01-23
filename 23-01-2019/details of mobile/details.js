var a=[];
function assign(){
    var mobile={
        brand:document.getElementById("text1").value,
        model:document.getElementById("text2").value,
        ram:document.getElementById("text3").value,
        memory:document.getElementById("text4").value,
        camera:document.getElementById("text5").value
    };
    a.push(mobile);
    document.getElementById("text1").value="";
    document.getElementById("text2").value="";
    document.getElementById("text3").value="";
    document.getElementById("text4").value="";
    document.getElementById("text5").value="";
}
function display(){
    var c="";
    for(i=0;i<a.length;i++){
        c=c+"Mobile "+(i+1)+" details<br><br>"+"Brand: "+a[i].brand+"<br>Model: "+a[i].model+"<br>Ram: "+a[i].ram+"<br>Internal mamory: "+a[i].memory+"<br>Camera quality: "+a[i].camera+"<br><br>";
    }
    document.getElementById("result").innerHTML=c;
}