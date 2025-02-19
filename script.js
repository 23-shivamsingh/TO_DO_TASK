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
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) =>{
        const listItem = document.createElement("li");

        listItem.innerHTML = `
        <div class="taskItem">
        <div class="task ${task.completed ? "completed" : ""}">
        <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} />
        <p>${task.text}</p>
        </div>
        <div class="icons">
        <img src="./img/edit.png" onClick="EditTask(${index})"/>
        <img src="./img/Delete.png" onClick="DeleteTask(${index})"/>
        </div>
        `;
        listItem.addEventListener("change", () => toggleTaskcomplete(index));
        taskList.append(listItem);
    });
};

document.getElementById("newTask").addEventListener("click",function(e){
    e.preventDefault();
    addTask();
}); 