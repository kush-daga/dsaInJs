/** @format */

class HashTable {
	constructor(size) {
		this.data = new Array(size)
	}
	// -----Hash Function ------
	_hash(key) {
		//_represents private variable
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			//this.data.length === 50
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
			//console.log(hash)
			//charCodeAt just returns the UTF-16 code of a given character
		}
		return hash
	}
	// SET -------------  O(1)
	set(key, value) {
		let address = this._hash(key) // thishas will be between 0 to 50
		// to check for collisions
		if (!this.data[address]) {
			this.data[address] = []
		}
		this.data[address].push([key, value])
		// console.log(this.data)
		// [ <23 empty items>, [ [ 'grapes', 10000 ] ], <26 empty items> ]
		return this.data
	}
	// GET ------------------ O(1) mostly sometimes, O(n)
	get(key) {
		let address = this._hash(key)
		const currentBucket = this.data[address]
		// console.log(currentBucket)
		if (currentBucket.length) {
			//can also do if(currentBucket)
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1]
				}
			}
		}
		return undefined //if bucket empty
	}
	//keys ----------
	keys() {
		//have to loop over all the data, even empty
		const keysArray = []
		for (let i = 0; i < this.data.length; i++) {
			//if the cell isnt empty
			if (this.data[i] && this.data[i].length) {
				// but also loop through all the potential collisions
				if (this.data.length > 1) {
					for (let j = 0; j < this.data[i].length; j++) {
						result.push(this.data[i][j][0])
					}
				} else {
					result.push(this.data[i][0])
				}
			}
		}
		return keysArray
	}
}

const myHashTable = new HashTable(2)
myHashTable.set("grapes", 10000)
console.log(myHashTable.set("apples", 20))
console.log(myHashTable.get("grapes"))
