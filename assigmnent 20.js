// // Question 1
// var sum = 0

// function add(...x){
//     console.log(x)
//     for (let i = 0; i < x.length; i++){
//         sum = sum + x[i]
//         console.log(sum)
//     }
//     return sum 
// }

// sum = add(3,4,5,6)
// console.log(sum)

// // Question 2

// function moreThanOne(a,b){
//     c = a + b 
//     d = a*b
//     return {sum : c, multiplication: d}
// }

// console.log(moreThanOne (4, 5))

// Question 3   

// function funcToString(){
//     console.log("this is a fuction to convert itself in to a string")
//     return funcToString.toString()
// }

// console.log (funcToString)

// // Question 4

// function addnew(str){
//     if (str.startsWith("new!"))
//         console.log(str)
//     else
//         console.log("new!" + " " + str)
// }

// addnew("mandeep")
// addnew ("new! dehli")

// Question 5

function newstring(str){
    if (str.length <= 3)
        console.log(str)
    else 
        console.log(str.slice(0,3) + str.slice(-3))
}

newstring ("hi")
newstring("mandeep")