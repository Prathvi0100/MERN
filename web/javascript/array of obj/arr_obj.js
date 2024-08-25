//--------
//----the concept of objects being passed by reference 


//Modifying object through a different reference

const person1 = { name: "Alice", age: 20 };

const person2 = person1;
console.log("person1 ", person1);
console.log("person2 ", person2);
//modfying age
person2.age = 30;

person1.name = "Bob";
console.log("person2 ", person2);
console.log("person1 ", person1);

//Passing object to a function 

const incrementage = (personobj) => {
    personobj.age += 1;
};

//person obj
const ben = { name: "Ben", age: 40 };
console.log("Before", ben);
incrementage(ben);
console.log("After", ben);


//----Objects in arrays

const student = [
    { name: "Alice", age: 20, id: 43 },
    { name: "Bob", age: 30, id: 45 },
    { name: "Charlie", age: 40, id: 46 },
]
//Access of student
console.log("Student name: ", student[2].name);

//Add new student
const addnewstud = (name, age, id) => {
    // const newstudent = { name, age, id };
    // //push student
    // student.push(newstudent); 
    // OR 
    student.push({name,age,id});  
};
addnewstud("Dassie", 24, 30);
console.log(student);

//Updating id

const Updatingid = (name, new_id) => {
    const studentfound = student.find((student) => {
        return student.name === name;
    });
    if (studentfound) {
        studentfound.id = new_id;
    }
    else {
        console.log("Student not found");
    }
}

Updatingid("Charlie", 47);


//----Arrays in object

const todolist = {
    title: "My todo list",
    task: [
        { id: 1, description: "Go to Gym", Completed: true },
        { id: 2, description: "Buy milk", Completed: false },
        { id: 3, description: "Call Mom", Completed: true }
    ]
}

console.log(todolist);

//add new task

const addnewtask = (description) => {
    const newtask = {
        id: todolist.task.length+1,
        description,               //if property and its value are same then we can give only once as description
        Completed: false
    }
    todolist.task.push(newtask);
};

addnewtask("Have a shower");
console.log(todolist);

//upgrading completed value

const upgradcompletedval=(description)=>{
    const descriptionfound=todolist.task.find((task)=>{
        return task.description===description;
    })
    if(descriptionfound){
        descriptionfound.Completed=true;
    }else{
        console.log("Task not found");
    }
};

upgradcompletedval("Buy milk");
