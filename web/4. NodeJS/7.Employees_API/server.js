
const http = require("http");


//2. Define the handler
const employees = [
    { name: "Raman", id: 23 },
    { name: "Racheal", id: 24 }
];

const requesthandler = (req, res) => {
    const { method, url } = req;
    const parts = url.split("/");
    const Id = parts[2];
    // console.log(parts);   //if this line is running the the below if statement won't work

    //! Get all employees
    if (method === "GET" && url === "/employees") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(employees));
    }
    //! Get single employee by giving id in -   
    else if (method === "GET" && parts[1] === "employees" && Id) {
        const employee = employees.find((emp) => emp.id === parseInt(Id));
        if (employee) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(employee));
        } else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Not Found" }));
        }
    }

    //! Create new employee
    else if (method === "POST" && url === "/employees") {
        let body = '';
        req.on("data", (chunk) => {
            body += chunk;
        });
        
        // Send the response 
        req.on("end", () => {
            const newEmployee = JSON.parse(body);
            employees.push(newEmployee);
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify({newEmployee,employees}))
        })
    }
};

//3. Create a server    

const server = http.createServer(requesthandler);

//4. Start the server

const PORT = 2000;
server.listen(PORT, () => {
    console.log(`Ther server is running on http://localhost:${PORT}`);
})