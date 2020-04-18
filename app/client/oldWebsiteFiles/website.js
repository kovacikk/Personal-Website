var submitButton = document.querySelector("#submitButton");
var forumText = document.querySelector("#forumText");
var input = document.querySelector("#userInput");

submitButton.addEventListener("click", submitMessage);

function submitMessage() {
	forumText.innerHTML = input.value;
}