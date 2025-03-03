This is a CLI Application for Task-Management!!

Modules used:
fs module
Process.argv[] 

Functionalities Provided: Add Task,List Tasks,Delete Task,Update Task.
 I Have used Switch Case to Redirect call to Required Function and provided demo prompt for user convinience..

Functions Usage:
 getTasks() function reads existing tasks from tasks.json file,if it is empty then it will return an empty array..
 saveTasks() function saves tasks to tasks.json file,it is being used to data persitance.
 add_New_Task() function generates unique id ,add new task to list and calls saveTasks() function.
 list_All_Tasks() function loads all tasks from tasks.json file.
 delete_Task() function removes a task from tasks.json file by matching id,we are using filter method to give id's taht are not matching.
 updateTask() function finds task by provided id , it checks task exist or not before updating the description..

