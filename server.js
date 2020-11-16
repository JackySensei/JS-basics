// import http module
const http = require('http');

const webServer = http.createServer((request, response)=>{
    console.log("Incoming request");
    const note = {
        title: "My sample Note",
        text: "My super important text"
    }

    // Wir teilen mit was für ein Format unsere zu übermittelnden Daten haben
    response.setHeader("Content-Type","application/json");

    // Wir schreiben unsere Daten die wir an den CLient übermitteln in unsere Response 
    response.write(JSON.stringify(note));

    // Wir teilen dem Client mit ob unsere Aktion/ Anfrage erfolgreich bearbeitet werden konnte
    response.statusCode = 200;

    // Wir beenden die ANfrage uns senden unsere Antwort an den Client zurück
    response.end();
});

webServer.listen(3001);