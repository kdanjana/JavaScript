//variables
const todo = document.getElementById('todo');
const form = document.getElementById('addform');
const todosList = document.getElementById('todosList');


// event listeners
form.addEventListener('submit', addToDo);
todosList.addEventListener('click', removeTodo);


//add todo
function addToDo(event){
    event.preventDefault();
    //console.log(event);
    if (todo.value == ''){
        alert('Enter todo!');
        return;
    }
    //get user input
    const newTodo = todo.value;
    //create new li element
    let li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between";
    // add user input to li element
    li.innerText = newTodo;
    // create and add button to li element
    let delBtn = document.createElement('button');
    delBtn.className = "btn btn-danger btn-sm delBtnEvent";
    delBtn.innerText = 'Delete';
    li.append(delBtn);
    // add li element to the todos list
    todosList.append(li);

    todo.value = '';
}



// delete todo
function removeTodo(event){
    event.preventDefault();
    //console.log(event, {target: event.target, classes: event.target.classList});
    if (event.target.classList.contains('delBtnEvent')){
        let userReply = confirm('Are you sure ?')
        if (userReply){
            let li = event.target.parentElement;
            todosList.removeChild(li);
        }
    }
}