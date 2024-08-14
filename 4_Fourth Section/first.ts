//Permutations with backtracking

//Question 1
const GetPermutations = (arr:number[]) => {
	let result:object[] = [];

	const helper = (i:number) => {
		//base condition
		if (i === arr.length - 1) {
			result.push([...arr]);
			return;
		}
			for (let j = i; j < arr.length; j++) {
				//recursive solution
				[arr[i], arr[j]] = [arr[j], arr[i]];
				helper(i + 1);
				//backtracking
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
	};
   helper(0);
   return result;
};

console.log(GetPermutations([1, 2, 3]));
console.log(GetPermutations([1, 2, 3, 4]));


//Question 2


const GetUniquePermutations = (arr: number[]) => {
	let result: object[] = [];

	const helper = (i: number) => {
		//base condition
		if (i === arr.length - 1) {
			result.push([...arr]); 
			return;
		}
		//hash table
		let hash = {}
		for (let j = i; j < arr.length; j++) {
			if(!hash[arr[j]]){
				hash[arr[j]] = true;
			//recursive solution
			[arr[i], arr[j]] = [arr[j], arr[i]];
			helper(i + 1);
			//backtracking
			[arr[i], arr[j]] = [arr[j], arr[i]];

			}
		}
	};
	helper(0);
	return result;
};

console.log(GetUniquePermutations([3,3,2]));
console.log(GetUniquePermutations([1,1,2]));
