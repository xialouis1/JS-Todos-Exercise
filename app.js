// Create list from localStorage using saved HTML.
function loadFromLocalStorage() {
    const todoListHTML = localStorage.getItem("todoList");
    const todoList = document.querySelector("#todoList");
    todoList.innerHTML = todoListHTML;
}
loadFromLocalStorage();

// Save list HTML code to localStorage
function saveToLocalStorage() {
    const todoListHTML = document.querySelector("#todoList").innerHTML;
    localStorage.setItem("todoList", todoListHTML);
}

// Mark todos as done or not done by clicking on the actual text
// Delete todos when clicking the cooresponding delete button
const ul = document.querySelector("#todoList ul");
ul.addEventListener("click", function(event) {
    if(event.target.tagName === "SPAN") {
        event.target.parentElement.classList.toggle("done");
    } 
    else if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }

    saveToLocalStorage();
});

// Add todos to the list when submitting a form
// Clear form value when todos is added to list
const form = document.querySelector("#userInput");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.querySelector("#input");
    const li = document.createElement("li");
    li.innerHTML = `<span>${input.value}</span>`;

    const button = document.createElement("button");
    button.innerHTML = "Delete";
    li.appendChild(button);
    ul.appendChild(li);

    saveToLocalStorage();

    form.reset();
});