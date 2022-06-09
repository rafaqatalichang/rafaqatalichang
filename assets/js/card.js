(document).ready(function(){
    $("#myCard").hover(function(){
        $(this).animate({

         marginTop: "-=1%",
        },200);
    },

    function(){
        $(this).animate({

            marginTop: "0%",
    
    },200);
}

    );
});