//mouse events

// document.getElementById("Click_me").onclick=function onClickHandler(){
//     console.log("onClickHandler event is called");
// }
{
    //----Use of addEventListner()
    // document.getElementById("Click_me").addEventListener("click",function(){
    //     console.log(this);
    // })
    //also can be written as
    document.getElementById("Click_me").addEventListener("click", () => {
        // console.log(this); //we cannot use this keyword here when we use arrow operator
        console.log("onClickHandler event is called");
    })
}

document.getElementById("Double_Click_Me").ondblclick = function ondblClickHandler() {
    console.log("ondblClickHandler event is called");
}


document.getElementById("Hover").onmouseover = function onMouseOverHandler() {
    console.log("onMouseOverHandler event is called");
}


document.getElementById("Hover").onmouseout = function onMouseOutHandler() {
    console.log("onMouseOutHandler event is called");
}


//Keyboard events


document.getElementById("input").onkeydown = function onKeyDownHandler() {
    console.log("onKeyDownHandler event is called");
}


document.getElementById("input").onkeyup = function onKeyUpHandler() {
    console.log("onKeyUpHandler event is called");
}


document.getElementById("input").onkeypress = function onKeyPressHandler() {
    console.log("onKeyPressHandler event is called");
}


//form events

document.getElementById("form").onsubmit = function onSubmitHandler() {
    console.log("onSubmitHandler event is called");
}


document.getElementById("newinput").onfocus = function onFocusHandler() {
    console.log("onFocusHandler event is called");
}


document.getElementById("newinput").onblur = function onBlurHandler() {
    console.log("onBlurHandler event is called");
}


