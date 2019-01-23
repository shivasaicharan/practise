var a=[];
function store(){
    var bike={
        brand:document.getElementById("text1").value,
        model:document.getElementById("text2").value,
        capacity:document.getElementById("text3").value,
        mileage:document.getElementById("text4").value,
        weight:document.getElementById("text5").value,
    }
    a.push(bike);
    document.getElementById("text1").value="";
    document.getElementById("text2").value="";
    document.getElementById("text3").value="";
    document.getElementById("text4").value="";
    document.getElementById("text5").value="";
}
function display(){
    var c="";
    for(i=0;i<a.length;i++){
        if(a[i].brand!==""&&a[i].model!==""&&a[i].capacity!==""&&a[i].mileage!==""&&a[i].weight!==""){
            c=c+"Bike "+(i+1)+" details<br><br>"+"Brand: "+a[i].brand+"<br>Model: "+a[i].model+"<br>Capacity; "+a[i].capacity+"<br>Mileage: "+a[i].mileage+"<br>weight: "+a[i].weight+"<br><br>";
        }
        else if(a[i].brand==""){
            c="Enter Brand name for bike "+(i+1);
        }
        if(a[i].model==""){
            c=c+"<br>Enter Model name for bike "+(i+1);
        }
        if(a[i].capacity==""){
            c=c+"<br>Enter Capacity for bike "+(i+1);
        }
        if(a[i].mileage==""){
            c=c+"<br>Enter Mileage for bike "+(i+1);
        }
        if(a[i].weight==""){
            c=c+"<br>Enter Weight for bike "+(i+1);
        }
    }
    document.getElementById("result").innerHTML=c;
}