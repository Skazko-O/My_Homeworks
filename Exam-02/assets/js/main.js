$(document).ready(() => {

    /*--SCROLL--*/

    let headerScrolled = false
    
    $(window).scroll(function () {
        const $logo = $('img.logo');
        if ($(window).scrollTop() > 100 && !headerScrolled) {
            $logo.attr('src', $logo.data('alt'));
            headerScrolled = true
            $('.header-inner').addClass('scrolled')
        } else if ($(window).scrollTop() <= 100 && headerScrolled) {
            $logo.attr('src','assets/images/logo.png')
            headerScrolled = false
            $('.header-inner').removeClass('scrolled');
        }
    })

    /*--LIGHTSLIDER*/

    $("#slider-hero").lightSlider({
        item: 1,
        loop: true,
        controls: false,
        vertical: true,
    })

    const sliderProduct = $("#slider-news").lightSlider({
        item: 3,
        loop:true,        
        slideMargin: 30,
        controls: false
    })

    $("#slider-prev").click(() => sliderProduct.goToPrevSlide())
    $("#slider-next").click(() => sliderProduct.goToNextSlide())


    /*--LIGHTGALLERY*/

    lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    licenseKey: '',
    speed: 500
  });
});

  
