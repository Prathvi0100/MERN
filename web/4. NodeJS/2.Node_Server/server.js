//1. Import required module

const http=require("http");
// console.log(http);

//2. Define the handler

const requesthandler=(req,res)=>{   
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("Hello Guys. This is my first NodeJS server");
};

//3. Create a server    

const server=http.createServer(requesthandler);

//4. Start the server

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Ther server is running on http://localhost:${PORT}`);
})