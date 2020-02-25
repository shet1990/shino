$(function() {

    /* Анимация гамбургера */
    $('.sh_hamburger').click(function(){
        //Появление
        if(!$(this).hasClass('is-active')){
            $(this).addClass('is-active');
            $('.sh_head__bot').addClass('is-active');
        } else {
            //Скрытие
            $(this).removeClass('is-active');
            $('.sh_head__bot').removeClass('is-active');
        }
    });
    /* Конец */

    /* Анимация табов услуг на главной */
    $(".sh_service__card").mouseleave(
        function() {
            $(this).removeClass("hover");
        }
    );
    /* Конец */

    /* Мобильный слайдер */
    adaptiveSlickSlider();
    $(window).resize(function () {
        adaptiveSlickSlider();
    });
    /* Конец */

    /* Анимация выплывающих блоков */
    $(window).scroll(function () {
        var animateScrollStart = 80;
        var animateScrollBottom = $(window).scrollTop() + $(window).height();
        var animateScrollBottomStart = animateScrollBottom - animateScrollStart;

        $('.fade__up').each(function () {
            var offSetTopAnimateBlock = $(this).offset().top;
            if(animateScrollBottomStart > offSetTopAnimateBlock){
                $(this).addClass('animate');
            } else {
                $(this).removeClass('animate');
            }
        })
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

function adaptiveSlickSlider() {
    if($(window).width() <= 768){
        if ($(".sh_advant__list").length > 0) {
            let sliderContainer = $(".sh_advant__list");
            sliderInit(sliderContainer);
        }
    } else {
        if($('.sh_advant__list').hasClass('slick-slider')){
            $('.sh_advant__list').slick('unslick');
        }
    }
}

function sliderInit(container) {
    container.slick({
        infinite: false,
        loop: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
}

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
