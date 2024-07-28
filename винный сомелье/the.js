const listElement = document.querySelectorAll('elem')

listElement.onclick = function (event) {
	if (event.ctrlKey || event.metaKey) {
		toggleSelect(event.target)
	} else {singleSelect (event.target)}
}

function singleSelect (li) {
	li.classList.add('anim')
}

