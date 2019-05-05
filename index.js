//import endpoints
var register = require("./register");
var login = require("./login");
var setPreferences = require("./setPreferences");


//express
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => console.log("Webhook server is listening, port 3000"));


//lowDB
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)


db.defaults({ user: [] }) 
  .write()


//endpoints
app.post("/register", async function(req,res) {
	res.json(await register(db,req,res));
});
app.get("/login", async function(req,res) {
	res.json(await login(db,req,res));
});
app.put("/setPreferences", async function(req,res) {
	res.json(await setPreferences(db,req,res));
});



// prompt.prompt('Would you like to register or log in? Please enter either "register" or "log in"\n', function (input) {
// 	input = input.toLowerCase();
//     if (input=="register") {
//     	register(db);
//     }
//     else if (input=="log in" || input == "login") {
//     	login(db);
//     }
//     else if (input=="exit") {
//     	process.exit();
//     }

// });
