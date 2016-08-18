$(function () {
    'use strict';

    var menu = $('#menu'),
        menu_trigger = $('#menu_trigger'),
        mask = $('.mask'),
        info = $('#info'),
        back_to_top = $('.back-to-top');


    function showMenu(){
        mask.fadeIn();
        menu.css('right',0)
    }
    function hideMenu(){
        mask.fadeOut();
        menu.css('right',-menu.width())
    }
    function showInfo(){
        info.fadeIn();
    }
    function hideInfo(){
        info.fadeOut(10000);
    }
    function backTop(){
        $('html,body').animate({
            scrollTop: 0
        },800)
    }
    function hideBackTop(){
        if($(window).scrollTop()>$(window).height()){
            back_to_top.fadeIn();
        }
        else{
            back_to_top.fadeOut();
        }
    }

    menu_trigger.on('click',showMenu);
    mask.on('click',hideMenu);
    $(document).on('click',hideInfo);
    back_to_top.on('click',backTop);
    $(window).on('scroll',hideBackTop);
    $(window).trigger('scroll');
});