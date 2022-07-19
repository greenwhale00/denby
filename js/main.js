$(function () {

    $('.mainSlider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    });
    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    });


    // $('.new_slide').slick({
    //arrows: false,
    //  autoplay: true,
    //    dots: false,
    //      pauseOnHover: false,
    //        pauseOnFocus: false,
    // });


})
