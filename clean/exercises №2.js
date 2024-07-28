
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]

function countPos (input) {
	if (input == null || input.length == 0)
		return [];
	var negative = 0
	var positive = 0

	for (var i = 0; i < input.length; i++ ) {
		if (input[i] > 0){
			positive ++ 
		} else {
			negative += input[i]
		}
	}
	return [positive, negative]
}
const res = countPos(numbers)
console.log(res)

// =========================================================


function countBy (x, n) {
	let z = []
	for (i = 1; i <= n; i++) {
		z.push(x * i)
	}
	return z;
}

const result = countBy(1, 10)
console.log(result)

// =========================================================

const mass = [3, 5, 10, 55, 57, -110]

const min = (list) => {
	return Math.min(...list)
}
const max = (list) => {
	return Math.max(...list)
}

console.log(`Minimal: ${min(mass)}; Maximal: ${max(mass)}`)

// =========================================================

Salar = "back-color-first"

const changer = (list) => {
return list 
	.split('-')
	.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
	.join('')
}
console.log(changer(Salar))

// =========================================================

let arr = [5, 3, 8, 1]

	let filterRange = (arr, a, b) => {
	return arr.filter(item => (a <= item && b >= item))
	}

let filtered = filterRange(arr, 1, 4);

console.log(filtered)

// =========================================================

function printNumbers (from, to) {
	let current = from;

	setTimeout(function go() {
		console.log(current);
		if (current < to) {
			setTimeout(go, 1000)
		} current++;
	}, 1000);
}

printNumbers(5, 10)

// ===========================/==============================

function setInt(from, to) {
	let common = from
	let timerId = setInterval(function () {
	console.log(common)
	if (common == to) {
		clearInterval(timerId)
	} common++;
}, 1000)
}

setInt(5, 10)

// ===========================/=====  ГЕНЕРАТОР

function* generateSequence (start, end) {
	for (let i = start; i <= end; i++) yield i;
	}
	
	function* generatePassCodes () {
		// 0..9
		yield* generateSequence (48, 57);
		// A..Z
		yield* generateSequence (65, 90);
		// a..z
		yield generateSequence (97, 122) ;
	}
	
	let str = '';
	for (let code of generatePassCodes()) {
		str += String.fromCharCode(code)
	}
	
	console.log(str)

// ===========================/=====

function update () {
	let clock = document.getElementById('clock');
	let date = new Date();
	let hours = date.getHours();
	if (hours < 10) hours = '0' + hours
	clock.children[0].innerHTML = hours
	
	let minutes = date.getMinutes();
	if (minutes < 10) minutes = '0' + minutes
	clock.children[1].innerHTML = minutes
	
	let seconds = date.getSeconds();
	if (seconds < 10) seconds = '0' + seconds
	clock.children[2].innerHTML = seconds
	}
	
	let timerId;
	function startClock () {
	timerId = setInterval(update, 1000)
	update()
	}
	startClock()

	// ===========================/==============================

	function showNotification ({top = 0, right = 0, className, html}) {

		let notification = document.createElement('div');
		notification.className = notification
		if (className) { 
			notification.classList.add('className')
		}
		
		notification.style.top = top + 'px';
		notification.style.right = right + 'px';
		notification.innerHTML = html
		document.body.appendChild(notification);
		
		setTimeout(() => notification.remove(), 1500)
		}
		
		let i = 1;
		setInterval (() => {
			showNotification(
			{top: 10,
			right: 10, 
			html: 'Warn ' + i++,
			className: "welcome"
			});
			}, 2000);


// ===========================/==============================

function returner (mass) {
	if (mass.length <=2 || mass.length > 100) {
		return false} else {
			let mas = []
			for (let i = 0; i < mass.length; i+= 2) {
				mas.push(mass[i])
			}
			return mas;
		}
}
console.log(returner("abcdefght"))

function reverseWords(str) {
	return str.split(' ').map(function(word){
		return word.split('').reverse().join('')
	}).join(' ')
}
console.log(reverseWords("big Shooter"))

// ===========================/==============================.