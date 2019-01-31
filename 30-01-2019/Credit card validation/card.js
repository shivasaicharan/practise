function validate(){
    // var num=document.getElementById("num").value;
    // var a=/^(3[47][0-9]{13})$/;
    // var v=/^(4[0-9]{12}([0-9]{3}))+$/;
    // var m=/^(5[1-5][0-9]{14})$/;
    // var d=/^(6(011|5[0-9][0-9])[0-9]{12})$/;
    // var di=/^(3(0[0-5]|[68][0-9])[0-9]{11})$/;
    // var j=/^((2131|1800|35[0-9]{3})[0-9]{11})$/;
    var num=document.getElementById("num").value;
    var a=/^(3[47][0-9]{13})$/;
    var v=/^(4[0-9]{12}|(4[0-9]{15}))$/;
    var m=/^(5[1-5][0-9]{14})$/;
    var d=/^(6011[0-9]{12}|(5[0-9]{14}))$/;
    var di=/^(30[0-5][0-9]{11}|(3[6-8][0-9]{12}))$/;
    var j=/^(2131[0-9]{11}|(1800[0-9]{11})|(3[5][0-9]{14}))$/;
    if(num.match(a)){
        alert("Card is American Express card");
    }
    else if(num.match(v)){
        alert("card is Visa card");
    }
    else if(num.match(m)){
        alert("card is Master card");
    }
    else if(num.match(d)){
        alert("card is Discover card");
    }
    else if(num.match(di)){
        alert("card is Diness club card");
    }
    else if(num.match(j)){
        alert("Card is JCB card");
    }
    else{
        alert("Enter a valid Credit card number");
    }
}