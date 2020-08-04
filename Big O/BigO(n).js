/** @format */
const nemo = ["nemo"];
const large = new Array(100).fill("nemo");
const xlarge = new Array(1000000).fill("nemo");

function findNemo(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === "nemo") {
			console.log("Found Nemo");
		}
	}
	console.log("The call to this function took", t1 - t0, "Milliseconds");
}

findNemo(nemo); //took 2 milliseconds
findNemo(large); //took 3 milliseconds
findNemo(xlarge); //took 10567 milliseconds

// findNemo takes linear time to find nemo, so its called O(n).
// So it depends on the number of inputs or elements o(1) = 1 O(100) = 100
