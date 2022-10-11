const body = document.body;
const header = document.querySelector('header');
const addTodo = document.querySelector('.create-todo-button');
const formDivContainer = document.querySelector('.form-div');
const todoForm = document.querySelector('.todo-form');
const todoContainer = document.querySelector('.todo-container');
const taskField = document.querySelector('.task');
const dueDateField = document.querySelector('.duedate');
const add = document.querySelector('.add');
const cancel = document.querySelector('.cancel-link')
const allTodo = [];



// showimg and removing formDivContainer from the User Screen

addTodo.addEventListener('click',() => {
    formDivContainer.classList.add('show-form-div')
    todoForm.classList.add('show-todo-form');

    checkInput()
})

cancel.addEventListener('click',() => {
    formDivContainer.classList.remove('show-form-div')
    todoForm.classList.remove('show-todo-form');
    taskField.value = '';
    dueDateField.value = '';
})

add.disabled = true;

    // checking if any of two input field is empty or not

    checkInput()
 
       

// TodoCard Class to make multiple cards

class TodoCard{
    cunstructor(Taskname,Date){
        this.Taskname = Taskname;
        this.date = Date;
    }

    
}

// function to add todo card

add.addEventListener('click', addTodoCard);


function addTodoCard(e){

e.preventDefault();

formDivContainer.classList.remove('show-form-div')
todoForm.classList.remove('show-todo-form');

let task = new TodoCard(taskField.value,dueDateField.value);
allTodo.push(task);

let card = document.createElement('div');
card.classList.add('todoCard');
todoContainer.appendChild(card);

let taskName = document.createElement('div');
taskName.classList.add('taskName');
taskName.innerText = `Task : ${taskField.value}`;
card.appendChild(taskName);

let dueDate = document.createElement('div');
dueDate.classList.add('dueDate');
dueDate.innerText = `Due Date : ${dueDateField.value}`;
card.appendChild(dueDate);

taskField.value = '';
dueDateField.value = '';

let Delete = document.createElement('img')
    Delete.classList.add('delete')
    Delete.setAttribute('src','./Resources/Cross SVG.svg')
    Delete.setAttribute('alt', 'delete icon');
    Delete.setAttribute('height', 30);
    Delete.setAttribute('width', 30);
    card.appendChild(Delete);

    
Delete.addEventListener('click',() => {
    card.remove();
})

}



function checkInput(){
    add.addEventListener('mouseover', () => {

        if(taskField.value == '' && dueDateField.value == ''){
            console.log('Bot Input Are Empty')
            add.disabled = true;
            taskField.classList.remove('check-input-true');
            dueDateField.classList.remove('check-input-true');
// false check class won't overwrite if we don't remove true check class
// we could have used simple border styling too.
            taskField.classList.add('check-input-false');
            dueDateField.classList.add('check-input-false');
            

    
        }
    
        else if(taskField.value == '' && dueDateField.value !== ''){
            console.log('taskfiled Is Empty')
            add.disabled = true;
            taskField.classList.add('check-input-false');
            dueDateField.classList.add('check-input-true');
    
        }
    
        else if(dueDateField.value == '' && taskField.value !== ''){
            console.log('dueDateFiled Is Empty')
            add.disabled = true;
            dueDateField.classList.add('check-input-false');
            taskField.classList.add('check-input-true');
        }
        
        else if(dueDateField.value !== '' && taskField.value !== ''){
        console.log('Both Are Not Empty')
        add.disabled = false;
        taskField.classList.add('check-input-true'); 
        dueDateField.classList.add('check-input-true');
        }
    })
    
}