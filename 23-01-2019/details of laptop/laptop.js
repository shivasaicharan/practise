var a=[];
function store(){
    var laptop={
        brand:document.getElementById("text1").value,
        processor:document.getElementById("text2").value,
        ram:document.getElementById("text3").value,
        screen:document.getElementById("text4").value,
        graphic:document.getElementById("text5").value,
    }
    a.push(laptop);
    document.getElementById("text1").value="";
    document.getElementById("text2").value="";
    document.getElementById("text3").value="";
    document.getElementById("text4").value="";
    document.getElementById("text5").value="";
}
function display(){
    c="";
    for(i=0;i<a.length;i++){
        c=c+"Laptop "+(i+1)+" details<br><br>"+"Brand: "+a[i].brand+"<br>Processor: "+a[i].processor+"<br>RAM: "+a[i].ram+"<br>Screen: "+a[i].screen+"<br>Graphic card: "+a[i].graphic+"<br><br>";
    }
    document.getElementById("result").innerHTML=c;
}