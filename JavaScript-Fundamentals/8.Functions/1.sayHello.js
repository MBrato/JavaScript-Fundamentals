/* 
Method that asks the user for his name and prints Hello, <name>!.
*/

let firstName = "Ivaylo";

function sayHello(name){
	let result = '';

	if(typeof name !== "string"){
		return result = 'Incorrect input!';
	} else {
		return result = `Hello ${name}!`;
	}
	
}

console.log(sayHello(firstName));
