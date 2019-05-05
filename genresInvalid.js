var genreNames = [
  "r&b",
  "hip-hop/rap",
  "comedy",
  "classical",
  "jazz",
  "foreign",
  "dance/electronic",
  "comedy",
  "animation",
  "music",
  "miscellaneous",
  "family",
  "miscellaneous theatre",
  "theatre"
]


module.exports = async (genres) => {

	var splitGenres = genres.toLowerCase().split(/,| /);

	return await !genreNames.some(g=> splitGenres.indexOf(g) >= 0);
  
}