function string()
{
    var a=document.getElementById("strings").value;
   b = /[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]/;
   for(i=0;i<a.length;i++){
   if (b.test(a[i]))
    {
      document.getElementById("result").innerHTML="Place "+(i+1)+" is in Uppercase";
      break;
    } 
    else
    {
      document.getElementById("result").innerHTML="String's not contain any uppercase";
    }
}
}