# you dont know JS
	- Types/Coercion
 	- Scope/Clousre
 	- This/Prototypes

## Programming Primer

 ### values

	- In js, "42" and "3.14" are the same, they are both categorised as numbers
	- string
	- boolean
	- null
	- undefined
	- [1,2,3]
	- { a: 1}

### operations

	- 1 + 1
	- 2 - 1

	- 'a' + 'b'
	- !false
	- 3.0 == 3  comparison
	- 3 < 4
	- true || false -> logical operator
	- true && true


	- binary uniary trinary

### Types

	- typeof is an operator

	- typeof 42			- 'number'
	- typeof '42'		- 'string'
	- typeof true		- 'boolean'
	- typeof undefined 	- 'undefined'
	- typeof {a:1}		- 'object'
	- typeof null		- 'object' 		- bug from years ago
	- typeof [1,2]  	- 'object'		- array is a sub type of an object

### variables

	- var a = 'a';
	- var b; 			- get space in memory, that would be undefiend
	- b = 'b'			- give it the value of 'b'
	- var arr = [1,2,3]

	- console.log( arr.length)
	- console.log( arr[1])
		- under the hood:
			- telling the browser go find the space in ram where console is stored
			- telling the browser to access "log" in the position of "console".
			- find "friends" in ram position
			- find the "length" property of "friends" and print

### operator

	- ++  	operat and reassign
	- += 	operat and reassign

### expression and statement

	- experssion is like a phrase ( part of a sentence, part of a statement)
	- statement is a sentence


### Decisions

	- if & else

### loops

	for( let = 0; i < a.length; i++ ){ ... }
	for( let item of arr ) { ... }
	while ( true ) { ... }

### functions

	- function name (a) {
		....
	}

 ### exercises:


## Types & Coercion : three pillars of js - 1

### primtive types

	> In JS, types are assciated with the values not with variables

	- undefined 	- werid:
						- 1. let a,
						- 2. let b = undefined
						- 3. c was never declared
						- console.log(a,b,c) // undefined, undefined, undefined
	- string
	- number
	- boolean
	- object
	- symbol

	- null
	- function
	- array

	- caution: NaN is a value, not a type!


	- use or not use new keywords with the buildin fundamental Objects

		- DO 				- DO NOT use New keyword, this will change type!

		- Object()			- String()
		- Array()			- Number()
		- Function()		- Boolean()
		- Date()
		- RegExp()
		- Error()

				var yesterday = new Date("March 6 ,2020")
				yesterday.toUTCString()
				var GPA = String(transcript.gpa)

### type convertion / coercoin

	> the way to convert from one type to another : coercoin

		Number + Number = Number
		Number + String = String
		String + Number = String
		String + String = String

	> Boolean: falsy and truthy value: when coverting a value to boolean vaule, which converted to true are truthy value, those converted to false are called falsy value

		Falsy 			Truthy

		0 , -0			everything else will be coverted to true !
		null
		NaN
		false
		undefined

		> in a if statement, the value that passed in has to be a boolean, if it isn't, wil be coverted to boolean!

			- new stuff: if (!! input.value) { ... } --> turns input.value to boolean by adding !!

	>  the '<' and '>' operator need the values to be numbers, if not will convert it to one.

### equality checking "==" & "==="

	- "=="  		allows coercion			different types
	- "==="			disallows coercion		dame types




## Scope / Closure

- scope: the rule how js look for things

			var a = 1

			function test(){
				a = 2;
				b = 3
			}

	> a = 2, b = 3,
	>
	> in non-strict mode, b is not declared! but it is still valid.
	>
	> a is able to reach outside of the function and change its value!


- undefined and undeclared

	- undefined: a variable that has been declared but never assigned a value such as let a, var x ....

	- undeclared: never decalred such as the variable b in the pervious example.


- function experssion

	> functions passed as values to variables, there is a difference in named and annomyus function expressions, arrow functions are annoymus functions


- IIFE
	- usage: great for isolating variables

			// change old variable
			var x = 1;
				(function name(){
					x = 2
					console.log(x) //2
				})()
			console.log(x) // 2

			// declared new:
			var x = 1;
				(function name(){
					var x = 2
					console.log(x) //2
				})()
			console.log(x) // 1


- Block Scoping

			var a = 1;
			{
				let a = 2
				console.log(a)
			}

			console.log(a)

	> keep the scope as small as tight as possible.
	>
	> Inside functions, we can open up another block scrope with {}, so that the variblae does not conlift with others if needed!


