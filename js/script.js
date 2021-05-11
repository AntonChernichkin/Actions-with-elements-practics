/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelector('.promo__adv'); //получение элемента с классом promo__adv
const promoGenre = document.querySelector('.promo__genre'); //получение элемента с классом promo__genre
const promoBg = document.querySelector('.promo__bg');
const promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');//получение массива div с классом promo__interactive-item
// console.log(promoInteractiveItem);
// let i = 0;

const promoGenreNew = document.createElement('div'); //создание элемента div
promoGenreNew.innerHTML = "ДРАМА";
promoGenreNew.classList.add('promo__genre'); // присваивание элементу класса promo__genre



//     promoInteractiveItem[i].innerHTML = `${movieDB.movies[i]}` ;
movieDB.movies.sort();
const P = [];

for (let i = 0; i < movieDB.movies.length; i++) {
    P[i] = document.createElement('li'); //создание элемента li
    P[i].classList.add('promo__interactive-item'); // присваивание элементу класса promo__interactive-item
    P[i].innerHTML = `${i+1}. ${movieDB.movies[i]}<div class="delete"></div>`; //заполнение элементов li
    promoInteractiveItem[i].replaceWith(P[i]);
}



// console.log(movieDB.movies);
// for (let i = 0; i < movieDB.movies.length; i++) {
// }

// console.log(promoInteractiveItem[0]);

promoAdv.remove(); // удаление элемента с классом promo__adv
promoGenre.replaceWith(promoGenreNew); // замена старого элемента с классом promo__genre на новый эл-т с присвоиным классом promo__genre
// promoGenre.remove();
// promoBg.prepend(promoGenreNew)

promoBg.style.cssText = "background: url(../img/bg.jpg)"; //замена фона 

// console.log(promoInteractiveItem[0]);

// movieDB.movies.forEach (function(item, i) {
//     promoInteractiveItem[i] = item;
// });
// promoInteractiveItem[] = movieDB.movies[];



