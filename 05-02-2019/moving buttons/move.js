function move(ele){
    if($(ele).parent().attr("id") == "slide1"){
        $(ele).detach().appendTo("#slide2");
    }
    else{
        $(ele).detach().appendTo("#slide1");
    }
}