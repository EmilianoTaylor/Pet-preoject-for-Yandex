

// типы данных ==
const str: string = "Wassup"
const num: number = 43.3

const realOrNot: boolean = true

const numberArr: number[] = [1, 3, 5, 7]
const numberArr2: Array<number> = [1, 3, 5, 7]

// Typle ==
const numStrArray: [string, number] = ['Vatsok', 123]

// Any ==

let noChange: string = 'Can not be exchanged'
let canChange: any = 'Can be exchanged'

// noChange = []        выпадает ошибка
canChange = []

// функции 

function sayName (name: string): void {
	console.log(name)
}

function haveNotEnd (): never {
	while (true) {

	}
}

// Type ==

type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 'string'
const id2: ID = 2022




