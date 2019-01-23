var a=[];
function details(){
    var book={
        title:document.getElementById("text1").value,
        author:document.getElementById("text2").value,
        price:document.getElementById("num").value
    };
    a.push(book);
    document.getElementById("text1").value="";
    document.getElementById("text2").value="";
    document.getElementById("num").value="";
}
function result(){
    var c="";
    for(i=0;i<a.length;i++){
        c=c+"Book "+(i+1)+" details<br><br>"+"Title of book: "+a[i].title+"<br>Author: "+a[i].author+"<br>Price: "+a[i].price+"<br><br>";
    }
    document.getElementById("result").innerHTML=c;
}