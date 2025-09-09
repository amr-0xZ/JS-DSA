//          *********** Single Ended Queue ***********
/*
    A single-ended queue (often just called a queue) is a linear data structure
    that follows the FIFO (First-In-First-Out) principle.
    Elements are added (enqueued) at the rear and removed (dequeued) from the front,
    maintaining strict ordering.
*/

class singleQueue {

    //Decleration
    items: number[]
    front: number
    rear: number
    size: number
    capacity: number
    constructor(max: number) {
        this.items = new Array(max)
        this.front = 0
        this.rear = -1
        this.size = 0
        this.capacity = max
    }


    //chick if the queue is full
    isFull() {
        if (this.size == this.capacity) {
            return true
        } else {
            return false
        }
    }



    //chick if the queue is full
    isEmpty() {
        if (this.size == 0) {
            return true
        } else {
            return false
        }
    }


    //Adding item to the rear
    add(item: number) {
        if (this.isFull()) {
            console.log('Queue is full')
        } else {
            this.items[++this.rear] = item
            this.size++
            console.log(item + 'added to the queue')
        }
    }


    //Remove the first item enterd the queue
    get() {
        if (this.isEmpty()) {
            console.log('Queue is empty')
        } else {
            const item = this.items.shift()
            this.rear--
            this.size--
            return item
        }
    }



    //peek the first element
    peek() {
        if (this.isEmpty()) {
            console.log('Queue is empty')
        } else {
            return this.items[this.front]
        }
    }



    //get the current size
    gatSize() {
        return this.size
    }



    //get the current size
    gatCapacity() {
        return this.capacity
    }



    // Print queue contents
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        console.log("Queue contents (front to rear):")
        for (let i = 0; i < this.size; i++) {
            const index = (this.front + i)
            console.log(this.items[index])
        }
    }


}






//              ********* Usage *********

const myQueue = new singleQueue(5)

myQueue.add(20)
myQueue.add(25)
myQueue.add(30)
myQueue.add(50)
myQueue.add(50)


console.log(myQueue.isFull())
console.log(myQueue.isEmpty())


console.log(myQueue.get())
console.log(myQueue.isFull())