(function () {
    pagination(true);
})();

(function () {
    //if (!document.body.classList.contains('post-template')) return;
    console.log('post-template');
    const cover = document.querySelector('.gh-cover');
    if (!cover) return;

    const image = cover.querySelector('.gh-cover-image');

    window.addEventListener('load', function () {
        cover.style.setProperty('--cover-height', image.clientWidth * image.naturalHeight / image.naturalWidth + 'px');
        cover.classList.remove('loading');
    });
})();

console.log('post-template');




