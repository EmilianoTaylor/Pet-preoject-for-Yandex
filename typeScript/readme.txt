	includes: 

	!!! types: 

const str: string = "Wassup"
function sayName (name: string): void {	console.log(name) }

	!!! interfaces: 

interface Rect {
readonly id: string
color?: string
size: {	width: number
	height: number}
}

