
function collectdata(){
    const languageproficiencyEls=document.getElementsByName("LanguageProficiency");
    console.log(languageproficiencyEls);
    
    for(let i=0;i<languageproficiencyEls.length;i++){
        if(languageproficiencyEls[i].checked){
            console.log(`Selected element is ${languageproficiencyEls[i].value}`);
        }
    }
    
}


//----Parent nodes and elements

const parentEL=document.getElementById("parent");
console.log(parentEL);
console.log(parentEL.parentNode); //can be used to access the top node of parent

//Access the child elements

const firstchildEl=parentEL.firstChild;
const lastchildEl=parentEL.lastChild;
console.log(firstchildEl);
console.log(lastchildEl);

const firstchildelement=parentEL.firstElementChild;
console.log(firstchildelement); //same goes for lastelementchild    

const usercard=document.getElementById("usercard");
const userId=usercard.getAttribute("data-user-id");
const userRole=usercard.getAttribute("data-user-role");
console.log(userRole);
//use console log for abv 3


//Modifying data attributes
usercard.setAttribute("data-user-role","super-admin");
usercard.setAttribute("data-user-position","Engineer");
console.log(usercard);

//using the dataset
const userRole2=usercard.dataset.userRole;
const userId2=usercard.dataset.userId;
console.log(userRole2);


//----Use of parentNode in DOM traversal 
//Step 1: Select a list item using data attribute
const SelectedItem=document.querySelector('[data-item="Fruit"]');

//Step 2: Navigate to parent <ul> element
const parentlistEL=SelectedItem.parentNode;

//Step 3: Navigate to grandparent
const grandParentEL=parentlistEL.parentNode;

//Step 4:Navigate to greatGrandparent
const greatGrandparentEl=grandParentEL.parentNode;
console.log(greatGrandparentEl);
//use console.log to check the values you obtain from the abv variables

//----childnode traversal is also the samething as parent node
// we can traverse through the childnodes by useing indexing if there are multiple child for a single parent

//Step 1: Select a list item using data attribute
const outerDivEl=document.getElementById("outerdiv")

//Step 2: Navigate to parent <ul> element
const firstchildnodeEl=outerDivEl.childNodes[3]; //like this we can do indexing

//Step 3: Navigate to grandparent
const firstChildofinnerDivEL=firstchildnodeEl.childNodes;;
console.log(firstchildnodeEl);

//----previoussibling 
const button1=document.getElementById("button1");
const button2=document.getElementById("button2");

const text1=button1.previousSibling;
const text2=button2.previousSibling;

if(text1.nodeType===3){
    text1.textContent="Text 1 is updated";
}

if(text2.nodeType===3){
    text2.textContent="Text 2 is changed";
}


//----nextsibling

const containerEl=document.getElementById("container")
const buttonEl=document.querySelectorAll("#Buttons");
let nextELe;
buttonEl.forEach((Buttons)=>{
    nextEle=Buttons.nextsibling;
    // if(nextele===3){
    //     nextELe.textContent="NewTex1"
    // }
    // console.log(nextEle);
})


//----nextelementsibling and previouselementsibling returns only the elements not comment texts

//----textContent, innerHTML and innerText

const blogtitle=document.getElementById("title");
blogtitle.textContent="New Blog Post";
// blogtitle.textContent="<h4>New Blog Post</h4>";  //We cannot render the element tag by text content but with innerHTML we can
blogtitle.style.background="red";
blogtitle.style.color="white";

//innerHTMl

const paragraphEl=document.getElementById("paragraph");
paragraphEl.innerHTML+="<br> <b>Updated paragraph using innerHTML</b>"

//innerText

const firstcommentEl=document.querySelector(".commentText");
console.log(firstcommentEl);
//updated the comment from span
firstcommentEl.innerText="Upload first comment" //We cannot render the element tag by text content but with innerHTML we can
