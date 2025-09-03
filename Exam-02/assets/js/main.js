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
            $logo.attr('src', 'assets/images/logo.png')
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
        loop: true,
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

    /*--MAP--*/    

    const mapLink = document.getElementById("load-map-link")

    mapLink.onclick = function (e) {
        e.preventDefault()
        const link = document.createElement('link')
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('href', 'assets/js/plugins/leaflet/leaflet.css')
        document.head.append(link)

        const script = document.createElement('script')
        script.src = 'assets/js/plugins/leaflet/leaflet.js'
        script.onload = initMap
        document.body.append(script)
    }
        const initMap = () => {
            mapLink.remove()
        const map = L.map('map').setView([40.680713598195986, -73.90616447480521], 13);

        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        }).addTo(map);

        const customIcon = L.icon({
            iconUrl: 'assets/images/pin.svg',
            iconSize: [106, 106],
            iconAncor: [53, 106]
        })

        L.marker([40.680713598195986, -73.90616447480521], {icon: customIcon}) .addTo(map)
        .bindPopup('Get in Touch!')
    }

});


