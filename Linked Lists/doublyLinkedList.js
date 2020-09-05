/** @format */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //Adding value at the end of linked list
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    //Adding value in the start
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode; //initial head's previous should point to new head
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("Linked List", array);
    return array;
  }

  //Course Implementation
  insertCourse(index, value) {
    //If index 0

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    //check params

    if (index >= this.length) {
      // Add at the end
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1); //prevNode in kush implementation
    const follower = leader.next; //currentNode in kush implementation

    leader.next = newNode;
    newNode.next = follower;
    newNode.previous = leader;
    follower.previous = newNode;

    this.length++;

    return this.printList();
  }

  //Deleting method

  remove(index) {
    //check params //TODO
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    const followerNew = unwantedNode.next;
    leader.next = followerNew;
    followerNew.previous = leader;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(15);
// console.log(myLinkedList.printList());
myLinkedList.insert(0, 10);
// console.log(myLinkedList.printList());
myLinkedList.insert(2, 0);
myLinkedList.insert(4, 20);
myLinkedList.insert(10, 110); // Should not do anything, as index not present in linked list

// console.log(myLinkedList.printList());
