/* 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms ==0) {
   alert('Произошла ошибка');
} else if (numberOfFilms <= 10) {
   alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms > 10 && numberOfFilms <= 30){
   alert('Вы классический зритель');
} else { 
   alert('Вы киноман');
};

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat : false
};

for (let i = 1; i <= 2; i++){
   let a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');   
   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
     personalMovieDB.movies[a] = b;
     console.log('done'); 
   } else {
      console.log('error');
      i--;
   }               
};

console.log(personalMovieDB);