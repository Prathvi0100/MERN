//
console.log('This is my 1st JavaScript code')

//-------------

//==Single quotes, Double quotes and Constructor  (String)

//-------------

//Single Quotes

const singlequotestring = 'This is a single quote string';

//Double Quotes

const doublequotestring = "This is a double quote string";

//Constructor

const stringconstructor = new String('This is a string constructor'); //used in oop's


//-------------

//==Template literals

//-------------

//----Basic usage 

const greetings = 'Hello world'

//----string interpolation

const username = 'Alice';

const welcomemessage = `Hello,${username}! Welcome to our website `;

//----Use of escape characters

const quote = 'He said, "Hello World!!"';

//----Multiline

const multiline = "Line1\nLine2\ttabbed";

//----Use of backslash

const backslash = `c:\\Program files\\app`;

//----unicode characters

const heart = "I \u2764 JavaScript";

//----Escape Sequence for a Dollar Sign and Curly Braces in Template Literals

const metastring = 'The syntax for variable is ${heart}';

//----String concatenation

const str1 = "Hello";
const str2 = "World!";

// console.log(str1+str2);
const concatenated = str1.concat(" ", str2);

// console.log(concatenated);

const concatenated2 = `This msg ${str1} is written in the earth named ${str2}`;
// console.log(concatenated2);

//----Converting to uppercase or lowercase

//----To uppercase

const localcasestr = "Hello, World";
const result1 = localcasestr.toLocaleUpperCase();
const result2 = localcasestr.toLocaleLowerCase();
// console.log(result1);
// console.log(result2);

const Username = 'Ivaan';
// console.log(Username.length);

//----Slicing operations

const text = "QWERTYUIOP";
console.log(text.slice(6));

//----Split operation

const mysentence = "Hello,Minaa";
const words = mysentence.split('n', 2) //This number inside as parameters make sure how many words to be displayed after splitting

const fruits = "apple:banana;mango";
const mixedfruit = fruits.split(/[:;]/, 2);  //Here those colon and semicolon are the point where splitting should happen

const name = "Vikrant";
const disname = name.split("");

//----Use of indexof()

const sentence = "Hello,world";
const indexed = sentence.indexOf("d")

//----Use of trim()

const userinput = "   hello@gmail.com     ";
const trimmedemail = userinput.trim();

const stringwithbreaks = '\n \t theHindu';
const cleanstring = stringwithbreaks.trim()


//----Replace()

const oldtext = "This is old movie";
const newtext = oldtext.replace("old", 'new')

const oldtext2 = "old versioned old movies";
const newtext2 = oldtext2.replace(/old/g, "new");


//----lastindexof()

const sen = "apple banana, orange, apple";
const result3 = sen.lastIndexOf("apple")
const result4 = sen.lastIndexOf("apple", 6)  //Used to check whether the word exist after the index 6

//----includes()

const mytext = "I have an apple";
const result5 = mytext.includes("apple")
const result6 = mytext.includes("apple", 10) //Used to check whether the word exist after the index 10


//----String conversion

const num = 43;
const strNum = String(num)
console.log(typeof (strNum));  //console.log(typeof(strNum)+strNum); gives string43

//we can even convert boolean to string

const arr = [1, 2, 3, 4, 5]
console.log(typeof arr);
console.log(typeof String(arr));


const obj = { name: "Alice", age: 25, roll: 123 }
console.log(typeof obj);
console.log(typeof String(obj));

const Null = null;
console.log(typeof Null);
console.log(typeof String(Null));

//----Converting number to string

const pixelvalstr = "43px";
console.log(typeof pixelvalstr);
console.log(typeof parseInt(pixelvalstr));

const pixelvalstr2 = "42.5px"
console.log(typeof pixelvalstr2);
console.log(typeof parseFloat(pixelvalstr2));


//We can also use Number() function to convert to number

//----Conversion to Boolean

const userinput2 = "Thomas";
const convertedvar = Boolean(userinput2);
const convertedvar2 = !userinput2;

const userinput3 = "";
const convertedvar3 = !!userinput3;


//----Conversion of decimal to binary or hexadecimal

const decimalnum = 10;
const binarynum = decimalnum.toString(2);
const hexadecimal = decimalnum.toString(16);

//We can even convert bigint to string using this function


//----toFixed() used to round off and parameter is given to specify the number of places to be round off

const num1 = 49.697
console.log(num1.toFixed(2));

//----Exponent()

const avagodranum = 6.02214076e23
console.log(avagodranum.toExponential());


//----Converting user input to integer

const userinput4 = "123";
const convertedvar4 = parseInt(userinput4, 10);

//Converting binary data from a Sensor
const sensordata = 1011;
const extracteddata4 = parseInt(sensordata, 2);


//----Use of isNan()

const inputGPA = "3.9";
const parsedGPA = parseFloat(inputGPA);

if (isNaN(parsedGPA)) {
    console.log("Invalid GPA");
} else {
    console.log(`Your GPA is ${parsedGPA}`);
}


const initialSaving = "1000";
const withdrawl = "hello";
const newsaving = parseFloat(initialSaving) - parseFloat(withdrawl);
if (isNaN(newsaving)) {
    console.log("Invalid Transaction");
} else {
    console.log(`Your new Saving is ${newsaving}`);
}


const radius = "10";
const radius2 = parseFloat(radius);
const area = Math.PI * Math.pow(radius2, 2);
if (isNaN(area)) {
    console.log("Invalid radius");
} else {
    console.log(`Your area is ${area}`);
}

