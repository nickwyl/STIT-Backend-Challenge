// var prompt = require("./prompt");
var getEvents = require("./getEvents");
var convertToGenresID = require("./convertToGenresID");
var genresInvalid = require("./genresInvalid");
var categoriesInvalid = require("./categoriesInvalid");


var categories = null;
var genres = null;


	// function getCat(event,username) { 
	// 	prompt.prompt("Enter your favourite categories, separated by spaces (e.g. music sports): \n", function (input) {
	// 		input = input.toLowerCase();
	// 		categories = input;

	// 		setTimeout(function() {
	// 			console.log("my desired categories is: " + input);
	// 			getGenres(event,username);
	// 		}, 0);
	// 		return input;
	// 	});
	// };

	// function getGenres(event,username) {
	// 	prompt.prompt("Enter your favourite genres, separated by spaces (e.g. R&B jazz): \n", function (input) {
	// 		input = input.toLowerCase();
	// 		genres = input;

	// 		console.log(event.get("user")
	// 			.find({username:username})
	// 			.value());

	// 		updateDB(event);

	// 		return input;

	// 	});
	// }
	
	
	var empty = function(user) {
		return !Object.keys(user).length;
	};


	function updateDB(event,username) {
		event.get("user")
			.find({username:username})
			.assign({categories:categories})
			.assign({genres:genres})
			.write()


		//to list events
		// var categories = event.get('user').find({username: username}).value().categories;
		// var genres = event.get('user').find({username: username}).value().genres;

		// var genreID = convertToGenresID(genres);

		// getEvents(categories,genreID);
	}


	module.exports = async (event,req,res) => {
		// prompt.prompt("Do you want to change your preferences (yes/no)? \n", function (input) {
		// 	if (input=="yes") {
		// 		getCat(event,username);
		// 	};
		// });

		categories = req.body.categories;
		genres = req.body.genres;

		var userInfo = event.get("user")
			.filter({username: req.body.username})
			.filter({password: req.body.password})
			.value();


		if(empty(userInfo)) {
			return "Username or password is incorrect.";
		}
		else if (await genresInvalid(genres) || await categoriesInvalid(categories)) {
			return ("Categories or genres is invalid.");
		}
		else {
			updateDB(event,req.body.username);
		}


		return await getEvents(categories,genres);

	}

