/**
 * ! An algorithm is a set of well-defined instructions to solve a particular problem - a recipe
 * vocabulary: input, algorithm, output
 * characteristics:  well-defined inputs & outputs, clear and unambiguous, language independent
 * why learn this?  Techniques to efficiently solve problems
 * how to measure?  by input size.  Time complexity(time vs input size) & space complexity(memory vs input size)
 * how to represent time & space complexity?  asymptotic notations - (O-notation(worst case), omega-notation(best case), theta notation(average case))
 * what is Big-O Notation?  The worst case complexity of an algorithm describes the complexity of an algorithm using algebraic terms
 * Characteristics of Big-O Notation:  It is expressed in terms of the input; It focuses on the bigger picture without getting caught up in the minute details-the largest power.

**/

/**
 * ! Time complexity
**/

//example:  Find the sum of the first n natural numbers
// function summation(n){
//     let sum = 0
//     for(let i=1; i<=n; i++){
//         sum += i
//     }
//     return sum
// }

//We need to count the number of times a statement executes based on the size to find the time complexity.  The three statements with the word sum are the ones executed.  The for loop is just a repetition of the sum += 1 statement, which executes n times.  sum = 0 executes only once.  Return sum executes only once. So the total count is n + 2 times. So the time complexity is dependent on the input size.  Big O is expressed in terms of the input.  This is a linear equation.  We drop the constant. So O(n)=n - linear time complexity.

//Time complexity can be approximated.  A loop in the calculation often results in a linear time complexity.

//Same example as above, using a different formulation
// function summation(n){
//     return (n * (n + 1)) / 2
// }

//O(n) = O(1), constant time complexity BECAUSE, no matter what value is used for n, the return statement is executed only once.

