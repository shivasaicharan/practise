function large(){
    var a=document.getElementById("c1").value;
    var b=document.getElementById("c2").value;
    var c=document.getElementById("c3").value;
    if(a.length>b.length){
        if(a.length>c.length)
          document.getElementById("large").innerHTML=a.charAt(0).toUpperCase()+a.slice(1)+" is the largest country name";
        else
          document.getElementById("large").innerHTML=c.charAt(0).toUpperCase()+c.slice(1)+" is the largest country name";
    }
    else if(b.length>c.length)
      document.getElementById("large").innerHTML=b.charAt(0).toUpperCase()+b.slice(1)+" is the larger country name";
    else
      document.getElementById("large").innerHTML=c.charAt(0).toUpperCase()+c.slice(1)+" is the largest country name";
}