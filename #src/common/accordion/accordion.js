{
    let accordions = document.querySelectorAll('.accordion');
    if (accordions.length) {
        accordions.forEach(accordion => {
            let accordionChildren = Array.from(accordion.children);
            accordionChildren.forEach(li => {
                let title = li.querySelector('.accordion__title');
                let text = li.querySelector('.accordion__text');
                let textWrap = li.querySelector('.accordion__text-wrap');

                const setPaddingTopForTextWrap = () => textWrap.style.paddingTop = title.clientHeight + 'px';
                setPaddingTopForTextWrap();
                window.addEventListener('resize', setPaddingTopForTextWrap);

                title.addEventListener('click', () => {
                    title.classList.toggle('open');
                    _slideToggle(text, 200);

                    accordionChildren.forEach(i => {
                        if (i === li) return;

                        i.querySelector('.accordion__title').classList.remove('open');
                        _slideUp(i.querySelector('.accordion__text'), 200);
                    })
                })
            })
        })

        document.body.addEventListener('click', (e) => {
            if (!e.target.closest('.accordion li')) {
                accordions.forEach(accordion => {
                    let accordionChildren = Array.from(accordion.children);
                    accordionChildren.forEach(li => {
                        let title = li.querySelector('.accordion__title');
                        let text = li.querySelector('.accordion__text');

                        title.classList.remove('open');
                        _slideUp(text, 200);
                    })
                })
            }
        })
    }
}