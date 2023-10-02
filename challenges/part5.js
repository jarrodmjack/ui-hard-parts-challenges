let vDOM
let prevVDOM
let elems
let data = { myName: "", yourName: "" }
let isFocus

function createVDOM() {
	return [
		[
			"input",
			data.myName,
			function handle(e) {
				console.log()
				updateData("myName", e.target.value)
			},
		],
		["div", `Hello, ${data.myName}!`],
		["div", `Great job, Jonathan!`],
		["div", `Great job, Alexa!`],
		["div", `Great job, Emilia!`],
	]
}

function updateData(label, value) {
	data[label] = value
	window.requestAnimationFrame(updateDOM)
}

function updateDOM() {
	if (vDOM)
		document.activeElement == document.querySelector("input")
			? (isFocus = true)
			: (isFocus = false) // keep this code

	if (elems == undefined) {
		vDOM = createVDOM()
		elems = vDOM.map(convert)
		document.body.append(...elems)
	} else {
		prevVDOM = vDOM
		vDOM = createVDOM()
		findDiff(prevVDOM, vDOM)
	}
	if (isFocus) elems[0].focus() //keep this code
}

function convert(node) {
	const element = document.createElement(node[0])
	element.textContent = node[1]
	element.value = node[1]
	element.oninput = node[2]
	return element
}

function findDiff(prevVDOM, currentVDOM) {
	for (let i = 0; i < currentVDOM.length; i++) {
		if (JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])) {
			elems[i].textContent = currentVDOM[i][1]
			elems[i].value = currentVDOM[i][1]
		}
	}
}

window.requestAnimationFrame(updateDOM)
