# Deep Javascript Foundations - kyle Simpson <10hrs>
	Three pillars of javascript:
		1. Types & Coercion
		2. Scope & Closure
		3. This & Prototype

## types
- type
    - simply put,everything that is not object is primitive type(7)
        undefined, string, number, boolean, symbol, null, bigInt
    - array,fn etc are sub types of the the Object type

- typeof
    - return value is string: "object"
    - typeof null           // returns object
    - typeof fn             // returns function
    - typeof []             // returns object
    - typeof doesntExist    // returns undefined

- Object.is()
    The Object.is() method determines whether two values are the same value.
    Object.is(1,"1")            // false
    Object.is("A",'a')          // false
    Object.is(NaN, NaN)         // true

- emptiness:
    - undefined
    - undeclared
    - uninitalized TDZ (never declared or assigned a value, not allow to touch, introduced in es6)

- special values (NaN):
    - before ES6
    1. NaN: 'not a number' but not really, invalid number
    2. NaN === NaN  returns false, the only value in javascript that's not equal to itself
    3. isNaN('string') ===> true,
        historical reason: checks if the vlaue is number before it check if the value is NaN.

    After ES6: Number.NaN() - Does not do Coercion, make sure it's a number first
    4. Number.isNaN('string') ====> false, for it to be NaN, it first has to be a number
    5. typeof(NaN) ===> 'number'

- special values (-0):
    - useful usage of -0 is to determine direction
    - use math.sign + Object.is() along with -0

#### Type Check Exercise: Object.is()



## coercion

- Abstract Operation
    - toString()
        takes the value and turns to a string form
        invokes toPrimtive operation with the string hint, what it means is
        : toString() ----> if it's present, then use valueOf()

        input                   output           status
        -----------------------------------------------
                const arr = [null, undefined];
                arr.toString() // "1,2,3"
        -----------------------------------------------
        null                    "null"          normal
        undefined               "undefined"     normal
        true                    "true"          normal
        false                   "false"         normal
        3.14                    "3.14"          normal
        0                       "0"             normal
        -0                      "0"             strange : missing -
        ------------------------------------------------
        []                      ""              strange : no [] symbol
        [1,2]                   "1,2"           strange : no [] symbol
        [null, undefined]       ","             strange : no [] symbol
        [[],[],[]]              ",,"            strange : no [] symbol
        [,,,]                   ",,,"           strange : no [] symbol
        ------------------------------------------------
        {}                          "[object Object]"   strange: has [] symbol
        {a:2}                       "[object Object]"   strange: has [] symbol
        {toString(){return"x";}}    "x"                 normal: the return value
        ------------------------------------------------


    - toNumber()


    - toBoolean()
        falsy           truthy
        ----------------------
        ""              "foo"
        0, -0           23
        null            {a:1}
        isNaN           [1,3]
        false           true
        undefined       function(){...}
                        ....
        -----------------------
        anything that's not on the falsy list, converts to true

- Cases of Coercion

    - 'there is a ${foo} in there' : anything that's in ${..} that is not a string will be converted to string

    - toNumber shorthand + : +'161' ---> 161

    - corner cases of coercion




## scope

- definition: where to look for things
    - what are we looking for?
    - receive assignment or retrieve value from variable,
        there are only two cases
            1. x = 43               receive
            2. console.log(y)       retrive
    - complied / parsed language ? instead of dynamic(top down, line by line)
        proof: if there is an error on line 10, you get an error before line one executed.

    - the principle of least exposure: you should default keeping everything private and only expose the minimal necessary
        - IIFE (it prevents function from creating its function scope by wrapping '()', because function is a keyword that for it  to create function scope, it has to be presented at the beiginging of a statement )
			- IIFE can be used anywhere where you need an experssion, and anytime you need a statement or a scope in an experssion position.
			- make try/catach statement into an experssion by wrapping a function experession
						var teacher = (function getTeacher(){
							try {
								return fetchTeacher(1)
							}
							catch{
								return "Kyle"
							}
						})()
			- expression: returns a vlaue
			- statement: instructions that runtime will execute
			- [JavaScript Expressions and Statements](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74)


- Block Scoping
	- "{ } +  let / const " combo
		- {} declares a block
		- let / const declares variables in that scope
		- !!! block are not scope until there is a let or const inside of them !!!

	> A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

- Const: a variable that can be re-assigned
	- can't re-assign value BUT, can re-assign Property of the value.

- Hoisting
	language convention to discuss lexical scope ≈  the verb of lexical scope!

	Definition: Whenever JS execution engine entered a scope, it first magically finds all the variable declaration and makes variables for them, moves them on top of the scope before execution.
		- let name = function fnName () {...}
		  	-  name is hoisted but fnName is not!

		- var hoist example:
			var teacher = "kyle"
			printTeacher()
			function printTeacher(){
				console.log( teacher) // undefined
				var teacher = "suzy"  // because it got hoisted again!
			}
			-----------------------------------------------------------
			var teacher = "kyle"
			printTeacher()
			function printTeacher(){
				console.log('print',teacher) // kyle
				teacher = "suzy"
			}

	- let does hoist !!!! but don't initialize
		let/const hoist to a block, 	**initialize** value as undefined
		var hoist to a function,  		creates a loc in memory, but not **initialized**
			- this is because of "const", since const doesn't allow re-assign! --> the developers decided to do the same for let




