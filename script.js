const taskInput = document.getElementById("taskInput");

const addTaskButton = document.getElementById("addTaskButton");

const taskList = document.getElementById("taskList");


addTaskButton.addEventListener("click", function () {

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    li.textContent = taskInput.value;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";

});


taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTaskButton.click();
    }

});
