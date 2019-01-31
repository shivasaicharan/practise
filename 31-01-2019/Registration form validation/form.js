function validate(){
    var un=document.getElementById("uname").value;
    var p=document.getElementById("password").value;
    var n=document.getElementById("name").value;
    var e=document.getElementById("email").value;
    var unv=/^[0-9a-zA-Z]{6,10}$/;
    var pv=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    // var pv=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
    var nv=/[a-zA-Z\s]/;
    var ev=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    if(un.match(unv)==null){
        alert("UserName is not valid");
    }
    else if(p.match(pv)==null){
        alert("Password is not valid");
    }
    else if(n.match(nv)==null){
        alert("Name must contain alphabits only")
    }
    else if(e.match(ev)==null){
        alert("Enter valid EmailId");
    }
    else{
        alert("Registered successfully");
    }
}