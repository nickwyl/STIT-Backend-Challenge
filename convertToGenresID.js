//convert genre to respective ID


var map = {
        'R&B': "KnvZfZ7vAee",
        'Hip-Hop/Rap': "KnvZfZ7vAv1",
        'Comedy': "KnvZfZ7vAe1",
        'Classical': "KnvZfZ7v7nJ",
        'Jazz': "KnvZfZ7vAvE",
        'Foreign': "KnvZfZ7vAk1",
        'Dance/Electronic': "KnvZfZ7vAvF",
        'Comedy': "KnvZfZ7vAkA",
        'Animation': "KnvZfZ7vAkd",
        'Music': "KnvZfZ7vAkJ",
        'Miscellaneous': "KnvZfZ7vAka",
        'Family': "KnvZfZ7vAkF",
        'Miscellaneous Theatre': "KnvZfZ7v7ld",
        'Theatre': "KnvZfZ7v7l1"
        }


function getGenreID(genres) {
	var splitGenres = genres.split(/,| /);
	var genreID = "";

	for (var i=0; i<splitGenres.length; i++) {
		if (i==splitGenres.length-1) {
			genreID += map[splitGenres[i]];
                }
		else {
			genreID += map[splitGenres[i]] + " ";
		}
	}
}


module.exports = (genres) => {
	getGenreID(genres);
}