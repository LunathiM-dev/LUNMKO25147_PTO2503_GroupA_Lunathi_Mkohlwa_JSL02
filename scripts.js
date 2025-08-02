function getValidStatus() {
  let status = prompt("Enter task status (todo, doing, or done):").toLowerCase();

  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, or done):").toLowerCase();
  }

  return status;
}

// This is to grab Task 1 from user
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");
const task1Status = getValidStatus();

// This is to grab Task 2 from from user
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
const task2Status = getValidStatus();

// Ask for title (just keeping it short)
const tasks = [
  { title: task1Title, description: task1Description, status: task1Status },
  { title: task2Title, description: task2Description, status: task2Status }
];

// This is for completed tasks
const completedTasks = tasks.filter(task => task.status === "done");

// Log result to console
if (completedTasks.length > 0) {
  completedTasks.forEach(task => {
    console.log(`Title: ${task.title}, status: ${task.status}`);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}
