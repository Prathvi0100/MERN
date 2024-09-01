const fs = require('fs')

//! Read a file

//!==== Synchronous

// const content=fs.readFileSync("sample.txt")  // it returns some buffer codes
// console.log(content);

// const debuffer=fs.readFileSync("sample.txt");
// const content=debuffer.toString();
// console.log(content);

//!==== Asynchronous

// fs.readFile("./sampl.txt", "utf-8", (err, content) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     } else {
//         console.log(content);
//     }
// })

//! Write a file

// fs.writeFile("new.txt", " New txt added", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log("New file created");
//         return;
//     }
// })


//! Append the content

// fs.appendFile("new.txt"," Somethings never change",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("updated");
//     }
// })


//! Checking the file's existance

// fs.access('./new.txt',fs.constants.F_OK,(err)=>{
//     if(err){
//         console.log("Doesn't exists");
//     }else{
//         console.log("Exists");
//     }
// })


//! Delete a file

// fs.unlink("new.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file deleted");
//     }
// })

//! ==== Using promises

const fs2=require("fs/promises");
const readfile=async ()=>{
    try {
        const content=await fs2.readFile("sample.txt","utf-8"); // if we don't use await here promise always shows pending
        console.log(content);
    } catch (error) {
        console.log(error);
    }
}
readfile();

