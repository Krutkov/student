"use strict";

const str = "teSt";

// console.log(str[2] = 'd');   превращает в нижний регистр

// console.log(str.toUpperCase());   превращает в верхний регистр 

console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("q"));  // поиск под строки 

const logg = "Hello world";

// console.log(logg.slice(6));  // вырезаем включенного аргумента , от и до 

// console.log(logg.substring(6, 11));

//console.log(logg.substring(6, 5));  // сколько символов необходимо вырезать

const num = 12.2;
console.log(Math.round(num));  // округления до целого числа 

const test = "12.2px";
//console.log(parseInt(test));  // преобразование в целое число 

console.log(parseFloat(test));  // вернуть в десятичной форме 