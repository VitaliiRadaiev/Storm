{
    let header = document.querySelector('.header');
    if (header) {
        let burger = document.querySelector('.burger');
        let close = document.querySelector('.menu__close');
        let menu = document.querySelector('.menu');

        burger.addEventListener('click', () => {
            document.body.classList.add('lock');
            menu.classList.add('open');
        });

        close.addEventListener('click', () => {
            document.body.classList.remove('lock');
            menu.classList.remove('open');
        });
    }

    let menu = document.querySelector('.header__menu.menu')
    if (menu) {
        let navItems = menu.querySelectorAll('.menu-item-has-children');
        if (navItems.length) {
            navItems.forEach(item => {
                let subMenu = item.querySelector('.sub-menu');
                if(subMenu) {
                    let trigger = document.createElement('div');
                    trigger.className = '_trigger';
                    item.append(trigger);
                    
                    trigger.addEventListener('click', () => {
                        if(document.documentElement.clientWidth < 992) {
                            trigger.classList.toggle('active');
                            _slideToggle(subMenu);

                            navItems.forEach(i => {
                                if(i === item) return;

                                let subMenu = i.querySelector('.sub-menu');
                                let trigger = i.querySelector('._trigger');

                                trigger.classList.remove('active');
                                _slideUp(subMenu);
                            })
                        }
                    })
                }
            })
        }
    }

}