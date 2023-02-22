# Functional-Light JS ( 10 hrs )
> Topic: functional programming
## Functions (2hr 10mins)
> function programming is not all about the function key word!

### Functional Purity
> in this section, the key aspects are: 1. what is a function, what's a pure function, what is side effect, how to contain side effects
#### Function VS Procedure
- A function need to have input and return output
- if there is not a return keyword, it is not a function.
- function can only call other functions, if  a 'Function' calls a 'Procedure', than the 'Function' becomes 'Procedure'
- example below are 'Procedures'
    ``` javascript
    function a (x=0){
        console.log(x+1)
    }
    function b (x=1, ...args){
        return a(x,40, ...args)
    }
    function c (x = 2) {
        return 40 // the input and output doesn't have a semantic relationship
    }
    ```
#### Semantic Relationship
- Function needs to have **semantic relationship** between input(**direct**) and computed output(**direct**).
    - input via param, output via return

#### Side Effects
    - changing state outside the function
    - I/O:console,files,etc
    - Database Storage
    - Netwrok calls
    - DOM
    - TimeStamps
    - Random Numebrs

#### Pure Functions & Constant*
not taking in state from outside the function, that might not be constant in the program.

#### Reduce surface area**
``` javascript
function outer(z){
    return function inner(x,y){
        return x+y+z
    }
}
outer(1)(20,21)
```
#### same input = same output

#### Function purity
> level of confidence

#### Extract Impurity
> make side effect happen else where

#### Contain Impurity*****
> reduce surface of side effect
- **wrap function** to contain side effect : pollute only a function is better than pollute global scope :
- **Adapter**(6steps below): if nothing else works:
    1. save current state
    2. set up appropriate initial state
    3. call side effect
    4. capture new state
    5. restore old state
    6. return captured state
    ``` javascript
    var students = [
    	{ id: 491, name: "Ally" }
    ];
    function sortStudentsByID() {
    	//Side effect fn
    }

    function  getStudentsByID (curStudents){
        var origStudents = students.slice(0);  // 1
    	   students = curStudents.slice(); // 2
        var newStudents = sortStudentsByID(); // 3 & 4
        students = origStudents; // 5
        return newStudents; // 6
    }
    ```

函数定义:
1. takes input
2. returns output
3. input and output needs to have a relation
4. the input and output has to be direct
5. or indirect but they are not changing
6. same input same output
7. 'replace the function call with the returned value, without effecting the result of the programm!'
8. 且不能调用其他非函数(procedure)，
9. 函数不能有(要避免)side effects
10. 纯函数
11. 避免副作用/限制副作用

### Argument Adapters (Input)
> all baout Inputs and using High order function to change arguments
#### Function Arguments
- Unary Function: one argument
- Binary Function: two arguments
- N-nary Functions: other functions

#### Argument Shape Adapters****
- Higher Older Functions: A function that returns or receives a functions is called a Higher Older Functions
- Use Higher Older function to adjust the shape of the a function (what passed in and what returns out, aka return arguments)
#### Flip & Reverse Adapter
- takes in an fn and returns an fn that change the order of the arguments in the functions.
- Flip: flips the first two arguments.
- Reverse: Reverse the entire argument list order
#### Spread Adapter
- the adapter function that uses ... to break down the array arguments into indi arguments.
- In most Libraies, this util is called 'apply'
- unspread is called 'unApply'

### Point Free
> creating functions with existing functions.
#### Equational Reasoning
> same shape means interchangable

    ```javascript
    // eg1:
    getPerson(
        function onPerson(person){
            return renderPerson(person)
        }
    )
    getPerson(renderPerson)

    //eg2:
    function output(txt){
        console.log(txt)
    }
    var output = console.log.bind(console)

    ```
#### Point Free Examples
    ```
    function isOdd(v){
        return v % 2 == 1
    }
    function isEven(v){
        return !isOdd(v)
    }
    ```
