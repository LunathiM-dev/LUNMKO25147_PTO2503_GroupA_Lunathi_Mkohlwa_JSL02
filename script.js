// Task Entry System - JavaScript Implementation
// This script prompts users to enter details for two tasks and validates the input

// Function to validate status input
function validateStatus(status) {
    // Convert status to lowercase for consistency
    const normalizedStatus = status.toLowerCase().trim();
    
    // Check if status is one of the valid options
    const validStatuses = ['todo', 'doing', 'done'];
    return validStatuses.includes(normalizedStatus);
}

// Function to get valid status from user
function getValidStatus(taskNumber) {
    let status;
    let isValidStatus = false;
    
    // Keep prompting until user enters a valid status
    while (!isValidStatus) {
        status = prompt(`Enter status for Task ${taskNumber} (todo, doing, or done):`);
        
        // Check if user cancelled the prompt
        if (status === null) {
            alert("Task entry cancelled.");
            return null;
        }
        
        // Validate the status
        if (validateStatus(status)) {
            isValidStatus = true;
            // Return the normalized (lowercase) status
            status = status.toLowerCase().trim();
        } else {
            // Alert user about invalid status and prompt again
            alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
        }
    }
    
    return status;
}

// Function to collect task information
function collectTaskInfo(taskNumber) {
    // Get task title
    const taskTitle = prompt(`Enter task ${taskNumber} title:`);
    if (taskTitle === null) {
        alert("Task entry cancelled.");
        return null;
    }
    
    // Get task description
    const taskDescription = prompt(`Enter task ${taskNumber} description:`);
    if (taskDescription === null) {
        alert("Task entry cancelled.");
        return null;
    }
    
    // Get valid status
    const taskStatus = getValidStatus(taskNumber);
    if (taskStatus === null) {
        return null;
    }
    
    // Return task object with all details
    return {
        title: taskTitle.trim(),
        description: taskDescription.trim(),
        status: taskStatus
    };
}

// Main function to run the task entry system
function runTaskEntrySystem() {
    console.log("=== Task Entry System Started ===");
    
    // Collect information for Task 1
    console.log("Collecting Task 1 information...");
    const task1 = collectTaskInfo(1);
    
    // Check if Task 1 was cancelled
    if (task1 === null) {
        console.log("Task entry system cancelled.");
        return;
    }
    
    // Collect information for Task 2
    console.log("Collecting Task 2 information...");
    const task2 = collectTaskInfo(2);
    
    // Check if Task 2 was cancelled
    if (task2 === null) {
        console.log("Task entry system cancelled.");
        return;
    }
    
    // Store tasks in an array for easier processing
    const allTasks = [task1, task2];
    
    // Find completed tasks (status: "done")
    const completedTasks = allTasks.filter(task => task.status === 'done');
    
    // Display results in console based on completed tasks
    if (completedTasks.length > 0) {
        console.log("=== Completed Tasks ===");
        completedTasks.forEach((task, index) => {
            console.log(`Title: ${task.title}, status: ${task.status}`);
        });
    } else {
        // Show motivational message when no tasks are completed
        console.log("No tasks completed, let's get to work!");
    }
    
    // Optional: Display all tasks for debugging/verification
    console.log("=== All Tasks Summary ===");
    allTasks.forEach((task, index) => {
        console.log(`Task ${index + 1}:`);
        console.log(`  Title: ${task.title}`);
        console.log(`  Description: ${task.description}`);
        console.log(`  Status: ${task.status}`);
        console.log("---");
    });
}

// Start the task entry system when the page loads
// You can also call this function manually or attach it to a button click
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment the line below to automatically start the system when page loads
    // runTaskEntrySystem();
    
    // Or you can add this to your existing "Add New Task" button functionality
    console.log("Task Entry System loaded. Call runTaskEntrySystem() to start.");
});