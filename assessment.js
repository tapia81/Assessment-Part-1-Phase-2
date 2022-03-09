// Part 1: 30%, you must create a repo for part 1, separate from part 2

// 1.a Why does React utilize the virtual-dom?
//Answer: React uses virtual-dom so it doesn't change the real DOM when making changes. It also helps prevent spaghetti code,
//which is unstructured code using outdated forms of writing code that make controlling bigger projects harder to manage.

// 2a How is data flowed in React? 2b. Why is React architected this way?
//Answer: Data flows unidirectionally. The direction it flows is downwards or it can be understood as flowing from parent to child.
//While there are various reasons to react being archtitected this way, a major reason is because it gives a user better control
//of their project which makes it easier to manage and alot more readable.

// 3. What is the purpose for lifting state up in React? Give an example of this
//Answer: Since react is unidirectional, lifting state is a concept of delegating states to parent components by creating
//a stateful component.

// 4. Why would a startup be interested in applying React-Router to a project? Explain in detail.
//Answer: Companies with lowbudget can create dynamically changing single pages to display alot of content that needs constant updated information

// console.log('Question 5: Can browsers read JSX? Why?');
// console.log(
// 	'Answer 5: No browsers cannot read JSX because modern browsers today are only able to read up to es5, JSX and other libraries and framework are able to work with browsers because it is translated to es5 code that is supported by the browsers'
// );

// 6. What is the significance of keys in React?
//Answer: React requires each element to have a unique key, as they help identify changes to your data.

// 7. What is the difference between Props and State?
//Answer: With props, users are able to pass data downward from parent to child while state holds data/value of the component.

// 8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant.

//Answer: As stated before React being a framework uses babel to translate its code to a browser supported version of code.
// In this case it would be a ES5 equivalent. In both versions of code, you are using the map method to go through each
//element of the array [1,2,3]. With the map method you are using a callback function with an input n, which in this case n will be the
//element of the array as it loops through each element. The callback function will return the element plus 1. So the end
//result would be [2,3,4]

// Babel Input: ES2015 arrow function
// [1, 2, 3].map( n => n + 1 )

// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// Return n + 1;
// })

// 9. Given the array of strings: names, return a new array with each name properly capitalized. Must use .map()
console.log('\n');
console.log('Answer 9');
const names = [ 'james', 'joseph', 'diamond', 'gillian' ];
function properNames(names) {
	const updatedNames = names.map((name) => {
		return name[0].toUpperCase() + name.slice(1);
	});
	console.log(`New Array`);
	console.log(updatedNames);
	console.log(`\nUnchanged Original Array`);
	console.log(names);
}
properNames(names);

// 10. Create an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
console.log('\n');
console.log('Answer 10');
const arr = [ 'Burger', 'Cat', 'Jujutsu', 'Kaisen', 'Paramore' ];
function smallWordsOnly(arr) {
	const newArr = arr.filter((word) => {
		if (word.length <= 6) {
			return word;
		} else {
			console.log(`${word} is too long`);
		}
	});
	console.log(`New Array`);
	console.log(newArr);
	console.log(`\nUnchanged Original Array`);
	console.log(arr);
}

smallWordsOnly(arr);
