function perfect(){
    var a= document.getElementById("perfect").value;
    var sum=0;
    for(i=1;i<=a/2;i++){
        if(a%i==0)
          sum=i+sum;
    }
    if(sum==a)
      document.getElementById("demo").innerHTML="The "+a+" is a perfect number";
    else
      document.getElementById("demo").innerHTML="The "+a+" is not a perfect number";
}