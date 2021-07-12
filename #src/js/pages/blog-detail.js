{
    let aside = document.querySelector('.blog-detail__col-1 .social');
    if(aside) {
        let asideWrap = document.querySelector('.blog-detail__col-1');

        window.addEventListener('scroll', () => {
            if(document.documentElement.clientWidth > 991) {
                if(aside.getBoundingClientRect().top < 121) {
                    aside.classList.add('_fixed');
                    aside.style.top = '121px';
                    aside.style.maxWidth = (asideWrap.clientWidth) + 'px';
                }else if(asideWrap.getBoundingClientRect().top >= 121) {
                    aside.classList.remove('_fixed');
                }

                if(asideWrap.getBoundingClientRect().bottom <= aside.clientHeight + 121) {
                    aside.classList.add('_static');
                    asideWrap.classList.add('_flex-end');
                } else {
                    aside.classList.remove('_static');
                    asideWrap.classList.remove('_flex-end');
                }
            }
        })


    }
}