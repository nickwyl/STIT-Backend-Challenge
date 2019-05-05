// var prompt = require("./prompt");
// var setPreferences = require("./setPreferences");


var getEvents = require("./getEvents");


// var username = null;
// var password = null;


// function premise(event) {
// 	var p = new Promise((resolve, reject) => {
// 		prompt.prompt("Enter your username: \n", function (input) {
// 			if (input=="") return reject("That's not a valid username!");
// 			username = input.toLowerCase();
// 			resolve(username);
// 		})
// 	})
// 	.then(message => {
// 		prompt.prompt("Enter your password: \n", function (input) {
// 			password = input.toLowerCase();
// 			populateDB(event);
			

// 		})
// 	})
// };


// function populateDB(event) {
// 	var userInfo = event.get("user")
// 		.filter({username: username})
// 		.filter({password: password})
// 		.value();

// 	if(empty(userInfo)) {
// 		console.log("Username or password is incorrect.");
// 	}
// 	else {
// 		console.log("User exists");

// 		var categories = event.get('user').find({username: username}).value().categories;
// 		var genres = event.get('user').find({username: username}).value().genres;

// 		return getEvents(categories,genreID);		
// 	}
// }


var empty = function(user) {
  return !Object.keys(user).length;
};



module.exports = async (event,req,res) => {

	var categories = null;
	var genres = null;


	var userInfo = event.get("user")
		.filter({username: req.body.username})
		.filter({password: req.body.password})
		.value();

	if(empty(userInfo)) {
		return("Username or password is incorrect.");
	}
	else {
		categories = event.get('user').find({username: req.body.username}).value().categories;
		genres = event.get('user').find({username: req.body.username}).value().genres;
	}

	return await getEvents(categories,genres);

};



