
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];


const list = (basket) => {
const count = {};
basket.forEach (f => {
	if (!count[f]) {
		count[f] = 1} else {
	count[f] ++}}
)
return count;
}

const result = list(fruits)
console.log(result)

// ======================================================

const fruitss = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const uniqFunc = (list) => {
	const res = {};
list.forEach(item => {
	res[item] = true;
});
return Object.keys(res)
}

const resultt = uniqFunc(fruitss)
console.log(resultt)

// ================================================

const students = [
	{name: 'Alex', age: '20'},
	{name: 'Mike', age: '24'},
	{name: 'Maria', age: '20'},
	{name: 'Stan', age: '18'}];

const grouped = {};
students.forEach (s => {
	if (!grouped[s.age]) {
		grouped[s.age] = [s]; } else
		{grouped[s.age].push(s)}
	}
)
console.log(grouped)

// ======================================================

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;

const findPairs = (nums, target) => {
	for (let i = 0; i < nums.length; i++){
		const numFirst = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			const numSecond = nums[j];
			if (numFirst + numSecond === target) {
				return [numFirst, numSecond];
			}
		}
	}
	return [];
}

const ressult = findPairs(myNumbers, sum)
console.log(ressult)

// ======================================================

const friends = [
	{name: 'Alex', pizzas: ['cheese', 'pepperoni']},
	{name: 'Mike', pizzas: ['salami', 'margarita']},
	{name: 'Maria', pizzas: ['meat']},
	{name: 'Anna', pizzas: ['fish']}];

	const pizzas = friends.reduce((accum, current) => {
		return [...accum, ...current.pizzas];
	}, [])
	
	console.log(pizzas)

	// ======================================================

	const myStr = 'pizza';

const reservedStringt = (str) => {
	const reversed = []
	for (let i = str.length - 1; i >= 0; i--) {
		reversed.push(str[i]);
	};
	return reversed.join('');
};
// #2
const reservedStringt2 = (str) => {
	return str.split('').reverse().join('');
}

const res = reservedStringt2(myStr);
const resulttt = reservedStringt(myStr)
console.log()


// ======================================================

function accum(str) {
	let letters = str.split('')
	let result = []; 
	for (let i = 0; i < letters.length; i++) {
		result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i]))
	}
	return result.join('-')
}

console.log(accum('abc'))

// ======================================================

function everySec (n) {
	n = n.split("");
	for (var i = 0; i < n.length; i+=2) {
	n[i] = n[i] * 2
	}
	n = n.join("");
	return n
}
console.log(everySec("1714"))

// ======================================================

function square (n) {
	n = Math.sqrt(n)
	if (n % 1 === 0) {
		return true	} else {return false}
}
console.log(square(4))