let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoDb = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db).then(() => {
  console.log('Database connected');
}, error => {
  console.log("Darabase Error", error);
});

const platRoute = require('./routes/plat.route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extend: false
}));
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/frontend-E-kaly')));

// API root 
app.use('/api', platRoute)

// PORT 
const port = 3000;

app.listen(port, () => {
      console.log('listening on port', port)
});

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});
 
// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});
 
app.get('*', (req, res) => {
  console.log("xxx:", __dirname);
  res.sendFile(path.join(__dirname, 'dist/frontend-E-kaly/index.html'));
});
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// const express = require('express');
// const bodyParser= require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// const app = express();

// //connect to server
// app.listen(3000, function() {
//     console.log('listening on 3000')
//   })

// // connect to mongoDB
// const url = 'mongodb://127.0.0.1:27017';
// const dbName = 'testMongoDB';
// let db
// let quotesCollection

// MongoClient.connect(url).then(client => {
//     db = client.db(dbName);
//     quotesCollection = db.collection('quotes');
//     console.log(`Connected MongoDB: ${url}`);
//     console.log(`Database: ${dbName}`);

//     // app.use(/* */);
//     // app.get(/* */);
//     // app.post(/* */);
//     // app.listen(/* */);
// }).catch(console.error);

// //body parser . get parameter's send by client
// app.use(bodyParser.urlencoded({ extended: true }))

// // routage
// app.get('/', function(req, res) {
//   const cursor = db.collection('quotes').find().toArray().then(result => {
//     console.log("----------------------",result);
//   });
//   // console.log(cursor);
//     res.sendFile(__dirname + '/index.html');
//   });

// app.post('/quotes', (req, res) => {
//     quotesCollection.insertOne(req.body).then(result => {
//       res.redirect("/")
//     }).catch(error => console.error(error));
//   });
