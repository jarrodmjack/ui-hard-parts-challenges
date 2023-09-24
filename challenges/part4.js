// let myName = "";

// const vDOM = [
//   [
//     "input",
//     myName,
//     function handle() {
//       myName = jsInput.value;
//     },
//   ],
//   ["div", `Hello, ${myName}!`],
// ];

// function convert(node) {
//   const element = document.createElement(node[0]);
//   element.textContent = node[1];
//   element.value = node[1];
//   element.oninput = node[2];
//   return element;
// }

/** Step @todo */
/* uncomment the code below this line, and comment out the code above*/

let isFocus = false

let myName = ""
let jsInput
let jsDiv
let vDOM

// function createVDOM() {
// 	return [
// 		[
// 			"input",
// 			myName,
// 			function handle() {
// 				myName = jsInput.value
// 			},
// 		],
// 		[
// 			"div",
// 			`Hello, ${myName}!`,
// 			,
// 			["div", "I am nested once", , ["div", "I am nested twice"]],
// 		],
// 	]
// }

const textsToDisplay = ['Hello from div 1', 'Hello from div 2', 'Hello from div 3']

function CreateDivWithText(text) {
	return ["div", text]
}

function updateDOM() {
	document.activeElement === jsInput ? (isFocus = true) : (isFocus = false)
	vDOM = textsToDisplay.map(CreateDivWithText)
	let elems = vDOM.map(convert)
	jsInput = elems[0] //the reason this is needed is because we cannot call focus until after it has been replaced, but we need the link back to the original node
	document.body.replaceChildren(...elems)
	if (isFocus) jsInput.focus()
}

function convert(node) {
	const element = document.createElement(node[0])
	element.textContent = node[1]
	element.value = node[1]
	element.oninput = node[2]

	if (node[3] && Array.isArray(node[3])) {
		let nestedElem = convert(node[3])
		element.appendChild(nestedElem)
	}

	return element
}

setInterval(updateDOM, 3500)
