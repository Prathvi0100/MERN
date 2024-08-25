

document.getElementById("itemList").addEventListener("click",function(event){
    const clickedEl=event.target;
    console.log((clickedEl.tagName));
    if(clickedEl.tagName==="LI"){
        console.log(clickedEl.getAttribute("data-item"));
    }
});

//----Multiple event Listner

const buttonEl=document.getElementById("actionButton");
//single click
buttonEl.addEventListener("click",function(e){
    console.log("Btn was clicked");
});


//double click
buttonEl.addEventListener("dblclick",function(){
    console.log("Btn was dbl clicked");
});


//mouseEnter
buttonEl.addEventListener("mouseenter",function(){
    console.log("MouseEnter");
});

//mouse Leave
buttonEl.addEventListener("mouseleave",function(){
    console.log("MouseLeave");
});