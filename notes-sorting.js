//Bubble sort

function bubbleSort(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) { // the first element.
        for(let j = 0; j < arr.length; j++){ //we are looping through the array to find the next element to campare to the first
            count++;
            if (arr[j] > arr[j + 1]) { //checks one elements with the next element to see if the first one is greater than the next one
                let temp = arr[j]; // if it is greater than 2nd creates a temp variable and stores value in it
                arr[j] = arr[j + 1]; //taking the smaller number and putting it toward the beginning.
                arr[j + 1] = temp; // taking the bigger number and putting it towards the end
            }
        }
    }
    console.log("TOTAL COUNT 1:", count)
    return arr

}


function bubbleSort2(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length-i; j++){
            count++;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("TOTAL COUNT 2:", count)
    return arr;
}

function bubbleSort3(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for(let j = 0; j < arr.length-i; j++){
            count++;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    console.log("TOTAL COUNT 3:", count)
    return arr;
}


result = bubbleSort([34, 5, 6, 2, 1, 99, 30]);
// console.log(result)


// bubbleSort3([34, 5, 6, 2, 1, 99, 30]);
// bubbleSort2([34, 5, 6, 2, 1, 99, 30]);
// bubbleSort([34, 5, 6, 2, 1, 99, 30]);


function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results;

}

// console.log(merge([1,3,5], [2,4,6]));


// 07 implementing merge function

// function merge(arr1, arr2){
//     const results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length) {
//         if(arr1[i] < arr2[j]){
//             results.push(arr1[i]);
//             i++
//         } else {
//             results.push(arr2[j]);
//             j++;
//         }
//     }
//     return results;
// }

function mergeSort(arr){
    // base case
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right)
    // typical case

}

// console.log(mergeSort([4,45,67,1,-9,99,23,24,77,100]))