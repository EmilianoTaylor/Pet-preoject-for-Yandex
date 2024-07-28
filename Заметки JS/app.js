
const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
const notes = [
	{
		title: 'first note',
		completed: false,
	},
	{
		title: 'two note',
		completed: true,
	}
]


function render () {
	listElement.innerHTML = ''
	for (let i = 0; i < notes.length; i++)
	{
		listElement.insertAdjacentHTML('beforeend', getNoteTemplate (notes[i], i))
	}
}

render ()

createBtn.onclick = function () {
	
	if (inputElement.value.length === 0) {return}
	const newNote = {
		title: inputElement.value,
		completed: false,
	}
	notes.push(newNote)
	render()
	inputElement.value = ''
}

listElement.onclick = function (event) {
	if (event.target.dataset.index) {
	const index = parseInt(event.target.dataset.index)
	const type = event.target.dataset.type
	if (type === 'togle') {
		notes[index].completed = !notes[index].completed
	} else if (type === 'remove') {
		notes.splice(index, 1)
	}
	render()
	}
}

function getNoteTemplate (note, index) {
	return `<li class="list-group-item d-flex justify-content-between align items center">
	<span>
	<span class="btn btn-small btn-${note.completed ? 'success': 'danger'}" data-index="${index}" 
	data-type="togle">&check;</span>
	<span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
	</span>
	<span id="spanText">${note.title}</span>
</li>`
}

