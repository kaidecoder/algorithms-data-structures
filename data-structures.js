/**
 * ! Data Structures
 * what is it?  a way to store and organize data so it can be used efficiently
 * why learn about them?  to model data efficiently in terms of time and memory eg. DOM uses a tree data structure, Browser back and forward use a Stack data structure, OS job scheduling use a Queue data structure
 * 
 * Built-in data structures:
 * Arrays
 * Objects
 * Sets
 * Maps
 * 
 * Custom data structures
 * Stacks
 * Queues
 * Circular queues
 * Linked lists
 * Hashed tables
 * Trees
 * Graphs
 * 
**/

/**
 * ! Arrays
 * characteristics:
 * hold a collection of values
 * contains a mix of different data types
 * are resizable
 * zero-indexed and insertion order is maintained
 * are iterables.  can be used with a for..of loop
 * 
 * define an array - square brackets
 * access an array element - dot or bracket notation
 * array methods:  push, pop, shift, unshift, map, filter, reduce, concat, slice, splice
 * iterate over an array: for...of
 * 
 * Array time complexity
 * insert/remove from end O(1)
 * insert/remove from beginning O(n) because the index has to be reset for all remaining elements
 * access O(1)
 * search O(n) because the element could be the last one
 * push/po O(1)
 * shift/unshift/concat/slice/splice - O(n)
 * forEach/map/filter/reduce O(n)
 * using a for loop inside a forEach gives O(n^2)
**/

/**
 * ! Objects
 * characteristics:
 * an unordered collection of key-value pairs.  key must be a string or symbol and value can be any data type
 * retrieve value by key using dot or bracket notation
 * not an iterable - no for...of loop
 * 
 * define an object - curly braces
 * access an element - dot or bracket notation
 * add data to the object - use dot/bracket notation
 * delete key value pair - use delete operator(delete obj.hobby)
 * can add functions as values
 * Object.keys, Object.values, Object.entries
 * 
 * Object Time Complexity
 * insert - O(1)
 * remove - O(1)
 * access - O(1) no dependencies
 * search - O(n) may have to search all properties
 * Object.keys() - O(n)
 * Object.values() - O(n)
 * Object.entries() - O(n)
 * 
 * 
**/

/**
 * ! Sets
 * characteristis:
 * 
**/