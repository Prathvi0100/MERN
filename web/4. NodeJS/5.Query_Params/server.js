//!1. Import required module

const http = require("http");
const url = require("url");
//!2. Define the handler

const requesthandler = (req, res) => {
    
    // pass the url
    const passedUrl=url.parse(req.url,true);
    // console.log(req.method);   //To check which method of http is being used

    const pathname=passedUrl.pathname;
   
    //!Extract query
    const queryParameters=passedUrl.query;
    console.log(queryParameters);
    
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end(`Welcome`);
};

//!3. Create a server    

const server = http.createServer(requesthandler);

//!4. Start the server

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Ther server is running on http://localhost:${PORT}`);
})