
// настройки
let options = {
	root: null,
	rootMargin: '5px',
	threshold: 0.5
}

// функция обратного вызова 
let callback = (entries, observer) => {
	entries.forEach(entry => {
		// если элемент является наблюдаемым
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
		}
	});
}

// наблюдатель
let observer = new IntersectionObserver(callback, options);

// определяем элементы, за которыми наблюдаем
let target = document.querySelector('.anim')
observer.observe(target)
