
$(document).ready(function(){
    const categoryMenu = $("#categoryMenu");
    const lengthScroll = 100;

    categoryMenu.css("display", "none");

    $(window).on("scroll", function(){
        let currentScroll = $(window).scrollTop();

        if(currentScroll > lengthScroll){
            categoryMenu.css("display", "flex"); 
        } else {
            categoryMenu.css("display", "none");
        }
    });

// Image Freelance Efect 
    $('#fadeImg>.freelance-img:gt(0)').hide();
        setInterval(function(){
            $('#fadeImg > .freelance-img:first')
            .fadeOut(1500)
            .next()
            .fadeIn(1500)
            .end()
            .appendTo('#fadeImg');
        } , 6500);
    
    


});
