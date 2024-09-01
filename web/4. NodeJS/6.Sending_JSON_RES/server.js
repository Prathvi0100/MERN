//!1. Import required module

const http = require("http");
const url = require("url");
//!2. Define the handler

const requesthandler = (req, res) => {
    
    // pass the url
    const passedUrl=url.parse(req.url,true);
    // console.log(req.method);   //To check which method of http is being used

    const data={
        id:123,
        name:"Raman",
        job: "SDE"
    }
    //! Set the response header to application/json
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(data));
};

//!3. Create a server    

const server = http.createServer(requesthandler);

//!4. Start the server

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Ther server is running on http://localhost:${PORT}`);
})