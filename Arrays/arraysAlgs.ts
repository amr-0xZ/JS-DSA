/*
    Here is the searching and sorting algorithms applied on arrays
*/



//          ********** Searching Algorithms **********


// Linear search :   Best case --> O(1) , Worst case --> O(n)
const linearSearch = (array: number[], value: number) => {
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return (value + ' found at index: ' + i)
            }
        }
        return (value + ' not found')
    } else {
        return 'The array is empty'
    }
}
// see: {https://www.dsavisualizer.in/visualizer/searching/linearsearch}




// Binary search :   Best case --> O(1) , Worst case --> O(log(n))
// *it works only on sorted arrays*
const binarySearch = (array: number[], value: number) => {
    let lowIndex = 0;
    let highIndex = array.length - 1;

    while (lowIndex <= highIndex) {
        let midIndex = Math.floor((lowIndex + highIndex) / 2);
        if (array[midIndex] === value) {
            return (value + ' found at index: ' + midIndex)
        } else if (array[midIndex] > value) {
            highIndex = midIndex - 1
        } else if (array[midIndex] < value) {
            lowIndex = midIndex + 1
        }
    }
    return (value + ' not found')
}
// see: {https://www.dsavisualizer.in/visualizer/searching/binarysearch}



//          ********** Sorting Algorithms **********


/* 
    Bubble Sort: repeatedly steps through the list, 
    compares adjacent elements and swaps them if they are in the wrong order.
    The pass through the list is repeated until the list is sorted.
            Best case --> O(n) , Worst case --> O(n^2)
*/
const bubbleSort = (array: number[]) => {
    const n = array.length

    //outer loop to control the boundries of the inner loop
    for (let i = 0; i < n - 1; i++) {
        //inner loop to swap the array elements
        for (let j = 0; j < (n - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                //swap using temporary variable
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp

                //or swap using destruction
                //[array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    return array
}
// see: {https://www.dsavisualizer.in/visualizer/sorting/bubblesort}




/*  Selection Sort: in-place comparison sorting algorithm 
    that divides the input list into two parts: a sorted sublist
    which is built up from left to right, and a remaining unsorted sublist.
    It repeatedly selects the smallest (or largest) element
    from the unsorted portion and moves it to the sorted portion.
                            O(n^2)
*/
const selectionSort = (array: number[]) => {
    const n = array.length
    //outer loop to devide the array to sorted and unsorted parts
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        //inner loop to select the smallest value's index
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        //swaping the elements
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
    return array
}
// see: {https://www.dsavisualizer.in/visualizer/sorting/selectionsort}




/*  Insertion Sort: It works similarly to how you might sort playing cards in your hands
    you take each new card and insert it into its proper position
    among the already sorted cards.
                            O(n^2)
*/
const insertionSort = (array: number[]) => {
    //outer loop to devide the array to sorted and unsorted parts
    for (let i = 1; i < array.length; i++) {
        //get the value out of the array to make space for shifting items
        let current = array[i]
        let j = i - 1
        //shifting items till we find the right place to insert the value we toke 'current'
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j]
            j--
        }
        // insert the value we toke 'current' in the right place
        array[j + 1] = current
    }
    return array
}




/* Merge Sort: It works by recursively dividing the unsorted list into sublists
    until each sublist contains a single element,
    then repeatedly merges these sublists to produce new sorted sublists
    until there is only one sorted list remaining.
                            O(n log n)
*/
//deviding and returning result function
const mergeSort = (array: number[])=>{
    if(array.length<=1) return array

    const mid = Math.floor(array.length/2)
    //calling the function it self to recursivly devide the array until there is only one item left to sort
    const left = mergeSort(array.slice(0,mid))
    const right = mergeSort(array.slice(mid))

    return merge(left,right)
}
//the actual ordering and re-uniting arrays function
const merge = (left: number[], right: number[])=>{
    const result: Number[] = []
    let leftIndex = 0
    let rightIndex = 0

    //sorting items in the new result array
    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex++])
        }else{
            result.push(right[rightIndex++])
        }
    }
    //concat any remaining items of the arrays after sorting then return the result
    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)))
}
// see: {https://www.dsavisualizer.in/visualizer/sorting/mergesort}





//          ********** Usage **********

console.log(linearSearch([20, 33, 45, 4, 50], 50))


console.log(binarySearch([20, 33, 45, 47, 50], 20))


console.log(bubbleSort([100, 80, 60, 50, 30, 10]))


console.log(selectionSort([100, 80, 60, 50, 30, 10]))


console.log(insertionSort([100, 80, 60, 50, 30, 10]))


console.log(insertionSort([100, 40, 60, 50, 30, 10]))