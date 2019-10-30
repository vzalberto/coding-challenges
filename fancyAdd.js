

// Can you implement add, such that it would satisfy `{}(2) === 3`.

const add = (a, b) => {
	return (b) => {
		return a + b;
	}
}

//console.log(add(3)(5))
