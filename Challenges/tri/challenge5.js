let scores = [3, 3, 7, 7, 7, 12, 19, 19, 25, 30, 30, 30, 41];

function findFirstAndLast(array, value) {
	let first = -1;
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		let middle = parseInt((left + right) / 2);

		if (array[middle] === value) {
			first = middle;
			right = middle - 1;
		} else if (array[middle] < value) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	let last = -1;
	left = 0;
	right = array.length - 1;

	while (left <= right) {
		let middle = parseInt((left + right) / 2);

		if (array[middle] === value) {
			last = middle;
			left = middle + 1;
		} else if (array[middle] < value) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return [first, last];
}

console.log(findFirstAndLast(scores, 7));