const catalog = document.querySelector('#catalog');
const catalogFilterBtns = catalog.querySelectorAll('.products__filter_btn');
const catalogWrapper = catalog.querySelectorAll('.products__wrapper');
for (let i = 0; i < catalogFilterBtns.length; i++) {
    catalogFilterBtns[i].addEventListener('click', function () {
        for (let x = 0; x < catalogWrapper.length; x++) {
            catalogWrapper[x].classList.remove('active');
            catalogFilterBtns[x].classList.remove('active');
        }
        this.classList.add('active');
        document.querySelector(`#${this.dataset.activate}`).classList.add('active');
    })
}
// document.querySelector('#defaultFilter').click();


function toggleWishlist() {
    document.querySelector('#favorites').classList.toggle('active');
}
window.toggleWishlist = toggleWishlist;

function toggleBasket() {
    document.querySelector('#basket').classList.toggle('active');
}
window.toggleBasket = toggleBasket;


function toggleMobileMenu() {
    document.querySelector('#mobileMenu').classList.toggle('active');
}
window.toggleMobileMenu = toggleMobileMenu;


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

let allBtns = document.querySelectorAll('.product__footer_addWishlist');
for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}
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
    addTooltipBg
} from "./module.js";
window.toggleActive = toggleActive;
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