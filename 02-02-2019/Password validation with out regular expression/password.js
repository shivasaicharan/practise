function validate(){
    var p=document.getElementById("password").value;
    console.log(p);
    if(p.length>6){
        for(i=0;i<p.length;i++){
            if(p.charCodeAt(i)>47 && p.charCodeAt(i)<58){
                console.log(p.charCodeAt(i));
                var a=true;
                continue;
            }
            if(p.charCodeAt(i)>64 && p.charCodeAt(i)<91){
                console.log(p.charCodeAt(i));
                var b=true;
                continue;
            }
            if(p.charCodeAt(i)>96 && p.charCodeAt(i)<123){
                console.log(p.charCodeAt(i));
                var c=true;
                continue;
            }
            if(p.charCodeAt(i)>32 && p.charCodeAt(i)<48||p.charCodeAt(i)==64){
                console.log(p.charCodeAt(i));
                var d=true;
            }
        }
        if(a==b==c==d==true){
            alert("Password is successful");
        }
        else{
            alert("enter a valid password");
        }
    }
    else{
        alert("Length should be greater than 6");
    }
}