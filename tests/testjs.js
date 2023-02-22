var str ='Hello'
str.padStart (5)                //'Hello'
str.padStart (9, 'Say')        // SayHello
// var a = str.padStart (8, 'Say')        // SayHello
console.log(str.padStart (5)  )
console.log(str.padStart (8, 'Say').padEnd(9,'!') )
// console.log(a.padEnd(9,'!'))