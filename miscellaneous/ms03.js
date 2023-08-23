// What will be the output?
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

// both yields un expected results //
// reason being Numbers in JavaScript are all treated with floating point precision //


// how to deal it in an interview //

// comment 1 = "Ok! I am not sure! but"
// comment 2 = "See I know that the numbers in js are treated with floating point precision"
// comment 3 = "considering this and me knowing JavaScript I think console.log(0.1 + 0.2 == 0.3); will not be true!!"
// comment 4 = "So, I think console.log(0.1 + 0.2); will not be 0.3 but what will it be?"
// comment 5 = "may be somthing around 0.3 but not 0.3"
// comment 6 = "js provide a small value to compare differnces in numbers we can use that" 

//Solution//
function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
	// num1 and num2 are considered equal within the tolerance provided by EPSILON
	//  Number.EPSILON is a predefined constant in JavaScript that represents the 
	//  smallest difference between two representable numbers in the JavaScript Number data type. 
	//  It's often used for comparison operations involving floating-point numbers to account for the 
	//  inherent limitations of representing real numbers in a binary computer system.

	// Floating-point arithmetic can lead to rounding errors due to the finite precision of the binary representation used to store numbers. 
	// Number.EPSILON provides a small value that can be used as a tolerance when comparing two floating-point numbers for equality.
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
console.log(0.1 + 0.2 === 0.3);
console.log(Number.EPSILON);
