function string(){
    var a=document.getElementById("name").value;
    var x=0;
    var y=0;
    for(i=0;i<a.length;i++){
        if(/[a-z]/==a.test){
            x++;
        }
        else{
            y++;
        }
    }
    if(x>y){
        document.getElementById("result").innerHTML=a.toUpperCase();
    }
    else{
        document.getElementById("result").innerHTML=a.toLowerCase();
    }
}