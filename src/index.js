
const http = require('http');
const {phone} = require ('phone');
const express = require('express');
const { json, get } = require('express/lib/response');
const { stringify } = require('querystring');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { send } = require('process');
const app = express()
const port = 5000


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
app.get('/', (req, res) => 
{
    res.status(200).send("<html><body>HOME </body></html>");    
    res.end();
});


app.get('/detail', (req, res) => 
{
    res.setHeader("Content-Type","application/json")
    res.status(200).send(JSON.stringify({appname: "holanode",version: "1.0.0",}));    
    res.end();
});

app.get('/info', (req, res) => 
{
    res.status(200).send("INFO");    
    res.end();
});

app.get('/phone', (req, res) => {

    
    try {
        const query = req.query;   

        const {value, country} = query;
       
        const result = phone(query.value, query.country.toUpperCase());
        res.status(200).send(JSON.stringify({result}));
    } catch (e) {
        res.status(400).send(e.message)
    }

});

app.use((req,res) =>{
    res.status(404).send('NOT FOUND');
})








// const server = http.createServer(function (req, res) {
//     console.log(req.url);
    
//     const urlData = url.parse(req.url, true);
//     const path = urlData.pathname;
//     const query = urlData.query;
//     console.log('path: ',path);
//     console.log ('query: ',query);

//     switch(path){
//         case '/':
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write("<html><body>HOME </body></html>");
//             break
//         case '/info':
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write("<html><body>INFO </body></html>");
//             break
//         case '/detail':
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write("<html><body>DETAIL </body></html>");
//             break
//         case '/phone':  
//         try {
//             const result = phone(query.value, query.country.toUpperCase());
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.write(JSON.stringify(result));
//         } catch (e) {
//             res.writeHead(400, { "Content-Type": "text/html" });
//             res.write(e.message);
//         }
//         break;


//         default:
//         res.writeHead(404, { "Content-Type": "text/html" }); 
//         res.write("<html><body>NOT FOUND</body></html>");
//     }

    


//   res.end();
// });

// console.log("Adition ",operations.addition(2,3));
// console.log("multiplication ", multiplication(2, 3));


// app.listen(5000);




