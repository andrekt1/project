"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', ''),
    film = prompt('Один из последних просмотренных фильмов?', ''),
    ilm = prompt('Один из последних просмотренных фильмов?', ''),
    tcop = +prompt('На сколько оцениваете его?', ''),
    cop = +prompt('На сколько оцениваете его?', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {
            [film]: tcop,
            [ilm]: cop,
        },
        actors: {},
        genres: [],
        privat: false
    };

console.log(personalMovieDB);