## Closure

Definition by oberseveation: when a function rememebers its lexical scope ***even when the function is executed outside the lexical scope!***

- function has closure over variable of parent function (scope).

function ask(question) {
	setTimeout(function waitASec(){
		console.log(question)
		console.log('waitASec has ***clousre over the vairable*** question')
	},100)
}
ask('what is closure')


Closure is NOT per-variable-based, but scope-based operation!

	example of for loop:
	for( var i = 0; i < 4; i++){
	let j = i;
	setTimeout(function print(){
		console.log('it is',j, i)		// 0 4
										// 1 4
										// 2 4
										// 3 4
	},100)
	}



## Modules

- Name space Pattern / primitive data structure
	var obj = {
		foo = '...'
		as(a) {...}
	}
	obj.as(....)

- Module: encapsulation requires (**hiding** data and behaviour = private API), the data of a module is held by its methods via closure!
	- its purpouse is to minimually expose data that's necessary.

- Singleton : IIFE
		var obj =(function abc(x){
			var public = {  };
			return public
			...
			function private(y){  	// the priviteAPI is held by its methods via closure
				console.log(x,y)	// the function private has closure over the variable x
			}
		})('a')

		obj.private(...)

- Module factory
		function abc(x){
			var public = {...};
			return public
			...
			function private(y){  	// the priviteAPI is held by its methods via closure
				console.log(x,y)	// the function private has closure over the variable x
			}
		}
		var a = abc(...)
		a.private(...)

- ES6 Modules

	- *** .mjs  file for ES6 Modules to work! ***
		- export: (.mjs)
				var x = 'xxx'						// private
				export default function a (s) {		// public
					console.log(x, s)
				}
		> everything that you export are public, everything else is private
		> .mjs is per-file based! and a singleton, it only runs once!

		- import
			import ask from "something.mjs"				// java style import
			import * as something from "something.js" 	// name space import

- Module exercise and solution --> get an idea of how it is done in actual code

## This

> A function's **this** references the **context** for that call. determined entirely by **how** the function was called.
>
> A **this-aware** function can thus have a different context each time it's called. which makes more flexible & reusable!

### Implict & Explicit binding
- implict binding: object.method1()	---> binds to object

- dynamic binding: object1.method1() ---> binds to object1
					object2.method1() ---> binds to object2

					// method1 is defined outside object1 & object2, and then passed to them.

- explicit binding: method.call(object1, ...)
					method.call(object2, ...)

					// method is defined outside object1 & object2. it has nothing to do with object1&2

>	Note: This function is almost identical to apply(), except that call() accepts an argument list, while apply() accepts a single array of arguments
					func.apply(this, ['eat', 'bananas'])
					func.call(this, 'eat', 'bananas').

- hard binding: object1.ask.bind(object1)
					// does not call the function, but produce a new function that's always bind to this object.

- new binding: invoke a function with a new empty object, NOTE: this is part of what new does!

- order of important : new > call/apply/bind(uses apply) > on context obejct > golbal (except strict mode)

### New

- what does NEW do, and what are the steps:

	- MDN
	[new opertator, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

	1. **create** a new empty object
	2. **link** the newly created object's [[prototype]] to the function's prototype property.
	> Note: Properties/objects added to the constructor function's prototype property are therefore accessible to all instances created from the constructor function.
	3. **execute** fn and ** bind ** the newly created object as ** this ** (all the reference in the constructor fn is now pointing at the newly created object)
	4. **return** --> non-primitive(a)  		---> return a as the result of new expression
				  --> primitive or nothing 	    ---> the newly created object is returned
	> Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.

	- kyle:
		1. create a brand new object
		2. *link that object to another object
		3. calls the function (with this set to the new object)
		4. if function does not return an object, return "this"

> lexical this: arrow funcitons doesnt have "this" word, when used this inside an arrow function, runtime will not find "this" inside arrow function's scope, and therefore go up the chain till there is one, which is determined by a function call.

- resolving this arrow functions

	only use => arrow functions when you need lexical this


### Class

- class example:
	class Workshop {
		constructor(teacher){
			this.teacher = teacher
		}
		ask(question) {
			console.log(this.teaacher, question)
		}
	}
	var a = new Workshop("kyle")
	a.ask("is a fat bitch")

- extend example:

	class AnotherWorkshop extends Workshop {
		speakup(msg){
			this.ask(msg)
		}
	}

	var b = new AnotherWorkshop('john')
	b.speakup ("is not a fat bitch")

- Super. keyword in same name function (child and parent) example:

	refer to the partent function with the same name

	class AnotherWorkshop2 extends Workshop {
		super.ask(msg)	// refer to parent from child using super. ,if they have the same name
	}

	var c = new AnotherWorkshop2('john')
	c.ask ("is not a fat bitch")

> super has to be on top!



## Prototype

- object are built by "constructor calls" (via new)
- A "constructor call" makes an object "

> Arrow functions doest not have a prototype property on it.

 prototype shadowing: to override the parent's method and extends it. (needs shadowing)
					  to super to use the parent version

- class system:
	- classical inheritance :  **copy** 	  --> eg: Java
	- prototypal inheritance : **link**   	  --> eg: Javascript  ---> behavior delegation system NOT class system


- delegation design pattern:

	peer to peer.