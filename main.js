$(document).ready(function () {
    // desktop nav color change
    const $header = $('header');
    const $mainImg = $('.main_img');
    const $mainSearch = $('.main_search');
    const $searchIcon = $('.main_search .search-button i');
    const $logo = $('.hd_logo img'); // 로고 이미지 요소 선택

    $(window).on('scroll', function () {
        const mainImgBottom = $mainImg.offset().top + $mainImg.outerHeight() - $(window).scrollTop();
        const mainSearchTop = $mainSearch.offset().top - $(window).scrollTop();
        const headerHeight = $header.outerHeight();

        if (mainImgBottom > 0) {
            $header.css('background-color', 'transparent');
            $header.css('color', 'black');
            $header.find('a').css('color', 'black');
            $header.find('.icon i').css('color', 'black');
            $searchIcon.css('color', 'black');
            $logo.attr('src', 'img/KREAM_logo.png'); // 원래 로고 이미지로 변경
        } else if (mainSearchTop <= headerHeight) {
            $header.css('background-color', 'rgb(19, 19, 19)');
            $header.css('color', 'white');
            $header.find('a').css('color', 'white');
            $header.find('.icon i').css('color', 'white');
            $searchIcon.css('color', 'white');
            $logo.attr('src', 'img/KREAM_logo_w.png'); // 변경된 로고 이미지로 변경
        } else {
            $header.css('background-color', 'white');
            $header.css('color', 'black');
            $header.find('a').css('color', 'black');
            $header.find('.icon i').css('color', 'black');
            $searchIcon.css('color', 'black');
            $logo.attr('src', 'img/KREAM_logo.png'); // 원래 로고 이미지로 변경
        }
    });

    //아코디언
    $('ul.cur > li').click(function () {
        var $this = $(this);

        // 애니메이션이 진행 중이 아니면 실행
        if (!$this.children('ul').is(':animated')) {
            $this.toggleClass('active').children('ul').slideToggle();
            updateBtnLabel();
        }
    });

    $('.btn_1').click(function () {
        var $lis = $('ul.cur > li');

        // 애니메이션이 진행 중이 아니면 실행
        if (!$lis.children('ul').is(':animated')) {
            if ($lis.not('.active').length == 0) {
                $lis.removeClass('active').children('ul').slideUp();
            } else {
                $lis.addClass('active').children('ul').slideDown();
            }
            updateBtnLabel();
        }
    });

    function updateBtnLabel() {
        if ($('ul.cur > li:not(.active)').length == 0) {
            $('.btn_1').text('전체닫기');
        } else {
            $('.btn_1').text('전체열기');
        }
    }

    //스와이퍼
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // mobile menu
    $(".mobile_menu_btn").click(function () {
        $(".mobile_menu").fadeIn(200);
    });

    $(".mobile_menu > .mobile_menu_icon > .close").click(function () {
        $(".mobile_menu").fadeOut(300);
    });

    let currentIndex = 0;
    $(".mobile_top_slide").append($(".mobile_top_slide > .slider").first().clone(true));
    setInterval(function () {
        currentIndex++;
        $(".mobile_top_slide").animate({ marginLeft: -currentIndex * 100 + "vw" }, 600);

        if (currentIndex == 5) {
            setTimeout(function () {
                $(".mobile_top_slide").animate({ marginLeft: 0 }, 0);
                currentIndex = 0;
            }, 0);
        }
    }, 5000);

    //mobile footer top button
    $(".top_btn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});