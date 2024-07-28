let menuElem = document.getElementById('final')
let titleElem = menuElem.querySelector('.title')

let removeElem = document.getElementById('helper')
let closerElem = document.getElementById('closer')
let btnClose = removeElem.querySelector('button')

btnClose.onclick = function () {
	removeElem.remove();
}

document.getElementById('personal').addEventListener("click", function () {
	document.getElementById('final').classList.add("open")
})

document.getElementById('changerBoxBtn').addEventListener("click", function () {
	document.getElementById('final').classList.remove("open")
})



