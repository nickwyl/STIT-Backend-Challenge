const axios = require("axios");
var convertToGenresID = require("./convertToGenresID");


var myObject = null;
var returnEvents = { };


async function getEvents(classificationName,genreName) {

	var genreID = convertToGenresID(genreName);


    const response = await axios.get("https://yv1x0ke9cl.execute-api.us-east-1.amazonaws.com/prod/events", {
        auth: {
        	username: "stitapplicant",
        	password: "zvaaDsZHLNLFdUVZ_3cQKns"
        },
        params: {
			classificationName: classificationName,
			genreId: genreID
		},
    })
  

	myObject = await response.data.filter(value => Object.keys(value).length !== 0);

	for (var key in myObject) {
	  returnEvents[key] = await myObject[key]
	}
	
	return returnEvents;

}



module.exports = async (classificationName,genreName) => {
	
	return await getEvents(classificationName,genreName);

}

