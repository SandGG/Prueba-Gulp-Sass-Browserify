const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

/* Esto funciona bien
app.get('/', (req, res) => {
    fs.readFile('otro.html',function (err, data){
        res.writeHead(200, {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        });
        res.write(data);
        res.end();
    });
})*/
app.listen(3000);

app.use('/static', express.static(__dirname + '/'));