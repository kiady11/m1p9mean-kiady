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
let quotesCollection

MongoClient.connect(url).then(client => {
    db = client.db(dbName);
    quotesCollection = db.collection('quotes');
    console.log(`Connected MongoDB: ${url}`);
    console.log(`Database: ${dbName}`);

    // app.use(/* */);
    // app.get(/* */);
    // app.post(/* */);
    // app.listen(/* */);
}).catch(console.error);

//body parser . get parameter's send by client
app.use(bodyParser.urlencoded({ extended: true }))

// routage
app.get('/', function(req, res) {
  const cursor = db.collection('quotes').find().toArray().then(result => {
    console.log("----------------------",result);
  });
  // console.log(cursor);
    res.sendFile(__dirname + '/index.html');
  });

app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body).then(result => {
      res.redirect("/")
    }).catch(error => console.error(error));
  });
