function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        // pick the second element in the array
        console.log(arr[i])
        let current = arr[i]
        let j = arr[i-1]
        console.log('current element:', current);
        console.log('previous element:', j);
        // move element of arr, that are greater than current, to one possition ahead of their current position
        while (j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j];
            j--;
        }
        // insert the current element into its correct position
        arr[j + 1] = current;
    }
    return arr;

    // compare the second element with the one before it and swap if neccessary
    // continue to the next element, if it is in incorrect order, iterate through the sorted portion to place the element in the correct place. 

}

console.log(insertionSort([20, 4, 12, 10, 7, 9]));

module.exports = insertionSort;