- closure

	> clousure is when a function 'remembers' the variables outside of it. even if it is passed elsewhere (treat func as a value)

	- example 1: as variable
			function ask(question) {
				setTimeout(function waitAsec(){
					console.log(question)
				},100)
			}
			ask ('closure')

		> waitAsec has a clousure over the question variable, when ask() is called, after the function finishes, the function and its parameters will be relases, but Inside setTimeout, it is still refering the question variable, therefore it is not relased.

	- example 2: return a function
			function ask(question){
				return function hideQuestion(){
					console.log(question)
				}
			}
			var myQuestion = ask('closure')
			myQuestion()
		> myQuestion has closure over question variable


## this & Prototypes & class

- "this" refers the execution context, determented by how a function is called

- "this" keyword has a diffent execution context each time it's called.

1. implicit binding: a.b(arg)
	> inside b, the "this keyword points at a's scope"

			var a = {
				x:'x',
				b(y){
					console.log(this.x, y)
				}
			}
			a.b('implicit binding')

2. Using call() to bind this:  b.call(a)

		function b(x) {
			console.log(this.y, x)
		}

		function a() {
			var myContext = {
				y:'y'
			}
			b.call(myContext, 'x')
		}

		a();


3. Simple Class example:

	- Class keyword Class

		class A {
			constructor (t){
				this.t = t;
			}
			y(x){
				console.log(this.t, x)
			}
		}

		let a = new A('something')
		a.y('doe')


	- Functional Class  VS "this" keyword

		function B(t){
			this.t = t
		}

		B.prototype.y = function(x){
			console.log(x, this.t)
		}

		let D = new B('ah')

   		 D.y('J')

		when new keyword is invokes the function B and creates an Object!

		the Object that is created will be connected to B.prototype!

		B.prototype has a "y" function with this-aware method,

		=> when calling D.y(), "this points at the instance D"





## practise


# The fundamentals - Bianca Gandolfo

## those things might be overwritten by the following chapters.
	- why are there so many developers trys to rewrite javascript functions?
		such as rewrite the filter functions, map functions etc.

	- Map vs Array.map()
		- Map is a Object type that stores key:value pair
		- Array.map() is a method, creates a new array populated with the results of calling a provided function on every element in the calling array.

	- typeof vs Array.isArray()

	 		typeof [1,2,3] // object
	  		Array.isArray([1,2.3]) // true
			typeof [1,2,3] === "Object"

	- destructuring from object

			const { a, b, c } = { a: 1, b:2, c:3 }
			- what it is doing is const name = obj.a (or let/var, depends on the keyword used)

	- filter : rewrite



## Objects

### Property Access

	- Property Access
	- Dots vs Brackets
		- everything that uses 'dot .' in javascript is Object.
		- Storing permitive value by value, non-primitive by refernce
			- primtive value: string | number | boolean | null | undefined
			- non-primitive value: object | function | array | promise...

		- Dots & Brackets Difference
									Objects{}
					------------------------------------------------
										. 				[]
					------------------------------------------------
					string  			[x]				[x]
					numbers   			[ ]    			[x]
					quotations			[ ]				[x]
					weird characters	[ ]				[x]
					expressions			[ ]				[x]
					-------------------------------------------------
			- [], when using [], we dont assume it is string unless use ""
				- obj.variable = obj['variable']
				- obj[variable], if variable is defined and assigned value, then use the value of the variable as the property name
				- obj[variable], not defined, => reference error

				1. obj[variable] = 'a'-> defined -> obj.variable's value = 'a'
				2. obj[variable] = 'a'-> undefined -> syntax error
				3.obj['variable'] = 'a'-> undefined -> obj.variable = 'a'

	- Destructuring

		- less unknown usage of destructing (obj and arr)
			-----------------------------------------------------------------------------
			1. swapping variables [a, b] = [b, a] or [arr[2], arr[1]] = [arr[1], arr[2]]
			2. assign the rest of an array to variable [a, ...b] = [1,2,3] // b [2,3]
			3. desturcting from an function "return" [a, b] = fn()
			4. ignore and skip : [a, ,b] = [1,2,3] or [,,] = [1,2,3]
			5. [a,b ...[c,d]] =[1,2,3,4]
			-----------------------------------------------------------------------------
			6. reassign property name: const { a: a1, b:b1 } = obj;
			7. giving default value: const { a: a1 = aDefault } = obj;
			8. const { a, b, ...rest } = obj;
			9. Unpacking properties from objects passed as a function parameter
			   + can reassign property name
			   + can have default value
						function userId({displayName: dname = 'jhon'}) { return id}
						userId(user); // 42
			10. combination and chaos:
				assign the property's value a of the 3rd obj of array arr to const a
				const [,,{a}] = arr

			>>>>>>>>>>>>> till here!

			-----------------------------------------------------------------------------
			[first, second] = [true, false]

			const value type can not be re-assigned
				- const a = { x: 'x'}
				  a.x = "i" (changed the property of a, but not a itself.)
				  			(it is not a primitve value)
			-----------------------------------------------------------------------------
				key in destructing is copy the structure
				Q: using destructing to get two values with the string of orange of red.
				let suspects = [
					{
					name: 'rusty',
					color: 'orange'
					},{
					name: 'scarlet',
					color: 'red'
					}
				]

				let [ { color: a }, { color: b } ] = suspects


