//Question 1
const GetIndexOfSum = (arr: number[], targetValue: number) => {
	let expectedValue: number;
	let hashTable = {};
	for (let i = 0; i < arr.length; i++) {
		expectedValue = targetValue - arr[i];

		if (expectedValue in hashTable) {
			return [i, hashTable[expectedValue]];
		} else {
			hashTable[arr[i]] = i;
		}
	}
	return [];
};

console.log(GetIndexOfSum([1, 2, 6, 7, 5], 6));
//value : index



//Question 2
const GetIsomorphic = (s: string, t: string) => {
	let eachSValue = s.split('');
	let eachTValue = t.split('');
	let hashTableS = {};
	let hashTableT = {};

	if (s.length !== t.length) {
		return false;
	}

	for (let i = 0; i < eachSValue.length; i++) {
      let charS = eachSValue[i];
      let charT = eachTValue[i];


		if (!hashTableS[charS]) {
         hashTableS[charS] = charT;
      }         
		if (!hashTableT[charT]) {
         hashTableT[charT] = charS;
      }         

      if (
         hashTableS[charS] !== charT ||
         hashTableT[charT] !== charS
      )  return false;


	console.log(hashTableT);
	console.log(hashTableS);

}
return true;
};

//console.log(GetIsomorphic('aa', 'bb'));
//console.log(GetIsomorphic('cc', 'ab'));
console.log(GetIsomorphic('abcda', 'pqrsh'));
