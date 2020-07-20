function tabs(){
    $('ul.tabs').on('click', 'li:not(.tabs__item--active)', function() {
        $(this).addClass('tabs__item--active').siblings().removeClass('tabs__item--active')
        .closest('.container').find('div.tab-content').removeClass('tab-content--active').eq($(this).index()).addClass('tab-content--active');
    });
}

export {tabs};