var profile=[];
function signup(){
    var person = {
        firstname :document.getElementById("firstname").value,
        lastname : document.getElementById("lastname").value,
        email : document.getElementById("email").value,
        password1 : document.getElementById("password1").value,
        password2 : document.getElementById("password2").value
    }
    profile.push(person);
    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("email").value="";
    document.getElementById("password1").value="";
    document.getElementById("password2").value="";
    var store = localStorage.setItem("profile",JSON.stringify(profile));
    console.log(localStorage.setItem("profile",JSON.stringify(profile)));
}