/** @format */

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		}
		this.tail = this.head
		this.length = 1
	}

	append(value) {
		//Adding value at the end of linked list
		const newNode = new Node(value)
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this
	}
	prepend(value) {
		//Adding value in the start
		const newNode = new Node(value)
		newNode.next = this.head
		this.head = newNode
		this.length++
		return this
	}
}

const myLinkedList = new LinkedList(10)

console.log(myLinkedList.append(5))
console.log(myLinkedList.prepend(15))
