{
    let header = document.querySelector('.header');
    if(header) {
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
}