function removePunctuation(word) {
	return word
		.replace(/\s/g, "")
		.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
		.replace(/\s{2,}/g, " ");
}

const palindromes = function (word) {
	if (typeof word !== "string") return "ERROR";
	const wordArray = removePunctuation(word).toLowerCase().split("");
	const returnArray = [];

	do {
		returnArray.unshift(wordArray.shift());
	} while (wordArray.length > 0);

	return returnArray.join("") === removePunctuation(word).toLowerCase();
};
palindromes("A car, a man, a maraca.");
// Do not edit below this line
module.exports = palindromes;
