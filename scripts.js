function getValidStatus() {
  let status = prompt("Enter task status (todo, doing, or done):").toLowerCase();

  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, or done):").toLowerCase();
  }

  return status;
}

// Get Task 1 input
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");
const task1Status = getValidStatus();

// Get Task 2 input
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
const task2Status = getValidStatus();

// Store tasks as objects (for clarity and easier handling)
const tasks = [
  { title: task1Title, description: task1Description, status: task1Status },
  { title: task2Title, description: task2Description, status: task2Status }
];

// Filter for completed tasks
const completedTasks = tasks.filter(task => task.status === "done");

// Log result to console
if (completedTasks.length > 0) {
  completedTasks.forEach(task => {
    console.log(`Title: ${task.title}, status: ${task.status}`);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}
