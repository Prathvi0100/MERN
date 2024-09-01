const path=require('path')

//! path.basename()

// const filename=path.basename("/user/test/file.txt")
// console.log(filename);

//! path.dirname()

// const filename=path.dirname("/user/test/file.txt")
// console.log(filename);

//! path.extname()

// const filename=path.extname("/user/test/file.txt")
// console.log(filename);

//! path.join()

// const joinedpath=path.join("user","test","file.txt")
// console.log(joinedpath);

//! path.resolve()

// const absolute=path.resolve("user","test","file.txt")
// console.log(absolute);

//! path.isAbsolute

const isAbs=path.isAbsolute("user/test") // if "/" behind user is not given it returns false
console.log(isAbs);

//! path.parse()

const paredpath=path.parse("/user/test/file.txt")
console.log(paredpath);
console.log(paredpath.dir);
console.log(paredpath.name);
console.log(paredpath.ext);
