function multiply(){
    var n1=document.getElementById("firstnumber").value;
    var n2=document.getElementById("secondnumber").value;
    if(n1=="" && n2=="")
        document.getElementById("result").innerHTML="Enter 1st and 2nd number";
    else if(n1=="" || n2==""){
        if(n1=="")
         document.getElementById("result").innerHTML="Enter 1st number";
        else
         document.getElementById("result").innerHTML="Enter 2nd number";
    }
    else if(isNaN(n1) || isNaN(n2)){
        document.getElementById("result").innerHTML="Enter a valid number";
    }
    else
    document.getElementById("result").innerHTML= n1*n2;
}
function divide(){
    var n1=document.getElementById("firstnumber").value;
    var n2=document.getElementById("secondnumber").value;
    if(n1=="" && n2=="")
        document.getElementById("result").innerHTML="Enter 1st and 2nd number";
    else if(n1=="" || n2==""){
        if(n1=="")
         document.getElementById("result").innerHTML="Enter 1st number";
        else
         document.getElementById("result").innerHTML="Enter 2nd number";
    }
    else if(isNaN(n1) || isNaN(n2)){
        document.getElementById("result").innerHTML="Enter a valid number";
    }
    else
    document.getElementById("result").innerHTML= n1/n2;
}
alert(document.URL);