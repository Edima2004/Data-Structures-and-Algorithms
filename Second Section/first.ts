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
const GetJProb = (n:number)=>{
// let newArray = Array.from({})
   const GetWinner = (n:number, k:number)=>{
      if(n===1){
         return 1
      }
      let array = new Array(n).fill(1,1,n)
      console.log(array);
   }
   
   
}
console.log(GetJProb(3));
