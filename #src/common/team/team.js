// === team card handler ==================================================================
{
	if($('.list-team__cord-wrap').length>0) {
		$('.list-team__cord-wrap').click(function(e){
			if(document.documentElement.clientWidth <= 1023) {
				$(this).find('.card-team__hover-box').slideToggle(300);
			} else {
                this.classList.toggle('_open');
            }
			
        })
        
	}
}
// === // team card handler ==================================================================



// ==== team correct height =======================================================

{
	let block = document.querySelector('.list-team');
	if(block) {

		function transferCardsForSmallWindow() {
			let arrElem = [];

			for(let item of block.children) {
				for(let i of item.children) {
					arrElem.push(i);
				}
			}

			let ul = document.createElement('ul');
			let li = document.createElement('li');

			ul.classList = 'team__list list-team';

			for(let i = 0; i < arrElem.length; i++) {
				li.append(arrElem[i]);
			}

			ul.append(li);

			block.replaceWith(ul);
		}

		function transferCardsForBigWindow() {
			let arrElem = [];

			for(let item of block.children) {
				if(item.children.length > 3) {
					for(let i = 3; i < item.children.length; i++ ) {
						arrElem.push(item.children[i]);
					}
				}
			}


			const transfer = () => {
				for(let item of block.children) {
					if(arrElem.length>0 && item.children.length < 3) {
						if(item.children.length == 0) {
							for(let i = 0; i < 3; i++) {
								if(arrElem[i]) {
									item.append(arrElem[i]);
								}
							}
							arrElem = arrElem.slice(3, arrElem.length);
						} else if(item.children.length == 1) {
							for(let i = 0; i < 2; i++) {
								if(arrElem[i]) {
									item.append(arrElem[i]);
								}
							}
							arrElem = arrElem.slice(2, arrElem.length);
						} else if (item.children.length == 2) {
							for(let i = 0; i < 1; i++) {
								if(arrElem[i]) {
									item.append(arrElem[i]);
								}
							}
							arrElem = arrElem.slice(1, arrElem.length);
						}
					}
				}
			}

			transfer();

			if(arrElem.length>0) {
				let count = arrElem.length / 3;

				for(let i = 0; i < count; i++) {
					let li = document.createElement('li');
					block.append(li);
				}
			}

			transfer();


			for(let item of block.children) {
				item.style.minHeight = item.getBoundingClientRect().height * 0.1 + 'rem';

				if(item.children.length == 1) {
					item.classList.add('_one');
				}

				if(item.children.length == 2) {
					item.classList.add('_two');
				}

				let arrHeight = [];

				for(let inItem of item.children) {
					let textBox = inItem.querySelector('.card-team__text-box');
					arrHeight.push(textBox.getBoundingClientRect().height);
				}

				let maxHeight = Math.max(...arrHeight);

				for(let inItem of item.children) {
					let textBox = inItem.querySelector('.card-team__text-box');
					textBox.style.minHeight = maxHeight * 0.1 + 'rem';
				}
			}
		}


		if(document.documentElement.clientWidth <= 1023) {
			transferCardsForSmallWindow();
		} else {
			transferCardsForBigWindow();
			//block.querySelector('.list-team__cord-wrap').classList.add('_open');
		}

		if(document.documentElement.clientWidth > 1023 && document.documentElement.clientWidth <= 1440) {
		 	document.querySelector('html').style.fontSize = '6.6px';
		}

		window.addEventListener('resize', () => {
			if(document.documentElement.clientWidth >= 1023 && document.documentElement.clientWidth <= 1531) {
				document.querySelector('html').style.fontSize = '6.6px';
			} else if(document.documentElement.clientWidth > 1531) {
				document.querySelector('html').style.fontSize = '10px';
			} else if(document.documentElement.clientWidth < 1234) {
				document.querySelector('html').style.fontSize = '7px';
				transferCardsForSmallWindow();
			}
		})

	}
}
// ==== // team correct height =======================================================
