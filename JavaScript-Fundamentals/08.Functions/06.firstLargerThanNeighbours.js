let numbers = [-26, -25, -28, 31, 2, 27];

 function returnIndex(arr){
 	let i = 0,
 		len = arr.length;

 	for(i = 1; i < len - 1; i += 1){
 		if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]){
 			return arr.indexOf(arr[i]);
 		}
 		return -1;
 	}
 }
console.log(returnIndex(numbers));
