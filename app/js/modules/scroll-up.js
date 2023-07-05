const scrollBtn = document.querySelector('.footer__up-link');

window.addEventListener('scroll', () => {
	if (window.scrollY > 100 ) {
		scrollBtn.classList.add('active');
	} else {
		scrollBtn.classList.remove('active');
	}
})