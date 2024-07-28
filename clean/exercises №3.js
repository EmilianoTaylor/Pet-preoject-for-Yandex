
const purchase = {
	Electronics: [
		{name: 'laptop', price: 1200},
		{name: 'keyboard', price: 1000},
		{name: 'HDIM', price: 10}
	],
	Textile: [
		{name: 'bag', price: 50},
		{name: 'ralph', price: 250},
		{name: 'laptop', price: 1500}
	]
};

const find = (basket, name) => {
const result = []
for (key in basket) {
	const items = basket[key]
	for (item of items) {
		if (item.name === 'laptop') result.push(item);
	}
}
return result;
}
const result = find(purchase, 'laptop');

console.log (result)


// ==========================

const items = [
	{cena: 40},
	{cena: -120},
	{cena: '505'},
	{cena: 350},
];

const calculateTotal = (goods) => {
	let total = 0;
	for (const item of goods) {
		if (typeof item.cena === 'number' && item.cena > 0){
				total += item.cena;
			}
		}
	return total;
}
	console.log (calculateTotal(items))

	// ==========================

	const goods = new Map();
goods.set('macbook', 1500)
goods.set('ralph', 700)

for (const [keys, prices] of goods) {
	console.log(`Element ${keys} price is ${prices}`)
}

// ============================== ЗАМЫКАНИЕ

const logger = (kind) => {
	const colors = {
		warning: '\x1b[1;33m',
		error: '\x1b[0;31m',
		info: '\x1b[1;37m'
	};
	const color = colors[kind] || colors.info;
	return (s) => {
		const date = new Date().toISOString();
		console.log(color + date + ' ' + s)
	};
};

const warning = logger('warning')
warning('Previously')

// ============================== ЗАМЫКАНИЕ 2


const generateKey = (alphabet) => {
	const max = alphabet.length;
	return (length) => {
		let key = '';
		for (i=0; i < length; i++) {
			const index = Math.floor(Math.random() * max);
			key += alphabet[index]
		}
		return(key)
	};
};

const pass = 'qwertyuiopasdfghjklzxcvbnm';
const generatePassword = generateKey(pass);
const password = generatePassword(12);
console.log({password})

// ======================================= RECURSION

const factorial = (n) => {
	console.log({n});
	if (n === 0) {
		console.log(`${n}! = 1`);
		return 1;
	}
	const result = n * factorial(n - 1);
	console.log(`${n}! = ${result}`);
	return result;
};
console.log(factorial(5))

// =================================== RECURSION 2

function pow (x, n) {
	if (n == 1) {
		return x} else {
			return x * pow(x, n - 1)
		}
	}
	console.log(pow(2,3))

// =================================== RECURSION 3

	let company = {
		sales: [{name: 'John', salary: 1000}, {name: 'Alcie', salary: 600}],
		development: {
			sites: [{name: 'Pate', salary: 2000}, {name: 'Alex', salary: 1800}],
			internals: [{name: 'Marry', salary: 1300}]
		}
	};

	function sumSalaries (department) {
		if (Array.isArray(department)) {
			return department.reduce((prev, current) => prev + current.salary, 0)
		} else {
			let sum = 0;
			for (let subdep of Object.values(department)) {
				sum += sumSalaries(subdep);
			}
			return sum;
		}
	}

	console.log(sumSalaries(company))

	// ===================================== PROMISE

	function request (url, ifSuccess) {
		// here must be a code
	}

	request('/api/users/1', function (user) {
		request('/api/photos/$userid', function (photo) {
			request('/api/crop/$cropID', function (response) {
				console.log(response)
		})
	})
})

// с добавлением promise 

function request (url) {
	return new Promise (function (resolve, reject) {
		let responseFromServer
		// ---- //
		resolve(responseFromServer)
	})
}

request ('/api/users/1')
	.then((user) => request('/api/photos/$userid'))
	.then((photo) => request('/api/photos/$cropID'))
	.then ((response) => console.log(response))
