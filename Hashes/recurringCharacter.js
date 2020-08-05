/** @format */

//this method wont work for [2,5,5,2,3,3,4,5]
function firstRecurringCharacter(input) {
	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			if (input[i] === input[j]) {
				return input[i]
			}
		}
	}
	return undefined
}

function try2(input) {
	let map = {}
	for (let i = 0; i < input.length; i++) {
		if (map[input[i]]) {
			return input[i]
		} else {
			map[input[i]] = 1
		}
	}
	return undefined
}

// console.log(firstRecurringCharacter([1, 2, 3, 4, 5, 1, 4, 2, 3]))
console.log(try2([1, 2, 3, 4, 5, 1, 4, 2, 3]))
