"use strict";

let numberOfFilms = +prompt("How many films you have watched?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastWatchedFilm = prompt("Your last wathced film?"),
      mark = +prompt("Give your mark to the film");

personalMovieDB.movies[lastWatchedFilm] = lastWatchedFilm;
personalMovieDB.movies[mark] = mark;

