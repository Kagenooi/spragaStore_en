export function toggleWishlist(event) {
    event.classList.toggle(active);
}

export function addTooltipBg() {
    let tooltips = document.querySelectorAll('.product .product__tooltip');
    for (let i = 0; i < tooltips.length; i++) {
        tooltips[i].style.background = `${tooltips[i].dataset.bg}`;
    }
}

export function toggleActive(elem) {
    document.querySelector(`${elem}`).classList.toggle('active');
    
    if (document.body.style.overflowY == 'hidden') {
        document.body.style.overflowY = null;
    } else {
        document.body.style.overflowY = 'hidden';
    }
}

export function toggleThisActive(event) {
    event.classList.toggle('active');
}