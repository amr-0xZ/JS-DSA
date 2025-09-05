
/*
    About: An array is a data structure that stores multiple values 
    of the same type in a single variable.
    Each value is stored at a specific index, starting from 0.
    Here i will work with numbers only.
*/

// Declaration:
const makeArray = (...values: number[]) => {
    let array = values
    return array
}


// Insert value at the end of the array
const addEnd = (array : number[], value: number) => {
    array[array.length] = value
    // or you can use the built in function:
    // array.push(element)
    return
}


// Insert value at the beginning of the array
const addStart = (array : number[], value: number) => {
    //shifting the elements right
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1]
    }
    array[0] = value
    // or you can use the built in function:
    // array.unshift(element)
    return
}


// Delete element from the end of the array
const deleteLast = (array : number[]) => {
    if (array.length > 0) {
        let deletedElement = array[array.length - 1]
        array.length = array.length - 1
        // or you can use the built in function:
        // array.pop()
        return deletedElement
    } else {
        return 'The array is already empty'
    }
}


// Delete element from the beginning of the array
const deleteFirst = (array : number[]) => {
    if (array.length > 1) {
        let deletedElement = array[0]
        //shifting the elements left
        for (let i = 0; i < array.length - 1; i++) {
            array[i] = array[i + 1]
        }
        array.length = array.length - 1
        // or you can use the built in function:
        // array.shift()
        return deletedElement
    } else if (array.length == 1) {
        let deletedElement = array[0]
        array.length = 0
        return deletedElement
    } else {
        return 'The array is already empty'
    }
}



//Access the element value using its order
const getByOrder = (array : number[], order: number) => {
    if (array.length > 0 && order <= array.length && order > 0) {
        return array[order - 1]
    } else if (array.length > 0 && order > array.length && order > 0) {
        return ('The array is holding only ' + array.length + ' elements')
    } else if (order <= 0) {
        return 'The ordering starts from 1'
    } else {
        return 'The array is empty'
    }
}


//Iterat all values in an array
const getAll = (array : number[])=>{
    if(array.length > 0 ){
        // Loop throw the array elements:
        // for(let i= 0; i < array.length; i++){
        //     console.log(array[i])
        // }

        // or use for(in) to loop throw indexs:
        // for(let index in array){
        //     console.log(array[Number(index)])
        // }

        // or use for(of) to loop throw values:
        // for(let element of array){
        //     console.log(element)
        // }

        //or use array.foreach(fun)
        array.forEach((value ,index)=>{
            console.log(value + ' at index of: ' + index)
        })

    }else{
        return 'The array is empty'
    }
}


//              ********* Usage *********
let myArray = makeArray(22, 3, 75, 99, 11, 25);
console.log(myArray);


addEnd(myArray, 100)
console.log(myArray);


addStart(myArray, 10)
console.log(myArray);


console.log(deleteLast(myArray));
console.log(myArray);


console.log(deleteFirst(myArray));
console.log(myArray);


console.log(getByOrder(myArray,2))


getAll(myArray)

