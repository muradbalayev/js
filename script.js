const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)


//! fuction
function addTodo(e) {

    e.preventDefault();

    if(todoInput.value.trim().length=='')
    return;
   
        //div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")

    //create todo li
const newTodo = document.createElement("li")
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo)

    //minus button
    const trashButton = document.createElement("button");
        trashButton.innerHTML = "<i class='fa fa-minus-circle'></i>";
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

//list
todoList.appendChild(todoDiv);
todoInput.value =  "";
    }
    
function deleteCheck(e){
    const item = e.target

    //delete to do
    if(item.classList[0] === "trash-btn"){
       const todo = item.parentElement;
       todo.remove();
    }
}