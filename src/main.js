import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

var swiper = new Swiper('.corporate__slider', {
	loop: true,
	modules: [Navigation, Pagination],
	navigation: {
		prevEl: '.corporate__prev',
		nextEl: '.corporate__next',
	},
	pagination: {
		el: '.corporate__pagination',
	},
});
