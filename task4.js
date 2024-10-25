var fruits = ['Apple','Banana','Orange'];
console.log(fruits.join())                                  // output : Apple,Banana,Orange

var numbers = [1,2,3,4,5]; 
console.log(numbers.join("-"))                              // output : 1-2-3-4-5

var chars = ['H','e','l','l','o'];
console.log(chars.join(""))                                 // output : Hello

var text = 'JavaScript is awesome';
console.log(text.slice(0,10))                                // output : JavaScript

var sentence = 'I love learning JavaScript!';
console.log(sentence.slice(7,15))                            // output : learning

var text = 'Frontend Development';
console.log(text.slice(-11))                                 // output :  Development

var date = '2024-10-21';
console.log(date.split("-"))                                  // output : [ '2024', '10', '21' ]

var text = 'I love JavaScript programming';
var x1=(text.slice(0,6));
console.log(x1.split(" "))                                     // output :  [ 'I', 'love' ]

let url = 'https://www.example.com/path/page.html';
var x2 = (url.slice( ));
console.log(x2.split("/"))                                     // output : [ 'https:', '', 'www.example.com', 'path', 'page.html' ]