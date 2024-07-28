class typeScript {
	version: string

	constructor(version: string) {
		this.version = version
	}

	info(name: string) {
		return `[${name}]: Typescript version is ${this.version}`
	}
}

class car {
	readonly model: string
	readonly numberOfWheels: number = 4

	constructor(theModel: string) {  // перезапись readonly работает только в конструкторе
		this.model = theModel
	}
}


class Animal {
	protected voice: string = '' //  протект только в данном классе и наследственных
	public color: string = 'black'

	private go(){
		console.log('go')
	}
} 

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice
	}
}
const cat = new Cat()

cat.setVoice('test')
cat.color


abstract class Component {  // от абстрактных классов можно наследоваться, но они не копилируются через tsc
	abstract render(): void
	abstract info():string
}

class AppComponent extends Component {
	render(): void {
		console.log('comp render')
	}
	info(): string {
		return 'This string'
	}
}