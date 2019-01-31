function validate(){
    var ip=document.getElementById("ip").value;
    var ipv=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])$/
    if(ip.match(ipv)){
        alert("Your IP adress is matched")
    }
    else{
        alert("Enter a valid IP adress")
    }
}