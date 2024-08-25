


async function waitAndRun(value){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(value)
        }, 3000);
    })
}

const getProcessedValue=async()=>{
    const result=await waitAndRun(2);
    console.log(result);
}
// getProcessedValue()


//Fetching multiple values

const getName= async() => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Alice")
        }, 1000);
    })
};

const getAge=async()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(30)
        }, 1000);
    })
};

async function getUserDetails(){
    const result=await Promise.all([getName(),getAge()])
    console.log(result);
}

getUserDetails();