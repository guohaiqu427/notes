# The Hard Parts  - Will Sentance

## Javascript Principles

	- thread of execution, runs line by line, one command runs at a time!

	- save data in memory even functions, can not store commands, such as function calls.

	- everytime a function is called, a execution context is created.
		- everytime a file runs, a global execution context is created.

	- execution context includes:
		- a local memory + a thread of execution
		- the first thing that heppens in a function call, is to handle the params, store the value in local memory

	- call stack
		- keep track of function calls,
		- there is always a global() at the bottom of it

## Functions and Callbacks

	- order of execution:
		1. global memory
		2. call stack - global()
		3. execution context (per function) thread of execution + local memory
		4. call stacks (per function call)

	- in a function return, returns the value, not the key-value pair!

	- **leave a little bit of code TBD** ->  higher order functions -> passing function as arguments

	- In javascript, it is not allowed to pass a piece of code to excute as argument, but can be done via passing function with the code wrapped in it!

	- when for loop is running, it does not get its own execution context, instead it got its own protected name space!

	- function is first class object, which means they have everything that object has!

	- the outer function that takes in a baby function is called "the higher order function"

	- the callback function is the baby function passed in as argument!
		- the backbone of asynchornous function


## Clousure

1.  variables are not used or reference in a outer function of a returned function will be not be carried with the returned function.

2.  memeory leak: in the computer's memroy, with the label and values used that can never be referenced! wasting computer's memory space

3. defination:

	- variable enviroment = local memroy
	- backup: closed over variable enviroment: C.O.V.E
	- scope: defination: the rules in which tells what data is available to a line of code or function.
			- Javascript is lexical/static scoping!
			- where i save the function determines the rest of the life of that function, what data it will have access to, not where it runs, but where its created or saved!
			- lexical: means physical position on a page!
			- P.L.S.R.D = persistant lexical scope referenced data = backpack = closure

## Asynchronous Javascript

>	Javascript is not enough, the three main parts of javascript are: 	> 	1. thread of execution
>	2. memory / variable enviroment
> 	3. call stack
>
> 	but it is not enough to achieve async, the above mentioned 3 parts will resolve in synchronous Javscipt
>
> 	along with other things :
>	1. browser API / Node API
> 	2. Promises
> 	3. Eventloops, callbacks / Task-queue and micro-task-queue
>
> 	can ahieve Asynchronous Javascript!
>
> 	todo! search for javascript labels for browser APIs

## Promises

### facade functions:
- facade functions ( fetch ) does two things:
	1. in Javscript, creates a promise object
			{
				value: undefined,
				onfulfilled: [fn,...] <hidden>
			 }
	2. in web browser, http request
		- takes address and path
		- define http method, such as get and post ...
		- when response data comes back, stores in the value proptery <step1: javascript
		- trigger fns in onFulfilled/ onRejected automaticlly when data is filled in js
			- use .then(...) to pass fn, the argument is the data received

- mircoTaskQueue/微任务队列 vs callbackQueue/回调队列
	- mircoTaskQueue: function that's attached to the promise object, which is created by facade function will be store in mircotask queue (indirect, eg: fecth)
	- callbackQueue/TaskQueue: function that's directly passed to a facade function, will be passed to the callback queue (direct,eg: setTimeout)
	- order: callstack ---> microtask queue ----> callback queue

## Class & Prototypes
	Prototype chain - enables OOP

### four ways of achieving it
1. generate object with a function	(creates closure)
2. prototype chain method using Object.create(), passing common methods to object that's created  -----> underlying logic <------
3. use new key word to invoke constructor fn, use .prototype to add methos to prototype chain
4. use class "syntactic sugar"

### Object.create(null)

	The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

	- this cretes an empty object. even if the param is filled with data. it will still create an empty object.
	- the value put in create() method is always be put in __proto__

	all objects created are linked to Object.prototype, the ultimate prototype chian, after that is null, Object.prototype has a property called hasOwnProperty

	hasOwnProperty property can only verify if the the property name is on its own property list!

### new:
	- what does new do behind the sence:
	***new keyword alts execution context***
		1. creates a new object <this> inside the execttion context.

		2. return the object <this> and stick the stuff in <properties and hidden properties>

		3. link __proto__ property of "this" to the <class function>'s object part's hidden property prototype
			- in here: stores all the common functions

### class:
	- when declare a class, what it does it to create a "function<constructor> + object<functions> combo"
		- in essence: its just sytactic sugar

### functions:
for every function thats delared. an {} object is created and attached to the function. using '.' can access it. it has an default empty property called prototype : {}


