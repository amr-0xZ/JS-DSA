
/*
    About: An array is a data structure that stores multiple values 
    of the same type in a single variable.
    Each value is stored at a specific index, starting from 0.
*/ 

// Declaration:
const makeArray = (...elements)=>{
    let array = elements
    return array
}


// Insert element at the end of the array
const addEnd = (array = [], element)=>{
    array[array.length] = element
    // or you can use the built in function:
    // array.push(element)
    return
}


// Insert element at the beginning of the array
const addStart = (array = [], element)=>{
    for (let i =array.length ; i > 0 ; i--) {
        array[i] = array[i-1]
    }
    array[0] = element
    // or you can use the built in function:
    // array.unshift(element)
    return
}



let myArray = makeArray(22, 3, 56, 88, 75, 99);

console.log(myArray);
addEnd(myArray, 100)
console.log(myArray);

addStart(myArray, 10)
console.log(myArray);