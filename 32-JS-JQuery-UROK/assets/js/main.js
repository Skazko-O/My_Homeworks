$(document).ready(() => {
    $('h1')
        .attr('title', 'Title text')
        .text($('h1').text() + '!!!!!!!!!!')
        .css({
            color: 'red',
            fontSize: '5rem'
        })

    $(document).on('click', '#list > li', function () {
        if ($(this).hasClass('clicked')) $(this).removeClass('clicked').addClass('visited')
            $(this).addClass('clicked')

        $(this).css('color', 'blue')
    })

    $('#list').append('<li>Hello</li>')

    let headerScrolled = false
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100 && !headerScrolled){
            headerScrolled = true
            $('header').slideUp(200)
        } else if ($(window).scrollTop() <= 100 && headerScrolled) {
            headerScrolled = false
            $('header').slideDown(200)
        }
    })

    const slider = $("#slider").lightSlider ({
        item: 4,
        loop: true,
        slideMargin: 30,
        controls: false
    })

    $("#slider-prev").click(()=>slider.goToPrevSlide())
    $("#slider-next").click(()=>slider.goToNextSlide())
})