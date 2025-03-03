const fs = require("fs");
const Path = "tasks.json";

// This Function will return array of objects from tasks.json file..
const getTasks = () => {
    try {
        const data = fs.readFileSync(Path);
        return JSON.parse(data.toString());
    } catch (error) {
        return [];
    }
};

// This function will save current task to tasks.json file...
const saveTasks = (tasks) => {
    fs.writeFileSync(Path, JSON.stringify(tasks, null, 2));
};

// This function will add new task .. Here,id is previous_Task length+1.. 
const add_New_Task = (task) => {
    const tasks = getTasks();
    tasks.push({ id:tasks.length+1, task });
    saveTasks(tasks);
    console.log("Task added successfully!..");
};

// This function will list all entered tasks from tasks.json file..
const list_All_Tasks = () => {
    const tasks = getTasks();
    if (tasks.length === 0) {
        console.log("No tasks found!..");
    } else {
        console.log("Entered Tasks:");
        tasks.forEach((element) => console.log(`${element.id}: ${element.task}`));
    }
};
// Function to delete a task..
const delete_Task = (id) => {
    let tasks = getTasks();
    const updated_Tasks = tasks.filter((element) => element.id !== Number(id));
        saveTasks(updated_Tasks);
        console.log("Task deleted successfully!");
};

// This function will check if the task is entered or not ,if enetered it will update the task by using id..
const update_Task = (id, newTask) => {
    let tasks = getTasks();
    let task_Found = false;
    tasks = tasks.map((element) => {
        if (element.id === Number(id)) {
            task_Found = true;
            return { id: element.id, task: newTask };
        }
        return element;
    });

    if (task_Found) {
        saveTasks(tasks);
        console.log("Task updated successfully!..");
    } else {
        console.log("No Task Found..");
    }
};
// user input from command-line
const givenTask = process.argv[2];
switch (givenTask) {
    case "add":
        add_New_Task(process.argv[3]);
        break;
    case "list":
        list_All_Tasks();
        break;
    case "delete":
        delete_Task(process.argv[3]);
        break;
    case "update":
        update_Task(process.argv[3], process.argv[4]);
        break;
    default:
        console.log("-------------------------This is a CLI Application for Task-Management!!-------------------------------------------------");
        console.log("Functionalities Provided:");
        console.log("Add Task: node <Your JS file_Name>  add <task>");
        console.log("List Tasks: node <Your JS file_Name> list")
        console.log("Delete Task: node <Your JS file_Name> delete <id>");
        console.log("Update Task: node <Your JS file_Name> update <id> <new_task>");
        console.log(" ");
        console.log("Enter One Functionality You Want to Achieve:");
        
}