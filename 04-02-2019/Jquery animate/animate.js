$(document).ready(function() {
    $("#animate1").click(function(){
        $("#animate2").animate({
            left: "250px",
            opacity: "0.5",
            width: "200px",
            height: "200px"
        },function(){
            $("#animate1").mouseleave(function(){
                $("#animate2").animate({
                    left: "10px",
                    opacity: "1",
                    width: "100px",
                    height: "100px"
                });
            });
            }
        );
    });
});
$(document).ready(function(){
    $("#animate").click(function(){
        $("#animate3").animate({
            left: "+=100px"
       },function(){
            $("#animate").mouseleave(function(){
                $("#animate3").animate({
                    left:"10px"
                });
            })
        });
    });
});