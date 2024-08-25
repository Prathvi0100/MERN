//----Window object

// console.log(window.document);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.location);  //window.location.host gives the host value present in tab as link to the file Ex: 129.0.02.23.0.
// console.log(window.history);
// console.log(window.screen);
// console.log(window.alert("Hey")); //pops the msg
// console.log(window.confirm());
// console.log(window.prompt());
// window.open("https://aniwatchtv.to/monster-37?ref=search"); //opens the link in new tab

//----getting element by document.getElementById

const conferencetitleEl=document.getElementById("conferencetitle");
const conferencedateEl=document.getElementById("conferencedate");
const locationtitleEl=document.getElementById("locationtitle");
//so on

console.log(conferencedateEl);
console.log(conferencetitleEl.innerHTML);
