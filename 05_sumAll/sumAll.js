const sumAll = function (startInt, endInt) {
	if (!(Number.isInteger(startInt) && Number.isInteger(endInt))) return "ERROR";
	if (startInt < 0 || endInt < 0) return "ERROR";
	let minNumber = startInt < endInt ? startInt : endInt;
	const maxNumber = minNumber === startInt ? endInt : startInt;

	let returnSum = 0;
	for (minNumber; minNumber <= maxNumber; minNumber++) {
		returnSum += minNumber;
	}

	return returnSum;
};

// Do not edit below this line
module.exports = sumAll;
