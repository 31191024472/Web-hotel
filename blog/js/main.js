'use strict';

document.addEventListener('DOMContentLoaded', function() {
    /*------------------
        Preloader
    --------------------*/
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        const preloader = document.getElementById('preloder');
        loader.style.display = 'none';
        preloader.style.display = 'none';
    });

    /*------------------
        Background Set
    --------------------*/
    const setBgElements = document.querySelectorAll('.set-bg');
    setBgElements.forEach(function(element) {
        const bg = element.getAttribute('data-setbg');
        element.style.backgroundImage = 'url(' + bg + ')';
    }); 

    // Offcanvas Menu
    const canvasOpen = document.querySelector('.canvas-open');
    const offcanvasMenuWrapper = document.querySelector('.offcanvas-menu-wrapper');
    const offcanvasMenuOverlay = document.querySelector('.offcanvas-menu-overlay');

    canvasOpen.addEventListener('click', function() {
        offcanvasMenuWrapper.classList.add('show-offcanvas-menu-wrapper');
        offcanvasMenuOverlay.classList.add('active');
    });

    function closeOffcanvasMenu() {
        offcanvasMenuWrapper.classList.remove('show-offcanvas-menu-wrapper');
        offcanvasMenuOverlay.classList.remove('active');
    }

    const canvasClose = document.querySelector('.canvas-close');
    const offcanvasMenuOverlayClick = document.querySelector('.offcanvas-menu-overlay');

    canvasClose.addEventListener('click', closeOffcanvasMenu);
    offcanvasMenuOverlayClick.addEventListener('click', closeOffcanvasMenu);

    // Search model
    const searchSwitch = document.querySelector('.search-switch');
    const searchModel = document.querySelector('.search-model');
    const searchCloseSwitch = document.querySelector('.search-close-switch');
    const searchInput = document.getElementById('search-input');

    searchSwitch.addEventListener('click', function() {
        searchModel.style.display = 'block';
    });

    searchCloseSwitch.addEventListener('click', function() {
        searchModel.style.display = 'none';
        searchInput.value = '';
    });

    /*------------------
		Navigation
	--------------------*/
    $('#mobile-menu-wrap').slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Hero Slider
    --------------------*/
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false
    });

    /*------------------------
		Testimonial Slider
    ----------------------- */
    $('.testimonial-slider').owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"]
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
		Date Picker
	--------------------*/
    $('.date-input').datepicker({
        minDate: 0,
        dateFormat: 'dd MM, yy'
    });

    /*------------------
		Nice Select
	--------------------*/
    $('select').niceSelect();
});
