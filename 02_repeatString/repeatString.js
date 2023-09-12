const repeatString = function (string, num) {
	if (!Number.isInteger(num) || (Number.isInteger(num) && num < 0))
		return "ERROR";
	let returnString = "";
	for (let i = 0; i < num; i++) {
		returnString += string;
	}
	return returnString;
};

// Do not edit below this line
module.exports = repeatString;
