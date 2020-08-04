/**
 * @format
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
	let complements = {};
	for (let i = 0; i < nums.length; i++) {
		element = nums[i];
		var complement = target - element;
		if (complements[target - element] !== undefined) return [complements[target - element], i];
		complements[element] = i;
	}
	return "Not found";
};

console.log(twoSum([2, 7, 11, 15], 9));
