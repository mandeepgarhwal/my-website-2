// function reverse(s){
//     var i = s.length - 1
//     var revArray = []
//     while (i >= 0) {
// Question 1
//         revArray.push(s[i]); 
//         i--      
//     }
//     return revArray.join("");
// }
// var s = "hello";

// console.log(reverse(s));

// Question 2
// function vowels(s){
//     var sl = s.toLowerCase()
//     var i = s.length - 1
//     var number = 0
//     while (i >= 0) {
//         if (sl[i] == "u" || sl[i] == "a" || sl[i] == "i" || sl[i] == "e" || sl[i] == "o")
//             number ++;
//         i--
//     }
//     return number;
// }
// var s = "mandeep";

// console.log(vowels(s));

// Question 3
// function capital(s){
//     var sl = s.toLowerCase();
//     var first = sl.slice(0, 1);
//     var answer = first.toUpperCase() + sl.slice(1, );
//     return answer;
// }
// var s = "mandeep";

// console.log(capital(s));

// Question 4
// function capital(s){
//     var s1 = s.trim()
//     var s2 = s1.replace(/\s+/g, ' ');
//     return s2;
// }
// var s = " mandeep has    coding skills ";

// console.log(capital(s));

// assignmkent 14 
// Question 1
//  function sumofarray(a){
//     for (let i = 0; i < a.length; i++) {
//         sum = sum + a[i];
//     }
//     return sum
//  }
// sum = 0;
// s = [2,3,4,5,6,7,8,9,10]
// console.log(sumofarray(s))

// Question 2

// function arrayn(a){
//     for (let i = 0; i < a.length; i++) {
//         if (a[i].length >= 3){
//             newarray.push(a[i])
//         }
//     }
//     return newarray
//  }
// var newarray = []
// a = ["mandeep", "mandy", "to", "u", "three"]
// console.log(arrayn(a))

// Question 3
function names(a){
    for (let i = 0; i < a.length; i++) {
        newarray.push(a[i].name)
        
    }
    return newarray
 }
var newarray = []
a = [{ "name" : "mandeep"}, { "name" : "sandeep"}, { "name" : "pardeep"}, { "name" : "pankaj"}]
console.log(names(a))
