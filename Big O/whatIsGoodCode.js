/** @format */
const { performance } = require("perf_hooks");
const nemo = ["nemo"];
const large = new Array(100).fill("nemo");
const xlarge = new Array(1000000).fill("nemo");

function findNemo(array) {
	let t0 = performance.now();
	for (let i = 0; i < array.length; i++) {
		if (array[i] === "nemo") {
			console.log("Found Nemo");
		}
	}
	let t1 = performance.now();
	console.log("The call to this function took", t1 - t0, "Milliseconds");
}

findNemo(nemo); //took 2 milliseconds
findNemo(large); //took 3 milliseconds
findNemo(xlarge); //took 10567 milliseconds
