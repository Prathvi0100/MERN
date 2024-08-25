//----To-Do list


function createtask(newtask){
    const taskEl=document.createElement("div");
    taskEl.className="task";
    const taskTextNodeEl=document.createTextNode(newtask);
    taskEl.appendChild(taskTextNodeEl);
    document.getElementById("container").appendChild(taskEl);
    console.log(taskTextNodeEl);
    console.log(taskEl);
}

createtask("Programming");
