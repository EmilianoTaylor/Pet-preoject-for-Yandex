function shower () {
	console.log(`ширина - ${document.documentElement.clientWidth}`,
	`высота - ${document.documentElement.clientHeight}`
		)
}
shower()

let menuElem = document.getElementById('sweeties')
let titleElem = menuElem.querySelector('.title')
titleElem.onclick = function () {
menuElem.classList.toggle ('vision')
titleElem.classList.toggle ('after');
}

titleElem.onmousedown = function () {
	return false;
}

