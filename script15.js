'use strict';

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
// Код возьмите из предыдущего домашнего задания 12

// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотров фильмов', ''),
//           b = prompt('На сколько оцените его?', '');

//     personalMovieDB.movies[a] = b;
// }

// console.log(personalMovieDB);

// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотров фильмов', ''),
//           b = prompt('На сколько оцените его?', '');
    
//     if (a != null && b != null && a !='' && b != '' && a.length < 50) {

//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// console.log(personalMovieDB);


// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотров фильмов', ''),
//           b = prompt('На сколько оцените его?', '');
    
    // if (a != null && b != null && a !='' && b != '' && a.length < 50) {

    //     personalMovieDB.movies[a] = b;
    //     console.log('done');
    // } else {
    //     console.log('error');
    //     i--;
    // }
// }

// if (personalMovieDB.count < 10){
//     console.log("Просмотренно довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// console.log("вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("kinoman");
// } else {
// console.log("error");
// }

// Домашняя работа

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;

while (i < 2) {
      const a = prompt('Один из последних просмотров фильмов', ''),
            b = prompt('На сколько оцените его?', '');
    //  console.log(a, b);
    //  i++;

     if (!!a && !!b && a.length < 50) {

        personalMovieDB.movies[a] = b;
        console.log('done');
        i++;
       } else {
        console.log('error');
        // i--;
       }
}
if (personalMovieDB.count < 10){
        console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("kinoman");
    } else {
    console.log("error");
    }

console.log(personalMovieDB);