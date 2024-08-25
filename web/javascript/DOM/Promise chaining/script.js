

function step1Promise(){
    return new Promise((resolve)=>{
        resolve("Step 1 Completed");
    })
}

function step2Promise(){
    return new Promise((resolve)=>{
        resolve("Step 2 Completed");
    })
}

function step3Promise(){
    return new Promise((resolve)=>{
        resolve("Step 3 Completed");
    })
}


step1Promise().then((resultFromP1)=>{
    console.log(resultFromP1);
    return step2Promise();  
}).then((resultFromP2)=>{
    console.log(resultFromP2);
    return step3Promise();
}).then((resultFromP3)=>{
    console.log(resultFromP3);
}).catch((err)=>console.log("Error ",err));