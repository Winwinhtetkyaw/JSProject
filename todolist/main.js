// variables

const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const addTask = document.getElementById('add-task');

// Event Listener
addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');
    // <div class="task">

    const li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);
    // <div class="task"><li>....</li></div>

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);
    /*<div class="task">
        <li>....</li>
        <button class="checkTask"><i class="fa-solid fa-check"></i></button>
      </div>*/

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    // check input field
    if(inputTask.value === '' || inputTask.value === ' '){
        alert("Please enter your task");
    } else {
        taskContainer.append(task);
    }
    inputTask.value = "";


    // for checking and deleting
    checkBtn.addEventListener('click', function(){
        checkBtn.parentElement.style.textDecoration = "line-through";
        checkBtn.parentElement.style.background = "#a4abeb";
    });

    deleteBtn.addEventListener('click', function(e){
        let target = e.target;

        target.parentElement.parentElement.remove();
    });

});