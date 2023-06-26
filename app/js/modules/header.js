const header = document?.querySelector('header');
const headerHeight = header.offsetHeight;
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
if (document?.querySelector('.first')) {

	const header = document?.querySelector('header');
	const first = document?.querySelector('.first');
	const firstPadding = getComputedStyle(first).getPropertyValue('padding-top'); //получаем стили

	window.addEventListener('scroll', () => {
		if (window.scrollY > parseInt(firstPadding)) {
			header.classList.add('header--bg');
		} else {
			header.classList.remove('header--bg');
		}
	})

}
