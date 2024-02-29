var swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

var map;
DG.then(function () {
    map = DG.map('map', {
        center: [42.863827, 74.53817],
        zoom: 18
    });
    DG.marker([42.863827, 74.53817]).addTo(map);
});