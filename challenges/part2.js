let post = undefined

const jsInput = document.querySelector("input")
const jsDiv = document.querySelector("div")
const submitBtn = document.createElement("button")
submitBtn.innerText = "Submit"
submitBtn.onclick = savePost
document.body.appendChild(submitBtn)
const savedPosts = []

jsInput.value = "What's on your mind?"

function dataToView() {
	console.log("saved posts: ", savedPosts)
	post = post == undefined ? "What's on your mind?" : post
	jsInput.value = post
	jsDiv.textContent = post
}

function savePost() {
	savedPosts.push(post)
	post = undefined
	dataToView()
}

function handleClick() {
	post = ""
  dataToView()
}

function handleInput() {
	post = jsInput.value
  dataToView()
}

jsInput.onclick = handleClick
jsInput.oninput = handleInput

