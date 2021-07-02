{
    let servicesList = document.querySelector('.services__list');
    if(servicesList) {
        let cards = document.querySelectorAll('.services__card');
        cards.forEach(card => {
            card.addEventListener('click', function(e) {
                if(!e.target.closest('.big-card-services__close')) {
                    this.classList.add('_open');

                    
                    cards.forEach(card => {
                        if(card == this) {
                            return
                        }
    
                        card.classList.remove('_open');
                    })
                }
            })

            let close = card.querySelector('.big-card-services__close');
            close.addEventListener('click', function() {
                
                this.closest('.services__card').classList.remove('_open');
            })
            if(document.documentElement.clientWidth > 767) {
                let height = card.getBoundingClientRect().top - servicesList.getBoundingClientRect().top;
                let bigCard = card.querySelector('.services__big-card');
                bigCard.style.top = height + 'px';
            }

            if(document.documentElement.clientWidth < 768) {
                let height = card.getBoundingClientRect().top - servicesList.getBoundingClientRect().top;
                let bigCard = card.querySelector('.services__big-card');
                bigCard.style.top = height + 'px';
                bigCard.style.minHeight = (card.getBoundingClientRect().height * 2) + 15 + 'px';
                
            }

        })

        // if(cards.length > 8) {
        //     if((cards.length - 8) >= 4) {
        //         cards[cards.length - 1].classList.add('_downRight');
        //         cards[cards.length - 2].classList.add('_downRight');
        //         cards[cards.length - 3].classList.add('_downLeft');
        //         cards[cards.length - 4].classList.add('_downLeft');
        //     } else if((cards.length - 8) == 3) {
        //         cards[cards.length - 1].classList.add('_downRight');
        //         cards[cards.length - 2].classList.add('_downRight');
        //         cards[cards.length - 3].classList.add('_downLeft');
                
        //     } else if((cards.length - 8) <= 2) {
        //         cards[cards.length - 1].classList.add('_downLeft');
        //         cards[cards.length - 2].classList.add('_downLeft');
        //     }
        // }

        window.addEventListener('click', (e) => {
            if(!e.target.closest('.services__list')) {
                cards.forEach(card => {
                    card.classList.remove('_open');
                })
            }
        })
    }
}