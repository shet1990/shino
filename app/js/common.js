$(function() {

    /* Анимация гамбургера */
    $('.my_hamburger').click(function(){
        //Появление
        if(!$(this).hasClass('is-active')){
            $(this).addClass('is-active');
            $('.head__bot').addClass('is-active');
        } else {
            //Скрытие
            $(this).removeClass('is-active');
            $('.head__bot').removeClass('is-active');
        }
    });
    /* Конец */

    /* Слайдер */
    if($('div').hasClass('slider__wrapper')){
        $('.slider__wrapper').slick({
            infinite: false,
            loop: true,
            dots: false,
            arrows: false,
            slidesToShow: 8.2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 968,
                    settings: {
                        slidesToShow: 6.2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4.2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2.2,
                    }
                }
            ]
        })
    }
    /* Конец */

    /* Кнопка закрывающая модалку */
    $('.fnb__img').fancybox({
        padding     : 0,
        margin      : 0,
        fitToView	: false,
        width		: '100%',
        height		: '100%',
        autoSize	: false,
        closeClick	: false,
        openEffect  : "elastic",
        closeEffect : "elastic",
    });
    /* Конец */

})
function fancyModalOpen(src){
    $.fancybox.open(src, {
        padding     : 0,
        margin      : 0,
        closeBtn    : false,
        fitToView	: false,
        width		: '100%',
        height		: '100%',
        autoSize	: false,
        closeClick	: false,
        openEffect  : 'fade',
        closeEffect : 'fade',
    });
}
