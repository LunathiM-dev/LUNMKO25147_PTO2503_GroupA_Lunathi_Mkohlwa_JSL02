// Helper function to validate status
function getValidStatus(taskNumber) {
  let status;
  while (true) {
    status = prompt(`Enter status for task ${taskNumber} (todo, doing, done):`).toLowerCase().trim();
    if (status === "todo" || status === "doing" || status === "done") {
      return status;
    } else {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    }
  }
}

// Prompt the user for two tasks
function getTask(taskNumber) {
  const title = prompt(`Enter task ${taskNumber} title:`).trim();
  const description = prompt(`Enter task ${taskNumber} description:`).trim();
  const status = getValidStatus(taskNumber);

  return {
    title,
    description,
    status,
  };
}

// Main logic
const task1 = getTask(1);
const task2 = getTask(2);

const tasks = [task1, task2];

// Filter done tasks and log them
const completedTasks = tasks.filter(task => task.status === "done");

if (completedTasks.length > 0) {
  completedTasks.forEach(task => {
    console.log(`Title: ${task.title}, status: ${task.status}`);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}
