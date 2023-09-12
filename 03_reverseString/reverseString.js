const reverseString = function (str) {
	if (!(typeof str === "string")) return "ERROR";

	let returnString = "";
	for (i = str.length - 1; i >= 0; i--) {
		returnString += str[i];
	}

	return returnString;
};

// Do not edit below this line
module.exports = reverseString;
