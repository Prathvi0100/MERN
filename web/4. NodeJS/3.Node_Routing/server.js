//!1. Import required module

const http = require("http");
const url = require("url");
//!2. Define the handler

const requesthandler = (req, res) => {
    
    // pass the url
    const parsedurl=url.parse(req.url,true);
    console.log(req.method);

    // Home route
    if(parsedurl.pathname==="/" && req.method==="GET"){
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("Hello Guys. This is my first NodeJS server");
    }

    //About route
    else if(parsedurl.pathname==="/about" && req.method==="GET"){
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("This is about page.");
    }

    else{
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("Not Found or Error occured or Invalid request");
    }
    
    
};

//!3. Create a server    

const server = http.createServer(requesthandler);

//!4. Start the server

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Ther server is running on http://localhost:${PORT}`);
})