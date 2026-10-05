document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

console.log(taskInput);
console.log(addTaskButton);
console.log(taskList);

addTaskButton.addEventListener("click", function () {

     if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }
    
    console.log(taskInput.value);
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInputs.value = "";
});
