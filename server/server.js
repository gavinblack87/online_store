const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./api-routes.js');
const cors = require('cors')

app.use(parser.json());
app.use(cors())

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
.then((client) => {
  const db = client.db('golden_shoe');
  const shoesCollection = db.collection('shoes');
  const shoesRouter = createRouter(shoesCollection);
  app.use('/api/shoes', shoesRouter);

})
.catch(console.error);

let port = process.env.PORT || 8080;


app.listen(port, function () {
    console.log("Running goldenshoe on port " + port);
});

// // Import express
// const express = require('express');
// // Import Body parser
// const bodyParser = require('body-parser');
// // Initialise the app
// const app = express();
// const cors = require('cors');
// app.use(cors());

// // Import routes
// const apiRoutes = require("./api-routes");
// // Configure bodyparser to handle post requests
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());
// // Connect to Mongodb and set connection variable
// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect('mongodb://localhost:27017')
//   .then((client) => {
//     const db = client.db('golden_shoe');
//     const shoeCollection = db.collection('shoes');
//     app.use('/api/shoes', createRouter(shoeCollection));
//   })
//   .catch(console.error);
// // mongoose.connect('mongodb://localhost/pycp', { useNewUrlParser: true});
// // var db = mongoose.connection;

// // Added check for DB connection
// // if(!db)
// //     console.log("Error connecting db")
// // else
// //     console.log("Db connected successfully")

// // Setup server port
// var port = process.env.PORT || 8080;

// // Send message for default URL
// app.get('/', (req, res) => res.send('Hello World with Express'));

// // Use Api routes in the App
// app.use('/api', apiRoutes);
// // Launch app to listen to specified port
// app.listen(port, function () {
//     console.log("Running goldenshoe on port " + port);
// });
