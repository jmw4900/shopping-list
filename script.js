var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var lists = document.querySelectorAll("li");

// line-through on shopping list
var lineThrough = function(event) {
	event.target.classList.toggle("done");
}

// To check the input text length
var inputLength = function() {
	return input.value.length;
}

// To add delete button on lists
lists.forEach(function(element) {
	var deleteButton = document.createElement("button");

	element.onclick = lineThrough;
	deleteButton.appendChild(document.createTextNode("delete"));
	element.appendChild(deleteButton);

	deleteButton.addEventListener("click", function() {
		this.parentNode.removeEventListener("click", lineThrough)
		this.parentNode.remove();
	}, {once:true});
});

// To create new shopping list 
var createListElement = function() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");

	li.appendChild(document.createTextNode(input.value));
	deleteButton.appendChild(document.createTextNode("delete"));
	li.appendChild(deleteButton);
	ul.appendChild(li);

	li.onclick = lineThrough;
	deleteButton.addEventListener("click", function() {
		this.parentNode.removeEventListener("click", lineThrough)
		this.parentNode.remove();
	}, {once:true});

	input.value = "";	
}

var addListAfterClick = function() {
	if (inputLength() > 0) {
		createListElement();
	}
}

var addListAfterKeypress = function(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

input.addEventListener("keypress", addListAfterKeypress);
button.addEventListener("click", addListAfterClick);