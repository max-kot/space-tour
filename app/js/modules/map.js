const map = document.querySelector('.how-to__map svg');
const allCircles = map.querySelectorAll('[data-map-id]');
const allDescrItems = document.querySelectorAll('.how-to__item');

allCircles.forEach((circle) => {
	allDescrItems.forEach((item) => {
		item.style.position = "absolute";
		if (circle.dataset.mapId === item.dataset.mapId) {
			item.style.left = `${parseInt(circle.getAttribute('cx')) + 30}px`;
			item.style.top = `${parseInt(circle.getAttribute('cy')) - 11}px`;
		}
		if (circle.dataset.mapId === item.dataset.mapId && item.dataset.mapId === '6') {
			item.style.left = 'unset';
			item.style.right = `${parseInt(circle.getAttribute('cx')) }px`;
		}
		if (circle.dataset.mapId === item.dataset.mapId && item.dataset.mapId === '7') {
			item.style.top = `${parseInt(circle.getAttribute('cy')) + 30}px`;
			item.style.left = `${parseInt(circle.getAttribute('cx')) + 0}px`;
		}
	})

	circle.addEventListener('mouseenter', () => {
		circle.classList.add('active');
		allDescrItems.forEach((item) => {
			if (circle.dataset.mapId === item.dataset.mapId) {
				item.classList.add('active');
			}
		});
	})
	circle.addEventListener('mouseleave', () => {
		circle.classList.remove('active');
		allDescrItems.forEach((item) => {
			item.classList.remove('active');
		});
	})

	allDescrItems.forEach((item) => {
		item.addEventListener('mouseenter', () => {
			if (circle.dataset.mapId === item.dataset.mapId) {
				item.classList.add('active');
				circle.classList.add('active')
			}
		});
		item.addEventListener('mouseleave', () => {
			circle.classList.remove('active');
			item.classList.remove('active');
		});
	});


})

//console.log(item1.getAttribute('cx'));

//document.querySelector('.how-to__item').style.left = parseInt(item1.getAttribute('cx')) + 30 + 'px';