$("[data-toggle-class]").click(function() {
    let btn = $(this);
    let elemClass = btn.attr("data-toggle-class");
    if(!elemClass) return;
    let elemMass = elemClass.split(",");
    $.each(elemMass, function(index, el) {
        let elem = $("." + el);
        if( btn.is("[data-menu-btn]") ) {
            elem.toggleClass(el + "--open");
        }
        else elem.removeClass(el + "--open");
    });
});

$("[data-scrollto]").click(function() {
    let btn = $(this);
    let scrollClass = btn.attr("data-scrollto");
    if(!scrollClass) return;
    let scrollElem = $(scrollClass);
    $("html, body").animate({
        scrollTop:  scrollElem.offset().top - 50
    }, 1000);
});




$(document).ready(function() {
    $(".reviews__slider-inner").slick({
        nextArrow: $(".reviews__slider-btn--next"),
        prevArrow: $(".reviews__slider-btn--prev")
    });
});