function adaptive() {
    const wrapper = document.querySelector('#adaptive');
    let zoom = document.body.clientWidth / 19.2 / 100;
    if (document.body.clientWidth > 1080 && document.body.clientWidth < 1586) {
        zoom = document.body.clientWidth / 15.5 / 100;
    }
    if (document.body.clientWidth > 520 && document.body.clientWidth < 1081) {
        zoom = document.body.clientWidth / 7.68 / 100;
    }
    if (document.body.clientWidth < 521) {
        zoom = document.body.clientWidth / 3.6 / 100;
    }
    wrapper.style.zoom = zoom;
}
adaptive();
window.addEventListener('resize', function() {
    adaptive();
});