console.log('Recursion!');

//Question 1 - kth Problem
const GetKthValue = (n: number, k: number) => {
	if (n === 1) {
		return 0;
	}
	let rowLength = Math.pow(2, n - 1);
	let mid = rowLength / 2;

	if (k <= mid) {
		return GetKthValue(n - 1, k);
	}
	if (k > mid) {
		return 1 - GetKthValue(n - 1, k - mid);
	}
};

//Test cases
console.log(GetKthValue(4, 3));
console.log(GetKthValue(2, 2));
console.log(GetKthValue(1, 1));
console.log(GetKthValue(5, 9));


//Question 2 - Josephus Problem
//Approach 1
const GetJProb = (n: number, k: number) => {
	let newArray = Array.from({ length: n }, (_, i) => i + 1);
	//console.log(newArray);

	const GetWinner = (arr: number[], startIndex:number) => {
      //base case
		if (newArray.length === 1) {
			return newArray[0];
		}
      //recursive case
      let indexToRemove = (startIndex+k-1)%arr.length
		newArray.splice(indexToRemove, 1);
      return GetWinner(newArray, indexToRemove);

	};
   return GetWinner(newArray, 0)
};
console.log(GetJProb(41,2));


//Approach 2
const GetSafePosition=(length:number, k:number)=>{

   function helper(length:number) {
      if(length === 1){
         return 0
      }
   //recursive case
      return(helper(length - 1) + k)% length
   }
   return helper(length) + 1

}
console.log(GetSafePosition(41,2));

//Approach 3
const GetSurvivor = (length: number, k: number) => {
   let survivor = 0;

   for(let i = 2; i<= length; i++){
      survivor = (survivor + k) % i;
   }
   return survivor + 1
};
console.log(GetSurvivor(41,2));

