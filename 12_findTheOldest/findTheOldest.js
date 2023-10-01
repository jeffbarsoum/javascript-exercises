const findTheOldest = function (people) {
	const sortedPeople = people.sort((prevPerson, nextPerson) => {
		const today = new Date();
		const prevAge = prevPerson.yearOfDeath
			? prevPerson.yearOfDeath - prevPerson.yearOfBirth
			: today.getFullYear() - prevPerson.yearOfBirth;
		const nextAge = nextPerson.yearOfDeath
			? nextPerson.yearOfDeath - nextPerson.yearOfBirth
			: today.getFullYear() - nextPerson.yearOfBirth;

		if (nextAge > prevAge) {
			return 1;
		} else {
			return -1;
		}
	});
	return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
