const tabs = document.querySelectorAll('.tab');
const btns = document.querySelectorAll('.tabChange');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
            btns[i].classList.remove('active');
        }
        this.classList.add('active');
        document.querySelector(`#${this.dataset.tab}`).classList.add('active');
        if (this.dataset.tab == 'personal') {
            document.querySelector('#clearData').classList.add('active');
        } else {
            document.querySelector('#clearData').classList.remove('active');
        }
    });
}

const clearInfo = document.querySelector('#clearData');
clearInfo.addEventListener('click', function() {
    let inputs = document.querySelectorAll('.inp');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        clearBtns[i].classList.remove('active');
    }
})

document.querySelector('#defaultTab').click();

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