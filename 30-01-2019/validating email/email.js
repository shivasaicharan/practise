function validation(){
    var e=document.getElementById("email").value;
    var v=/^\w+([\.-]?\w)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    console.log(v);
    if(e.match(v)){
        alert("Email is valid");
    }
    else{
        alert("Email is not valid");
    }
}