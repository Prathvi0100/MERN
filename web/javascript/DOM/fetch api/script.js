const URL="https://cat-fact.herokuapp.com/facts"

const btnEl=document.querySelector(".btn");
const p=document.getElementsByClassName("fact")[0];

const getFact= async ()=>{
    console.log("Getting data...");
    let response= await fetch(URL);
    console.log(response);
    let data=await response.json();
    // console.log(data[3].text);
    p.innerText=data[3].text;
}
btnEl.addEventListener("click",getFact)
