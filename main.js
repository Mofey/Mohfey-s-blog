$(".loadMore").on("click",function(){
    $(".loadArticle:hidden").slice(0, 2).show();
    //showing 2 hidden articles on click

    if($(".loadArticle:hidden").length == 0)
    {
        $(".loadMore").fadeOut();
        //this will hide button when length is 0
    }
})

//AOS Instance
AOS.init();