function ToMainPage() {
    // Переходимо на нову сторінку
    window.location.href = 'main.html';
}

function ToAboutPage() {
    // Переходимо на нову сторінку
    window.location.href = 'about.html';
}

function ToNewsPage() {
    // Переходимо на нову сторінку
    window.location.href = 'news.html';
}

function ToCarouselPage() {
    // Переходимо на нову сторінку
    window.location.href = 'carousel.html';
}

function ToGalleryPage() {
    // Переходимо на нову сторінку
    window.location.href = 'gallery.html';
 }

function ToContactsPage() {
    // Переходимо на нову сторінку
    window.location.href = 'contacts.html';
}

$(document).ready(function(){
    $('.carousel_inner').slick({
        dots: true,
        dotsClass:'slick-dots',
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2800,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider/prev_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/next_arrow.png"></button>'
    });
});
