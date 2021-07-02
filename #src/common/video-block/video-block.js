function VideoHandler() {
	function togglePlayPause(video,btn) {
		if(video.paused) {
			video.play();
			btn.firstElementChild.className = 'icon-pause';
			video.setAttribute('controls', true);

		} else {
			video.pause();
			btn.firstElementChild.className = 'icon-play2';
			btn.style.opacity = '1';
		}
	}

	let videoBlock = document.querySelectorAll('.video-block');
	if(videoBlock.length) {
		videoBlock.forEach((item) => {
			let videoWrap = item.querySelector('.video-block__video-wrap');
			let video = item.querySelector('.video-block__video');
			let btn = item.querySelector('.video-block__play-pause');

			if(video) {
				if(video.hasAttribute('data-youtube-url')) {
					let url = video.dataset.youtubeUrl;
					btn.addEventListener('click', () => {
						video.innerHTML = `<iframe src="${url}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
					})

				} else {
					btn.addEventListener('click', (e) => {
						e.preventDefault();
						togglePlayPause(video,btn);
					});
					video.addEventListener('ended', () => {
						video.pause();
						btn.firstElementChild.className = 'icon-play2';
						btn.style.opacity = '1';
						video.removeAttribute('controls');
					});
					video.addEventListener('play', () => {
						btn.firstElementChild.className = 'icon-pause';
					});
					video.addEventListener('pause', () => {
						btn.firstElementChild.className = 'icon-play2';
					});
					videoWrap.addEventListener('mouseenter', (e) => { 
						if(!video.paused) {
							btn.style.opacity = '1';
						} 
					});
					videoWrap.addEventListener('mouseleave', (e) => { 
						if(!video.paused ) {
							btn.style.opacity = '0';
						} 
					});
				}
			}
		})
	}

}

VideoHandler();