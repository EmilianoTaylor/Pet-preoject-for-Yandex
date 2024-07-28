
function divisor (n) {
	let mass = []
	for (let i = 1; i <= n; i++) {
		if(n%i==0){ mass+= i }
	}
	return mass
}

console.log (divisor(4))

const promise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, 'First')
})

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'Second')
})

Promise.all([promise1, promise2]).then((value) => {
	console.log(value)
})