//example 
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){

//     }
// }
//Time Complexity is O(n^2) - Quadratic because of the two loops, or for nested loops

//Time Complexity for 3 loops is Cubic - O(n^3)

//If the input size reduces by 1/2 each iteration then Time Complexity is Logarithmic - O(log n)

/**
 * ! Space complexity
**/
//If the algorithm does not need extra memory, or if the needed memory does not depend on the input size, then the space complexity is constant - O(1) 

//eg. sorting algorithms - sort within the array without utilizing additional arrays

//linear space complexity - extra space needed grows as the input size grows - O(n)

//logarithmic space complexity - extra space needed grows, but not at the same rate as the input size - O(log n)

//quadratic space complexity and factorial space complexity:  AVOID at all costs!!!!

//See the relationship amongst the various types of time and space complexity in the browser

//POINTS TO NOTE
/*
Multiple algorithms exist for the same problem and there is no one right solution.  Different algorithms work well under different constraints.  Always understand the problem statement before determining which algorithm is better.

The same algorithm with the same programming language can be implemented in different ways.

Write code that is simple to read and maintain.

/**
 * ! Time Complexity of Objects
**/
//Objects
/*
Insert/Remove property - O(1)
Access a value given a key - O(1)
Search for a value in an object - O(n)
Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - O(n)
*/

//Arrays
/**
 * ! Time Complexity of Arrays
**/
/*
Insert/remove from end of array - O(1)
Insert/remove from beginning of array - O(n)
Access a value - O(1)
Searching - O(n)
Push/pop - O(1)
Shift, unshift, concat, slice, splice - O(n)
forEach, map, filter, reduce - O(n)
Higher ordered functions with a callback that contains a for loop has QUADRATIC time complexity

*/

/**
 * ! Math Algorithms Time complexity - fibonacci sequence, Factorial of a number, Prime number, Power of two, Recursion, fibonacci sequence with recursion, Factorial of a number with recursion
**/
//1.  Fibonacci Sequence:  Given a number "n", find the first "n" elements of the Fibonacci sequence { 0, 1, 1, 2, 3, .....}
//fibonacci(2) = [0,1]
//fibonacci(3) = [0,1,1] etc.


function fibonacci(n){
    let fib = [0, 1]
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(7))

//Time complexity of Fibonacci is linear - O(n)

//2.  Factorial of a number:  Give an integer "n", find the factorial of that integer.

//my solution
function factorial(n){
    if(n < 0){
        return
    }else if(n === 0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(5))

//Time complexity of Factorial varies - O(x^n) where x represents how many times the function calls itself

//teacher's solution
function factorials(n){
    let result = 1
    for(let i=2; i<=n; i++){
        result *= i
    }
    return result
}
console.log(factorials(0))
console.log(factorials(1))
console.log(factorials(5))

//Time complexity is linear - O(n)

//3.  Prime Number:  Given a natural number "n", determine if the number is prime
//my method. 
function isPrime(num){
    if(num<2){
        return "not prime"
    }
    for(let i=2; i<num; i++){
        for(j=1; j<i; j++){
            if(i%j===0){
                isPrime = false
            }
        }
        return "Your number is not prime"
    }
    return "Your number is prime"
}
console.log(isPrime(1))
//Time complexity is quadratic - O(n^2)

//teacher's method
function isPrimes(n){
    if(n<2){
        return false
    }
    for(let i=2; i<n; i++){
        if(n%i===0){
            return false
        }
    }
    return true
}
console.log(isPrimes(1))
console.log(isPrimes(2))
console.log(isPrimes(4))
//Time complexity is linear - O(n)

//Optimized Primality Test
/*
Integers larger than the square root do not need to be checked because whenever n=a*b, one of the two factors a and b is less than or equal to the square root of n.
*/

function isPrime2(n){
    if(n<2){
        return false
    }
    for(let i=2; i<Math.sqrt(n); i++){
        if(n%i===0){
            return false
        }
    }
    return true
}
//Time complexity is O(sqrt(n)) Meaning what?

//4.  Power of two:  Given a positive integer "n", determine if the number is a power of 2.
//my solution
function powerOfTwo(n){
    let counter = 0
    let pow = Math.log(n)/Math.log(2)
    if(Number.isInteger(pow)){
        return `${n} is a power of two.  The power is ${pow}`
    }else{
        return `Sorry, ${n} is not a power of two.`
    }
}
console.log(powerOfTwo(256))

//Time complexity is O(1) - constant

//teacher's solution
function isPowerOfTwo(n){
    if(n < 1){
        return false
    }
    while(n>1){
        if(n%2 !== 0){
            return false
        }else{
            n = n/2
        }
        return true
    }
}
console.log(isPowerOfTwo(4))

//Time complexity:  O(n) NO!!!!!  We are reducing the input by half each time so the real time complexity is O(log n)

function isPowerOfTwoBitWise(n){
    if(n < 1){
        return false
    }else{
        return (n & (n-1)) === 0 /* bitwise and MUST STUDY*/
    }
}
//Time complexity is constant

/**
 * ! Recursion - A problem-solving technique where the solution depends on solutions to smaller instances of the same problem. 
 * Every recursive solution needs a base case - to terminate the recursion 
 * A recursive solution might be worse than an iterative solution
**/
//Recursive Fibonacci:  Given a number "n", find the nth element of the Fibonacci sequence(the number present at a certain position in the sequence)
function fibonacciRecursive(n){
    if(n < 2){
        return n
    }else{
        return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
    }
}
console.log(fibonacciRecursive(0))
console.log(fibonacciRecursive(1))
console.log(fibonacciRecursive(6))

//Time complexity - O(2^n) Terrible performance, not a good solution

//Recursive Factorial: Given an integer "n", find the factorial of that integer
//my solution
function recursiveFactorial(n){
    if(n < 0){
        return
    }else if(n === 0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}
console.log(recursiveFactorial(0))
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(10))

//Time complexity: O(2^n) WRONG?

//Teacher's solution
function recursiveFac(n){
    if(n === 0){
        return 1
    }
    return n * recursiveFactorial(n-1)
}
//Time complexity: O(n) because as n increases, the number of instructions executed increases at the same pace

/**
 * ! Search Algorithms - linear and binary search
**/
/**
 * ! Linear Search
**/
//1.  Given an array of "n" elements and a target element "t", find the index of "t" in the array.  Return -1 if the target element is not found.
//my solution
let c = "compartment".split("")
function findIndex(arr, t){
    if(arr.includes(t)){
        return arr.indexOf(t)
    }else{
        return -1
    }
}
console.log("The index:", findIndex(c, "t"))
console.log("The index:", findIndex([-5, 2, 10, 4, 6], 10))

//Time complexity: O(1)

//teacher solution
function linearSearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}
console.log(linearSearch([-5, 2, 10, 4, 6], 10))

//Time complexity: O(n) As the size of the array increases, the number of times the function executes increases

/**
 * ! Binary Search - pseudocode:  If the array is empty, return -1 as the element cannot be found; if the array has elements, find the middle element in the array.  If target is equal to the middle element, return the middle element index; If target is less than the middle element, binary search left half of the array.  If target is greater than middle element, binary search right half of the array.
**/
//2.  Given a sorted array of "n" elements and a target element "t", find the index of "t" in the array.  Return -1 if the target element is not found. (Note: binary search only works on a sorted array)
//my solution REDO THIS WRONG CODE! INEFFICIENT!!!  we need a left and right endpoint to determine the middle point.  Then we can reassign the left and right endpoints to work with either end of the data
function binarySearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr.length === 0){
            return -1
        }else{
            let mid = Math.floor(arr.length /2)
            if(mid === target){
                return arr.indexOf(target)
                //target < arr[mid]
            }else if(target < arr[mid]){
                for(let j=0; j<mid; j++){
                    if(arr.includes(target)){
                        return arr.indexOf(target)
                    }
                }
            }else{
                for(let k=arr.length; k>mid; k--){
                    if(arr.includes(target)){
                        return arr.indexOf(target)
                    }
                }
            }
        }
    }
    return -1
}
console.log(binarySearch([-5, 2, 4, 6, 10], 10))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 20))

