var burgerMenu = document.querySelectorAll('.t-header');
        for (var i = 0, j = burgerMenu.length; i < j; i++) {
            burgerMenu[i].addEventListener('click', function(e) {
                if (hasClass(e.target, 'j-m-burger')) {
                    this.querySelector('.j-mobile-nav').classList.toggle('o-header__menu_visible ');
                    this.querySelector('.j-mobile-nav').classList.toggle('o-header__menu_hidden');
                    document.querySelector('body').classList.toggle('a-body_static');
                }
            })
    }