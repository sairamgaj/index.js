//to add an element using push method(end of array)
var arr1=[1,2,3];
arr1.push(4);
console.log(arr1)                                            //output : [ 1, 2, 3, 4 ]

//to remove elements from array using pop method
var arr1=[1,2,3,4]
arr1.pop();
console.log(arr1)                                            //output : [ 1, 2, 3 ]
 
//to add elememt beginning of an array using unshift
var arr1=[2,3,4]
arr1.unshift(1);
console.log(arr1)                                           //output : [ 1, 2, 3, 4 ]

//to remove first element from array using shift method
var arr1=[1,2,3,4]
arr1.shift(0);
console.log(arr1)                                            //output : [ 2, 3, 4 ]

//to convert an array into a string using join method
var arr1=[1,2,3]
console.log(arr1.join(''));                                  //output :  123

//output using .pop()
var arr1=[1,2,3,4];
arr1.pop();
console.log(arr1)                                            //output : [ 1, 2, 3 ]

//output using .push()
var arr1=[1,2,3];
arr1.push(4);
console.log(arr1)                                             //output : [ 1, 2, 3, 4 ]

//output using .shift()
var arr1=[1,2,3,4];
arr1.shift();
console.log(arr1)                                            //output : [ 2, 3, 4 ]

//output using .unshift()
var arr1=[2,3,4];
arr1.unshift(1);
console.log(arr1)                                            //output : [ 1, 2, 3, 4 ]

//output using .join("")
var arr1=[1,2,3];
console.log(arr1.join(""))                                    //output : 123