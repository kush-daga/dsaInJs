/** @format */

function mergeSortedArrays(array1, array2) {
	const mergedArray = [];
	let array1Item = array1[0];
	let array2Item = array2[0];
	let i = 1;
	let j = 1;
	//Check Input
	if (array1.length === 0) return array2;
	if (array2.length === 0) return array1;

	while (array1Item || array2Item) {
		console.log(array1Item, array2Item);
		if (!array2Item || array1Item < array2Item) {
			mergedArray.push(array1Item);
			array1Item = array1[i];
			i++;
		} else {
			mergedArray.push(array2Item);
			array2Item = array2[j];
			j++;
		}
	}
	return mergedArray;
}

console.log(mergeSortedArrays([1, 3, 5, 9], [2, 3, 6, 10]));
