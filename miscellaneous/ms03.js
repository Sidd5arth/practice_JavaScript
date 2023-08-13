console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

// both yields un expected results //
// reason being Numbers in JavaScript are all treated with floating point precision //

function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));