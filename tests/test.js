var seedsRandom = []
var count = 0
var position = 0
var seedSorted = []
var basePair =[]
function generateClone (){
	const characters = "YGHXW"
	let result = ''
		for(let i=0; i<6; i++) {
			 result += (Math.ceil((Math.random() * 5)))
		}
  return result
}
function generateClones (num) {
 if(seedsRandom.length < num ) {
 		seedsRandom.push(generateClone())
   		generateClones(50)
 }else{
   return seedsRandom
 }

}
generateClones(50)	// generates 50 clones

function countGreen(toBeSearched) {
	count = 0
	position =0
	for(let i=2; i<5; i++){
		(function CountInside(gene){
			position =  toBeSearched.indexOf(gene, position)
			if(position == -1 ) {
				return
			} else{
				count++
				position++
			}
			CountInside(i)
		})(i)
	}
	return count
}
function countRed(toBeSearched) {	// todo: combine countGreen & countRed into One fn
	count = 0
	position =0
	redMap = {}
	for(let i=1; i<6; i+=4){
		(function CountInside(gene){
			position =  toBeSearched.indexOf(gene, position)
			if(position == -1 ) {
				return
			} else{
				redMap[position] = i
				count++
				position++
			}
			CountInside(i)
		})(i)
	}
	redMap['count'] = count
	return redMap
}
function sortClone(){
	let tmpObj = {seedGene1: [],seedGene2: [],seedGene3: [],seedGene4: [],seedGene5: [],seedGene6: [],}
	seedsRandom.forEach(item=>{
		countGreen(item)
		if(count!=0){
			tmpObj['seedGene' + count].push(item)
		}
	})
	seedSorted = [...tmpObj.seedGene5,...tmpObj.seedGene4,...tmpObj.seedGene3,...tmpObj.seedGene2,...tmpObj.seedGene1]
}
sortClone()
function defineBase(){	// first=el and second = base pair
	let result 				//todo: sort the function
	let basePair =[]
	// seedSorted.forEach(el=>{ //todo: here change to for loop and return when condtion is met
	for(let i=0; i<seedSorted.length; i++){
		let reds = countRed(seedSorted[i])
		let greenMark =[0,1,2,3,4,5]
		let basePair = seedSorted
		for(let property in reds){	// filters red
			if(property != 'count'){
				greenMark = greenMark.filter(gene => gene != property)
				basePair = basePair.filter(item => item.charAt(property) != String(reds[property])) 	// x
			}
		}
		result = findCrossBreed(seedSorted[i], basePair)
		if(result){
			return
		}
	}
}
defineBase()
function findCrossBreed(primary,source){
	let crossBreedArr = [primary]
	let outcome
	for(let i = 0; i < source.length; i++){
		crossBreedArr[1] = source[i]
		for(let j = 0; j< source.length; j++){
			crossBreedArr[2] = source[j]
			for(let k = 0; k< source.length; k++){
				crossBreedArr[3] = source[k]
				outcome = crossBreed(crossBreedArr)
				if(outcome == 0) {
					console.log(outcome, crossBreedArr, i, j, k)
					return crossBreedArr
				}
		   }
	   }
	}
}
function crossBreed(breedArray) {
	let result, variant, resultNew, match
	let falseCount = 6
	for(let i =0; i < 6; i++ ){
		result = [0,0,0,0,0]
		breedArray.forEach(seed => {
			variant = (seed[i] == '5' || seed[i] == '1') ? -.6 : .5
			result[seed[i]-1] += variant
		})

	    resultNew = result.map(item=> Math.abs(item))
		if((resultNew.indexOf(Math.max(...resultNew))+1 == 5 || resultNew.indexOf(Math.max(...resultNew))+1 == 1 )) {
		}else {
			falseCount--
		}
	}
	return falseCount
}
function printSuccess(sourceClones){
	console.log('source:',sourceClones)
}
// 50/50 check