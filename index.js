const task = (taskName, taskProject, taskDeadline, taskDescription) => {
    return {taskName, taskProject, taskDeadline, taskDescription};
}

var taskList = [];

taskList[0] = task("Call John", "2", new Date(2020, 6, 10), "Discuss details regarding ongoing issue");
taskList[1] = task("Laundry", "1", new Date(2020, 6, 8), "Do this week's laundry");
taskList[2] = task("Grocery Shopping", "1", new Date(2020, 6, 15), "Prepare shopping list and purchase this month's essentials");
taskList[3] = task("Rent", "1", new Date(2020, 6, 30), "Pay this month's rent to the landlord");

const list = document.getElementById("list");
var flag = 0;

var projects = ["P", "W"];

function display(){
    for (var i = 0; i < task.length; i++){
        if ((taskList[i].taskProject == flag) || (flag == 0)){
            var element = document.createElement("div");
            element.classList.add("d-flex", "list", "label");
            var taskName = document.createElement("div");
            taskName.classList.add("mr-auto");
            taskName.innerHTML = taskList[i].taskName + " (" + projects[Number(taskList[i].taskProject) - 1] + ")";
            var taskDeadline = document.createElement("div");
            taskDeadline.innerHTML = taskList[i].taskDeadline.toDateString();
            element.appendChild(taskName);
            element.appendChild(taskDeadline);
            list.appendChild(element);
            var element1 = document.createElement("div");
            element1.classList.add("desc", "mb-5", "text-justify" ,"list");
            element1.innerHTML = taskList[i].taskDescription;
            list.appendChild(element1);
        }
    }
}

function clear(){
    list.innerHTML = "";
}
display();

var menu = document.getElementById("sel1");
menu.addEventListener("change", () => {
    switch (menu.value){
        case "0":
            flag = 0;
            clear();
            display();
            break;
        case "1":
            flag = 1;
            clear();
            display();
            break;
        case "2":
            flag = 2;
            clear();
            display();
            break;
    }
});