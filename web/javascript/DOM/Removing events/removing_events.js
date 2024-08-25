
function showAlert(){
    console.log("Hello");
}

// const showalert=document.getElementById("showAlert");
// showalert.addEventListener("click",showAlert)

// document.getElementById("removeAlert").addEventListener("click",()=>{
//     showalert.removeEventListener("click",function(){
//         console.log("Hello");})
// }
// );

const alertbutton=document.getElementById("showAlert");

alertbutton.addEventListener("click",showAlert);

function removeAlert(){
    alertbutton.removeEventListener("click",showAlert);
}

const removebutton=document.getElementById("removeAlert");

removebutton.addEventListener("click",removeAlert)