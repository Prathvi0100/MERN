//!1. Import required module

const http = require("http");
const url = require("url");
//!2. Define the handler

const requesthandler = (req, res) => {
    
    // pass the url
    const parsedUrl=url.parse(req.url,true);
    // console.log(req.method);   //To check which method of http is being used

    const pathname=parsedUrl.pathname;
    console.log(pathname);
    
    //split pathname 
    const pathComponent=pathname.split("/").filter(Boolean);
    console.log(pathComponent);
    
    if(pathComponent[0]==="products" && pathComponent[1]){
        //!http://localhost:3000/(products/productId) **
        const productId=pathComponent[1];
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end(`Product ID ${productId}`);
    }
    else{
        const productId=pathComponent[1];
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end(`Not found`);
    }
};

//!3. Create a server    

const server = http.createServer(requesthandler);

//!4. Start the server

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Ther server is running on http://localhost:${PORT}`);
})