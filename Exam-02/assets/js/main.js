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

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    console.log(navLinks);
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const circle = link.querySelector('.circle');
            if (circle) circle.classList.remove('active-header');
            if (link.getAttribute('href') === `#${current}`) {
                if (circle) circle.classList.add('active-header');
            }
        })
    })

    /*--LIGHTSLIDER-HERO--*/

    $("#slider-hero").lightSlider({
        item: 1,
        loop: true,
        controls: false,
        vertical: true
    })


    /*--LIGHTSLIDER-NEWS--*/
    fetch('assets/js/data/news.json') //викликає асинхронний запит до файлу. Повертає проміс
        .then(response => response.json())  //перетворення відповіді у json масив
        .then(data => {                     //data - масив
            console.log(data);
            const container = document.querySelector('.slider-news');

            data.forEach(item => {
                const formattedDate = formatDate(item.date);
                const maxChars = 90;
                const summaryText = item.summary.trim();
                const truncatedSummary = summaryText.length <= maxChars
                    ? summaryText + '...'
                    : summaryText.slice(0, maxChars) + '...';
                const card = document.createElement('li');
                card.className = 'news-card';
                card.innerHTML = `
                <a href="#">
                 <div class="img-wrapper-news">
                  <img src="${item.image}" alt="${item.alt}">
                </div>
                <div class="content-news">
                  <h4>${item.title}</h4>
                  <p class="summary">${truncatedSummary}
                  </p>
                  <div class="news-content-footer">
                    <div class="avatar-wrapper">
                      <img src="${item.avatar}">
                    </div>
                    <div class="author-date">
                      <p class="ful-name">
                        ${item.author}
                      </p>
                      <time datetime="${item.date}">${formattedDate}</time>                      
                    </div>
                  </div>
                </div>
                </a>`;
                container.appendChild(card);
            });
            const sliderProduct = $("#slider-news").lightSlider({
                item: 3,
                loop: true,
                slideMargin: 40,
                controls: false,
                auto: true,
                pause: 4000,
                speed: 600,
                pauseOnHover: true
            })
            $("#slider-prev").click(() => sliderProduct.goToPrevSlide())
            $("#slider-next").click(() => sliderProduct.goToNextSlide())

        })
        .catch(error => console.error('Помилка завантаження JSON:', error));

    /*--FORMAT DATE--*/

    function formatDate(dateStr) {
        const [day, month, year] = dateStr.split('.');
        const dateObj = new Date(`${year}-${month}-${day}`);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return dateObj.toLocaleDateString('en-GB', options);
    }

    /*--LIGHTGALLERY*/

    fetch('assets/js/data/gallery.json')
        .then(res => res.json())
        .then(images => {
            const gallery = document.getElementById('lightgallery');

            images.forEach((item, index) => {
                const a = document.createElement('a');
                a.href = item.src;
                a.classList.add(`grid-pos-${index + 1}`, 'gallery-item');

                const img = document.createElement('img');
                img.src = item.thumb;
                img.alt = item.alt;
                const overlay = document.createElement('div')
                const zoomIcon = document.createElement('div');
                overlay.className = 'overlay'
                zoomIcon.className = 'zoom-icon';
                zoomIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
     <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4375 52.5C31.5974 52.5 34.7264 51.8776 37.6458 50.6684C40.5652 49.4591 43.2178 47.6867 45.4523 45.4523C47.6867 43.2178 49.4591 40.5652 50.6684 37.6458C51.8776 34.7264 52.5 31.5974 52.5 28.4375C52.5 25.2776 51.8776 22.1486 50.6684 19.2292C49.4591 16.3098 47.6867 13.6572 45.4523 11.4227C43.2178 9.18833 40.5652 7.4159 37.6458 6.20665C34.7264 4.9974 31.5974 4.375 28.4375 4.375C22.0557 4.375 15.9353 6.91015 11.4227 11.4227C6.91015 15.9353 4.375 22.0557 4.375 28.4375C4.375 34.8193 6.91015 40.9397 11.4227 45.4523C15.9353 49.9649 22.0557 52.5 28.4375 52.5ZM56.875 28.4375C56.875 35.9796 53.8789 43.2128 48.5458 48.5458C43.2128 53.8789 35.9796 56.875 28.4375 56.875C20.8954 56.875 13.6622 53.8789 8.32915 48.5458C2.99609 43.2128 0 35.9796 0 28.4375C0 20.8954 2.99609 13.6622 8.32915 8.32915C13.6622 2.99609 20.8954 0 28.4375 0C35.9796 0 43.2128 2.99609 48.5458 8.32915C53.8789 13.6622 56.875 20.8954 56.875 28.4375Z" fill="white"/>
      <path d="M45.255 51.3714C45.3863 51.5464 45.5263 51.7126 45.6838 51.8745L62.5275 68.7182C63.3479 69.5392 64.4607 70.0006 65.6213 70.001C66.7818 70.0014 67.895 69.5408 68.7159 68.7204C69.5369 67.9001 69.9983 66.7872 69.9987 65.6267C69.9991 64.4661 69.5385 63.3529 68.7181 62.532L51.8744 45.6882C51.718 45.5299 51.5498 45.3836 51.3713 45.2507C49.655 47.5908 47.5927 49.6561 45.255 51.3757V51.3714Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4375 13.125C29.0177 13.125 29.5741 13.3555 29.9843 13.7657C30.3945 14.1759 30.625 14.7323 30.625 15.3125V26.25H41.5625C42.1427 26.25 42.6991 26.4805 43.1093 26.8907C43.5195 27.3009 43.75 27.8573 43.75 28.4375C43.75 29.0177 43.5195 29.5741 43.1093 29.9843C42.6991 30.3945 42.1427 30.625 41.5625 30.625H30.625V41.5625C30.625 42.1427 30.3945 42.6991 29.9843 43.1093C29.5741 43.5195 29.0177 43.75 28.4375 43.75C27.8573 43.75 27.3009 43.5195 26.8907 43.1093C26.4805 42.6991 26.25 42.1427 26.25 41.5625V30.625H15.3125C14.7323 30.625 14.1759 30.3945 13.7657 29.9843C13.3555 29.5741 13.125 29.0177 13.125 28.4375C13.125 27.8573 13.3555 27.3009 13.7657 26.8907C14.1759 26.4805 14.7323 26.25 15.3125 26.25H26.25V15.3125C26.25 14.7323 26.4805 14.1759 26.8907 13.7657C27.3009 13.3555 27.8573 13.125 28.4375 13.125Z" fill="white"/>
    </svg>
  `;
                a.appendChild(img);
                a.appendChild(overlay);
                a.appendChild(zoomIcon);
                gallery.appendChild(a);
            });

            lightGallery(gallery, {
                plugins: [lgZoom, lgThumbnail],
                licenseKey: '',
                speed: 500
            });
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

        L.marker([40.680713598195986, -73.90616447480521], { icon: customIcon }).addTo(map)
            .bindPopup('Get in Touch!')
    }

});


