function slider(){
    const slider = tns({
        container: '.slider',
        nav: true,
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        navPosition: 'bottom',
        responsive: {
            1200: {
                nav: false
            }
        }
    });
    
    document.querySelector('.prev').onclick = () => slider.goTo('prev');
    document.querySelector('.next').onclick = () => slider.goTo('next');
}

export {slider};