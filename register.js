// var prompt = require("./prompt");
var getEvents = require("./getEvents");
var genresInvalid = require("./genresInvalid");
var categoriesInvalid = require("./categoriesInvalid");


var username = null;
var password = null;
var categories = null;
var genres = null;


	// function premise(event,callback) {
	// 	var p = new Promise((resolve, reject) => {
	// 		prompt.prompt("Enter your desired username: \n", function (input) {
	// 			input = input.toLowerCase();
	// 			if (input=="") {
	// 				console.log("That's not a valid username!");
	// 			}
	// 			if (event.get('user').find({username: input}).value()!=null) {
	// 				console.log("Username already exists in database.")
	// 			}

	// 			resolve(input);

	// 			username = input;
	// 		})
	// 	})
	// 	.then(message => {
	// 		prompt.prompt("Enter your desired password: \n", function (input) {
	// 			input = input.toLowerCase();

	// 			password = input;
		
	// 			setTimeout(function() {
	// 				console.log("my desired password is: " + input);
	// 				callback(event);
	// 			}, 0);
	// 		})
	// 	})

	// };


	// function getCat(event) { 
	// 	prompt.prompt("Enter your favourite categories, separated by spaces (e.g. music sports): \n", function (input) {
	// 		input = input.toLowerCase();
	// 		categories = input;

	// 		setTimeout(function() {
	// 			console.log("my desired categories is: " + input);
	// 			getGenres(event);
	// 		}, 0);
	// 	});
	// };

	// function getGenres(event) {
	// 	prompt.prompt("Enter your favourite genres, separated by spaces (e.g. R&B jazz): \n", function (input) {
	// 		input = input.toLowerCase();
	// 		genres = input;

	// 		populateDB(event);

	// 		console.log("My desired genres are: " + genres);
	// 	});
	// }


	function populateDB(event) {

		//must hash password in real world, but will not in this case since program is written for challenge

		event.get("user")
			.push({username: username, password: password, categories: categories, genres: genres})
			.write()

		// getEvents(categories,genre);

	}





	module.exports = async (event,req,res) => {

			username = req.body.username;
			password = req.body.password;
			categories = req.body.categories;
			genres = req.body.genres;


			if (username=="") {
				return "That's not a valid username!";
			}
			else if (event.get("user").find({username: username}).value()!=null) {
				return "Username already exists in database.";
			}
			else if (await genresInvalid(genres) || await categoriesInvalid(categories)) {
				return ("Categories or genres is invalid.");
			}
			else {
				populateDB(event);
			}
			
			
			return await getEvents(categories,genres);

	};


