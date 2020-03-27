// var burgerMenu = document.querySelectorAll('.t-header');
//         for (var i = 0, j = burgerMenu.length; i < j; i++) {
//             burgerMenu[i].addEventListener('click', function(e) {
//                 if (hasClass(e.target, 'j-m-burger')) {
//                     this.querySelector('.j-mobile-nav').classList.toggle('o-header__menu_visible ');
//                     this.querySelector('.j-mobile-nav').classList.toggle('o-header__menu_hidden');
//                     document.querySelector('body').classList.toggle('a-body_static');
//                 }
//             })
//     }
import $ from 'jquery';
import { inherits } from "util";


(function() {

    var btnBurger = $('.j-nav-toggle');
    var mainNav = $('.j-nav-toggle');
    var isShown = false;




    // Method to change states which works in IE7+ / IE8+
    var btn = document.querySelector('.j-nav-toggle');

    // asdf
    var toggleState = function(elm, att, one, two) {
        var elm = document.querySelector(elm);
        elm.setAttribute(att, elm.getAttribute(att) === one ? two : one);
    };

    // setup
    btn.setAttribute('aria-pressed', 'false');

    // turn active state on or off
    btn.onclick = function(e) {
        console.log('aga');
        toggleState('.j-nav-toggle', 'data-state', 'off', 'on');
        toggleState('.btn-wrapper', 'aria-pressed', 'false', 'true');
        e.preventDefault();
    }

    $('.j-nav-toggle').click(function() {
        $('.j-mobile-nav').toggleClass('is-open');
        $('.t-header').toggleClass('t-header_active');

    });
})();

(function() {

    var btnBurger = $('.j-main__btn_open');
    var mainGrid = $('.j-main-grid_show');
    var isShown = false;




    // Method to change states which works in IE7+ / IE8+
    var btn = document.querySelector('.j-main-grid_show');

    // asdf
    var toggleState = function(elm, att, one, two) {
        var elm = document.querySelector(elm);
        elm.setAttribute(att, elm.getAttribute(att) === one ? two : one);
    };

    // setup
    btn.setAttribute('aria-pressed', 'true');

    // turn active state on or off
    btn.onclick = function(e) {
        console.log('aga');
        toggleState('.j-main-grid_show', 'data-state', 'off', 'on');
        toggleState('.main-grid__btn-more', 'aria-pressed', 'false', 'true');
        toggleState('.main-grid__btn-more_mob', 'aria-pressed', 'false', 'true');
        e.preventDefault();
    }

    $('.j-main-mob').click(function() {
        $('.j-main-grid_show').toggleClass('is-grid_show');
    });
})();




