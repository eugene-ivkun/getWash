$(document).click(function(e) {
    let btn = $(e.target).closest("[data-toggle-class]");
    let elemClass = btn.attr("data-toggle-class");
    if(!elemClass) return;
    let elemMass = elemClass.split(",");
    $.each(elemMass, function(index, el) {
        let elem = $("." + el);
        elem.toggleClass(el + "--open");
    });
});

$(document).click(function(e) {
    let btn = $(e.target).closest("[data-scrollto]");
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