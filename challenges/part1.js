/** Write your code below */

let post = ""

const jsDiv = document.querySelector("div")
const jsInput = document.querySelector("input")

const handleInput = () => {
	console.log("hit handle input function")
	post = jsInput.value
    jsDiv.textContent = post
}

jsInput.oninput = handleInput
