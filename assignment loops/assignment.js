//question number 1, assignment 11
// choice = parseInt(prompt("Enter your age in years."))
// if (choice >= 18){
//     document.write("<h1>You are eligible to vote</h1>")
// }
// else{
//     document.write("<h1>Sorry, you are not eligible to vote</h1>")
// }
 
//question number 2, assignment 11
// firstnumber = parseInt(prompt("Enter first number."))
// secondnumber = parseInt(prompt("Enter second number."))

// if (firstnumber > secondnumber){
//     document.write("<h1>First number is larger: </h1>", firstnumber)
// }
// else if (firstnumber < secondnumber)
// {
//     document.write("<h1>Second number is larger: </h1>", secondnumber)
// }
// else{
//     document.write("<h1>Both numbers are equal: </h1>", secondnumber)

// }
//question number 3, assignment 11
// correctusername = "Admin"
// correctpassword = "password123"
// username = prompt("please enter your username")
// password = prompt("please enter your password")

// if (username == correctusername && password == correctpassword){
//     document.write("<h1>Access granted</h1>")
// }
// else{
//     document.write("<h1>Access denied</h1>")
// }
//question number 3, assignment 11
// number = parseInt(prompt("Enter the number."))
// if (number % 2 == 0){
//     document.write("<h1>number entered is even</h1>")
// }
// else{
//     document.write("<h1>number entered is odd</h1>")
// }
//question number 1, assignment 12
// sum = 0

// while (true){
//    number = parseInt(prompt("please enter next number to be added"))
//    if (number >= 0){
//     sum = sum + number
//    }
//    else{
//     break;
//    }
// }
// document.write("<h1>Sum of  numbers entered is: </h1>", sum)

//question number 2, assignment 12

// function game(){
//     answer = Math.floor(Math.random()*10 + 1)
//     guess = parseInt(prompt("Guess a number between 1 and 10."))
//     if(guess == answer){
//         document.write("<h1>User Won</h1>")
//     }
//     else{
//         document.write("<h1>User Lose</h1>")
//     }
// }
// game()

//question number 3, assignment 12

nam= prompt("Enter your name");
ag = prompt("Enter your age");
hobby = prompt("Enter your hobbies");
cit = prompt("Enter your city");
pincod = prompt("Enter your pincode");
stat = prompt("Enter you state");
const introduction = new Object();
const add = new Object();
add.City = cit
add.Pincode = pincod
add.State = stat
introduction.Name = nam
introduction.Age = ag
introduction.Address = add
// introduction.Adress.City = cit
// introduction.Adress.Pincode = pincod
// introduction.Address.State = stat
introduction.Hobbies = hobby
function displayObject(){
    document.write( "Name :  " + introduction.Name)
    document.write( "<br>Age : "+ introduction.Age  )
    document.write( "<br>City : " + introduction.Address.City )
    document.write( "<br>Pincode : " + introduction.Address.Pincode )
    document.write( "<br>State : " + introduction.Address.State )
    document.write( "<br>Hobbies: "+ introduction.Hobbies  )
}
displayObject()



