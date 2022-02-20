$('.menu_contacts_icons').hover(function() {
    imagePath = $(this).find('img').attr('src').replace('.svg', '');
    $(this).find('img').attr('src', imagePath + '_hover.svg');
}, function() {
    $(this).find('img').attr('src', imagePath + '.svg')
});
var isActive = true
var sliderCount = 0;
var currentSlide = 0;
var screen = $('body').width()
window.addEventListener("mousewheel", function(e) {
    wDelta = e.wheelDelta < 0 ? 'down' : 'up';
    if (screen > 1240) {
        if (isActive == true) {
            if (wDelta == 'down') {
                scrollDown()

            } else {
                scrollUp()
            }
        } else {
            return false;
        }
    }

}, { passive: false });
const swiper = new Swiper('.swiper', {
    // Optional parameters



    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

function scrollDown() {
    currentSlide = currentSlide + 1;
    sliderCount++

    if (sliderCount < 5) {
        var sliderTranslate = (sliderCount - 1) * 100;
        $('.main_block_wrapper').attr('style', 'transform:translateY(-' + sliderTranslate + 'vh)')
    } else {
        sliderCount = 0
    }
    if (currentSlide == 1) {
        $('.scroll_menu_point').attr('style', 'transform: translateY(700%);');
    } else if (currentSlide == 2) {
        $('.scroll_menu_point').attr('style', 'transform: translateY(1400%);');
    } else if (currentSlide == 3) {
        $('.scroll_menu_point').attr('style', 'transform: translateY(2100%);');
    } else if (currentSlide == 4) {
        $('.scroll_menu_point').attr('style', 'transform: translateY(0%);');
        currentSlide = 0;
    }

    isActive = false;
    setTimeout(() => {
        isActive = true;
    }, 800);
}

function scrollUp() {
    currentSlide = currentSlide - 1;
    sliderCount--
    if (sliderCount < 5) {
        var sliderTranslate = (sliderCount - 1) * 100;
        $('.main_block_wrapper').attr('style', 'transform:translateY(-' + sliderTranslate + 'vh)')
    } else {
        sliderCount = 0
    }
    if (currentSlide == 0) {
        $('.scroll_menu_point').attr('style', 'transform: translateY(0%);');

    } else if (currentSlide == 1) {
        $('.scroll_menu_point').attr('style', 'transform: translateY(700%);');

    } else if (currentSlide == 2) {
        $('.scroll_menu_point').attr('style', 'transform: translateY(1400%);');

    } else if (currentSlide == 3) {
        $('.scroll_menu_point').attr('style', 'transform: translateY(2100%);');
        currentSlide = 0;
    }

    isActive = false;
    setTimeout(() => {
        isActive = true;
    }, 800);

}


$('#home_menu').click(function() {
    $('.main_block_wrapper').attr('style', 'transform:translateY(-' + 0 + 'vh)')
    $('.scroll_menu_point').attr('style', 'transform: translateY(0%);');
})
$('#about_menu').click(function() {
    $('.main_block_wrapper').attr('style', 'transform:translateY(-' + 100 + 'vh)')
    $('.scroll_menu_point').attr('style', 'transform: translateY(700%);');
})
$('#examples_menu').click(function() {
    $('.main_block_wrapper').attr('style', 'transform:translateY(-' + 200 + 'vh)')
    $('.scroll_menu_point').attr('style', 'transform: translateY(1400%);');
})
$('#contacts_menu').click(function() {
    $('.main_block_wrapper').attr('style', 'transform:translateY(-' + 300 + 'vh)')
    $('.scroll_menu_point').attr('style', 'transform: translateY(2100%);');
})