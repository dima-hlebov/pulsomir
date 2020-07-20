function catalogItem(){
    changeSideFor('.catalog-item__first-side .underlined-link');
    changeSideFor('.catalog-item__second-side .underlined-link');
}

function changeSideFor(name){
    $(name).each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__first-side').eq(i).toggleClass('catalog-item__first-side--visible');
            $('.catalog-item__second-side').eq(i).toggleClass('catalog-item__second-side--visible');
        });
    });
}
    
export {catalogItem};