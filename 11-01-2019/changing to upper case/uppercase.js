function myfunction(){
    var x=document.getElementById("name");
     x.value= x.value.toUpperCase();
}
function upper(){
     var x= "have a nice day";
     var z= x.split(" ");
     var y="";
     for(i=0;i<z.length;i++){
     var y = y+ z[i].charAt(0).toUpperCase()+z[i].slice(1)+" ";
     }
     document.getElementById("demo").innerHTML=y;
}