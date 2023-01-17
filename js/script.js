"use strict";

// let number = 4.54;

// console.log(-4/0);
// console.log('string' * 9);

// const person = 'Alex glkfdjglkdfgjl 23423 f jflsjf  234 ldkfj ';

// const bool = true;

// // console.log(something);

// let und;
// console.log(und);
// 
// const obj = {
//     name:"jonh",
//     age: 25,
//     isMarried: false
// };

// //console.log(obj.name);
// console.log(obj ["name"]);


// let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 10, {}, []];
// console.log(arr[1]);


// // урок 007 
// //alert('Hello');

// //const result = confirm("Are you here?");
// //console.log(result);

// //const answer = +prompt("Вам есть 18?", "18");
// //console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как Ваше имя?', '');
// answers[1] = prompt('Фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// урок 8. Интерполяция

//  const category = 'toys';

//  console.log(`https://someurl.com/${category}/5445`);

//  const user = 'Dima';
//  alert(`Привет, ${user}`);

// Урок 9. Операторы JS

// // console.log('arr' + " - object");

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2 + 2 * 2 !== '6');

// const isChecked = true,
//       isClose = false;
// console.log(isChecked || !isClose);

// Урок 10. Конроль версии 

// урок 12. Практика, консольное прилодение 

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотров фильмов', ''),
       b = +prompt('На сколько оцените его?', ''),
       c = prompt('Один из последних просмотренных фильмов?', ''),
       d = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
