const isPermutationOfPalindrome = (str) => {
	//Lo primero es eliminar espacios y almacenar la longitud de la cadena
	str = str.replace(/\s/g, '');
	const n = str.length

	const charmap = new Map()

	// Se realiza un conteo de caracteres
	for(let i = 0; i < n; i++){
		charmap.set(str[i], charmap.get(str[i]) + 1 || 1);
	}

	// Todos son palindromos hasta demostrar lo contario
	let isPalindrome = true;

	// Si la cadena tiene longitud par, cualquier caracter que presente una cantidad impar, significa que no tenemos un palíndromo 
	if (n % 2 == 0){
		charmap.forEach((el) => {
			if ( el % 2 != 0 ) isPalindrome = false;	
		})
	}

	// De tener una longitud impar, podemos tener un y sólo un caracter impar
	
	let hasFoundOddCharacterCount = false;

	charmap.forEach ( (el ) => {
		if ( el % 2 != 0 ) {
			if ( hasFoundOddCharacterCount )
				isPalindrome = false;
			else 
				hasFoundOddCharacterCount = true
		} 
	})

	return isPalindrome;
}

console.log(isPermutationOfPalindrome (process.argv[2]))