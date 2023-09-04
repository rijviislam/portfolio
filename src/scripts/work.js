new WOW().init();
AOS.init();


var swiper = new Swiper(".mySwiper6", {
    direction: "vertical",
    grabCursor: true,
    effect: "creative",
    loop: true,
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -200],
        },
        next: {
            translate: [0, "100%", 0],
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Add scroll behavior to control the Swiper slider
document.addEventListener("mousewheel", function (e) {
    if (e.deltaY > 0) {
        swiper.slideNext(); // Scroll down, go to the next slide
    } else {
        swiper.slidePrev(); // Scroll up, go to the previous slide
    }
});
