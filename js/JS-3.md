# Javascript: The new hard parts - Will Sentence
>1. Foundation of javascript
>2. Asynchronous Javascript
>3. Iterators
>4. Generators & Async/Await

## Asynchronous web API（nothing new!）
- Facard function such as ```setTimeout(fn.0)``` is calling web API & it has nothing to do with the javascript execution thread! It comes back to javascript when callstack is empty

- Callstack is a javascipt engine feature

- Promises and ```fetch``` does something more, it **returns a promise object to js**, it has a property of **value** on it, which is undefined by default, it will be **filled automaticlly** when the data comes back from ```fetch()```, and it has a hidden function array, onfulfillment and onRejection. it will be ***triggered automaticlly*** when data come back, ***with the returned value as the parameter***,
- The function in the ```onfulfillment:[fn]``` is called 'javascript' not in 'web browser'

- .then(fn) : adds fn to the ```onfulfillment:[fn]``` , the fn is placed in the **mircotask queue(job queue)**

> job queue = maicrotask queue = ```.then(fn)```
>
> task queue = callback queue = marcotask queue = ```setTimeout(fn,0)```

## Promise
- Promise Object: special built-in js object, when data is returned from fetch of js & it attaches fns to it's properties via ```.then()```
``` javascript
	{
		value: '';
		onfulfilled: [fn]
	}
```
- onCompletion of ```fetch()```, fills data in ```vlaue:''```:

- promise object's fns are placed in the micro-task queue

- onReject can be passed by t.then( , rej) or .catch(rej)


## Iterators

### Function Returns Function

``` javascript
function createNewFunction(){
	function add2 (num){
		return num + 2
	}
	return add2
}
const newFunction = createNewFunction()
const result = newFunction(3) //5
```
>Q: how can we call 'add2' outside createNewFunction?
>
>A: function add2 is return and store in global memory with the label 'newFunction'

### Return Next Element of Array via Function

``` javascript
function createNewFunction(array){
	let i = 0
	function inner(){
		const element = array[i]
		i++
		return element
	}
	return inner
}
const returnNextElement = createNewFunction([4,5,6])
const ele1 = returnNextElement() //4
const ele2 = returnNextElement() //5
```
- Closure: when inner is returned to global memeory,  it brings its context with (backpack), which is the ``` i  & array ```

## Generator

 > Generator function's core logic is 'Function returns another function'. the only different is: the outer functions returns an Object with ```next``` method, instead of returning a funciton.

```javascript
function createFlow(array){
    let i = 0
    const inner = {
                    next: function(){
                            const ele = array[i]
                            i++
                            return ele
                          }
                    }
}
const returnNextElement = createFlow([4,5,6])
const ele1 = returnNextElement.next() // 4
const ele2 = returnNextElement.next() // 5
```
### Built-in Generator Function
```javascript
function *createFlow(){
    yield 4
    yield 5
    yield 6
}
const returnNxtEle = createFlow()
returnNxtEle.next()
```
- The built-in iterator produces next element in the format <br> ```{ value: 4; done: 'false'}```
- even if the ```next``` is a method in an object, it still has closure over createFlow's context.
- [[scope]] hidden property is where the backpack lives.
- The backpack is attached to the method:```next```
- what each line does:
    - ```const returnNxtEle = createFlow()``` : creates a variable called returnNxtEle and stores in it the result of createFlow(),
    - ```*createFlow()```: **DOES NOT** going to execution context! **INSTEAD**: returns generator object: ```{ next:fn }```
    - ```returnNxtEle.next()```: going to execution context of createFlow()
    - ```yield```: suspends functions

### Generator Function with Dynamic Data
```javascript
function *createFlow(){
    const num = 10
    const newNum = yield num        //point1
    yield 5 + num
    yield 6
}
const returnNxtEle = createFlow()
const ele1 = returnNxtEle.next()                    // 10
const ele2 = returnNxtEle.next(2)   //point2        // 7
```

- point 1: newNum is never assigned a value, since ***yield*** has suspended the function.
- point 2: The ***argument*** passed to .next() will be passed in ***as the result of the previous yield***, and use that as base to continue where the function was suspend.

### Async Generator
```javascript
function doWhenDataReceived (value){
  let valueJson= value.json()  // 4
  returnNxtEle.next(valueJson) // 5
}
function *createFlow(){
    const valueJson = yield fetch('https://meowfacts.herokuapp.com/') //1st part
    valueJson.then(data=>console.log(data.data[0])) // 2rd part
}
const returnNxtEle = createFlow()   // 1
const futureData = returnNxtEle.next()  // 2
futureData.value.then(doWhenDataReceived) // 3
```
1. creates generator object  {next:fn, done:false}
2. calls first yield(fetch)  { value: promise,done:false}
3. = promise.then()
4. format data
5. calls the second part of createFlow

### Async Await

> Simplifies the Async Generator function
>
> What async/await does is in/out of the execution context of createFlow() automaticly
>
> Return to data with the value of the yeild experssion.

```javascript
async function createFlow(){
    const data = await fetch ('https://meowfacts.herokuapp.com/')
    console.log(data) // response
    console.log(data.json()) // promise
    console.log(data.json().then(a=>console.log(a.data[0])))
}
createFlow()
```