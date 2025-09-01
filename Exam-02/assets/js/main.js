$(document).ready(() => {

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

    $("#slider-hero").lightSlider({
        item: 1,
        loop: true,
        controls: false,
        vertical: true,       

    })
})