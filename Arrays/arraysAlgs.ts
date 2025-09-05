/*
    Here is the searching and sorting algorithms applied on arrays
*/



//          ********** Searching Algorithms **********


// Linear search :   Best case --> O(1) , Worst case --> O(n)
const linearSearch = (array: number[], value: number)=>{
    if(array.length > 0){
        for(let i = 0; i < array.length; i++){
            if(array[i]==value){
                return(value + ' found at index: ' + i)
            }
        }
        return(value + ' not found')
    }else{
        return 'The array is empty'
    }
}
// see: {https://www.dsavisualizer.in/visualizer/searching/linearsearch}




// Binary search :   Best case --> O(1) , Worst case --> O(log(n))
const binarySearch = (array: number[], value: number)=>{
    let lowIndex = 0;
    let highIndex = array.length-1;
    
    while(lowIndex <= highIndex){
        let midIndex = Math.floor((lowIndex+highIndex)/2);
        if(array[midIndex]===value){
            return(value + ' found at index: ' + midIndex)
        }else if(array[midIndex] > value){
            highIndex = midIndex-1
        }else if(array[midIndex] < value){
            lowIndex = midIndex+1
        }
    }
    return(value + ' not found')
}
// see: {https://www.dsavisualizer.in/visualizer/searching/binarysearch}




//          ********** Usage **********

console.log(linearSearch([20, 33 ,45, 4, 50], 50))


console.log(binarySearch([20, 33 ,45, 47, 50], 20))