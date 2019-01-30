function validate(){
    var name=document.getElementById("name").value;
    console.log(name);
    var a=/[0-9a-zA-z]/;
    if(name>6 && name<18){
        if(name.match(a)){
            alert("Your username is accepted");
        }
        else{
            alert("Enter valid username");
        }
    }
    else{
        alert("Username length is not in be between 6-18");
    }
}