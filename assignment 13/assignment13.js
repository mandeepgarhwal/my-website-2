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
function capital(s){
    var s1 = s.trim()
    var s2 = s1.replace(/\s+/g, ' ');
    return s2;
}
var s = " mandeep has    coding skills ";

console.log(capital(s));