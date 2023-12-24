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

//If the input size reduces by 1/2 each iteration then Time Complexity is Logarithmic - O(logn)

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

