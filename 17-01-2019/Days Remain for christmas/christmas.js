var a=new Date();
var c=new Date(a.getFullYear(),11,25);
if(a.getMonth()==11 && a.getDate()>25){
    c.setFullYear(c.getFullYear()+1);
}
var b=1000*60*60*24;
document.getElementById("result").innerHTML=Math.ceil((c.getTime()-a.getTime())/b)+" days left for christmas";
document.getElementById("result1").innerHTML=document.URL;