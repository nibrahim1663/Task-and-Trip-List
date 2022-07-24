// In addition to the assignment requirements, I have just added the code that gives the task
// a number and displays it in the tasks list
"use strict";

$(document).ready( () =>
{
    // This array will hold the tasks list
    const tasks = [];

    // This variable will hold the value of the numbered task
    let taskNumber = 0;

    // This is the click() event method of the Add Task button. This method is called to
    // add and display the tasks to/in the tasks list
    $("#add_task").click( () =>
    {  
        // Grab the user input
        const textbox = $("#task");
        const task = textbox.val();

        // Check if the user entered a white space preceding the task and display a message,
        // then clear the textbox and set it on focus
        if (task === "")
        {
            alert("Please enter a task.");

            // Clear the user input, then set the focus on the text box
            textbox.val("");
            textbox.focus();
        }
        else
        {
            // Create an array where its elements are the entered tasks that are seperated by a comma
            var taskParts = task.split(",");
           
            // Loop through the taskParts array
            for (let i in taskParts)
            {
                // Add only the tasks that don't have ONLY white spaces
                if (taskParts[i].trim().length !== 0)
                {
                    // Remove white spaces before and after each task
                    taskParts[i] = taskParts[i].trim();

                    // Increase the numbered list by 1
                    taskNumber++;

                    // Add/Push task to the array of tasks
                    tasks.push(taskNumber + ". " + taskParts[i]);
                }    

                // clear task text box and re-display tasks
                textbox.val("");

                // Add a null terminator to the end of each task to move to a new line
                $("#task_list").val( tasks.join("\n"));
               
                textbox.focus();
            }
        }
    });
   
    // This is the click() event method of the Clear Tasks button. This method is called to
    // clear the array of tasks and reset the task number
    $("#clear_tasks").click( () =>
    {
        // Clear the array of tasks
        tasks.length = 0;

        // Reset the task number
        taskNumber = 0;

        // Clear the display of the tasks list
        $("#task_list").val("");
        $("#task").focus();
    });

    $("#task").focus();
});