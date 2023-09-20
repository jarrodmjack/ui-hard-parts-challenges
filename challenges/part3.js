let myName = ""
let isFocus = false
let jsInput
let jsDiv
let vDOM
let elems

function createVDOM() {
	return [
		[
			"input",
			myName,
			function handleInput() {
				console.log("hit")
				myName = jsInput.value
			},
		],
		["div", `Hello, ${myName}`, , ["div", "I am nested", , ['div', 'I am extra nested']]],
	]
}

function updateDom() {
	// console.log(document.activeElement)
	document.activeElement === jsInput ? (isFocus = true) : (isFocus = false)
	vDOM = createVDOM()
	jsInput = convert(vDOM[0])
	jsDiv = convert(vDOM[1])
	// elems = vDOM.map(convert)
	document.body.replaceChildren(jsInput, jsDiv)
	if (isFocus) jsInput.focus()
}

function convert(node) {
	let elem = document.createElement(node[0])
	elem.textContent = node[1]
	if (node[0] === "input") {
		elem.value = node[1]
		elem.oninput = node[2]
	}

	if (node[3] && Array.isArray(node[3])) {
		let nestedNode = convert(node[3])
		elem.appendChild(nestedNode)
	}
	return elem
}

setInterval(updateDom, 5000)

// function component() {
// 	document.activeElement === jsInput ? (isFocus = true) : (isFocus = false)

// 	//your code here
// 	jsInput = document.createElement("input")
// 	jsDiv = document.createElement("div")
// 	document.body.appendChild(jsInput)
// 	document.body.appendChild(jsDiv)
// 	jsInput.oninput = handleInput
// 	jsInput.value = myName
// 	jsDiv.textContent = myName

// 	document.body.replaceChildren(jsInput, jsDiv)

// 	if (isFocus) jsInput.focus()
// }
