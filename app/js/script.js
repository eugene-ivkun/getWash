$(".js-menu-btn").click(function() {
    $(".menu-btn").toggleClass("active");
    $(".nav").toggleClass("active");
    $(".header__line").toggleClass("active")
});

$("[data-scrollto]").click(function() {
    $(".menu-btn").removeClass("active");
    $(".nav").removeClass("active");
    $(".header__line").removeClass("active");
    $("html, body").animate({
        scrollTop: $($(this).attr("data-scrollto")).offset().top - 50
    }, 1000);
});

$(document).ready(function() {
    $(".reviews__slider-inner").slick({
        nextArrow: $(".reviews__slider-btn--next"),
        prevArrow: $(".reviews__slider-btn--prev")
    });
});