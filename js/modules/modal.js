function modal(){
    $(`[data-modal=consultation-modal]`).on('click', function (param) {  
        $(`.overlay, #consultation-modal`).fadeIn();
    });
    $(`[data-modal=order-modal]`).each(function (i) { 
         $(this).on('click', function(){
            $(`.overlay, #order-modal`).fadeIn();
            $('#order-modal .modal__text').text($('.catalog-item__title').eq(i).text()); 
         });
    });
    $(`[data-modal=greetings-modal]`).on('click', function (param) {  
        $(`.overlay, #order-modal`).fadeOut();
        $(`.overlay, #greetings-modal`).fadeIn();
    });
    fadeOutEvent();
}

function fadeOutEvent(){
    $('.modal__close').on('click', function () {
        $(`.overlay, #consultation-modal, #order-modal, #greetings-modal`).fadeOut();
    });
}


export {modal};