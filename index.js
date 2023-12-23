/**
 * ! An algorithm is a set of well-defined instructions to solve a particular problem - a recipe
 * vocabulary: input, algorithm, output
 * characteristics:  well-defined inputs & outputs, clear and unambiguous, language independent
 * why learn this?  Techniques to efficiently solve problems
 * how to measure?  by input size.  Time complexity(time vs input size) & space complexity(memory vs input size)
 * how to represent time & space complexity?  asymptotic notations - (O-notation(worst case), omega-notation(best case), theta notation(average case))
 * what is Big-O Notation?  The worst case complexity of an algorithm describes the complexity of an algorithm using algebraic terms
 * Characteristics of Big-O Notation:  It is expressed in terms of the input; It focus on the bigger picture without getting caught up in the minute details-the largest power.
 * 
 * 
 *
**/

/**
 * ! Time complexity
**/

//example:  Find the sum of the first n natural numbers
function summation(n){
    let sum = 0
    for(let i=1; i<=n; i++){
        sum += i
    }
    return sum
}

//We need to count the number of times a statement executes based on the size to find the time complexity.  The three statements with the word sum are the ones executed.  The for loop is just a repetition of the sum += 1 statement, which executes n times.  sum = 0 executes only once.  Return sum executes only once. So the total count is n + 2 times. So the time complexity is dependent on the input size.  Big O is expressed in terms of the input.  This is a linear equation.  We drop the constant. So O(n)=n - linear time complexity.

//Time complexity can be approximated.  A loop in the calculation often results in a linear time complexity.

//Same example as above, using a different formulation
function summation(n){
    return (n * (n + 1)) / 2
}

//O(n) = O(1), constant time complexity BECAUSE, no matter what value is used for n, the return statement is executed only once.

//example 
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){

    }
}
//Time Complexity is O(n^2) - Quadratic because of the two loops

//Time Complexity for 3 loops is Cubic - O(n^3)

//If the input size reduces by 1/2 each iteration then Time Complexity is Logarithmic - O(logn)

/**
 * ! Space complexity
**/
//If the algorithm does not need extra memory, or if the needed memory does not depend on the input size, then the space complexity is constant - O(1) 

//eg. sorting algorithms - sort within the array without utilizing additional arrays

//linear space complexity - extra space needed grows as the input size grows - O(n)

//logarithmic space complexity - extra space needed grows, but not at the same rate as the input size - O(logn)

//quadratic space complexity and factorial space complexity:  AVOID at all costs!!!!

//See the relationship amongst the various types of time and space complexity in the browser

