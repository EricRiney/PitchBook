//

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
    $("#p1").hover(function(){
        alert("You entered p1!");
    }, 
    function() {
        alert("Bye! You now leave p1!");

    });
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});