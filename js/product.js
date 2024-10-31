const productMedia = new Swiper("#productMedia", {
    loop: true,
    spaceBetween: 5,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        520: {
            spaceBetween: 40,
        }
    }
});
const productMediaSmall = new Swiper("#productMediaSmall", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".productCart__media_btn.next",
        prevEl: ".productCart__media_btn.prev",
    },
    thumbs: {
        swiper: productMedia,
    },
});

const sizes = document.querySelectorAll('.productCart__details_sizes_btn');
for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener('click', function() {
        for (let x = 0; x < sizes.length; x++) {
            sizes[x].classList.remove('active');
        }
        this.classList.add('active');
        document.querySelector('#boxSizes').innerHTML = this.dataset.value;
    })
}
// document.querySelector('#sizesDefault').click();

const navbar = document.querySelector('.navbar__wrapper');
window.addEventListener('scroll', function () {
    if (document.body.clientWidth > 580) {
        if (window.scrollY > 150) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    }
})
if (document.body.clientWidth > 580) {
    if (window.scrollY > 150) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
}

// new
import {
    toggleActive,
    toggleThisActive,
    addTooltipBg
} from "./module.js";
window.toggleActive = toggleActive;
window.toggleThisActive = toggleThisActive;
window.addTooltipBg = addTooltipBg;
addTooltipBg();

document.documentElement.addEventListener('click', function(e) {
    if (e.target.classList.contains('favorites')) {
        document.querySelector('#favorites').classList.remove('active');
        document.body.style.overflowY = null;
    }
    if (e.target.classList.contains('basket')) {
        document.querySelector('#basket').classList.remove('active');
        document.body.style.overflowY = null;
    }
    if (e.target.classList.contains('navbar__mobile_wrapper')) {
        document.querySelector('.navbar__mobile_wrapper').classList.remove('active');
        document.body.style.overflowY = null;
    }
})


const productSmall = document.querySelectorAll('.productCart__media_elSmall_img');
const productBig = document.querySelectorAll('.productCart__media_el_img');
for (let i = 0; i < productSmall.length; i++) {
    productSmall[i].src = productBig[i].src;
}