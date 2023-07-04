import "../../../node_modules/swiper/swiper-bundle";

const slider = new Swiper('.slider', {
	navigation: {
		nextEl: '.slider__btn-next',
		prevEl: '.slider__btn-prev',
	 },
})