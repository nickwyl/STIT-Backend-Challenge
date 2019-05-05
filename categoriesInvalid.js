var categoryNames = [
  "arts & theatre",
  "film",
  "miscellaneous",
  "music",
  "sports",
  "undefined",
  "donation",
  "event style",
  "group",
  "individual",
  "merchandise",
  "nonticket",
  "parking",
  "transportation",
  "upsell",
  "venue based"
]


module.exports = async (categories) => {

	var splitCategories = categories.toLowerCase().split(/,| /);

	return await !categoryNames.some(c=> splitCategories.indexOf(c) >= 0);
  
}