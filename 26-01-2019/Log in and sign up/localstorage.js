function signup(){
    var firstname = localStorage.setItem("firstname",document.getElementById("firstname").value);
    var lastname = localStorage.setItem("lastname",document.getElementById("lastname").value);
    var email = localStorage.setItem("email",document.getElementById("email").value);
    var password1 = localStorage.setItem("password1",document.getElementById("password1").value);
    var password2 = localStorage.setItem("password2",document.getElementById("password2").value);
    event.preventDefault();
    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("email").value="";
    document.getElementById("password1").value="";
    document.getElementById("password2").value="";
    console.log(localStorage.getItem("email"));
}
function loginpage(){
    var verify = document.getElementById("email").value;
    if(verify==localStorage.getItem("email")){
        console.log("true");
    }
}