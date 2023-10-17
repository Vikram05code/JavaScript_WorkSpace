// Define the API URL
const apiUrl = "http://localhost:8080/api/tasks";

// Function to fetch and display tasks
function displayTasks() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";

            data.forEach((task) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="updateTask(${task.id}, this)">
                    <span>${task.title}</span>
                    <button onclick="deleteTask(${task.id})">Delete</button>
                `;
                taskList.appendChild(listItem);
            });
        });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskTitle = taskInput.value;
    
    if (taskTitle) {
        const task = { title: taskTitle, completed: false };
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        })
        .then(() => {
            taskInput.value = "";
            displayTasks();
        });
    }
}

// Function to update a task (mark as completed)
function updateTask(id, checkbox) {
    const task = { completed: checkbox.checked };
    fetch(apiUrl + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    })
    .then(() => {
        displayTasks();
    });
}

// Function to delete a task
function deleteTask(id) {
    fetch(apiUrl + "/" + id, {
        method: "DELETE",
    })
    .then(() => {
        displayTasks();
    });
}

// Initial task display
displayTasks();