//Time complexity: O(n^3)?? O(n^2) cuz nested loops

//Teacher's solution
function binarySearch2(arr, target){
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            //One position to the left of middleIndex
            rightIndex = middleIndex - 1
        }else{
            //one position to the right of middleIndex
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
console.log(binarySearch2([-5, 2, 4, 6, 10], 10))
console.log(binarySearch2([-5, 2, 4, 6, 10], 6))
console.log(binarySearch2([-5, 2, 4, 6, 10], 20))

//Time complexity: O(log n) reduce input size by 1/2 for every iteration

/**
 * ! Recursive Binary Search
**/
//3.  Given a sorted array of "n" elements and a target element "t", find the index of "t" in the array.  Return -1 if the target element is not found.
function recursiveBinarySearch2(arr, target){
    return search(arr, target, 0, arr.length-1)
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]){
        return middleIndex
    }else{
        if(target < arr[middleIndex]){
            return search(arr, target, leftIndex, middleIndex - 1)
        }else{
            return search(arr, target, middleIndex + 1, rightIndex )
        }
    }
}
console.log(recursiveBinarySearch2([-5, 2, 4, 6, 10], 10))
console.log(recursiveBinarySearch2([-5, 2, 4, 6, 10], 6))
console.log(recursiveBinarySearch2([-5, 2, 4, 6, 10], 20))

//Time complexity: O(log n) search() called twice, but input reduced by 1/2

