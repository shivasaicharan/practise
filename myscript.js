function MyFunction(){
    var x=document.getElementsByClassName("hide");
    for(var i = 0; i < x.length; i++){
      x[i].style.display="none";
    }
  }
  function display(){
    document.getElementById("myworld").innerHTML="Have a nice day!";
  }
  function bulb(s){
    var pic;
    if(s==0)
      pic="pic_bulboff.gif";
    else
      pic="pic_bulbon.gif";
    document.getElementById("myimage").src=pic;
  }
  function date(){
   var x=new Date("2018-2-30");
   document.getElementById("date").innerHTML=Number(x);
  }
  function sort(){
    p.sort(function(a,b) {return(a-b)});
    document.getElementById("sort").innerHTML=p;
  }