$(document).click(function(e) {
    let btn = $(e.target).closest("[data-open-class]");
    let elemClass = btn.attr("data-open-class");
    if(!elemClass) return;
    let elemMass = elemClass.split(",");
    $.each(elemMass, function(index, el) {
        $("." + el).toggleClass(el + "--open");
    });
    let btnClass = btn.attr("data-btn-class");
    if(!btnClass) return;
    let btnElem = $("." + btnClass);
    btnElem.toggleClass(btnClass + "--open");
});

$(document).ready(function() {
    $(".reviews__slider-inner").slick({
        nextArrow: $(".reviews__slider-btn--next"),
        prevArrow: $(".reviews__slider-btn--prev")
    });
});

$(document).click(function(e) {
    let btn = $(e.target).closest("[data-scrollto]");
    let scrollClass = btn.attr("data-scrollto");
    if(!scrollClass) return;
    let scrollElem = $(scrollClass);
    // scrollTop( scrollElem.offset().top - 50 )
    $("html, body").animate({
        scrollTop:  scrollElem.offset().top - 50
    }, 1000);
});