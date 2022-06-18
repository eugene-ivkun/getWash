$("[data-toggle-class], [data-remove-class]").click(function() {
    let btn = $(this);
    let elemClass;
    if(btn.attr("data-toggle-class")) {
        elemClass = btn.attr("data-toggle-class");
    }
    else if(btn.attr("data-remove-class")) {
        elemClass = btn.attr("data-remove-class");
    }
    let elemMass = elemClass.split(",");
    $.each(elemMass, function(index, el) {
        let elem = $("." + el);
        if(btn.attr("data-toggle-class") ) {
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