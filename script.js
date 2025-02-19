let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim()

    if(text){
        tasks.push({text:text, completed:false});
        taskInput.value="";
        updateTaskslist();
    }
};

const updateTaskslist = () => {
    const taskList = document.querySelector("task-list");
}

document.getElementById("newTask").addEventListener("click",function(e){
    e.preventDefault();
    addTask();
});