/**
 * ! Sorting algorithms - Bubble sort, Insertion sort, Quick sort, Merge sort.  
**/
/**
 * ! Sorting algorithms - Bubble sort: compare adjacent elements in the array and swap the positions if they are not in the intended order, then repeat the comparison.  Check if elements were swapped.
**/
//1.  Given an array of integers, sort the array using Bubble Sort
let arr = [-6, 20, 8, -2, 4, -18, 0]
function bubbleSort(arr){
    let swapped
    do {
        swapped = false
        for(let i=0; i<arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                //use transitive property a=b b=c c=a
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped) 
}
(bubbleSort(arr)) /* separate cuz array sorts in place */
console.log(arr)

//Time complexity:  O(n^2) nested loops As the number of elements in the array increases, the number of comparisons increases by square of the number - not great for sorting

/**
 * ! Insertion sort - split the array into sorted and unsorted parts.  Assume that the first element is already sorted and the remaining elements are unsorted.  Select an unsorted element and compare with all elements in the sorted part.  If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right.  Insert the selected element at the right index.  Repeat steps until all the unsorted elements are placed in the right order.
**/
//2.  Given an array of integers, sort the array
//my solution - NOPE!!  This is just bubble sort
function insertionSort(arr){
    let swapped
    for(let i=0; i<arr.length; i++){
        let NTI = arr[i+1], SE = arr[i] //Number to insert, sorted element
        //perform comparison until you reach the beginning
        swapped = false
        while(!swapped){
            if(SE > NTI){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }
            swapped = true
        }
    }
}
(insertionSort(arr)) /* separate cuz array sorts in place */
console.log(arr)

//teacher's solution
function insertionSort(arr){
    //assume i=0 is sorted already
    //For loop iterates through the unsorted part
    for(let i=1; i<arr.length; i++){
        let numberToInsert = arr[i]
        //arr[i] has to be compared to each element in the sorted part
        //i is the index of the number to insert
        let j = i - 1 //j is the first element in the sorted part heading left
        //the while loop iterates over the sorted part
        //So while there are numbers to the left of i that are larger than the number at i
        //Compare the sorted elements with numberToInsert to find the index where the insertion has to happen.  The index is where the sorted element is less than the number to insert.
        while(j >= 0 && arr[j] > numberToInsert){
            //means arr[i] = arr[j] so you swapped the sorted with the unsorted position
            arr[j+1] = arr[j]
            //then move one step to the left and start again
            j = j-1 
        }
        //Then insert the number to the right of that index
        arr[j+1] = numberToInsert
    }
}
arr = [5, 25, 0, -3]
insertionSort(arr)
console.log(arr)

//Time complexity: O(n^2)

/**
 * ! Quick Sort - Identify the pivot element(pick first/last/median/random element as pivot), put everything that's smaller than the pivot into a "left" array, and everything that's greater than the pevot into a "right" array.  Repeat the process for the individual "left" and "right" arrays until you have an array of length 1 (base condition) which is sorted by definition.  Repeatedly concatenate the left array, pivot and right array until one sorted array remains.
**/
//3.  Given an array of integers, sort the array
function quickSort(arr){
    //base case
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length-1] //last digit
    let left = []
    let right = []
    //loop through the array, if current value is smaller than the pivot, push left, else push right
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
arr = [8, 20, -2, 4, -25]
let sortedArr = quickSort(arr)
console.log(sortedArr)

//Time complexity: O(n^2) is the worst case - when the array is sorted because we're comparing with two arrays with every element; O(n log n) is the average case because we divide the array recursively into smaller arrays which is log n and the forloop gives O(n) - so combining O(n) and O(log n) give O(n log n).  Use this solution if there are no space contrainsts.  If there are space constraints, use merge sort algorithm.

//TODO:
function reverseSortedArrayWithQuicksort(arr){

}

/**
 * ! Merge Sort - Divide the array into sub arrays, each containing only one element.  Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining.  That will be the sorted array.
**/
//4.  Given an array of integers, sort the array
function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
   return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr){
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}
arr = [100, 200, -2, 4, -6]
console.log(mergeSort(arr))
//Time complexity: O(n log n) One of the best time complexity from sorting!!