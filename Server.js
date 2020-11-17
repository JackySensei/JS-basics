const http= require('http');


const webServer = http.createServer((request, response)=>{
    console.log("Incoming request");
    const note = {
        title:"sample Note",
        text: "Super Secret Text"
    }
    response.setHeader("Content-Type","application/json");
    response.write(JSON.stringify(note));
    response.statusCode= 200;
    response.end();

});

webServer.listen(3001);
