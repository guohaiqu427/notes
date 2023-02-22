function countGreen(toBeSearched) {
	count = 0
	position =0
	for(let i=2; i<5; i++){ // count green genes in clone: which is repesented by 2 3 4
		(function CountInside(gene){ //recursive IIFE to count each green gene occurance in clone
			position =  toBeSearched.indexOf(gene, position) // starting from which index to search
			if(position == -1 ) {
				return
			} else{
				count++
				position++
			}
			CountInside(i)
		})(i)
	}
	console.log(count)
	return count
}
countGreen('123452')