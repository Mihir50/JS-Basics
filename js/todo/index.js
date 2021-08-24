const todoInput =  document.querySelector('.todo-input');
const todoButton =  document.querySelector('.todo-button');
const todoList =  document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter-todo');


todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOptions.addEventListener("click",filtertodo);

function addTodo(e){
    //prevent form from submitting
    e.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create li

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check button
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.classList.add('complete-btn');
    todoDiv.appendChild(completeBtn);

    //remove button
    const removeBtn  = document.createElement('button');
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
    removeBtn.classList.add('remove-btn');
    todoDiv.appendChild(removeBtn);

    todoList.appendChild(todoDiv);
    
    //clear input value
    todoInput.value = "";
} 


function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] == 'remove-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
        
    }

    if(item.classList[0] == 'complete-btn'){
        item.parentElement.classList.toggle('completed');
    }
}

function filtertodo(e){
    const todos = todoList.children;
    // console.log(todos);
    [...todos].forEach(function(todo){
        switch(e.target.value){
            case 'all': 
                todo.style.display = 'flex';
                break;
            
            case 'completed': 
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;

            case 'remaining':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
            
        }


    });
}