/** @format */
let x
let y
var factorial = (n) => (n <= 0 ? 1 : n * factorial(n - 1))
let sum = 0
for (x = 0; x <= 11; x++) {
	for (y = 0; y <= 11; y++) {
		if (x + y === 11) {
			sum = sum + factorial(11) / (factorial(x) * factorial(y))
		}
	}
}
console.log(sum)
