const fibonacci = function (seqNumber) {
	if (seqNumber < 1) return "OOPS";
	const fibSequence = [1, 1];
	// console.log(
	// fibSequence[fibSequence.length - 2],
	// fibSequence[fibSequence.length - 1],
	// );
	for (let i = 2; i < seqNumber; i++) {
		// console.log("i: ", i);
		// console.table(fibSequence);
		fibSequence.push(
			fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2],
		);
		// console.table(fibSequence);
	}
	// console.log("return value: ", fibSequence[fibSequence.length - 1]);
	return fibSequence[fibSequence.length - 1];
};

// fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
