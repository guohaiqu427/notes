var position, count, seedSorted, basePair, firstGeneration
var seedsRandom = []
function generateClone (){
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
generateClones(50)
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
function findAllGreen(primary,source){
	let crossBreedArr = [primary]
	let outcome
	for(let i = 0; i < source.length; i++){
		crossBreedArr[1] = source[i]
		for(let j = 0; j< source.length; j++){
			crossBreedArr[2] = source[j]
			for(let k = 0; k< source.length; k++){
				crossBreedArr[3] = source[k]
				outcome = crossBreed(crossBreedArr) //[falseCount, crossBreedResult]
				if(outcome[0] == 0) return [outcome[1],crossBreedArr]
		   }
	   }
	}
}
function crossBreed(breedArray) {
	let geneByPos, variant, genePositive, maxValue
	let falseCount = 6
	let crossBreedResult = []
	for(let i =0; i < 6; i++ ){
		let crossBreedResultByPos = []
		geneByPos = [0,0,0,0,0]
		breedArray.forEach(seed => {
			variant = (seed[i] == '5' || seed[i] == '1') ? -.6 : .5
			geneByPos[seed[i]-1] += variant
		})
	    genePositive = geneByPos.map(item=> Math.abs(item))
		maxValue = Math.max(...genePositive)
		if((genePositive.indexOf(maxValue)+1 != 5 && genePositive.indexOf(maxValue)+1 != 1 )) falseCount--
		for(let j =0 ; j < 5; j++){
			if(genePositive[j] == maxValue) {
				crossBreedResultByPos.push(j + 1)
			}
		}
		crossBreedResult.push(crossBreedResultByPos)
	}
	return [falseCount,crossBreedResult]
}
function defineBase(){
	let result 				//todo: sort the function
	let basePair =[]
	for(let i=0; i<seedSorted.length; i++){
		let reds = countRed(seedSorted[i])
		let greenMark =[0,1,2,3,4,5]
		let basePair = seedSorted
		for(let property in reds){
			if(property != 'count'){
				greenMark = greenMark.filter(gene => gene != property)
				basePair = basePair.filter(item => item.charAt(property) != String(reds[property])) 	// x
			}
		}
		result = findAllGreen(seedSorted[i], basePair)
		if(result) return result
	}
}
function stepOne(){
	let fakeResult = []
	sortClone()
	firstGeneration = defineBase()
	console.log({
		'result':firstGeneration[0],
		'seeds': firstGeneration[1]
	})
	// for(let i = 0; i<6; i++){
	// 	for(let h = 0; h<2; h++){
	// 		fakeResult.push(firstGeneration[0][i][0])
	// 	}
	// }
	// console.log(...fakeResult)
}
stepOne()