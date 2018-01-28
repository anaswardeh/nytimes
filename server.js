const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ArticleController = require("./controllers/ArticleController")
const app = express();
const PORT = process.env.PORT || 3001;
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/public"));


// Add routes, both API and view
app.use(ArticleController);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);


admin.initializeApp({
  credential: process.env.FIREBASE_PRIVATE_KEY || admin.credential.cert(serviceAccount),
  client_email: process.env.FIREBASE_CLIENT_EMAIL || "firebase-adminsdk-xeiir@nytimes-e778c.iam.gserviceaccount.com",
  databaseURL: "https://nytimes-e778c.firebaseio.com"
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
