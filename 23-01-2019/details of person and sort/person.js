var a=[];
function store(){
    var person={
        name:document.getElementById("text1").value,
        born:document.getElementById("date").value,
        height:document.getElementById("text2").value
    };
    a.push(person);
    document.getElementById("text1").value="";
    document.getElementById("date").value="";
    document.getElementById("text2").value="";
}
function Display(){
    c="";
    for(i=0;i<a.length;i++){
        c=c+"Person "+(i+1)+" details<br><br>"+"Name: "+a[i].name+"<br>Date of birth: "+a[i].born+"<br>Height: "+a[i].height+"<br><br>"
    }
    document.getElementById("result").innerHTML=c;
}
function sortdate(){
    a.sort(function (a, b) {
        return a.born - b.born;
    });
    c="";
    for(i=0;i<a.length;i++){
        c=c+"Person "+(i+1)+" details<br><br>"+"Name: "+a[i].name+"<br>Date of birth: "+a[i].born+"<br>Height: "+a[i].height+"<br><br>"
    }
    document.getElementById("result1").innerHTML=c;
}
function sortname(){
    a.sort(function (a1, b1) {
        var x = a1.name.toLowerCase();
        var y = b1.name.toLowerCase();
        return (x < y ? -1 : (x > y ? 1 : 0));
    });
    c="";
    for(i=0;i<a.length;i++){
        c=c+"Person "+(i+1)+" details<br><br>"+"Name: "+a[i].name+"<br>Date of birth: "+a[i].born+"<br>Height: "+a[i].height+"<br><br>"
    }
    document.getElementById("result2").innerHTML=c;
}