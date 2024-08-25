
// //----Promise.all

// const promise1=Promise.resolve("Promise 1 resolved")
// const promise2=Promise.resolve("Promise 2 resolved")

// Promise.all([promise1,promise2]).then((result   )=>{
//     console.log(result);
// }).catch((err)=>console.log(err));


//----Promise.race

const promise3=Promise.resolve("Promise 1 resolved");
const promise4=Promise.reject(new Error("Promise 2 resolved"));

Promise.race([promise3,promise4]).then((result   )=>{
    console.log(result);
}).catch((err)=>console.log(err));