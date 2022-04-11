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
const userRoute = require('./routes/user.route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extend: false
}));
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/frontend-E-kaly')));

// API root 
app.use('/api', platRoute);
app.use('/api', userRoute);

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
  res.sendFile(path.join(__dirname, 'dist/frontend-E-kaly/index.html'));
});
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
