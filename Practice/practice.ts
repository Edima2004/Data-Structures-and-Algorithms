//section 1
const GetSquare = (arr:number[])=>{
   let newArray = new Array(arr.length).fill(0);
   let leftPointer = 0;
   let rightPointer = arr.length -1

   for(let i=0; i<arr.length; i++){
      let leftSquare = arr[leftPointer] * arr[leftPointer];
      let rightSquare = arr[rightPointer] * arr[rightPointer];

      if(leftSquare> rightSquare){
         newArray[i] = leftSquare;
         leftPointer++
      }
      else{
         newArray[i] = rightSquare;
			rightPointer--;
      }
   }
   return newArray
}

console.log(GetSquare([-9, -2, 4, 6, 8, 10]));

const GetMonotonic =(arr:number[])=>{
   let leftPointer = 0;
   let rightPointer = arr.length - 1;

   if(arr.length===0 || arr.length===1){
      return true
   }

   for(let i =0; i<arr.length; i++){
      if(arr[leftPointer]=== arr[rightPointer]){
         if(arr[i]!== arr[i+1]){
            return false
         }
      }
      else if(arr[leftPointer] > arr[rightPointer]){
         if (arr[i] < arr[i + 1]) {
				return false;
			}
      }
      else{
         if (arr[i] > arr[i + 1]) {
				return false;
			}
      }
   }
   return true
}

console.log(GetMonotonic([2, 4, 6, 8, 10, 5]));
console.log(GetMonotonic([10, 8, 6, 4, 2, 1]));
console.log(GetMonotonic([2, 4, 6, 3, 5]));

const GetKthValue2 = (n:number, k:number)=>{

   if(n===1){
      return 0
   }
   let length= Math.pow(2,n-1);
   let mid = length/2
   if(k<=mid){
      return GetKthValue2(n-1,k)
   }
   else{
      return 1 - GetKthValue2(n-1, (k - mid))
   }

}
console.log(GetKthValue2(1, 1));
console.log(GetKthValue2(5, 9));
console.log(GetKthValue2(2, 2));


const SolveJosephus = (n:number, k:number)=>{
   let newArray = Array.from({length:n}, (_,i)=>i+1);
   //console.log(newArray);
   
   
   const pickSurvivor=(arr:number[], startIndex:number)=>{
      
      if(newArray.length=== 1){
         return newArray[0]
      }
      let indexToRemove = (startIndex + k - 1) % arr.length;
      
      newArray.splice(indexToRemove, 1)
      return pickSurvivor(newArray,indexToRemove)
   }
   return pickSurvivor(newArray,0)
}

console.log(SolveJosephus(41,2));