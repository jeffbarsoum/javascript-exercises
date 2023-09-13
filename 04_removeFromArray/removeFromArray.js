const removeFromArray = function (arrayToFilter = [], ...itemsToRemove) {
	// We are sorting these arrays to make them easier to filter
	// arrayToFilter.sort();
	// itemsToRemove.sort();
	const arrayToReturn = [];

	// since the arrays are sorted, duplicates will always be next to each other
	for (let i = 0; i < arrayToFilter.length; i++) {
		let isRemove = false;
		for (let j = 0; j < itemsToRemove.length; j++) {
			if (arrayToFilter[i] === itemsToRemove[j]) {
				isRemove = true;
				break;
			}
		}
		if (!isRemove) {
			arrayToReturn.push(arrayToFilter[i]);
		}
	}
	return arrayToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
