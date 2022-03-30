const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

//connect to server
app.listen(3000, function() {
    console.log('listening on 3000')
  })

// connect to mongoDB
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'testMongoDB';
let db

MongoClient.connect(url).then(client => {
    db = client.db(dbName);
    console.log(`Connected MongoDB: ${url}`);
    console.log(`Database: ${dbName}`);
}).catch(console.error);

//body parser . get parameter's send by client
app.use(bodyParser.urlencoded({ extended: true }))

// routage
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });

app.post('/quotes', (req, res) => {
    console.log(req.body)
  });
