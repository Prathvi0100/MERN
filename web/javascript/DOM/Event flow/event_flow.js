

// document.getElementById("parentDiv").addEventListener("click",function(event){
//     alert("parentDiv clicked! Event Phase "+ event.eventPhase);
// },true);


// document.getElementById("list").addEventListener("click",function(event){
//     alert("List clicked! Event Phase "+ event.eventPhase);
// },true);


// document.getElementById("item1").addEventListener("click",function(event){
//     alert("item1 clicked! Event Phase "+ event.eventPhase);
// },true);


// document.getElementById("item2").addEventListener("click",function(event){
//     alert("item2 clicked! Event Phase "+ event.eventPhase);
// },true);

//----removing event flow 

document.getElementById("parentDiv").addEventListener("click",function(event){
    alert("parentDiv clicked! Event Phase "+ event.eventPhase);
},false);

document.getElementById("list").addEventListener("click",function(event){
    alert("list clicked! Event Phase "+ event.eventPhase);
    event.stopPropagation();
},false);


document.getElementById("item1").addEventListener("click",function(event){
    alert("item1 clicked! Event Phase "+ event.eventPhase);
    event.stopPropagation();
},true);


document.getElementById("item2").addEventListener("click",function(event){
    alert("item2 clicked! Event Phase "+ event.eventPhase);
    event.stopPropagation();
},true);

