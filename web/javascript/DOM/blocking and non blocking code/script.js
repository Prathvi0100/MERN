
//----Blocking code

console.log("Starting Business operations");

// for(let i=0;i<1e9;i++){
//     // console.log(i);
// }

console.log("Finishing Business operations");


//----Non blocking code


console.log("Starting Business operations");

setInterval(()=>{
    console.log("Execution delayed");
},4000);

console.log("Finishing Business operations");
