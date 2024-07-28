
interface Rect {
	readonly id: string
	color?: string
	size: {
		width: number
		height: number
	}
}

const rect1: Rect = {
	id:'1234',
	size: {
		width: 20,
		height: 30,
	},
	color: 'red',
}

const rect2 = {} as Rect

// =========== наследование

interface RectWithArea extends Rect {
	getArea: ()=> number
}

const rect3: RectWithArea = {
	id:'11111',
	size: {
		width: 30,
		height: 40,
	},
	getArea(): number {
		return this.size.width * this.size.height
	},
}

//  ============== классы

interface iClock {
	time: Date
	setTime(date: Date): void
}

class clock implements iClock {
	time: Date = new Date()
	setTime(date: Date): void {
		this.time = date
	}
}

// =========

interface Styles {
	[key: string]: string
}

const css: Styles = {
	border: '1px solid',
	marginTop: '10em',
	borderRadius: '5px',
}