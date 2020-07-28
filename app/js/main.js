$(function(){


    // Slider

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '  <button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '  <button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    });


    // Tabs
    $('.tab').on('click', function(e){
        e.preventDefault();

        $('.tab').removeClass('tab--active');
        $('.tabs-content').removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active'); 

    });

    // Favorite
    $('.products-item__favorite').on('click', function(){
        $('.products-item__favorite').toggleClass('products-item__favorite--active');
    });

    // Products slider

    $('.products-slider').slick({

    });
  
});