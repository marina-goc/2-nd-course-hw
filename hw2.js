// 1.
let num1;
num1 = 10;
alert (num1);
num1 = 20;
alert (num1);

// 2.
let num2;
num2 = "09.01.2007";
alert (num2);

// 3. (Можно соед название перемен и знач)
let creatorName = "Брендан Айк"
alert (creatorName);

// 4.
let ten = 10;
let two = 2;
let sum = ten + two;
alert (sum);
let dif = ten - two;
alert (dif);
let mul = ten * two;
alert (mul);
let div = ten / two;
alert (div); 

// 5. 
let d = 2;
let result = d ** 5;
alert (result); 

// 6. 

let a = 9;
let b = 2
alert (a % b); 

// 7.

let num = 1;
num += 5
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// 8. 
let age = prompt('Сколько Вам лет?');
alert(age);

// 9.0
const user = {
   name: 'Кекс',
   age: 6, 
   isAdmin: true,
}

// 9.1
user ['city of residenc'] = "Казань";

//9.2
user.name = 'Баффа';
user.age = 2;


//9.3
delete user ['city of residenc']


//9.4 
let info = prompt ('Какую информацию хотите узнать о пользователе? (name, age)');
alert (user[info]);

// 10
let nam = prompt ('Как Вас зовут?');
alert (`Привет, ${nam}!`);