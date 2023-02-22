
# JavaScript: The Recent Parts
**Overview**
> Template String 
> String padding/trimming
> Destructuring
> Array methods: 
> Iterators & Generators [ not included in this note]
> RegExp improvements
> Async/Await
> Async*/yield await

## Template String
Inside ````${...}````, it can be any expression, not just variable names, such as function calls, operators....

msg1 is a primitive value, same as msg.

```javascript
var title = "The Recent Parts"
var msg ="the title is:" + title
```

```javascript
var msg1 = `the title is: ${title}`
```
### Tagged templates
> pre-processed brefore string is produced.
> Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.
> You will have to write those tagged functions yourself. But also find it on github

```javascript
var amount = 12.3
var msg2 = formatCurrency
           `the amount is: ${amount}`
function formatCurrency (strings, ...values){
...
}
```
- [ ] Create your own tag function, turns string into uppercase

### String padding & String Trimming
padStart padEnd trimStart trimEnd
```javascript
var str ='Hello'
var someText "     some stuff                \t\t"

str.padStart (5) //'Hello'
str.padStart (8, 'Say') // SayHello
str.padStart (8, 'Say').padEnd(9,'!') // SayHello!

someText.trim() //"some stuff"
someText.trimStart() //"some stuff     "
someText.trimEnd() //"   some stuff"
```

## Destructuring

Destructuring is breaking a structure **into** its **individual parts**, is about the **assignment** not declarationm, is an **declartive approach.**

### The pattern 
> the **left** side of the '=' sign is a **pattern**, not an arry of objs, that is a syntax that describes what it expects as input.

### Swape Values & Assignment Target

```javascript
[a,b]= tmp = apiCall()
tmp = [a,b] = apiCall() 
```
- In both cases, tmp points at the **entire** value of the returned result.

### Default Values

1. ```function ([a,b] = [])```: Params Default to prevent type error
2. [a,b = 'defaultValue'] = [1]
3. ```function data({a,b}={},c){}```: can have extra params.
4. Default Value Best practise: Give default value directly to the key, not nested in obj or array
```javascript
// Dos: if b or c is missing in sourceObj,it will have default value 
var a: {
        b = 10; 
        c = 20; 
       } = {} = sourceObj
  
// Donts:  this default value of b & c will only take place when the sourceObj is undefined.
var a: {
    b ;
    c ; 
    } = {
    b:10;  
    c:20;
    } = sourceObj
```

### Named arguments with default value
```Javascript
function a(store= "john", id=-1){}
a(id:42)
```
### Obj Destructuring
``` javascript
var [
        {
            name: firstName = 'john doe',
        // [key]: [variableName] = ['default value'],
        }
    ] = apiCall()
```
### Obj Destructuring CherryTopping
1. obj destructuring needs to be wrapped in **({...})**, otherwiese it will be treated as scope declaration. (if { is the first characterin the statement.) 
2. object destructuring that returns value to the same property name can have a **shorthand** ```let { a : a } = { a: 1} ``` is the same as ``` let {a} = {a:1}```
3. object destructuring can 'quote property multiple times.'
    ```javascript
    var obj = [
        a,
        b,
        c
    ] = [1,2,3]
    
    var {
     a: a
     a: b
     a: c
    } = {a:'x', b:'y'}
    ```

## Reg Exp
[MDN Reference](MDN:Character%20classes,Accerstions%20....)
The key concepts introduced in this part includes: 
**lookahead**, **lookbehind**, **assertion**, **named capture group**

### Usage 
```exec()``` and ```test()``` can be used within different methods of String.

### Concepts* 
```^(T|t)``` : begining, assertion
```(T|t)$``` : end, assertion
```(.at)```  : anything, one character,use \if need to match. 
```(at.)```   
```X(?=Y)``` : + lookaheads, assertion
```X(?!Y)``` : - lookaheads, assertion
```(?<=Y)X```: + lookbeinds, assertion
```(?<!Y)X```: - lookbeinds, assertion
```\s```: space
```\d```: match integer number
```\b```: Matches a word boundary. 
```/s``` : Multi line 
```(/[lw]o/g)```:match o that after l or w with `[lw]`
```()```: create group
```(?<name>l.)```: name a group
```\k<name>```: use the group in reg
```-$<name>-```: use the group to replace

### Named Capture Group & Back References
> Re-use previous matching rule, and give that rule a name!
1. by default the the match result is [group 0]
2. by adding () around a match result creates [group#]
3. by adding (?<name>l.) give group name [group:name]
4. use cap rule in reg: \k<name>
5. replace using: -$<name>-

## Iteraotor & Generator
1. most things in javascript can be iterated. strings, arrays, sets, maps...
2. for of loop is using the iterator approch. 
3. ...operator uses the iterator approch ```[...arr],[...str]```
4. object is not iterables
5. custom generator, return values are not inlcuded in [...main()], remember to always yield value, not return value

## Async & Await
await only promises
await only in async
cant not cancel 
cancel ajax calls with cancelation token.

async generators

```javascript 
async function *fetchUrl(urls){
    for(let url of urls){
        let res = await(fetch(url))
        if(res.status == 200) {
            let text = await(res.text())
            yield text.toUpperCase()
        }esle{
            yield undefined
        }
    }
}
```

```javascript
//'for await of' loop async generator iteration
async function main(urls){
    for await(let txt of fetchURL(urls)){
        console.log(txt)
    }
}
```
