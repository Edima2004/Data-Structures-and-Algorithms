console.log('Welcome!');
//General solution
//Question 1
const GetArray = (arr: number[]) => {
	let newArray = arr.map((num, index) => (arr[index] = num * num));
	return newArray.sort((a, b) => a - b);
};
console.log(GetArray([-2, 4, 6, 8, 10]));
console.log(GetArray([-5, -1, 1, 12]));

//More efficient solution
//Question 1
const GetArray2 = (arr: number[]) => {
	let newArray = new Array(arr.length).fill(0);
	let leftPointer = 0;
	let rightPointer = arr.length - 1;

	if (arr.length === 0) {
		return [];
	}
	for (let i = 0; i < arr.length; i++) {
		let leftSquared = arr[leftPointer] * arr[leftPointer];
		let rightSquared = arr[rightPointer] * arr[rightPointer];

		if (leftSquared > rightSquared) {
			newArray[i] = leftSquared;
			leftPointer++;
		} else {
			newArray[i] = rightSquared;
			rightPointer--;
		}
	}
	return newArray;
};

//Test cases
console.log(GetArray2([-2, 4, 6, 7, 8, 10]));
console.log(GetArray2([-5, -1, 1, 5, 12]));

//Monotonic
//Question 2
const GetMonotonic2 = (array: number[]) => {
	if (array.length === 0) {
		return true;
	}
	let first = array[0];
	let last = array[array.length - 1];

	if (first > last) {
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i + 1] > array[i]) {
				return false;
			}
		}
	} else if (first < last) {
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i + 1] < array[i]) {
				return false;
			}
		}
	} else {
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i + 1] !== array[i]) {
				return false;
			}
		}
	}
	return true;
};

//Test cases
console.log(GetMonotonic2([1, 2, 3, 4, 5]));
console.log(GetMonotonic2([2, 4, 6, 3, 5]));
console.log(GetMonotonic2([2, 4, 6, 8, 10, 5]));
console.log(GetMonotonic2([10, 8, 6, 4, 2, 1]));
console.log(GetMonotonic2([]));
