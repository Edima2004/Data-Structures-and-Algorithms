//Subsets

const GetSubsets = (arr: number[]) => {
	const output: object[] = [];

	const helper = (numArray = arr, index: number, subsets: number[]) => {
		if (index === numArray.length) {
			output.push(subsets.slice());
			return;
		}
		helper(arr, index + 1, subsets);

		subsets.push(numArray[index]);

		helper(arr, index + 1, subsets);
      subsets.pop();
	};
	helper(arr, 0, []);
   return output;
};


console.log(GetSubsets([1,2,3]));
console.log(GetSubsets([]));
console.log(GetSubsets([1,2,1]));

//Unique subsets




