// // alert("Я Javascript!");

// // let admin;
// // let name;
// // name = "John";
// // admin = name;
// // alert(admin);

// // let planetEarth;
// // let currentUser;

// // const BIRTHDAY = "18.04.1982"; // значение известно до выполнения скрипта
// // const age = someCode(birthday); // значение вычисляется в процессе выполнения скрипта

// // let name = "Ilya";

// // alert(`hello ${1}`); // 1

// // alert(`hello ${"name"}`); // hello name

// // alert(`hello ${name}`); // hello Ilya

// "" + 1 + 0 = "10";
// "" - 1 + 0 = -1;
// 6 / "3" = 2;
// "2" * "3" = 6;
// 4 + 5 + "px" = "9px";
// "$" + 4 + 5 = "$45";
// "4" - 2 = 2;
// "4px" - 2 = NaN;
// 7 / 0 = Infinity;
// "  -9  " + 5 = "- 9  5";
// "  -9  " - 5 = -14;
// null + 1 = 1;
// undefined + 1 = NaN;
// " \t \n" - 2 = -2;

// let a = 1,
//   b = 1;

// let c = ++a; // 2 префиксная форма делает новое значение
// let d = b++; // 1 постфиксная форма делает старое значение

// let a = 2;

// let x = 1 + (a *= 2); // x = 5

// 5 > 4; // true
// "ананас" > "яблоко"; // false
// "2" > "12"; // true
// undefined == null; // true
// undefined === null; // false
// null == "\n0\n"; // false
// null === +"\n0\n"; // false

// let name = prompt("Как тебя зовут?");
// alert("Тебя зовут " + name);

// if ("0") {
//   alert( 'Привет' );
// }
// // true

// let name = prompt("Какое «официальное» название JavaScript?");

// if (name == "ECMAScript") {
//   alert("Правильно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

// let number = prompt("Введите число:");

// if (number > 0) {
//   alert("1");
// } else if (number < 0) {
//   alert("-1");
// } else {
//   alert("0");
// }

// let message =
//   login == "Сотрудник"
//     ? "Привет"
//     : login == "Директор"
//     ? "Здравствуйте"
//     : login == ""
//     ? "Нет логина"
//     : "";

// alert(null || 2 || undefined); // ИЛИ выведет 2 - первое истинное значение

// alert(alert(1) || 2 || alert(3)); // ??? с этим решением не разобрался, спрошу на занятии

// alert(1 && null && 2); // И выведет null, первое ложное значение

// alert(alert(1) && alert(2)); // ??? с этим решением не разобрался, спрошу на занятии

// let age;

// if (age >= 14 && age <= 90) {
//   alert(true);
// } else {
//   alert(false);
// }

// if (!(age >= 14 && age <= 90));
// if (age < 14 || age > 90);

// if (-1 || 0) alert("first"); // -1, true,
// if (-1 && 0) alert("second"); // 0, false
// if (null || (-1 && 1)) alert("third"); // сначала выполнится -1 && 1, оба верные, значит будет взято последнее (1), значит null || 1, следовательно 1, true

// let login = prompt("Введите логин:");
// let password = prompt("Введите пароль:");

// if (login === "Админ") {
//   password;
//   if (password === "Я главный") {
//     alert("Здравствуйте!");
//   } else if (password === "" || password === null) {
//     alert("Отменено");
//   } else {
//     alert("Неверный пароль");
//   }
// } else if (login === "" || login === null) {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }

let name = prompt("Введите имя:");
let surname = prompt("Введите фамилию:");
let patronym = prompt("Введите отчество:");
let age = prompt("Введите возраст в годах:");
let ageDays = age * 365;
let age5YearsLater = age + 5;
let sex = confirm("Ваш пол мужской?");
let retired;

if (sex === true) {
  sex = "Мужской";
} else {
  sex = "Женский";
}

if ((sex === true && age >= 65) || (sex !== true && age >= 55)) {
  retired = "Да";
} else {
  retired = "Нет";
}

alert(
  `Ваше имя ${name} ${patronym} ${surname}\nВаш возраст в годах ${age}\nВаш возраст в днях ${ageDays}\nЧерез 5 лет Вам будет ${age5YearsLater}\nВаш пол ${sex}\nВы на пенсии ${retired}`
);
