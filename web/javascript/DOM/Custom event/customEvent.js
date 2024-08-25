const userNameEl=document.getElementById("username");
const submitButtonEL=document.getElementById("submitButton");

//Create a custom

const userNameSubmitted=new CustomEvent("userNameSubmitted",{
    bubbles:true,
    cancelable:true,
    detail:{text: ""}
});


document.addEventListener("userNameSubmitted",function(event){
    console.log(`Username is ${event.detail.text} has been submitted`);
});



submitButtonEL.addEventListener("click",function(){
    userNameSubmitted.detail.text=userNameEl.value;
    document.dispatchEvent(userNameSubmitted);
})