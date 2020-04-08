// To run in terminal: node [filename.js]

// Coding problem from Google interview video
// Find any two numbers in the array that equal the sum value

let testArray1 = [1,2,3,9];
let testSum1 = 8;

let testArray2 = [1,2,4,4];
let testSum2 = 8;

function findSum(array, sum) {
    let low = 0;
    let high = array.length - 1;
    while (low < high) {
        let tempSum = array[low] + array[high];
        if (tempSum == sum) {
            console.log("Sum found:",array[low], array[high]);
            break;
        } else if (tempSum > sum) {
            high--;
        } else {
            low++;
        }
        console.log(tempSum);
    }
}

findSum(testArray1, testSum1);
console.log("--------");
findSum(testArray2, testSum2);

// Now what if the array is no longer sorted?

