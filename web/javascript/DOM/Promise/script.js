//With callback

//creation

// function simpleCb1(success,cb){
//     console.log('Cb function called');
//     if(success){
//         cb(null,'The operation was successful')
//     }else{
//         cb('The operation failed',null)
//     }
// };

// //Usage
// simpleCb1(true,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
//     console.log("This always log regardless of the operation");
// });


//Using promise

//Example 1


//creation

// const simplePromise=new Promise((resolve,reject)=>{
//     const success=false;
//     if(success){
//         resolve('The operation was successful');
//     }else{
//         reject('The operation failed');
//     }
// });


// //usage

// simplePromise.then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("This always log regardless of the operation");
// });


//Example 2, callback

// function isEvenNum(Number,cb){
//     if(Number%2===0){
//         cb(null,`The number ${Number} is even`)
//     }else{
//         cb(new Error(`the number ${Number} is not even`))
//     }
// }; 


// //usage

// isEvenNum(5,(err,result)=>{
//     if(err){
//         console.log(err.message);
//     }else{
//         console.log((result));
//     }
// });

//Using promise

//creation
function isEvenNumPromise(number){
    return new Promise((resolve,reject)=>{
        if(number%2===0){
            resolve(`The number ${number} is even`)
        }else{
            reject(`The number ${number} is not even`)
        }
    })
};

//call the func

isEvenNumPromise(4)
.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});