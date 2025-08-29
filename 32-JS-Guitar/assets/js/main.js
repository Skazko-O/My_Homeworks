const products = [
    {
        name: "Hagstrom Alvar Limited Edition",
        price: "€2.990,00",
        status: "in stock",
        image: "assets/images/guitar/photo.jpg"
    },
    {
        name: "Hagstrom Tremar Viking Deluxe Cloudy Seas",
        price: "€1.300,00",
        status: "in stock",
        image: "assets/images/guitar/photo_1.jpg"
    },
    {
        name: "Gibson Les Paul Standard 60s",
        price: "€3.749,00",
        status: "sold",
        image: "assets/images/guitar/photo_2.jpg"
    },
    {
        name: "Suhr Standard Plus Trans Blue Denim",
        price: "€3.449,00",
        status: "in stock",
        image: "assets/images/guitar/photo_3.jpg"
    },
    {
        name: "Fender Telecaster Black Paisley Limited Edition",
        price: "€1.499,00",
        status: "in stock",
        image: "assets/images/guitar/photo_4.jpg"
    }
];

const brands = [
    {
        name: "epiphone",
        image: "assets/images/brand/epiphone.png"
    },
    {
        name: "esp",
        image: "assets/images/brand/g11852.png"
    },
    {
        name: "gibson",
        image: "assets/images/brand/Group.png"
    },
    {
        name: "engl",
        image: "assets/images/brand/engl.png"
    },
    {
        name: "roland",
        image: "assets/images/brand/roland.png"
    },
    {
        name: "fender",
        image: "assets/images/brand/fender.png"
    },
    {
        name: "peavey",
        image: "assets/images/brand/peavey.png"
    },
    {
        name: "marshall",
        image: "assets/images/brand/marshal.png"
    },
    {
        name: "orange",
        image: "assets/images/brand/orange.png"
    }
]


const slider = document.getElementById("slider-product");

products.forEach(product => {
    const li = document.createElement("li");
    li.className = "product-item";
    li.innerHTML = `
    <a href="#">
        <div class="slider-content">
            <div class="status">${product.status}</div>
                <img src="${product.image}" alt="${product.name}">
                    <div class="product-name">${product.name}</div>
                        <div class="product-price">${product.price}</div>
        </div>
    </a>
    `;

    const statusSold = li.querySelector(".status");
    if (product.status.toLowerCase() === "sold") {
        statusSold.classList.add("sold");
    }
    slider.appendChild(li);
});

const sliderBrands = document.getElementById("slider-brands");

brands.forEach(brand => {
    const li = document.createElement("li");
    li.className = "brand-item";
    li.innerHTML = `
    <a href="#">
        <div class = "brand-item">             
            <img src="${brand.image}" alt="${brand.name}">
        </div>                
    </a>
    `;
    sliderBrands.appendChild(li);
});


$(document).ready(() => {

    let headerScrolled = false
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100 && !headerScrolled) {
            headerScrolled = true
            $('header').slideUp(200)
        } else if ($(window).scrollTop() <= 100 && headerScrolled) {
            headerScrolled = false
            $('header').slideDown(200)
        }
    })

    $("#slider-hero").lightSlider({
        item: 1,
        loop: true,
        controls: false

    })

    const sliderProduct = $("#slider-product").lightSlider({
        item: 5,
        loop: true,
        controls: false,
        slideMargin: 20,
        pager: false
    })

    $("#slider-prev").click(() => sliderProduct.goToPrevSlide())
    $("#slider-next").click(() => sliderProduct.goToNextSlide())

    const sliderBrands = $("#slider-brands").lightSlider({
        item: 9,
        loop: true,
        controls: false,
        slideMargin: 20,
        pager: false
    })

    $("#sliderBrand-prev").click(() => sliderBrands.goToPrevSlide())
    $("#sliderBrand-next").click(() => sliderBrands.goToNextSlide())

})
