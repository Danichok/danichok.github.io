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
    if (screen > 1024) {
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

$('.slider_button_left').click(function() {
    var currentRotate = $('.slider_button_left').attr('style')
    console.log(currentRotate)
    if (currentRotate == 'transform: rotate(1turn);') {
        $('.slider_button_left').attr('style', 'transform: rotate(0turn);')
    } else {
        $('.slider_button_left').attr('style', 'transform: rotate(1turn);')
    }
    sliderLeft()
})
$('.slider_button_right').click(function() {
    var currentRotate = $('.slider_button_right').attr('style')
    console.log(currentRotate)
    if (currentRotate == 'transform: rotate(1turn);') {
        $('.slider_button_right').attr('style', 'transform: rotate(0turn);')
    } else {
        $('.slider_button_right').attr('style', 'transform: rotate(1turn);')
    }
    sliderRight()
})
var sliderNumber = $('.slider_wrapper_photo').length // Визначення кількості слайдів
var sliderWidth = $('.slider_wrapper_photo').width() // Ширина  слайда
var sliderCount = 1

function sliderRight() {
    sliderCount++ // +1 до щьотчика слайда
    console.log(sliderCount)
    if (sliderCount > sliderNumber) {
        sliderCount = sliderNumber
        return false
    } else {
        var translateWidth = sliderWidth * (sliderCount - 1) // Ширина прокрута
        $('.slider_wrapper').attr('style', 'transform:translateX(-' + translateWidth + 'px)')
    }
}

function sliderLeft() {
    sliderCount-- // +1 до щьотчика слайда
    console.log(sliderCount)
    if (sliderCount < 1) {
        sliderCount = 1
        var translateWidth = 0 // Ширина прокрута
        $('.slider_wrapper').attr('style', 'transform:translateX(-' + translateWidth + 'px)')
        return false
    } else {
        //alert('SCAm')
        var translateWidth = sliderWidth * (sliderCount - 1) // Ширина прокрута
        $('.slider_wrapper').attr('style', 'transform:translateX(-' + translateWidth + 'px)')
    }

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