$(document).ready(function(){
    $('.main_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:2000,
        dots:true,
        arrows:false
    });

    new VenoBox({
        selector: '.venobox'
    });
});