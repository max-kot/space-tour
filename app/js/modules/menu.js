const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const allMenuLink = document.querySelectorAll('.menu a');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
})

allMenuLink.forEach((link) => {
	link.addEventListener('click', () => {
		menuBtn.classList.remove('active');
		menu.classList.remove('active');
		document.body.classList.remove('no-scroll');
	})
})

