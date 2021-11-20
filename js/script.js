"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?'),
      personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            privat: false
    };

let muvises = ["Веном", "Ведьмак", "Наруто", "Саске", "Конец", "Ной"];
let index;
for (index = 0; index < muvises.length; index++) {
   let answer = prompt(`Вы смотрели: ${muvises[index]}?`);
    if (answer.toLowerCase() == "да") {
        alert("Он и в правду шикарный!");
    } else if (answer.toLowerCase() == "нет") {
        alert("Он не всем понравился!");
    } else {
        alert("Я не понимаю напиши нормально");
        index--;
    }
}
for (let i = 0; i < 2; i++) {
       const film = prompt('Один из последних просмотренных фильмов?'),
          tcop = prompt('На сколько оцениваете его?');

    if (film != null && tcop != null && film != '' && tcop != '' && film.length < 50 && tcop.length < 11) {
        personalMovieDB.movies[film] = tcop;
     console.log(done);
    } else {
        console.log('error');
        i--;
    }
}
if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.cont >= 10 && personalMovieDB.count < 30) {
    console.log('вВы класический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Проиизошла ошибка');
}
