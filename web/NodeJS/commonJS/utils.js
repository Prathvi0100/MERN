//-----ways of exporting modules in cjs

//!Single function export

// const firstname="Alice";
// module.exports=firstname;

// const greet=(name)=>{
//     return `Hey ${name}`;  // if we console.log here in output after result undefined is observed 
// }
// module.exports=greet;
//! Object export

// module.exports={
//     add:function(a,b){
//         return a+b;
//     },
//     subtract:function(a,b){
//         return a-b;
//     }
// }

//! Named function export

module.exports.sayhi=(name)=>{
    return `Hello ${name}`;
}

//! using export shorthand

exports.sayhi=(name)=>{
    return `Hello ${name}`;
}
