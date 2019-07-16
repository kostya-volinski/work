$(document).ready(function () {
    $('#container-fluid').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows : false,
        cssEase: 'linear',
        prevArrow: '<img src="тут ссылка на левую картинку">',
        nextArrow: '<img src="тут ссылка на правую картинку">'
    });

});


$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows : false,
        cssEase: 'linear',
        prevArrow: '<img src="тут ссылка на левую картинку">',
        nextArrow: '<img src="тут ссылка на правую картинку">'
    });

});