## Closure (1h 6 mins)
- Closure is when a function 'remembers' the variables around it even when function is executed elsewhere.
- Closure is not necessarily functionally pure, but closure can absolutly being used in functional programming.
- The variable a function has closure over, can not be reassigned! because: then we are not closing over an constant but an changable state.
```javascript
// returning the latest 'str update' that has the value of the closing over-ed variable
function strBuilder(str){
    return function next(v){
        if(typeof v == 'string'){
            return strBuilder(str + v)
        }
        return str
    }
}
function strBuilder(str){
    return function next(v){
        if(typeof v == 'string'){
            str += v
            return next()
        }
        return str
    }
}
```
### Lazy VS Eager Execution
-  Lazy (Deferred), deferring that work by putting it into a function and defer it till the function gets called.
- The actual **code that need to be executed** in the function is called **immediately** is **Eager** Execution.
- There are benefits and downside for lazy and egar.
- The benefit of egar execution is the code being executed once, but that code might never get called which is a waste. to choose lazy or eager is situational. vis versa for lazy execution.
### Memoization
- Memoize: for pure functions, same input gives same output, check [all the inputs], if the input has been passed before, return the cached output.
    - Solves'The **danger** of lazy execution in FP', which is **mutating the state of closed over value**.
    - The **cost** of memoization : cached, internal memory
    - from **third party library**
> when cache the value inside closure, there is the danger of the function not being pure !
### Rrerential Transparency *** Re-defined Pure function
 - A function call is pure if it has Rrerential Transparency,
 - Rrerential Transparency: replace 'the function call' with the 'returned value' of 'that function call ' without effecting the rest of the program
### Generalized to Specailaized
- Clear relationship between functions
- More readable
- Parameter Order: General --> Specific
``` javascript
// From:
function ajax(url,data,cb){/*...*/}
ajax(customer_api,{id:42},renderCustomer)
// To:
function getCustomer (data,cb){
    return ajax(customer_api, data,cb)
}
getCustomer({id:42},renderCustomer)
// To:
function getCurrentUser (cb) {
    return getCustomer({id:42},renderCustomer)
}
getCurrentUser(renderCustomer)
```
### Partial Application & Curring
- Partical: third party util
- Partical: produce a function with preset value (Partial applied input)
- Manual Curry: Nested functions
- Curry: third party libray, curry a function
    ``` javascript
        var ajax = curry( 3, function ajax(a,b,c) )
    ```
### Partial Application & Curring Comparison
- Both: specalizeation techniques.
- Partical Application: preset arguments.
- Currying: recevive arguments one at a time.

### Changing Function shape with currying
- the shape: the input/output
``` Javascript
// From:
function add (x,y) { return x + y }
[1,2,3].map(function addOne(v){
    return add(1,v)
})
// To:
add = curry(add);
[1,2,3].map(add(1))
```
## Composition (36 mins)
> one function's output being another function's input!
- pipe fn: left -> right
- Composing fn: right -> left (js' way)
- Composition is more convient for uniary functions, 'because fns normally produce just one output'
- Use curry methods to make binary fns a uniary, then compose those Uniary fns.

## Immutability (53 mins)
- Assignment Immutability : const / var
- Const Immutability
- Value Immutability: value that's not changed unexpectly
- read only data structure VS immutable data structure
  [Immutable vs Read-Only Data Structure in JS](https://blog.bitsrc.io/the-case-for-immutability-in-javascript-345de3022219)
- Object.freeze: one layer / used when passing value to other places (function calls).
- Dont mutate, but copy (...)
- Immutable Data Structure  ( data that need to be changed but to be changed in a controlled way )
- [Immutable.js](https://immutable-js.com/)

## Recursion (1h 6 mins)
 ``` javascript
function isVowel (char) {
  return ['a','e','i','o','u'].includes(char)
}
// From: iterative approach
function countVowel(str){
    let count = 0
    for(let i = 0; i < str.length; i++){
        isVowel(str[i])? count++ : count
    }
    return count
}
// To: recursive approach
function countVowel(str) {
  if(str.length == 0 ) return 0
  var count = (isVowel(str[0])? 1: 0)
  return count + countVowel(str.slice(1))
}
countVowel('aeixxxx')
 ```
- Trampolines
- 13 call stack layers max -> maxium callstack
-
## List & Data Structure code ( about 3 hrs )
### List Operations
### Transduction
### Data Structure Operations

## Async (18 mins)

## Functional JS Utils / FP Libraries (12 mins )
