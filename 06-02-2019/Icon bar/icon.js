function openpage1(){
    $(".book").hide();
    $("#icon2").removeClass("import");
    $(".home").toggle();
    $(".home").css({"background-color":"bisque"});
    $("#icon1").toggleClass("import");
}
function openpage2(){
    $(".home").hide();
    $("#icon1").removeClass("import");
    $(".book").toggle().css({"background-color":"bisque"});
    $("#icon2").toggleClass("import");
}