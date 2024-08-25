//----Creating array using array constructor 

const emptyarr = []

const emptyarr2 = new Array();
const sizedefinedarr = new Array(5);

const arr = new Array(1, 23, 54, 6356, 45);
//accessing the last ele of array
const lastele = arr[arr.length - 1];


const mixedarr = new Array(123, "arfe", {}, [], false);

//----use of array.of()

const arr2 = Array.of('Apple', 123, true);

//----Use of Array.from()

const orginalarr = [1, 2, 3];
const clonedarr = Array.from(orginalarr);

//creating array from array like object 

const obj = { 0: 123, 1: "hello", 2: true, length: 3 }
const conv_arr = Array.from(obj);

//----push(), unshift(), pop(), shift()

//push()

const fruits = ['apple', 'banana'];
const newfruits = fruits.push('cherry')

//unshift()

const fruits2 = ['apple', 'banana'];
const newfruits2 = fruits2.unshift('cherry')

//same as push and unshift but to remove from starting and ending pop and shift()

//----.length property
//this is not a function it is a property so no parameters

const color = ['red', 'blue', 'green', 'yellow', 'orange'];
const colorlength = color.length;

//Modifying length
color.length = 3;
console.log(color);


//----Loops same as in other language

//----Foreach() loop
//we can use only 1 argument also and any argument and assign value to it
const numbers=[1,2,3,4,5,6,7,8]
numbers.forEach(function(element,index,array){
    // console.log("Element ",element);
    // console.log("Index ",element);
    // console.log("Array ",array);
    // console.log(f);
})


//----map()

const numbers2=[1,2,3,4,5]
const newnumarr=numbers2.map(function(ele,idx,arr){
    return ele*ele;
})
console.log(newnumarr);

//----filter()
//Just used to filter out 

const val=[0,1,"num","@",null,undefined,"red"];
const boolval=val.filter(function(ele){   //returns all true value from the array val
    return Boolean(ele)
})
console.log(boolval);


//----reduce()


//sum of ele in array
const num2=[1,2,3,4,5]
const sum=num2.reduce(function(acc,ele){  //used to return single output value
    return acc+ele;
},0)  //use of 0 is to initialize accumalator acc 

//finding max
const num=[1,2,3,43,5,6,7,8]
const max=num.reduce(function(acc,ele){
    if(ele>acc){
        return ele;
    }else{
        return acc;
    }
},0)

//frequency of obj
const color2 = ['red', 'blue', 'green', 'blue', 'red','blue'];
const freqcol=color2.reduce(function(acc,ele){
    if(acc[ele]){
         acc[ele]+=1;}
    else{
        acc[ele]=1;
    }
    return acc;
},{})








