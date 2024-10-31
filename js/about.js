const address = document.querySelector('#address');
const addressFilterBtns = address?.querySelectorAll('.contact__address_btns_btn');
const addressWrapper = address?.querySelectorAll('.contact__address_wrapper');
const addressMap = address?.querySelector('.contact__bg');
const addMap = address?.querySelectorAll('.contact__map_item');
const addressMapEl = addressMap?.querySelectorAll('.contact__bg_img');
for (let i = 0; i < addressFilterBtns?.length; i++) {
    addressFilterBtns[i].addEventListener('click', function () {
        address.style.background = this.dataset.bg;
        for (let x = 0; x < addressWrapper.length; x++) {
            addressWrapper[x].classList.remove('active');
            addressFilterBtns[x].classList.remove('active');
            addMap[x].classList.remove('active');
        }
        for (let x = 0; x < addressMapEl.length; x++) {
            addressMapEl[x].style.display = 'none';
        }
        addressMapEl[this.dataset.index].style.display = 'block';
        this.classList.add('active');
        document.querySelector(`#${this.dataset.activate}`).classList.add('active');
        document.querySelector(`.${this.dataset.activate}`).classList.add('active');
    })
}
document.querySelector('#defaultAddress').click();

const swiperAbout1 = new Swiper("#about1", {
    loop: true,
    navigation: {
        nextEl: "#about1 .about__pic_btns_btn.next",
        prevEl: "#about1 .about__pic_btns_btn.prev",
    },
});

const swiperAbout2 = new Swiper("#about2", {
    loop: true,
    navigation: {
        nextEl: "#about2 .about__pic_btns_btn.next",
        prevEl: "#about2 .about__pic_btns_btn.prev",
    },
});


function toggleModal(modal) {
    document.querySelector(`${modal}`).classList.toggle('active');
    if (document.body.style.overflowY != 'hidden') {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'unset';
    }
}
window.toggleModal = toggleModal;


const inputs = document.querySelectorAll('.inp');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
        for (let x = 0; x < inputs.length; x++) {
            if (inputs[x].value) {
                inputs[x].closest('label').querySelector('.clearBtn').classList.add('active')
            } else {
                inputs[x].closest('label').querySelector('.clearBtn').classList.remove('active')
            }
        }
    })
}

const clearBtns = document.querySelectorAll('.clearBtn');
for (let i = 0; i < clearBtns.length; i++) {
    clearBtns[i].addEventListener('click', function() {
        this.closest('label').querySelector('.inp').value = '';
        this.classList.remove('active');
    })
}

const phoneCodeBtn = document.querySelector('#openPhoneCode');
const phoneCodeInp = document.querySelector('#phoneCode');
phoneCodeBtn.addEventListener('click', function() {
    if (this.nextElementSibling.style.maxHeight) {
        this.nextElementSibling.style.maxHeight = null;
    } else {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.style.maxHeight + this.nextElementSibling.scrollHeight + 'px';
    }
})
phoneCodeInp.addEventListener('change', function() {
    this.nextElementSibling.style.maxHeight = this.nextElementSibling.style.maxHeight + this.nextElementSibling.scrollHeight + 'px';
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