//Fix the below to alert Guvi geek
let admin=9, f_name=10.5; 
f_name = "Guvi";
l_name = "geek"
admin = f_name+l_name;
alert( admin ); // "Guvi geek"

//Fix the below to alert hello Guvi geek
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );

//Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

//Fix the below to alert sum of two numbers
let c = prompt("First number?");
let d = prompt("Second number?");
alert(a + b);

//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var m = "2" > "12";
//Don't touch below this
if (m) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//How to get the success in console.
let n = prompt("Enter a number?");
//Don't modify any code below this
if (n) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

//How to get the correct score in console.
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

//Fix the code to welcome the Employee
let login = 'Employee';
let mess = (login == 'Employee') ;
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(mess);

//Fix the code to welcome the boss
let mes;
if (null || 2 || undefined )
{
 let mes = "welcome boss";
}
else
{
 let mes = "Go away";
}
  console.log(mes);

//Fix the code to welcome the boss
let message;
let lock = 2;
 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

//Fix the code to welcome the boss
let greet;
let save = 2;
//Dont change any code below this
if (lock && " " || undefined )
{
  greet = "Go away";
}
else
{
  greet = "welcome";
}
console.log(message);

//Change the code to print
//3
//2
//1
let i = 3;
while (i) {
  console.log( --i );
}

//Change the code to print 1 to 10 in 4 lines
let j = 0;
while (j){
    console.log(i++,i<=10)
}

//Change the code to print even numbers
for (let num = 2; num <= 20; num += 1) {
  console.log(num)
}

//Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped ${"gifts[i]"} and added a bow!');
}

//Fix the code to disarm the bomb.
let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

