//----Creating obj

const book={
    'title':"Harry Potter",
    author:"J.K.Rowling",
    price:599,
    available:true
}

//We can access the value from object using dot notation and sq bracket notation

//dot notation
console.log(book.title);
console.log(book.author);

//bracket notation
console.log(book['price']);
console.log(book["available"]);

const person={
    "first name":'Ivaan',
    'age':24
}

//Here we can only use bracket notation as dot notation can't intake "first name" due to white space

//use console to verify
console.log(person["first name"]);

//Using expressions

const task={
    description:'Finish Homework',
    iscompleted:true
}
const query="iscom"+"pleted";
console.log(task[query]);

//Adding properties to object

const book2={
    'title':"Harry Potter",
    author:"J.K.Rowling",
    price:599,
    available:true
}

//nested obj
book2.pages=600;
console.log(book2);
book2.address={
    city:'San fransisco',
    state:'California'
}
console.log(book2);

