const indicator = document.querySelector('.marmeto-nav-indicator-wrapper');
const items = document.querySelectorAll('.marmeto-nav-item');

function handleIndicator(el) {
	items.forEach(item => {
		item.classList.remove('is-active');
	});

	
	indicator.style.width = `${el.offsetWidth}px`;
	indicator.style.left = `${el.offsetLeft}px`;
	
	el.classList.add('is-active');
}

items.forEach((item) => {
	item.addEventListener('click', (e) => {
		handleIndicator(item)
	});

	item.classList.contains('is-active') && handleIndicator(item);
});