### list transformation

	- example 1: loop through array (for loop)
			-Object doesnt have a length value!

				const game = {
					'suspects':[
						{
						name: 'rusty',
						color: 'orange'
						},{
						name: 'scarlet',
						color: 'red'
						}
					]
				}

				function iter () {
				for(let i = 0; i < game.suspects.length; i ++) {
					console.log( game.suspects[i] )
				}
				}

				iter()
	- example 2: for in loop

			function createSuspect(name){
				return {
					name: name,
					color: name.split(' ')[1],
					speak: function(){
					console.log('my name is:', name)
					}
				}
			}

			let suspects = ['miss red','mr blue','sir black']
			let suspectList = []

			for(let key in suspects ){
			suspectList.push(createSuspect(suspects[key]))
			}

			console.log(suspectList)

	--------------------- todo-start -------------------------

		- example 3: forEach vs _.each()
					------------- rewrite starts ------------
					let _ = {};
					_.each = function(arr, cb){
					if(Array.isArray(arr)){
						// 1. loop thru the array
						for(let i = 0; i < arr.length; i++){
						// calls the callback function
						cb(arr[i], i, arr)
						}
					} else {
						for( let key in arr ){
						cb(arr[key], key, arr)
						}
					}
					}
					------------- rewrite ends ------------

					------------- test starts   -----------
					 _.each([1,2,4], (item, i, col)=>{
					console.log(item, i, col)
					})

					_.each({a:1, b:2, c:3}, (item, i, col)=>{
					console.log(item, i, col)
					})
					-------------  test ends  --------------

		- example 4: map vs _.map()
					------------- rewrite starts ------------
					const _ = {};
					_.map = function( arr, cb ) {
					//  creates a new arr
					let storage = [];
					//  loop thru the arr
					for(let key in arr){
						// runs the cb,  stores new value
						storage[key] = cb(arr[key], key, arr)
					}
					return storage
					}
					------------- rewrite ends ------------
					------------- test starts ------------
					_.map([1,2,3], (a,b)=>{
					return a = a + 10;
					})
					------------- test ends ------------

		- example 5: filter vs _.filter()
					const _ = {}
					_.filter = function(arr, cb){
					// creates a new arr
					let storage =[];
					// iterate thru arr
					for(let key in arr){
						// calls cb(), and modify the to be returned arr
					let result = cb(arr[key], key, arr)
					if (result) {
						storage.push(arr[key])
					}
					}
					return storage
					// return the new arr of items that passed test
					}
					_.filter([1,2,3,4], (a,b,c)=>{
					return a > 2
					})



### functions

 - the anatomy of a functions

	function declaration/defination

	function name

	parameter

	function body

	invocation / call-time

	arguments

- the difference between regual function and arrow function

	- this
	- argument
	- automatic return
	- arrow function can not be constructor functions

- argument keyword and speard operator

	- function te (a,b ...c) {
		console.log(arguments)
	}
	te(1,24,3, 5)

	arguments is realted to arugments,
	speard operator is related to parameters

- array.from() and _.from()
	const _ = {}
	_.from = arr => {
		return Array.prototype.slice.call(arr)
	}
	this is the method that was used before Array.from() was introduce, what it does it to bind the "this" keyword to argument arr when using Array's prototype method



//todo! decker is crtead till the this line!
### Scope

global scope: we can define a global variable with winow or simply not using any keyword to dfeind a variable

typeof func === 'function', not 'object'

function scope and its parent function scope, not the other way around

- key takeaways
	1. function has access to it local and parent scope and above.
	2. everytime a function is called, a new execution ccontext is created. ---> everytime a new execution ccontext is created, variables and such will be reset within the newly created scope, and it will be kept till the next time its called.
	3. function's local variable is not available is not available outside the function


### Higher-Order functions

1. function as argument
2. function as return value

- how ...args was done pre ES6
- rewrite _.reduce method
- rewrite _.forEachRight method
- not in room exercise with reduce method

### advanced scope, closure!

	- exercise,


todo: what is compose : combines two functions, excute one function and pass the return result to the next, the order does matter. the way of combining the functions is called compose!

exercise: rewrite the _.curry method
exercise: rewrite the _.compose method
