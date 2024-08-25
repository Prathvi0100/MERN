//----using set attribute to change the photo
const productimage1 = document.getElementById("product1").querySelector("img");
// console.log(productimage1);

productimage1.setAttribute("src", "https://pbs.twimg.com/media/Fu0lUa8WwBkrWQb?format=jpg&name=4096x4096");

productimage1.setAttribute("alt","New Image updated");

//changing product link 
const productlinkEl=document.getElementById("product1").querySelector("a");
productlinkEl.setAttribute("href","new.html")
console.log(productimage1);

//Get all Images

const allimages=document.getElementById("imageGallery").querySelectorAll("img")
// console.log(allimages);

let Baizhuimg=[]

allimages.forEach((img)=>{
    // const author=img.getAttribute("src");  //gives the attribute entered inside
    const getauthor=img.getAttribute("data-author");
    console.log(getauthor);
    if(getauthor==="Baizhu"){
        Baizhuimg.push(img) 
    }
    
});
console.log(Baizhuimg);
Baizhuimg.forEach((img)=> console.log(img))

allimages.forEach((img)=> {
    if(!Baizhuimg.includes(img)){
        img.style.display="none";
    }
});
    
