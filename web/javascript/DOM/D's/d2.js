x=document.getElementsByClassName("fiction");
console.log(x);

nonfictionEl=document.getElementById("nonfictionsection");
console.log(nonfictionEl);

//----Query selector 
//inside query selector we can use class or id or attribu2te name to access the element
// we can also give 2 parameter as attribute and class name to shortlis
// firstproduct=document.querySelector("[data-rating='4.8']");//we can use like this also line 24 or
firstproduct=document.querySelector(".product-price");
//only 1st class or id will be considered not all


//----Query selectorall

allfirstproductEl=document.querySelectorAll('.product-name');

allfirstproductEl.forEach((element) => {
    console.log(element.innerHTML);
}); 

//allfirstproductEl is not an array so we cannot use map property on it as it can be only used on array
//but we can use foreach on it as it is iterable

//----child and children nodes

//from abv

fictionsecEl=document.querySelector("#fictionsection");
console.log(fictionsecEl.childNodes);// returns all nodes inside the id
fictionsecEl.childNodes.forEach((node)=>console.log(node))//gives which node are there in the given id
fictionsecEl.childNodes.forEach((node)=>console.log(node.nodeType))//gives node type
// console.log(fictionsecEl.children); //gives all the elements inside the node nothing other than them
