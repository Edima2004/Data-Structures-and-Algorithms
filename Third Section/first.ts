console.log("third section");

//QUestion 1 - Tower of Hanoi
const GetNumberOfSteps = (N: number, from: number, to: number, aux: number) => {
	let count = 0;

	const helper = (N, from, to, aux) => {
		//base case
		if (N === 1) {
			count++;
			console.log(`move disk ${N} from rod ${from} to rod ${to}`);
			return;
		}
		//recursive case

		//N-1 disks from 'from rod'  to aux rod
		helper(N - 1, from, aux, to);
		//Nth disk from 'from rod' to 'to rod'
		count++;
		console.log(`move disk ${N} from rod ${from} to rod ${to}`);
		//N-1 disks from aux
		helper(N - 1, aux, to, from);
	};
	helper(N, from, to, aux);
	return ( ` ${count} steps `);
};

console.log(GetNumberOfSteps(3,1,3,2))
console.log(GetNumberOfSteps(4,1,3,2))


//Question 2 - Power sum
let arr = [1,3,4,2,[3,4,5]]


