/*
Recibe un array de palabras
devuelve un array de palabras agrupadas en anagramas
*/

function anagramFinder(arr) {
	groups = {}

	for (word in arr){
		if(groups[arr[word].split('').sort().join('')] == undefined){
			groups[arr[word].split('').sort().join('')] = [arr[word]];
		}
		else{
			groups[arr[word].split('').sort().join('')].push(arr[word]) 
		}
	}
	console.log(groups)
	return Object.values(groups)
}

str = ['ana', 'naa', 'choo', 'fun', 'nuf']

console.log(anagramFinder(str))