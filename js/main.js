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
        alert('SCAm')
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
let offset = 0;
const sliderLine = document.querySelector('.examples_blocks');

document.querySelector('.slider_button_right').addEventListener('click', function() {
    offset = offset + 400;
    if (offset > 800) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider_button_left').addEventListener('click', function() {
    offset = offset - 400;
    if (offset < 0) {
        offset = 800;
    }
    sliderLine.style.left = -offset + 'px';
});
if ($(window).width() < 400) {
    let offset = 0;
    const sliderLine = document.querySelector('.examples_blocks');

    document.querySelector('.slider_button_right').addEventListener('click', function() {
        offset = offset + 400;
        if (offset > 1620) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });

    document.querySelector('.slider_button_left').addEventListener('click', function() {
        offset = offset - 400;
        if (offset < 0) {
            offset = 1620;
        }
        sliderLine.style.left = -offset + 'px';
    });
}