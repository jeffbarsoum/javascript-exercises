const add = function (...numbers) {
	if ([...numbers].find((num) => Number.isNaN(num))) return "ERROR";
	return [...numbers].reduce((prevNum, currentNum) => prevNum + currentNum, 0);
};

const subtract = function (a, b) {
	if (Number.isNaN(a - b)) return "ERROR";
	return a - b;
};

const sum = function (numberArray) {
	return add(...numberArray);
};

const multiply = function (numberArray) {
	if (numberArray.find((num) => Number.isNaN(num))) return "ERROR";
	return numberArray.reduce((prevNum, currentNum) => prevNum * currentNum, 1);
};

const power = function (num, exp) {
	if (Number.isNaN(num + exp)) return "ERROR";
	return num ** exp;
};

const factorial = function (num) {
	if (!Number.isInteger(num) || (Number.isInteger(num) && num < 0))
		return "ERROR";
	let result = 1;
	for (num; num > 0; num--) {
		result *= num;
	}
	return result;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
