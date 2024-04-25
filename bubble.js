function bubbleSort(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        for(let j = 0; j < arr.length; j++){
            console.log(arr[j])
            count++;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Total count:", count)
    return arr
}

console.log(bubbleSort([4, 20, 12, 10, 7, 9]));

module.exports = bubbleSort;