$(function ($) {
    $(".chat_friends .chat_item").on("click",function () {
        $(".catch-drop-area").hide();
        $(".right").show();
        var nikename = $(this).find(".info").text();
        $(".title_name").text(nikename);
        $(".chat_item").removeClass("active");
        $(this).addClass("active");

    })
    $(".tab_public").on("click",function () {
        $(".tab_item .tab_public").css("background-position","-185px -96px");
        $(".tab_group").css("background-position","-376px -322px");
        $(".tab_friends").css("background-position","-220px -96px");
        $(".chat_friends").show();
        $(".chat_group").hide();
        $(".chat_public").hide();
    })
    $(".tab_group").on("click",function () {
        $(".tab_item .tab_group").css("background-position","-304px -281px");
        $(".tab_public").css("background-position"," -150px -96px");
        $(".tab_friends").css("background-position","-220px -96px");
        $(".chat_friends").hide();
        $(".chat_group").show();
        $(".chat_public").hide();
    })
    $(".tab_friends").on("click",function () {
        $(".tab_item .tab_friends").css("background-position","-304px -246px");
        $(".tab_group").css("background-position","-376px -322px");
        $(".tab_public").css("background-position","-150px -96px");
        $(".chat_friends").hide();
        $(".chat_group").hide();
        $(".chat_public").show();
    })
    $(".wechat_down_icon").on("click",function () {
        $(".title_poi i").toggleClass("wechat_up_icon");
        if($(".members").css("display")=="none") {
            $(".members").css("display", "block");
        }
        else {
            $(".members").css("display","none");
        }
    })

})(jQuery);