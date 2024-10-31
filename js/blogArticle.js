const accBtns = document.querySelectorAll('.accordion__item_btn');
for (let i = 0; i < accBtns.length; i++) {
    accBtns[i].addEventListener('click', function () {
        if (this.nextElementSibling.style.maxHeight) {
            this.classList.remove('active');
            this.nextElementSibling.style.maxHeight = null;
        } else {
            this.classList.add('active');
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.style.maxHeight + this.nextElementSibling.scrollHeight + 'px';
        }

    })
}

function subscirbe(modal) {
    let modals = document.querySelectorAll('.modal');
    for (let i = 0; i < modals.length; i++) {
        modals[i].classList.remove('active');
    }
    document.querySelector(`#${modal}`).classList.toggle('active');
}

document.querySelector('.articleFooter__share_btn').addEventListener('click', function() {
    if (this.nextElementSibling.style.maxWidth) {
        this.nextElementSibling.style.maxWidth = null;
    } else {
        this.nextElementSibling.style.maxWidth = this.nextElementSibling.style.maxWidth + this.nextElementSibling.scrollWidth + 'px';
    }
})


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