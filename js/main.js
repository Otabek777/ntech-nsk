if(document.querySelector('.question_answer__btn')) {
    $(".question_answer__btn").click(function() {
        $(this).toggleClass('active');
    });
};

// 
$("#navbar-btn").click(function () {
    $(this).toggleClass('active');
    $(".navbar_mobile").toggleClass('active');

    $("#cart-btn").removeClass('active');
    $(".cart_mobile").removeClass('active');
    $("#catalog-btn").removeClass('active');
    $(".catalog_mobile").removeClass('active');
    $("#search-btn").removeClass('active');
    $(".search_mobile").removeClass('active');
});

$("#catalog-btn").click(function () {
    $(this).toggleClass('active');
    $(".catalog_mobile").toggleClass('active');

    $("#cart-btn").removeClass('active');
    $(".cart_mobile").removeClass('active');
    $("#navbar-btn").removeClass('active');
    $(".navbar_mobile").removeClass('active');
    $("#search-btn").removeClass('active');
    $(".search_mobile").removeClass('active');
});

$("#search-btn").click(function () {
    $(this).toggleClass('active');
    $(".search_mobile").toggleClass('active');

    $("#cart-btn").removeClass('active');
    $(".cart_mobile").removeClass('active');
    $("#navbar-btn").removeClass('active');
    $(".navbar_mobile").removeClass('active');
    $("#catalog-btn").removeClass('active');
    $(".catalog_mobile").removeClass('active');
});

$("#cart-btn").click(function () {
    $(this).toggleClass('active');
    $(".cart_mobile").toggleClass('active');

    $("#navbar-btn").removeClass('active');
    $(".search_mobile").removeClass('active');
    $("#navbar-btn").removeClass('active');
    $(".navbar_mobile").removeClass('active');
    $("#catalog-btn").removeClass('active');
    $(".catalog_mobile").removeClass('active');
});
// 
$(".mobile_menu_close").click(function() {
    $(".mobile_menu_block").removeClass('active');
    $(".mobile_menu .btn").removeClass('active');
});
$(".catalog_mobile .li").click(function() {
    $(this).addClass('active');
});
$(".sub_catalog_close").click(function() {
    setTimeout(function() {
        $(".catalog_mobile .li").removeClass('active');
    }, 01);
});