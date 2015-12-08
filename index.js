function countZeroes(base, number){
	return number === 0 ? base+1 : base;
}

function reduce(combine, base, array){
	array.forEach(function(element){
		base = combine(base, element);
	});
	return base;
}

console.log(reduce(countZeroes, 0, [1, 0, 0, 1, 0, 1]));
