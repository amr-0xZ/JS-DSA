/*
    A stack is a data structure in which only the last inserted element can be removed and accessed.
    Think about stacking plates on a table. To get to the bottom one,
    you must remove all the other ones on the top. This is a principle known as last in, first out(LIFO).
    A stack is great because it is fast. Since it is known that the last element is to be removed,
    the lookup and insertion happen in a constant time of O(1).
*/


class Stack {
    // Decliration
    items: number[];
    top: number;
    max: number;
    constructor() {
        this.items = [];
        this.top = -1;
        this.max = 10;
    }


    // peek the last item add to the stack
    peek() {
        if (this.top < 0) {
            return 'the stack is empty'
        } else {
            return this.items[this.top]
        }
    }


    // push an item to the top of the stack
    push(item: number) {
        if (this.top >= this.max) {
            return 'the stack is full'
        } else {
            this.items[++this.top] = item
            return this.items
        }
    }


    // pop an element from the top of the stack
    pop() {
        if (this.top < 0) {
            return 'the stack is empty'
        } else {
            return this.items[this.top--]
        }
    }


    // Display the stack
    display() {
        console.log("Current Stack:", this.items.slice(0, this.top + 1));
    }


    // check if the stack is empty
    isEmpty() {
        if (this.top < 0) {
            return 'the stack is empty'
        } else {
            return 'the stack is not empty'
        }
    }


    // check if the stack is full
    isFull() {
        if (this.top == this.max-1) {
            return 'the stack is full'
        } else {
            return 'the stack is not full'
        }
    }
}




//              ********* Usage *********

const myStack = new Stack();

console.log(myStack.push(10))
console.log(myStack.push(20))
console.log(myStack.push(30))
console.log(myStack.push(40))


console.log(myStack.peek())

console.log(myStack.pop())

myStack.display()