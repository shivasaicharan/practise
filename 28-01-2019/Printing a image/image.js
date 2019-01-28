function display(){
    var a = [{
        src:"bg.jpg"
    },
    {
        src:"bulbon.gif"
    },
    {
        src:"workplace.jpg"
    },]
    console.log(a.src);
    var i=Math.floor(Math.random()*a.length); 
    document.getElementById("image").src=a[i].src;
}