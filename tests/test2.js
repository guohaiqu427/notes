// let testArr = [[ [ 4 ], [ 3 ], [ 3 ], [ 2, 3 ], [ 2 ], [ 3 ] ], [ '413343', '453222', '231233', '433325' ]]
var testArr2 = [[ [ 4, 2], [ 2,4 ], [ 4 ],[ 4], [ 3, 2 ], [ 3, 4 ]],  [ '413343', '453222', '231233', '433325' ]]
let resultsCollection = []

// total collection -- start
function reducer(previous, current) {
  let returns =( previous.length ? previous.length : previous) * current.length;
  return returns;
}
let total = testArr2[0].reduce(reducer)
for(let k=0; k<total; k++){
	resultsCollection[k]=['','','','','','']
}
// total collection end


let repeat = 1
for(let i=0; i<6; i++){
	repeat = repeat * testArr2[0][i].length
	console.log(repeat)
	for(let k=0; k<total; k++){
		console.log('index is:', k, 'repat is:', repeat,total )

	}
}
console.log( resultsCollection)


// 	// let choosefrom = Math.ceil(k/((total)/testArr2[0][i].length)) -1
	// 	// if(typeof(resultsCollection[k]) != 'undefined'){
	// 	// 	resultsCollection[k][i]=testArr2[0][i][choosefrom]
	// 	// }