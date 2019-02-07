window.onscroll = function(){scroll()};
function scroll(){
    var a=Number(document.body.scrollTop);
    var b=Number(document.body.scrollHeight)-Number(document.body.clientHeight);
    console.log(document.body.clientHeight);
    var scroll=(a/b)*100;
    document.getElementById("subbar").style.width=scroll+"%";
}