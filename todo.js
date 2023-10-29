const taskTitle = document.getElementById("task-input");
const taskdescription = document.getElementById("task-description");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");
const pendingTasksSection = document.getElementById("pending-tasks");
const completedTasksSection = document.getElementById("completed-tasks");

function addTask(taskText, descriptionText) {
  const li = document.createElement("li");
  const taskSpan = document.createElement("span");
  const descriptionSpan = document.createElement("span");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const completeButton = document.createElement("button");

  taskSpan.textContent = taskText;
  taskSpan.classList.add("title-text")

  descriptionSpan.textContent = descriptionText;
  descriptionSpan.classList.add('description-text')

  editButton.textContent = "Edit";
  editButton.classList.add("edit-button");

  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");

  completeButton.textContent = "Complete";
  completeButton.classList.add("complete-button")

  completeButton.addEventListener("click", function () {
    taskSpan.classList.toggle("completed");
    descriptionSpan.classList.toggle('completed');
    if (taskSpan.classList.contains("completed")) {
      completeButton.textContent = "Completed";
      completeButton.classList.remove("complete-button")
      completeButton.classList.add("completed-button");
      completedList.appendChild(li);
    } else {
      completeButton.textContent = "Complete";
      completeButton.classList.remove("completed-button")
      completeButton.classList.add("complete-button")
      pendingList.appendChild(li);
    }
    updateTaskSectionsVisibility();
  });

  editButton.addEventListener('click', function() {
    editButton.classList.toggle('edit');
    if (editButton.classList.contains('edit')){
      taskSpan.setAttribute("contenteditable", "true");
      descriptionSpan.setAttribute("contenteditable", "true");
    } else {
      taskSpan.setAttribute("contenteditable", "false");
      descriptionSpan.setAttribute("contenteditable", "false");
    }
  });

  deleteButton.addEventListener("click", function () {
    li.remove();
    updateTaskSectionsVisibility();
  });

  taskSpan.setAttribute("contenteditable", "false");
  descriptionSpan.setAttribute("contenteditable", "false");

  li.appendChild(taskSpan);
  li.appendChild(descriptionSpan);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  li.appendChild(completeButton);
  taskList.appendChild(li);

  pendingList.appendChild(li);
  updateTaskSectionsVisibility();
}

function updateTaskSectionsVisibility() {
  if (pendingList.children.length > 0) {
    pendingTasksSection.style.display = "block";
  } else {
    pendingTasksSection.style.display = "none";
  }

  if (completedList.children.length > 0) {
    completedTasksSection.style.display = "block";
  } else {
    completedTasksSection.style.display = "none";
  }
}

addButton.addEventListener("click", function () {
  const taskText = taskTitle.value;
  const descriptionText = taskdescription.value;
  if (taskText.trim() !== "") {
    addTask(taskText, descriptionText);
    taskTitle.value = "";
    taskdescription.value = "";
  }
});
