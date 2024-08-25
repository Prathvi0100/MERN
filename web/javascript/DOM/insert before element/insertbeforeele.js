function addstudent(name,grade){
    const studentEl=document.createElement("div");
    studentEl.className="student";
    const studentTextNode=document.createTextNode(`${name}:${grade}`);
    studentEl.appendChild(studentTextNode);
    const containerEl=document.getElementById("studentList");
    let beforeNode=null;
    for(const child of containerEl.children){
        const childGrade=parseInt(child.textContent.split(":")[1]);
        if(grade<childGrade){
            beforeNode=child;
            break;
        }
    }
    containerEl.insertBefore(studentEl,beforeNode);
    console.log(containerEl.children);
}

addstudent("Emma",90);
addstudent("Ben",43);
addstudent("Alice",70);
addstudent("Bob",80);


//----replacing elements

function replaceArticle(articleId,newContent){
    const exisitingArticle=document.getElementById(articleId);
    const newArticle=document.createElement("div");
    newArticle.className="article";
    newArticle.id=articleId;
    const newTextNode=document.createTextNode(newContent);
    newArticle.appendChild(newTextNode);
    exisitingArticle.parentNode.replaceChild(newArticle,exisitingArticle);
}

replaceArticle("article1","Some content1");
replaceArticle("article2","Some content2");
replaceArticle("article3","Some content3");


//----removing child

function addFruit(name){
    const ulEl=document.getElementById("fruitList");
    const li=document.createElement("li");
    li.className="fruit";
    li.textContent=name;
    ulEl.appendChild(li);
    console.log(li);
    console.log(ulEl);
}

addFruit("Apple");
addFruit("Banana");
addFruit("Cherry");

//function to remove child

function removeFruit(name){
    const ulEl=document.getElementById("fruitList");
    let fruitfound=false;
    for(const li of ulEl.children){
        if(li.textContent=== name){
            fruitfound=true;
            ulEl.removeChild(li);
            break;
        }
    }
    document.getElementById("message").textContent=fruitfound?`${name} is removed`:`${name} is not found`;
}
removeFruit("Apple");
removeFruit("Yogurt");

//----Using Class list

const p=document.getElementById("textElement");
// p.classList.add("highlight","bold","italic");  // can be written like this also
p.classList.add("highlight");
p.classList.add("bold");
p.classList.add("italic");
console.log(p);

function addClass(){
    p.classList.add("highlight","bold","italic"); 
}

function removeClass(){
    p.classList.remove("highlight","bold","italic");
}

function toggleClass(){
    p.classList.remove("highlight");//only one class can be selected to toggle, here highlight is choosen
}


const isTrue=p.classList.contains("italic");
console.log(isTrue);
console.log(p);

function checkContains(){
    alert(p.classList.contains("highlight") ? 'Contains Highlight': "Does not contain highlight");
}


function replaceClass(){
    if(p.classList.contains('italic')){
        p.classList.replace('italic','red-text');
    }else{
        p.classList.add('red-text');
    }
}

function listItem(){
    alert("The first class is " +p.classList.item(0))
    // console.log(p.classList.item(0));
}

function getValue(){
    console.log(p.classList.value);  
}
